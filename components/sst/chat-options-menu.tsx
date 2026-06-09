"use client"

import { X, Share2, Paperclip, Pin, Pencil, BookOpen, Trash2, AlertTriangle } from "lucide-react"

interface ChatOptionsMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatOptionsMenu({ isOpen, onClose }: ChatOptionsMenuProps) {
  if (!isOpen) return null

  const options = [
    { name: "Arquivos na conversa", icon: Paperclip },
    { name: "Fixar", icon: Pin },
    { name: "Renomear", icon: Pencil },
    { name: "Relatar problema", icon: AlertTriangle, className: "text-red-400" },
    { name: "Excluir", icon: Trash2, className: "text-red-400 border-t border-white/5 pt-2 mt-2" },
  ]

  return (
    <div className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-white/10 bg-[#1e1e24] p-2 text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-2">
        <span className="text-xs font-semibold text-zinc-400">Opções do Chat</span>
        <button onClick={onClose} className="text-zinc-500 hover:text-white"><X className="h-4 w-4" /></button>
      </div>
      
      {options.map((opt) => (
        <button 
          key={opt.name}
          className={`flex w-full items-center gap-3 px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 rounded-xl transition-colors ${opt.className || ""}`}
        >
          <opt.icon className="h-4 w-4" />
          {opt.name}
        </button>
      ))}
    </div>
  )
}