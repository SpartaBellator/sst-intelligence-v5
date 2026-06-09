"use client"

import { Menu, User, Share2, MoreVertical, Download, Cpu } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { useState, useRef, useEffect } from "react";
import { SSTLogo } from "./logo"
import { useTheme } from "@/providers/theme-provider"; 

interface ChatAreaProps {
  onMenuClick?: () => void
  onSendMessage: (text: string, image_data?: string | File) => void 
  isLoading?: boolean
  conversationId: string | null
  messages: any[] 
}

export function ChatArea({ onMenuClick, onSendMessage, isLoading, conversationId, messages }: ChatAreaProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ==========================================
  // CONEXÃO GLOBAL DE TEMA & MAPA DE CORES
  // ==========================================
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    overlay: isDark ? 'bg-black/85' : 'bg-[#f4f4f5]/60', 
    headerBtn: isDark 
      ? 'bg-white/5 hover:bg-white/10 transition-colors' 
      : 'bg-white border border-zinc-200/80 shadow-sm shadow-zinc-200/40 hover:bg-zinc-50 hover:scale-102 transition-all duration-200',
    iconColor: isDark ? 'text-zinc-400' : 'text-zinc-800', 
    aiLogoBg: isDark ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-200 shadow-sm',
    loadingText: isDark ? 'text-zinc-400' : 'text-zinc-500'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleInternalSend = (text: string, image_data?: string | File) => {
    onSendMessage(text, image_data);
  };

  // 🌟 FUNÇÃO ATUALIZADA: Com detector de mensagens enviadas em tempo real
  const formatLocalTime = (timeString?: string) => {
    if (!timeString) return undefined;

    // Se o formato for apenas as horas e minutos (ex: "16:53" ou "19:53:00")
    if (/^(\d{2}):(\d{2})(:\d{2})?$/.test(timeString)) {
      const parts = timeString.split(":");
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      
      const agora = new Date();
      const horaAtual = agora.getHours();
      const minutoAtual = agora.getMinutes();
      
      // Calculamos a diferença em minutos totais desde o início do dia
      const minutosTime = hours * 60 + minutes;
      const minutosAgora = horaAtual * 60 + minutoAtual;
      const diferenca = Math.abs(minutosTime - minutosAgora);
      
      // 🛡️ SE FOR EM TEMPO REAL: Se a hora bate com o relógio do PC (janela de 2 min), não altera nada!
      if (diferenca <= 2) {
        return timeString.substring(0, 5); 
      }
      
      // 🕒 SE FOR DO BANCO: É uma hora antiga em UTC, aplica a conversão do fuso
      const date = new Date();
      date.setUTCHours(hours, minutes, 0, 0);
      return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    }

    // 📅 CASO 2: É uma data completa do banco sem o indicador 'Z' (ex: "2026-06-08 19:49:00")
    let normalizedString = timeString;
    if (timeString.includes("-") && !timeString.includes("Z") && !timeString.includes("+")) {
      normalizedString = timeString.replace(" ", "T") + "Z";
    }

    // CASO 3: Formato ISO completo tradicional
    const date = new Date(normalizedString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    }

    return timeString;
  };

  const handleExportChat = () => {
    if (!messages || messages.length === 0) return;

    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const horaAtual = new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

    let fileContent = `# HISTÓRICO DE ATENDIMENTO - SST INTELLIGENCE\n`;
    fileContent += `*Gerado em: ${dataAtual} às ${horaAtual}*\n`;
    fileContent += `ID da Conversa: ${conversationId || "Canal Anônimo"}\n`;
    fileContent += `==================================================\n\n`;

    messages.forEach((msg) => {
      const autor = msg.role === "user" ? "VOCÊ" : "SST AI";
      const timeStr = formatLocalTime(msg.timestamp);
      const timestamp = timeStr ? ` [${timeStr}]` : "";
      
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

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden transition-colors duration-300">
      
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: isDark 
              ? "url('/images/background.jpg')" 
              : "url('/images/Background-white.jpg')"
          }}
        />
        <div className={`absolute inset-0 ${styles.overlay} backdrop-blur-md transition-colors duration-500`} />
      </div>

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-4 backdrop-blur-sm bg-background/50 transition-colors duration-300">
        <button 
          onClick={onMenuClick} 
          className={`flex h-10 w-10 items-center justify-center rounded-full cursor-pointer ${styles.headerBtn}`}
          aria-label="Menu"
        >
          <Menu className={`h-5 w-5 ${styles.iconColor}`} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          <button className={`flex h-10 w-10 items-center justify-center rounded-full cursor-pointer ${styles.headerBtn}`}>
            <User className={`h-4.5 w-4.5 ${styles.iconColor}`} strokeWidth={2} />
          </button>
          <button className={`flex h-10 w-10 items-center justify-center rounded-full cursor-pointer ${styles.headerBtn}`}>
            <Share2 className={`h-4.5 w-4.5 ${styles.iconColor}`} strokeWidth={2} />
          </button>
          <button className={`flex h-10 w-10 items-center justify-center rounded-full cursor-pointer ${styles.headerBtn}`}>
            <MoreVertical className={`h-4.5 w-4.5 ${styles.iconColor}`} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto pb-32 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
          
          {/* Mapeamento das mensagens com a Logo incluída */}
          {messages.map((msg, index) => {
            const msgFormatada = {
              ...msg,
              timestamp: formatLocalTime(msg.timestamp)
            };

            return (
              <div key={index} className="flex gap-4 mb-6 animate-in fade-in duration-300">
                {msgFormatada.role === "assistant" || msgFormatada.role === "ai" ? (
                  <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${styles.aiLogoBg}`}>
                    <SSTLogo className="h-6 w-auto" />
                  </div>
                ) : (
                  <div className="w-10 shrink-0" />
                )}
                
                <div className="flex-1">
                  <ChatMessage {...msgFormatada} />
                </div>
              </div>
            );
          })}

          {isLoading && (
             <div className={`p-4 text-sm animate-pulse ${styles.loadingText}`}>SST Intelligence está processando...</div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <ChatInput onSendMessage={handleInternalSend} isLoading={isLoading} />
      </div>
    </div>
  )
}