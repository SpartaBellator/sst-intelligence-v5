"use client"

import { useState } from "react"
import { Share2, MoreVertical, Edit2, Download, Trash2, X } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

interface GlobalHeaderProps {
  showActions?: boolean
  onShareClick: () => void
  onDelete: () => void
  onRename?: (newName: string) => void
  onGoogleLogin?: () => void 
  onExport?: () => void  

  user?: {
    email?: string 
    user_metadata?: {
      full_name?: string
      avatar_url?: string 
      picture?: string // 🌟 Adicionamos o picture para o padrão Google
    }
  } | null              
}

export function GlobalHeader({ showActions = false, onShareClick, onDelete, onRename, onExport, user, onGoogleLogin }: GlobalHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [actionsOpen, setActionsOpen] = useState(false)
  
  // 🌟 NOVO ESTADO: Controla se a imagem do Google falhou ao carregar
  const [imgError, setImgError] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setActionsOpen(false)
  }

  const getInitials = (name?: string) => {
    if (!name) return "?"
    const parts = name.trim().split(" ")
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const fullName = user?.user_metadata?.full_name || "Usuário"
  // 🌟 Busca nos dois lugares que o Google costuma salvar
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const initials = getInitials(user?.user_metadata?.full_name || user?.email)

  return (
    <div className="absolute top-0 right-0 z-[100] flex items-center gap-2 p-4">
      {/* Menu de Perfil */}
      <div className="relative">
        <button 
          onClick={() => { setMenuOpen(!menuOpen); setActionsOpen(false); }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-lg border border-white/10 hover:scale-105 transition-all outline-none overflow-hidden"
        >
          {/* 🌟 GATILHO DINÂMICO COM ONERROR */}
          {user ? (
            avatarUrl && !imgError ? (
              <img 
                src={avatarUrl} 
                alt="Avatar" 
                className="h-full w-full object-cover" 
                onError={() => setImgError(true)} // Se quebrar, ativa o fallback!
              />
            ) : (
              initials
            )
          ) : (
            "?"
          )}
        </button>

{menuOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div className="fixed inset-0 z-0" onClick={closeAll} />
          
          {/* 🌟 CORREÇÃO: Apenas 'absolute' para flutuar sem quebrar o layout do Header */}
          <div className="absolute top-14 right-0 w-80 rounded-3xl bg-white dark:bg-black/90 backdrop-blur-xl p-6 shadow-2xl z-10 border border-zinc-200 dark:border-white/10 flex flex-col items-center text-center text-zinc-900 dark:text-white transition-all duration-300">
            
            {/* BOTÃO FECHAR (X) */}
            <button 
              onClick={closeAll}
              className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors outline-none cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {user ? (
              /* ================= 👤 CENÁRIO: USUÁRIO LOGADO ================= */
              <>
                {/* Adicionado pt-2 e px-6 para o e-mail não encostar no botão de X */}
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 mt-2 px-6 tracking-wide w-full truncate">
                  {user.email}
                </p>
                
                <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold text-white mb-3 shadow-lg overflow-hidden border-2 border-emerald-500/20 dark:border-emerald-500/30">
                  {avatarUrl && !imgError ? (
                    <img 
                      src={avatarUrl} 
                      alt="Avatar" 
                      className="h-full w-full object-cover" 
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    initials
                  )}
                </div>
                
                <h2 className="text-lg font-medium text-zinc-800 dark:text-white mb-6">
                  Olá, {fullName}!
                </h2>
                
                <a 
                  href="https://myaccount.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeAll}
                  className="w-full block py-2.5 px-4 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-white text-sm font-medium hover:bg-zinc-100 dark:hover:bg-white/5 transition-all mb-6 cursor-pointer"
                >
                  Gerenciar sua Conta
                </a>
                
                <div className="w-full border-t border-zinc-200 dark:border-white/10 pt-4">
                  <button 
                    onClick={async () => {
                      await supabase.auth.signOut();
                      closeAll();
                    }}
                    className="w-full py-2.5 rounded-lg border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm hover:bg-red-50 dark:hover:bg-red-500/10 transition-all font-medium cursor-pointer"
                  >
                    Sair
                  </button>

                  {/* RODAPÉ INSTITUCIONAL */}
                  <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500">
                    <a href="https://policies.google.com/privacy?hl=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 hover:underline transition-all">
                      Política de Privacidade
                    </a>
                    <span>•</span>
                    <a href="https://policies.google.com/terms?hl=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 hover:underline transition-all">
                      Termos de Serviço
                    </a>
                  </div>
                </div>
              </>
            ) : (
              /* ================= 👥 CENÁRIO: CONVIDADO (SEM LOGIN) ================= */
              <>
                <p className="text-[9px] text-emerald-600 dark:text-emerald-400 mb-4 mt-3 tracking-[0.2em] uppercase font-bold">
                  Modo Convidado
                </p>
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 flex items-center justify-center text-xl font-bold text-zinc-400 dark:text-zinc-500 mb-3">
                  ?
                </div>
                <h2 className="text-base font-medium text-zinc-800 dark:text-white mb-2">
                  Acesso Limitado
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mb-6 px-2 leading-relaxed">
                  Conecte sua conta institucional para liberar o Canal de Denúncias e salvar seu histórico.
                </p>
                
                <button 
                  onClick={onGoogleLogin}
                  className="w-full py-2.5 px-4 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-all mb-2 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
                >
                  Entrar com o Google
                </button>

                <div className="w-full border-t border-zinc-200 dark:border-white/10 pt-4 mt-4">
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500">
                    <a href="https://policies.google.com/privacy?hl=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 hover:underline transition-all">
                      Política de Privacidade
                    </a>
                    <span>•</span>
                    <a href="https://policies.google.com/terms?hl=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 hover:underline transition-all">
                      Termos de Serviço
                    </a>
                  </div>
                </div>
              </>
            )}

          </div>
        </>
      )}
      </div>

        {showActions && (
        <div className="flex items-center gap-2">
          
          {/* 🔗 Botão Compartilhar (Sempre Branco) */}
          <button 
            onClick={onShareClick}
            // Classes: bg-white (fundo), text-zinc-900 (ícone escuro), border-zinc-200 (borda visível no modo claro)
            // shadow-lg (sombra forte para destacar no modo escuro)
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-200 shadow-lg hover:scale-105 transition-all outline-none"
          >
            <Share2 className="h-4 w-4" />
          </button>

          <div className="relative">
            {/* ⚙️ Botão Três Pontinhos (Sempre Branco - Igual ao Compartilhar) */}
            <button 
              onClick={() => { setActionsOpen(!actionsOpen); setMenuOpen(false); }}
              // Usando exatamente as mesmas classes do botão de compartilhar para unificar o visual
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-200 shadow-lg hover:scale-105 transition-all outline-none"
            >
              <MoreVertical className="h-4 w-4" />
            </button>

            {actionsOpen && (
              <>
                <div className="fixed inset-0 z-0" onClick={closeAll} />
                
                {/* 🌟 REFAZENDO O MENU DROPDOWN: Totalmente responsivo ao tema Claro/Escuro */}
                <div className="absolute top-12 right-0 w-56 rounded-2xl bg-white dark:bg-black/90 backdrop-blur-xl p-2 shadow-2xl z-10 border border-zinc-200 dark:border-white/10 flex flex-col transition-all duration-300">
                  
                  {/* BOTÃO RENOMEAR CONECTADO */}
                  <button 
                    onClick={() => {
                      if (onRename) {
                        const novoNome = window.prompt("Digite o novo nome para a conversa:");
                        if (novoNome && novoNome.trim() !== "") {
                          onRename(novoNome);
                        }
                      }
                      closeAll();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-zinc-700 dark:text-gray-200 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <Edit2 className="h-4 w-4 text-zinc-400 dark:text-zinc-500" /> Renomear conversa
                  </button>

                  {/* BOTÃO EXPORTAR CONECTADO */}
                  <button 
                    onClick={() => {
                      if (onExport) onExport();
                      closeAll();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-zinc-700 dark:text-gray-200 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <Download className="h-4 w-4 text-zinc-400 dark:text-zinc-500" /> Exportar chat
                  </button>

                  {/* Linha divisória dinâmica */}
                  <div className="border-t border-zinc-200 dark:border-white/5 my-1" />
                  
                  {/* BOTÃO EXCLUIR CONECTADO */}
                  <button
                    onClick={() => {
                      onDelete();
                      closeAll();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors"
                  >
                    <Trash2 className="h-4 w-4" /> Excluir conversa
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}