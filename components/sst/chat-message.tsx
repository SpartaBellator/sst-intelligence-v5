"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Suporte para tabelas totalmente preservado
import { useTheme } from "@/providers/theme-provider"; // ADICIONADO: Importação do tema global

interface ChatMessageProps {
  role: string;
  content: string;
  userName?: string;
  timestamp?: string;
  image_data?: string;
}

export function ChatMessage({ role, content, userName, timestamp, image_data }: ChatMessageProps) {
  const isUser = role === "user";
  const { theme } = useTheme(); // Puxa o tema ativo global
  const isDark = theme === 'dark';

  // ==========================================
  // MAPEAMENTO DE CORES DOS BLOCOS PRINCIPAIS
  // ==========================================
  const styles = {
    metadata: isDark ? 'text-muted-foreground' : 'text-zinc-500',
    bubble: isUser
      ? (isDark ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-emerald-600 text-white rounded-tr-none shadow-md shadow-emerald-600/10')
      : (isDark ? 'bg-white/5 border border-white/10 text-white rounded-tl-none' : 'bg-white/90 border border-zinc-200 text-zinc-800 shadow-md shadow-zinc-200/40 rounded-tl-none'),
    imageBorder: isDark ? 'border-white/10' : 'border-zinc-200'
  };

  return (
    <div className={`flex flex-col gap-1 mb-6 ${isUser ? "items-end" : "items-start"} animate-in fade-in duration-200`}>
      
      {/* Nome e Timestamp com Contraste Inteligente */}
      <span className={`text-xs px-1 transition-colors duration-300 ${styles.metadata}`}>
        {userName || (isUser ? "Você" : "SST AI")} {timestamp && `• ${timestamp}`}
      </span>
      
      {/* Container principal do balão de mensagem */}
      <div className={`max-w-[85%] rounded-2xl text-sm leading-relaxed overflow-hidden transition-all duration-300 ${styles.bubble}`}>
        <div className="p-4 break-words">
          
          {/* Renderização da Imagem Anexada */}
          {image_data && (
            <div className={`mb-3 overflow-hidden rounded-lg border transition-colors duration-300 ${styles.imageBorder}`}>
              <img 
                src={image_data} 
                alt="Anexo" 
                className="max-w-full h-auto block" 
              />
            </div>
          )}

          {/* Renderização condicional do conteúdo */}
          {isUser ? (
            <div className="whitespace-pre-wrap">{content}</div>
          ) : (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} // Suporte rígido para suas tabelas de dados mantido
              components={{
                
                // 📊 ESTILIZAÇÃO DE TABELAS DINÂMICAS (Modo Claro vs Escuro)
                table: ({node, ...props}) => (
                  <div className={`overflow-x-auto my-4 w-full border rounded-xl transition-colors duration-300 ${isDark ? 'border-white/10 bg-black/20' : 'border-zinc-200 bg-zinc-50/50'}`}>
                    <table className={`min-w-full text-left text-xs sm:text-sm divide-y ${isDark ? 'divide-white/10' : 'divide-zinc-200'}`} {...props} />
                  </div>
                ),
                thead: ({node, ...props}) => <thead className={`transition-colors duration-300 ${isDark ? "bg-white/5" : "bg-zinc-100"}`} {...props} />,
                tbody: ({node, ...props}) => <tbody className={`divide-y transition-colors duration-300 ${isDark ? "divide-white/5" : "divide-zinc-100"}`} {...props} />,
                tr: ({node, ...props}) => <tr className={`transition-colors ${isDark ? "hover:bg-white/[0.01]" : "hover:bg-black/[0.01]"}`} {...props} />,
                th: ({node, ...props}) => <th className={`px-4 py-3 font-semibold border-b text-xs uppercase tracking-wider transition-colors duration-300 ${isDark ? "text-emerald-400 border-white/10" : "text-emerald-600 border-zinc-200"}`} {...props} />,
                td: ({node, ...props}) => <td className={`px-4 py-3 align-middle transition-colors duration-300 ${isDark ? "text-gray-300" : "text-zinc-600"}`} {...props} />,

                // 💻 CÓDIGOS EM LINHA OU EM BLOCOS TÉCNICOS
                code: ({node, inline, children, ...props}: any) => 
                  inline ? (
                    <code className={`px-1.5 py-0.5 rounded font-mono text-[13px] break-all transition-colors duration-300 ${isDark ? "bg-black/40 text-emerald-300" : "bg-zinc-100 text-emerald-700"}`} {...props}>
                      {children}
                    </code>
                  ) : (
                    <div className={`border rounded-lg p-3 my-2 overflow-x-auto max-w-full transition-colors duration-300 ${isDark ? "bg-black/60 border-white/10" : "bg-zinc-50 border-zinc-200"}`}>
                      <code className={`font-mono text-[13px] transition-colors duration-300 ${isDark ? "text-gray-300" : "text-zinc-800"}`} {...props}>
                        {children}
                      </code>
                    </div>
                  ),
                
                // 📌 MARCADORES E TEXTOS DE ENFÂNSE
                strong: ({node, ...props}) => <strong className={`font-semibold transition-colors duration-300 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-1 my-2 marker:text-emerald-500" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-5 space-y-1 my-2 marker:text-emerald-500" {...props} />,
                
                // 🏷️ TÍTULOS E SUBTÍTULOS ESTRUTURAIS
                h1: ({node, ...props}) => <h1 className={`text-xl font-bold mt-4 mb-2 transition-colors duration-300 ${isDark ? "text-white" : "text-zinc-900"}`} {...props} />,
                h2: ({node, ...props}) => <h2 className={`text-lg font-bold mt-3 mb-2 transition-colors duration-300 ${isDark ? "text-white" : "text-zinc-900"}`} {...props} />,
                h3: ({node, ...props}) => <h3 className={`text-base font-bold mt-2 mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-zinc-900"}`} {...props} />,
                
                // 📝 CITAÇÕES / BLOCKQUOTES
                blockquote: ({node, ...props}) => (
                  <blockquote className={`border-l-2 border-emerald-500 pl-4 py-1 rounded-r-lg my-2 transition-all duration-300 ${isDark ? "text-gray-400 bg-black/20" : "text-zinc-600 bg-zinc-100/60"}`} {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}