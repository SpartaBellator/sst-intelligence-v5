"use client"

import { useState } from "react"
import { ChatInput } from "./chat-input"
import { useTheme } from "@/providers/theme-provider";
import { Menu, X, LogOut, UserPlus } from "lucide-react"

interface NewChatViewProps {
  onMenuClick?: () => void
  onSendMessage: (message: string) => void 
  isLoading?: boolean 
}

export function NewChatView({ onMenuClick, onSendMessage, isLoading }: NewChatViewProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const usuarioAtual = {
    nome: "Kauã Silva",
    email: "majorsilva.fe@gmail.com",
    fotoUrl: null 
  }

  const iniciais = "KS"

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    // Fundo dinâmico (O que faltava para o contraste funcionar)
    overlay: isDark ? 'bg-black/85' : 'bg-[#f4f4f5]/60',

    // Top Header - Botões Flutuantes
    menuButton: isDark 
      ? 'bg-white/5 text-muted-foreground hover:bg-white/10' 
      : 'bg-black/5 text-zinc-600 hover:bg-black/10 border border-zinc-200/50',
    avatarButton: isDark 
      ? 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:border-white/20' 
      : 'border-zinc-200 bg-white/60 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300/80',
    
    // Dropdown / Menu de Usuário Suspenso
    userDropdown: isDark 
      ? 'border-white/10 bg-[#1e1e24] text-white shadow-2xl' 
      : 'border-zinc-200/80 bg-white text-zinc-900 shadow-xl shadow-zinc-300/40',
    dropdownDivider: isDark ? 'border-white/5' : 'border-zinc-100',
    dropdownEmail: isDark ? 'text-zinc-400' : 'text-zinc-500 font-medium',
    dropdownClose: isDark ? 'text-zinc-400 hover:bg-white/5 hover:text-white' : 'text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700',
    dropdownGreeting: isDark ? 'text-zinc-100' : 'text-zinc-800',
    dropdownBtnAdd: isDark ? 'bg-white/5 text-zinc-300 hover:bg-white/10' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80',
    dropdownBtnLogout: isDark 
      ? 'border-white/10 text-zinc-300 hover:bg-white/5 hover:text-red-400 hover:border-red-500/30' 
      : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-red-600 hover:border-red-200',

    // Efeito Aurora / Blush de Fundo
    auroraEmerald: isDark ? 'bg-emerald-500/25' : 'bg-emerald-400/15',
    auroraAmber: isDark ? 'bg-amber-500/15' : 'bg-amber-400/10',

    // Elementos Centrais de Texto
    logoSST: isDark 
      ? 'text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]' 
      : 'text-zinc-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]',
    logoSub: isDark ? 'text-emerald-400' : 'text-emerald-600',
    phraseText: isDark ? 'text-zinc-300' : 'text-zinc-600',
    phraseGradient: isDark ? 'from-emerald-400 to-amber-400' : 'from-emerald-600 to-amber-500',
    
    // Sombra da Barra de Chat
    chatInputShadow: isDark ? 'drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]' : 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]'
  };

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden transition-colors duration-500">
      
      {/* 🛡️ FIX: FILTRO UNIFICADO ADICIONADO AQUI */}
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
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-4">
        <button
          onClick={onMenuClick}
          tabIndex={-1}
          className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-colors focus:outline-none cursor-pointer ${styles.menuButton}`}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>

        <div className="relative flex items-center gap-2">
          <button 
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            tabIndex={-1}
            className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all overflow-hidden focus:outline-none cursor-pointer ${styles.avatarButton}`}
          >
            <div className="flex h-full w-full items-center justify-center bg-indigo-600 text-xs font-bold text-white">
              {iniciais}
            </div>
          </button>

          {userMenuOpen && (
            <div className={`absolute right-0 top-12 z-50 w-80 rounded-2xl border p-5 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200 ${styles.userDropdown}`}>
              <div className={`flex items-center justify-between border-b pb-3 ${styles.dropdownDivider}`}>
                <span className={`text-xs font-mono truncate max-w-50 ${styles.dropdownEmail}`}>{usuarioAtual.email}</span>
                <button onClick={() => setUserMenuOpen(false)} className={`rounded-full p-1 transition-colors cursor-pointer ${styles.dropdownClose}`}>
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col items-center py-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
                  {iniciais}
                </div>
                <h3 className={`mt-3 text-lg font-medium ${styles.dropdownGreeting}`}>Olá, {usuarioAtual.nome.split(" ")[0]}!</h3>
              </div>
              <div className={`mt-4 flex gap-2 border-t pt-3 ${styles.dropdownDivider}`}>
                <button className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium transition-colors cursor-pointer ${styles.dropdownBtnAdd}`}>
                  <UserPlus className="h-4 w-4" /> Adicionar conta
                </button>
                <button className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-medium transition-all cursor-pointer ${styles.dropdownBtnLogout}`}>
                  <LogOut className="h-4 w-4" /> Sair
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo Central Premium */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 pb-16 select-none">
        
        {/* Efeito Blush Aurora de Fundo */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0 -mt-20">
          <div 
            className={`absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full animate-pulse duration-[8000ms] ${styles.auroraEmerald}`} 
            style={{ filter: 'blur(140px)', transform: 'translate(-5%, -10%)' }}
          />
          <div 
            className={`absolute w-[400px] h-[400px] md:w-[580px] md:h-[580px] rounded-full animate-pulse duration-[5000ms] ${styles.auroraAmber}`} 
            style={{ filter: 'blur(130px)', transform: 'translate(5%, 15%)' }}
          />
        </div>

        {/* Camada do Conteúdo da IA */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-2xl gap-y-6 -mt-20">
          
          {/* Título Centralizado */}
          <div className="flex flex-col items-center text-center relative z-20">
            <h1 className={`text-6xl md:text-7xl font-black tracking-wider uppercase leading-none ${styles.logoSST}`}>
              SST
            </h1>
            <span className={`text-sm md:text-base font-bold tracking-[0.3em] uppercase mt-3 leading-none transition-colors duration-300 ${styles.logoSub}`}>
              Intelligence
            </span>
          </div>

          {/* Frase de Efeito */}
          <h2 className={`text-center text-xl font-light md:text-2xl tracking-wide max-w-lg mt-2 leading-snug ${styles.phraseText}`}>
            Segurança até você, <span className={`bg-gradient-to-r bg-clip-text text-transparent font-medium ${styles.phraseGradient}`}>como posso ajudar?</span>
          </h2>

          {/* Barra de Chat */}
          <div className={`w-full mt-4 transition-all duration-300 ${styles.chatInputShadow}`}>
            <ChatInput 
              variant="inline"
              onSendMessage={(text: string) => onSendMessage?.(text)} 
              isLoading={isLoading} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}