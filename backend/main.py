import os
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
import google.generativeai as genai
from fastapi.responses import StreamingResponse
import asyncio
import base64
import io
from PIL import Image
from typing import Optional
from datetime import datetime, timedelta 
import traceback # 🌟 ADICIONADO PARA O RENDER MOSTRAR O ERRO

# Importações consolidadas do banco de dados
from database import SessionLocal, init_db, Conversation, Message, engine, Base

# --- CONFIGURAÇÃO DA INTELIGÊNCIA ARTIFICIAL ---
gemini_key = os.getenv("GEMINI_API_KEY") 
genai.configure(api_key=gemini_key)
model = genai.GenerativeModel('gemini-3.1-flash-lite')

# Inicialização do Banco de Dados SQLite
init_db()
Base.metadata.create_all(bind=engine) # 🌟 Corrigido aqui: Removido o 'models.'

app = FastAPI()

# Configuração de CORS (Liberação de portas para o Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gerenciador de Sessão do Banco de Dados
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Helper para processar imagem em Base64
def get_image_from_base64(base64_str: Optional[str]):
    if not base64_str:
        return None
    
    try:
        if "," in base64_str:
            base64_str = base64_str.split(",", 1)[1]
            
        image_data = base64.b64decode(base64_str)
        return Image.open(io.BytesIO(image_data))
    except Exception as e:
        print(f"[ERRO CRÍTICO NA IMAGEM] Falha ao decodificar Base64: {e}")
        return None

# Modelos de validação de dados (Pydantic)
class ChatRequest(BaseModel):
    message: str
    image_data: Optional[str] = None 
    user_name: Optional[str] = "Usuário"

class RenameRequest(BaseModel):
    title: str


# =====================================================================
# ROTAS DO ASSISTENTE VIRTUAL (SST INTELLIGENCE)
# =====================================================================

# ROTA 1: Criar NOVA conversa
@app.post("/chat/create")
async def create_chat(request: ChatRequest, db: Session = Depends(get_db)):
    print(f"\n[LOG] Criando NOVA conversa. Mensagem: {request.message}", flush=True)
    try:
        new_conv = Conversation(title=request.message[:30] + "...")
        db.add(new_conv)
        db.commit()
        db.refresh(new_conv)

        user_msg = Message(conversation_id=new_conv.id, role="user", content=request.message)
        db.add(user_msg)
        db.commit()

        nome_usuario = request.user_name
        contexto_sistema = f"Você é o especialista virtual da plataforma SST Intelligence. O nome do usuário é '{nome_usuario}'. INSTRUÇÃO OBRIGATÓRIA: Inicie a sua resposta cumprimentando o usuário diretamente por esse nome de forma cordial. \n\nMensagem do usuário: "

        img = get_image_from_base64(request.image_data)
        prompt = [contexto_sistema + request.message, img] if img else contexto_sistema + request.message

        response = model.generate_content(prompt)
        ai_reply = response.text if response.text else "Resposta indisponível."
        
        ai_msg = Message(conversation_id=new_conv.id, role="ai", content=ai_reply)
        db.add(ai_msg)
        db.commit()

        return {"id": new_conv.id, "title": new_conv.title, "reply": ai_reply}
    except Exception as e:
        print("\n" + "="*50, flush=True)
        print(f"🔥 ERRO INTERNO NO /chat/create: {str(e)}", flush=True)
        traceback.print_exc()
        print("="*50 + "\n", flush=True)
        raise HTTPException(status_code=500, detail=str(e))


# ROTA 2: Adicionar mensagem em uma CONVERSA EXISTENTE (Com memória)
@app.post("/chat/{chat_id}/reply")
async def reply_chat(chat_id: int, request: ChatRequest, db: Session = Depends(get_db)):
    print(f"\n[LOG] Respondendo na conversa {chat_id}. Mensagem: {request.message}", flush=True)
    try:
        limite_data = datetime.utcnow() - timedelta(days=4)
        historico_db = db.query(Message).filter(
            Message.conversation_id == chat_id,
            Message.created_at >= limite_data
        ).order_by(Message.id.asc()).all()

        historico_texto = ""
        for m in historico_db:
            autor = "Usuário" if m.role == "user" else "SST AI"
            historico_texto += f"{autor}: {m.content}\n"

        user_msg = Message(conversation_id=chat_id, role="user", content=request.message)
        db.add(user_msg)
        db.commit()

        nome_usuario = request.user_name
        contexto_sistema = f"[Instrução de Sistema: Dirija-se ao usuário pelo nome '{nome_usuario}' de forma natural e cordial nesta resposta.]\n\n"
        
        if historico_texto:
            contexto_sistema += f"--- MEMÓRIA DA CONVERSA (Últimos 4 dias) ---\n{historico_texto}--------------------------------------------\n\n"
            
        contexto_sistema += "Nova mensagem do usuário: "

        img = get_image_from_base64(request.image_data)
        prompt = [contexto_sistema + request.message, img] if img else contexto_sistema + request.message

        response = model.generate_content(prompt)
        ai_reply = response.text if response.text else "Resposta indisponível."

        ai_msg = Message(conversation_id=chat_id, role="ai", content=ai_reply)
        db.add(ai_msg)
        db.commit()

        return {"id": chat_id, "reply": ai_reply}
    except Exception as e:
        print("\n" + "="*50, flush=True)
        print(f"🔥 ERRO INTERNO NO /chat/{chat_id}/reply: {str(e)}", flush=True)
        traceback.print_exc()
        print("="*50 + "\n", flush=True)
        raise HTTPException(status_code=500, detail=str(e))
    

# ROTA 3: STREAMING EM TEMPO REAL DE MENSAGENS
@app.post("/chat/{chat_id}/stream")
async def chat_stream(chat_id: int, request: ChatRequest, db: Session = Depends(get_db)):
    try:
        user_message = request.message
        
        print(f"--- DEBUG ---", flush=True)
        print(f"Mensagem: {user_message}", flush=True)
        print(f"Nome recebido: {request.user_name}", flush=True)

        limite_data = datetime.utcnow() - timedelta(days=4)
        historico_db = db.query(Message).filter(
            Message.conversation_id == chat_id,
            Message.created_at >= limite_data
        ).order_by(Message.id.asc()).all()

        historico_texto = ""
        for m in historico_db:
            autor = "Usuário" if m.role == "user" else "SST AI"
            historico_texto += f"{autor}: {m.content}\n"

        user_msg = Message(conversation_id=chat_id, role="user", content=user_message)
        db.add(user_msg)
        db.commit()

        async def generate():
            try:
                nome_usuario = request.user_name
                contexto_sistema = f"Você é o assistente SST Intelligence. O nome do usuário atual é '{nome_usuario}'. SEMPRE inicie a resposta o cumprimentando por esse nome.\n\n"

                if historico_texto:
                    contexto_sistema += f"--- MEMÓRIA DA CONVERSA (Últimos 4 dias) ---\n{historico_texto}--------------------------------------------\n\n"
                    
                contexto_sistema += "Nova pergunta do usuário: "

                img = get_image_from_base64(request.image_data)
                prompt = [contexto_sistema + user_message, img] if img else contexto_sistema + user_message

                response = model.generate_content(prompt, stream=True)
                full_ai_response = ""
                
                for chunk in response:
                    if chunk.text:
                        full_ai_response += chunk.text
                        yield chunk.text
                        await asyncio.sleep(0.01)
                
                ai_msg = Message(conversation_id=chat_id, role="ai", content=full_ai_response)
                db.add(ai_msg)
                db.commit()
            except Exception as e:
                print("\n" + "="*50, flush=True)
                print(f"🔥 ERRO INTERNO NO GERADOR STREAM: {str(e)}", flush=True)
                traceback.print_exc()
                print("="*50 + "\n", flush=True)
                yield f" Erro interno: {str(e)}"

        return StreamingResponse(generate(), media_type="text/plain")
    except Exception as e:
        print("\n" + "="*50, flush=True)
        print(f"🔥 ERRO SETUP STREAM: {str(e)}", flush=True)
        traceback.print_exc()
        print("="*50 + "\n", flush=True)
        raise HTTPException(status_code=500, detail=str(e))


# ROTA 4: Listar o menu lateral de todas as conversas salvas
@app.get("/conversations")
async def get_conversations(db: Session = Depends(get_db)):
    return db.query(Conversation).all()


# ROTA 5: Puxar o histórico completo de mensagens de um chat específico
@app.get("/chat/{chat_id}/messages")
async def get_messages(chat_id: int, db: Session = Depends(get_db)):
    print(f"[LOG] Puxando histórico da conversa {chat_id}", flush=True)
    messages = db.query(Message).filter(Message.conversation_id == chat_id).order_by(Message.id.asc()).all()
    return messages


# ROTA 6: Deletar uma conversa do histórico e suas mensagens associadas
@app.delete("/chat/{chat_id}")
async def delete_chat(chat_id: int, db: Session = Depends(get_db)):
    conv = db.query(Conversation).filter(Conversation.id == chat_id).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversa não encontrada")
    db.query(Message).filter(Message.conversation_id == chat_id).delete()
    db.delete(conv)
    db.commit()
    return {"message": "Conversa deletada com sucesso"}


# ROTA 7: Renomear o título de uma conversa activa
@app.put("/chat/{chat_id}/rename")
async def rename_chat(chat_id: int, request: RenameRequest, db: Session = Depends(get_db)):
    conv = db.query(Conversation).filter(Conversation.id == chat_id).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversa não encontrada")
    conv.title = request.title
    db.commit()
    return {"status": "success", "new_title": conv.title, "chat_id": chat_id}


# ROTA 8: Canal de Denúncias Anónimo (Isolado e com foco em empatia e sigilo)
@app.post("/chat/anonymous-report")
async def anonymous_report(request: ChatRequest):
    try:
        mensagem_do_usuario = request.message
        
        contexto_denuncia = (
            "Você é o canal de denúncias anônimo do sistema SST Intelligence. "
            "O usuário fará um relato. Aja com empatia, mantenha o sigilo e oriente "
            "quais os próximos passos dentro das normas de segurança do trabalho."
        )
        
        img = get_image_from_base64(request.image_data)
        prompt = [contexto_denuncia, "\n\nRelato:", mensagem_do_usuario, img] if img else f"{contexto_denuncia}\n\nRelato: {mensagem_do_usuario}"
        
        response = model.generate_content(prompt)
        ai_reply = response.text if response.text else "Resposta indisponível."
        
        return {"reply": ai_reply}
    except Exception as e:
        print("\n" + "="*50, flush=True)
        print(f"🔥 ERRO INTERNO NA DENÚNCIA: {str(e)}", flush=True)
        traceback.print_exc()
        print("="*50 + "\n", flush=True)
        raise HTTPException(status_code=500, detail=str(e))