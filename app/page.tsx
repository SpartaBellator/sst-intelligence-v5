"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sst/sidebar";
import { ChatArea } from "@/components/sst/chat-area";
import { NewChatView } from "@/components/sst/new-chat-view";
import AboutView from "@/components/sst/about-view";
import MyItemsView from "@/components/sst/my-items-view";
import { GlobalHeader } from "@/components/sst/global-header";
import CommandsView from "@/components/sst/commands-view";
import { SettingsView } from "@/components/sst/settings-view";
import { ShareModal } from "@/components/sst/share-modal";
import ReportView from "@/components/sst/report-view";
import MarketingView from "@/components/sst/MarketingView";
import { AmbientalView } from "@/components/sst/ambiental-view";
import { useTheme } from "@/providers/theme-provider";

// 🌟 IMPORTS DO SUPABASE ADICIONADOS AQUI:
import { supabase } from "@/lib/supabaseClient"; 
import { User } from "@supabase/supabase-js";

// --- FUNÇÃO AUXILIAR PARA CONVERSÃO ---
const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export default function SSTIntelligencePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isAnonymousMode, setIsAnonymousMode] = useState(false);
  const [sidebarRefreshTrigger, setSidebarRefreshTrigger] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const globalStyles = { overlay: "bg-black/20 dark:bg-white/10" };

  // 🌟 NOVO ESTADO: Armazena os dados de login do usuário
  const [user, setUser] = useState<User | null>(null);

  // 🌟 NOVO EFEITO: Escuta o Supabase assim que a página carrega
  useEffect(() => {
    // Busca a sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Escuta mudanças de estado (Login / Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 🌟 NOVA FUNÇÃO: Dispara a tela oficial de login do Google
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error("Erro no login:", error.message);
      alert("Não foi possível conectar com o Google. Tente novamente.");
    }
  };

  const [messages, setMessages] = useState<any[]>([
    { role: "assistant", content: "Olá! Sou a SST Intelligence AI. Como posso ajudar?", userName: "SST AI", timestamp: new Date().toLocaleTimeString() }
  ]);

  const [chatState, setChatState] = useState<"new" | "conversation" | "my-items" | "commands" | "about" | "settings" | "report" | "marketing" | "ambiental">("new");
  // --- FUNÇÃO HANDLE SEND MESSAGE COMPLETA ---
  const handleSendMessage = async (text: string, image_data?: string | File, userName?: string) => {
    setIsLoading(true);

    // 1. Processamento da Imagem
    let finalImageData: string | undefined = undefined;
    
    if (image_data instanceof File) {
      try {
        finalImageData = await getBase64(image_data);
      } catch (err) {
        console.error("Falha ao converter arquivo:", err);
      }
    } else {
      finalImageData = image_data;
    }

    // 2. Montagem da Mensagem na Tela
    const newUserMsg = { 
      role: "user", 
      content: text, 
      userName: "Você", 
      timestamp: new Date().toLocaleTimeString(), 
      image_data: finalImageData, 
      user_name: userName
    };
    setMessages((prev) => [...prev, newUserMsg]);

    const isReport = chatState === "report";
    if (!isReport) setChatState("conversation");

    // 3. Montagem do Payload
    const payload = { 
      message: text, 
      image_data: finalImageData 
    };

    try {
      // 4. Chamadas de Rede
      if (isReport) {
        const response = await fetch('http://127.0.0.1:8000/chat/anonymous-report', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Erro no servidor");
        const data = await response.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply, userName: "SST AI", timestamp: new Date().toLocaleTimeString() }]);
        setIsLoading(false);

      } else if (!currentChatId) {
        const response = await fetch('http://127.0.0.1:8000/chat/create', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Erro no servidor");
        const data = await response.json();
        setCurrentChatId(data.id);
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply, userName: "SST AI", timestamp: new Date().toLocaleTimeString() }]);
        setIsLoading(false);

      } else {
        // --- LÓGICA DE STREAMING CORRIGIDA E RESTAURADA ---
        setMessages((prev) => [...prev, { role: "assistant", content: "", userName: "SST AI", timestamp: new Date().toLocaleTimeString() }]);
        
        const response = await fetch(`http://127.0.0.1:8000/chat/${currentChatId}/stream`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error(`Erro do servidor: ${response.status}`);

        const reader = response.body?.getReader();
        const decoder = new TextDecoder("utf-8");

        if (reader) {
          setIsLoading(false); // Desliga o spinner de carregamento, pois o texto vai começar a aparecer
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            
            setMessages((prev) => {
              const novasMensagens = [...prev];
              const ultimaIndex = novasMensagens.length - 1;
              novasMensagens[ultimaIndex] = { 
                ...novasMensagens[ultimaIndex], 
                content: novasMensagens[ultimaIndex].content + chunk 
              };
              return novasMensagens;
            });
          }
        }
      }
    } catch (error) {
      console.error("Falha no fetch:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Erro de conexão.", userName: "Sistema", timestamp: new Date().toLocaleTimeString() }]);
      setIsLoading(false);
    }
  };

  const handleRenameChat = async (chatId: string, newTitle: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/chat/${chatId}/rename`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });

      if (!response.ok) throw new Error("Falha ao renomear conversa");
      setSidebarRefreshTrigger(prev => prev + 1);
      console.log("Conversa renomeada com sucesso para:", newTitle);
    } catch (error) {
      console.error("Erro ao renomear:", error);
    }
  };

  const handleNewConversation = () => { 
    setChatState("new"); 
    setCurrentChatId(null);
    setMessages([{ role: "assistant", content: "Olá! Sou a SST Intelligence AI. Como posso ajudar?", userName: "SST AI", timestamp: new Date().toLocaleTimeString() }]);
    setSidebarOpen(false); 
  };

  const handleSelectConversation = async (id: string) => { 
    setChatState("conversation"); 
    setCurrentChatId(id);
    setSidebarOpen(false); 
    setIsLoading(true);

    try {
      const response = await fetch(`http://127.0.0.1:8000/chat/${id}/messages`);
      const data = await response.json();
      
      const formatTime = (dateString: string) => {
        if (!dateString) return new Date().toLocaleTimeString('pt-BR');
        return new Date(dateString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      };

      const historicoFormatado = data.map((msg: any) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.content,
        userName: msg.role === "ai" ? "SST AI" : "Você",
        timestamp: msg.created_at ? formatTime(msg.created_at) : new Date().toLocaleTimeString() 
      }));

      if (historicoFormatado.length === 0) {
        setMessages([{ role: "assistant", content: "Histórico recuperado. Em que posso ajudar?", userName: "SST AI", timestamp: new Date().toLocaleTimeString() }]);
      } else {
        setMessages(historicoFormatado);
      }

    } catch (error) {
      console.error("Erro ao puxar histórico", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteConversation = async (id: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/chat/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Erro ao deletar do servidor");

      if (currentChatId === id) {
        handleNewConversation();
      }

      setSidebarRefreshTrigger(prev => prev + 1);
      alert("Conversa excluída com sucesso!");

    } catch (error) {
      console.error("Falha ao deletar:", error);
      alert("Erro ao excluir. Tente novamente.");
    }
  };

  const handleExportChat = () => {
    if (!messages || messages.length === 0) return;

    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const horaAtual = new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

    let fileContent = `# HISTÓRICO DE ATENDIMENTO - SST INTELLIGENCE\n`;
    fileContent += `*Gerado em: ${dataAtual} às ${horaAtual}*\n`;
    fileContent += `ID da Conversa: ${currentChatId || "Não salvo"}\n`;
    fileContent += `==================================================\n\n`;

    messages.forEach((msg) => {
      const autor = msg.role === "user" ? "VOCÊ" : "SST AI";
      const timestamp = msg.timestamp ? ` [${msg.timestamp}]` : "";
      
      fileContent += `### 【 ${autor}${timestamp} 】\n`;
      fileContent += `${msg.content}\n`;
      fileContent += `\n--------------------------------------------------\n\n`;
    });

    const blob = new Blob([fileContent], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const dataFormatadaArquivo = new Date().toISOString().split('T')[0];
    link.setAttribute("download", `historico_sst_${dataFormatadaArquivo}.md`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCloseReport = () => {
    setMessages([]);          
    setCurrentChatId(null);   
    setIsAnonymousMode(false);
    setChatState("new");      
  };

  const handleMyItems = () => { setChatState("my-items"); setSidebarOpen(false); };
  const handleCommands = () => { setChatState("commands"); setSidebarOpen(false); };
  const handleAbout = () => { setChatState("about"); setSidebarOpen(false); };
  const handleSettings = () => { setChatState("settings"); setSidebarOpen(false); };
  const handleMarketing = () => { setChatState("marketing"); setSidebarOpen(false); };

  const handleReport = () => { 
    setChatState("report"); 
    setCurrentChatId(null);
    setMessages([
      { 
        role: "assistant", 
        content: "Olá! Você está no canal anônimo da SST Intelligence. Como posso te orientar hoje?", 
        userName: "SST AI", 
        timestamp: new Date().toLocaleTimeString() 
      }
    ]);
    setSidebarOpen(false); 
  };

 return (
   <div className="relative flex h-screen w-full overflow-hidden">
     {/* Header condicional (apenas se não for tela de report) */}
     {chatState !== "report" && (
       <GlobalHeader 
         showActions={chatState !== "new"} 
         onShareClick={() => setIsShareOpen(true)} 
         onDelete={() => handleDeleteConversation(currentChatId || "")} 
         onRename={(newName) => {
           if (currentChatId) handleRenameChat(currentChatId, newName);
         }}
         onExport={handleExportChat}
         // 🌟 PASSANDO OS DADOS DO USUÁRIO E O GATILHO DE LOGIN AQUI:
         user={user} 
         onGoogleLogin={handleGoogleLogin}
       />
     )}

     <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} conversaId={currentChatId || ""} />

     {/* 🛡️ FIX: FUNDO MASTER GLOBAL */}
     <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
       <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
         style={{ 
           backgroundImage: isDark 
             ? "url('/images/background.jpg')" 
             : "url('/images/Background-white.jpg')" 
         }} 
       />
       <div className="absolute inset-0 backdrop-blur-[2px]" />
       <div className={`absolute inset-0 transition-colors duration-500 ${globalStyles.overlay}`} />
     </div>

     {/* Container Principal */}
     <div className="relative z-10 flex h-full w-full">
       
       {/* Sidebar */}
       <div className={`transition-all duration-300 ease-in-out shrink-0 overflow-hidden ${sidebarOpen ? "w-72" : "w-0"}`}>
         <Sidebar 
           onClose={() => setSidebarOpen(false)} 
           onNewConversation={handleNewConversation} 
           onSelectConversation={handleSelectConversation}
           onMyItems={handleMyItems} 
           onCommands={handleCommands} 
           onAbout={handleAbout} 
           onSettings={handleSettings} 
           onMarketing={handleMarketing} 
           onAmbiental={() => setChatState("ambiental")}
           onReport={handleReport} 
           refreshTrigger={sidebarRefreshTrigger}
           // 🌟 ENVIANDO O USUÁRIO PARA A SIDEBAR (OPCIONAL, mas muito útil para bloqueios)
           user={user} 
         />
       </div>

       {/* Área das Views */}
       <div className="flex-1 flex flex-col h-full w-full relative">
         {chatState === "new" && (
           <NewChatView onMenuClick={() => setSidebarOpen(!sidebarOpen)} onSendMessage={handleSendMessage} isLoading={isLoading} />
         )}
         {chatState === "conversation" && (
           <ChatArea 
             messages={messages}
             onMenuClick={() => setSidebarOpen(!sidebarOpen)}
             onSendMessage={handleSendMessage}
             isLoading={isLoading} 
             conversationId={currentChatId} 
             // Opcional: Se sua ChatArea precisar do user, passe-o aqui também: user={user}
           />        
         )}
         {chatState === "my-items" && <MyItemsView onMenuClick={() => setSidebarOpen(!sidebarOpen)} />}
         {chatState === "commands" && <CommandsView onMenuClick={() => setSidebarOpen(!sidebarOpen)} />}
         {chatState === "about" && <AboutView onMenuClick={() => setSidebarOpen(!sidebarOpen)} />}
         {chatState === "settings" && <SettingsView onMenuClick={() => setSidebarOpen(!sidebarOpen)} user={user} />}
         {chatState === "ambiental" && <AmbientalView onMenuClick={() => setSidebarOpen(!sidebarOpen)} />}
         {chatState === "report" && (
           <ReportView 
             onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
             onSendMessage={handleSendMessage} 
             messages={messages} 
             isLoading={isLoading} 
           />
         )}
         {chatState === "marketing" && <MarketingView onMenuClick={() => setSidebarOpen(!sidebarOpen)} />}
       </div>
     </div>
   </div>
   );
  }