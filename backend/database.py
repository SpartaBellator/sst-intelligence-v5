from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
import datetime

# 🌟 COLE A SUA URI DO SUPABASE AQUI DENTRO DAS ASPAS 🌟
# Exemplo de como ela deve ficar: 
# DATABASE_URL = "postgresql://postgres.xxxxxx:SuaSenhaAqui@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
DATABASE_URL = "postgresql://postgres.igyayvgnbmwudjyhfqqh:Python-SST/Intelligence-IA@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"

# 🌟 CONEXÃO DIRETA: O PostgreSQL não usa o connect_args do SQLite!
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Conversation(Base):
    __tablename__ = "conversations"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True) # <-- AQUI ESTÁ O SEGREDO! Guarda o ID do Supabase
    title = Column(String, default="Nova Conversa")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    messages = relationship("Message", back_populates="conversation", cascade="all, delete-orphan")

class Message(Base):
    __tablename__ = "messages"
    id = Column(Integer, primary_key=True, index=True)
    conversation_id = Column(Integer, ForeignKey("conversations.id"))
    role = Column(String) # "user" ou "ai"
    content = Column(String)
    image_data = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    
    conversation = relationship("Conversation", back_populates="messages")

# Criar as tabelas no banco de dados automaticamente
def init_db():
    Base.metadata.create_all(bind=engine)