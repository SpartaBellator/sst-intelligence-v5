"use client"

import { useState, useRef, useEffect } from "react"
import { Plus, Paperclip, Gauge, Pin, X } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"; // ADICIONADO: Importação do tema global

interface ChatActionMenuProps {
  onFileSelect: (file: File) => void
  onLevelChange: () => void
  onPin: () => void
}

export function ChatActionMenu({ onFileSelect, onLevelChange, onPin }: ChatActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ==========================================
  // CONEXÃO GLOBAL DE TEMA & MAPA DE CORES
  // ==========================================
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    // Botão de Ativação (+)
    plusButton: isDark
      ? (isOpen ? "bg-white/10 text-white" : "hover:bg-white/10 text-zinc-400 hover:text-white")
      : (isOpen ? "bg-zinc-100 text-zinc-900 border border-zinc-200" : "hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900"),
    
    // Container do Dropdown Suspenso
    dropdownContainer: isDark
      ? "bg-black/90 border-white/10 shadow-2xl"
      : "bg-white/95 border-zinc-200/80 shadow-xl shadow-zinc-300/40",
    
    // Linhas / Opções do menu
    menuRow: isDark
      ? "hover:bg-white/5 text-gray-200 hover:text-white"
      : "hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 font-normal",
    
    // Ícones das opções
    iconColor: isDark ? "text-zinc-400" : "text-zinc-500"
  };

  // Fecha o menu se clicar fora dele (Lógica Original Protegida)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleFileClick = () => fileInputRef.current?.click()

  return (
    <div className="relative" ref={menuRef}>
      {/* Botão de + (Estilização e transições de rotação dinâmicas) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${styles.plusButton} ${isOpen ? "rotate-45" : ""}`}
      >
        <Plus size={20} />
      </button>

      {/* Input de arquivo escondido (Integridade Total) */}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])} 
      />

      {/* Menu Dropdown Suspenso */}
      {isOpen && (
        <div className={`absolute bottom-12 left-0 w-56 backdrop-blur-xl border rounded-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-200 ${styles.dropdownContainer}`}>
          
          {/* Opção 1: Arquivos */}
          <button 
            onClick={handleFileClick} 
            className={`flex items-center gap-3 w-full p-3 rounded-xl text-sm transition-colors cursor-pointer ${styles.menuRow}`}
          >
            <Paperclip size={16} className={styles.iconColor} /> 
            <span>Enviar arquivo</span>
          </button>
          
          {/* Opção 2: Nível */}
          <button 
            onClick={onLevelChange} 
            className={`flex items-center gap-3 w-full p-3 rounded-xl text-sm transition-colors cursor-pointer ${styles.menuRow}`}
          >
            <Gauge size={16} className={styles.iconColor} /> 
            <span>Nível da conversa</span>
          </button>
          
          {/* Opção 3: Fixar */}
          <button 
            onClick={onPin} 
            className={`flex items-center gap-3 w-full p-3 rounded-xl text-sm transition-colors cursor-pointer ${styles.menuRow}`}
          >
            <Pin size={16} className={styles.iconColor} /> 
            <span>Fixar conversa</span>
          </button>
          
        </div>
      )}
    </div>
  )
}