"use client"

import { 
  PlusCircle, 
  FolderOpen, 
  MessageCircle, 
  FileText, 
  Info,
  Settings,
  AlertTriangle,
  Megaphone,
  Leaf,
} from "lucide-react"
import type { MouseEventHandler } from 'react'
import { SSTLogo } from "./logo"
import { useState, useEffect } from 'react';
import { useTheme } from "@/providers/theme-provider";

interface Conversation {
  id: string;
  title: string;
}

interface SidebarProps {
  onMarketing: MouseEventHandler<HTMLButtonElement>;
  onAmbiental: MouseEventHandler<HTMLButtonElement>;
  onClose?: () => void;
  onNewConversation: () => void;
  onSelectConversation: (id: string) => void;
  onMyItems: () => void;
  onCommands: () => void;
  onAbout: () => void;
  onSettings: () => void;
  onReport: MouseEventHandler<HTMLButtonElement>;
  refreshTrigger?: number; 
  user?: any;
}

export function Sidebar({ 
  onMarketing, 
  onAmbiental, 
  onNewConversation, 
  onSelectConversation, 
  onMyItems, 
  onCommands, 
  onAbout, 
  onSettings, 
  onReport, 
  refreshTrigger,
  user // 🌟 Garantindo que a prop user seja desestruturada aqui!
}: SidebarProps) {
  const [conversas, setConversas] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://sst-intelligence-backend.onrender.com'}/conversations?t=${Date.now()}`);
        if (!response.ok) throw new Error('Falha na resposta');
        const data = await response.json();
        setConversas(data);
      } catch (error) {
        console.error("Aviso: Não foi possível carregar o histórico:", error);
      }
    };
    fetchConversations();
  }, [refreshTrigger]);

  // ==========================================
  // 🛡️ O PORTEIRO LÓGICO (INTERCEPTADOR DE CLIQUES)
  // ==========================================
  const requireAuth = (action: any) => {
    return (e: any) => {
      if (!user) {
        // Se for convidado, trava o clique e mostra o aviso
        alert("🔒 Acesso Restrito\n\nPara garantir sua segurança e salvar seus dados nesta área, conecte-se com sua conta Google pelo menu superior (Botão 'KS').");
        return;
      }
      // Se estiver logado, libera a função original
      action(e);
    };
  };

  // ==========================================
  // CONEXÃO GLOBAL DE TEMA & MAPA DE CORES POLIDO
  // ==========================================
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    sidebarBg: isDark ? 'border-white/10 bg-black/40' : 'border-zinc-200 bg-white shadow-2xl shadow-zinc-300/30',
    headerBg: isDark ? 'border-white/10 bg-zinc-950/50' : 'border-zinc-100 bg-zinc-50/60',
    logoText: isDark ? 'text-white' : 'text-zinc-900 font-extrabold',
    logoSub: isDark ? 'text-emerald-400' : 'text-emerald-600',
    auroraLine: isDark ? 'via-emerald-500/30 to-amber-500/30' : 'via-emerald-500/15 to-amber-500/15',
    mainBtn: isDark 
      ? 'border-white/10 bg-white/5 text-foreground hover:bg-white/10' 
      : 'border-zinc-200/80 bg-zinc-50 text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900 shadow-xs font-normal',
    mainBtnIcon: isDark ? 'text-muted-foreground' : 'text-zinc-500',
    moduleBtn: isDark 
      ? 'border-white/10 hover:bg-white/5 text-white/90' 
      : 'border-zinc-200/60 bg-zinc-50/50 hover:bg-zinc-100/80 text-zinc-800 shadow-xs',
    marketingIcon: isDark ? 'text-gray-400' : 'text-zinc-500',
    sectionTitle: isDark ? 'text-muted-foreground' : 'text-zinc-400 font-bold tracking-wider',
    listItem: isDark 
      ? 'text-muted-foreground hover:bg-white/10 hover:text-foreground' 
      : 'text-zinc-600 hover:bg-zinc-100 text-sm hover:text-zinc-900 font-normal',
    divider: isDark ? 'border-white/10' : 'border-zinc-150'
  };

  return (
    <aside className={`flex h-full w-72 flex-col border-r transition-all duration-300 ${styles.sidebarBg}`}>
      
      {/* Header com Logo e Efeito Aurora Glow */}
      <div className={`relative flex items-center border-b px-5 py-6 overflow-hidden transition-colors duration-300 ${styles.headerBg}`}>
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-emerald-500/25 rounded-full blur-3xl animate-pulse duration-[6000ms] pointer-events-none" />
        <div className="absolute -bottom-12 right-2 w-32 h-32 bg-amber-500/15 rounded-full blur-3xl animate-pulse duration-[4000ms] pointer-events-none" />
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${styles.auroraLine}`} />
        
        <div className="relative z-10 flex items-center gap-3 w-full select-none">
          <SSTLogo className="h-14 w-auto shrink-0 transition-transform duration-300 hover:scale-105" />
          <div className="flex flex-col justify-center">
            <span className={`text-base font-black tracking-wider uppercase leading-none transition-colors duration-300 ${styles.logoText}`}>SST</span>
            <span className={`text-[11px] font-bold tracking-[0.18em] uppercase mt-0.5 leading-none transition-colors duration-300 ${styles.logoSub}`}>Intelligence</span>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="space-y-2 p-4">
        <button 
          onClick={onNewConversation} // Liberado
          className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-xs transition-all cursor-pointer ${styles.mainBtn}`}
        >
          <PlusCircle className={`h-3.5 w-3.5 ${styles.mainBtnIcon}`} />
          <span>Abrir nova conversa</span>
        </button>
        <button 
          onClick={requireAuth(onMyItems)} // 🔒 PROTEGIDO
          className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-xs transition-all cursor-pointer ${styles.mainBtn}`}
        >
          <FolderOpen className={`h-3.5 w-3.5 ${styles.mainBtnIcon}`} />
          <span>Meus itens e criações</span>
        </button>
      </div>

      {/* CONTAINER DE MÓDULOS */}
      <div className="px-4 mb-4 space-y-2">
        <button
          onClick={onMarketing} // Liberado
          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left cursor-pointer ${styles.moduleBtn}`}
        >
          <Megaphone className={`h-5 w-5 ${styles.marketingIcon}`} />
          <span className="text-sm font-medium">Marketing Empresarial</span>
        </button>

        <button
          onClick={onAmbiental} // Liberado
          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left cursor-pointer ${styles.moduleBtn}`}
        >
          <Leaf className="h-5 w-5 text-emerald-500" />
          <span className="text-sm font-medium">Gestão Ambiental</span>
        </button>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
        <h3 className={`mb-3 text-[10px] uppercase tracking-wider transition-colors duration-300 ${styles.sectionTitle}`}>Conversas abertas</h3>
        <div className="space-y-1">
          {Array.isArray(conversas) ? (
            conversas.map((conv) => (
              <button
                key={conv.id}
                onClick={requireAuth(() => onSelectConversation(conv.id))} // 🔒 PROTEGIDO
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${styles.listItem}`}
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                <span className="truncate">{conv.title}</span>
              </button>
            ))
          ) : (
            <p className={`text-xs px-3 ${styles.sectionTitle}`}>Carregando conversas...</p>
          )}
        </div>
      </div>

      {/* Information Section */}
      <div className={`border-t p-4 transition-colors duration-300 ${styles.divider}`}>
        <h3 className={`mb-3 text-[10px] uppercase tracking-wider transition-colors duration-300 ${styles.sectionTitle}`}>Informações</h3>
        <div className="space-y-1">
          <button onClick={requireAuth(onCommands)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${styles.listItem}`}>
            <FileText className="h-3.5 w-3.5 text-zinc-400" />
            <span>Jornal Segurança do Trabalho</span>
          </button>
          <button onClick={requireAuth(onReport)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${styles.listItem}`}>
            <AlertTriangle className="h-3.5 w-3.5 text-zinc-400" />
            <span>Local de Denúncias</span>
          </button>
          <button onClick={onAbout} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${styles.listItem}`}>
            <Info className="h-3.5 w-3.5 text-zinc-400" />
            <span>Sobre a SST Intelligence</span>
          </button>
        </div>
      </div>

      {/* Settings & Support */}
      <div className={`border-t p-4 transition-colors duration-300 ${styles.divider}`}>
        <button onClick={onSettings} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${styles.listItem}`}>
          <Settings className="h-3.5 w-3.5 text-zinc-400" />
          <span>Configurações e suporte</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </button>
      </div>
    </aside>
  );
}