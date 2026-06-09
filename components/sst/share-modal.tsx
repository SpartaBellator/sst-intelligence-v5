"use client"

import { useState } from "react"
import { X, Copy, Check } from "lucide-react"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  conversaId: string
}

// Componente auxiliar para renderizar os ícones minimalistas em SVG
const MinimalIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

// SVG especial para o Instagram (pois precisa de dois formatos geométricos)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function ShareModal({ isOpen, onClose, conversaId }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  // 🌟 URL BASE ATUALIZADA
  const shareUrl = `https://sst-intelligence.com.br`
  const shareText = "Confira esta análise inteligente no SST Intelligence:"

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareTo = (platform: string) => {
    const platforms: { [key: string]: string } = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      // 🌟 INSTAGRAM adicionado. (Copia pro clipboard e abre o Insta)
      instagram: `https://www.instagram.com/` 
    }
    
    if (platform === 'instagram') {
      handleCopy(); // Garante que o usuário já tenha o link na área de transferência para colar nos stories/DM
      window.open(platforms[platform], '_blank')
    } else if (platforms[platform]) {
      window.open(platforms[platform], '_blank')
    }
  }

  const icons = {
    whatsapp: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z',
    facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    twitter: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
    linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 transition-all">
      {/* 🌟 FUNDO BLUR CLARO/ESCURO */}
      <div className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-md transition-colors duration-300" onClick={onClose} />
      
      {/* 🌟 CARD PRINCIPAL CLARO/ESCURO */}
      <div className="relative w-full max-w-lg rounded-[32px] bg-white dark:bg-black/90 border border-zinc-200 dark:border-white/10 p-8 shadow-2xl overflow-hidden transition-colors duration-300">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">Compartilhar</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500 dark:text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* 🌟 GRID AJUSTADO PARA 5 COLUNAS */}
        <div className="grid grid-cols-5 gap-4 mb-10">
          <button onClick={() => shareTo('whatsapp')} className="flex flex-col items-center gap-2 group">
            <div className="h-14 w-14 rounded-full bg-zinc-50 border border-zinc-200 dark:bg-white/5 dark:border-white/5 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/20 transition-all">
              <MinimalIcon path={icons.whatsapp} />
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-gray-400 font-medium">WhatsApp</span>
          </button>

          <button onClick={() => shareTo('facebook')} className="flex flex-col items-center gap-2 group">
            <div className="h-14 w-14 rounded-full bg-zinc-50 border border-zinc-200 dark:bg-white/5 dark:border-white/5 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/20 transition-all">
              <MinimalIcon path={icons.facebook} />
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-gray-400 font-medium">Facebook</span>
          </button>

          <button onClick={() => shareTo('twitter')} className="flex flex-col items-center gap-2 group">
            <div className="h-14 w-14 rounded-full bg-zinc-50 border border-zinc-200 dark:bg-white/5 dark:border-white/5 flex items-center justify-center text-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">
              <MinimalIcon path={icons.twitter} />
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-gray-400 font-medium">X (Twitter)</span>
          </button>

          <button onClick={() => shareTo('linkedin')} className="flex flex-col items-center gap-2 group">
            <div className="h-14 w-14 rounded-full bg-zinc-50 border border-zinc-200 dark:bg-white/5 dark:border-white/5 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/20 transition-all">
              <MinimalIcon path={icons.linkedin} />
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-gray-400 font-medium">LinkedIn</span>
          </button>

          {/* 🌟 BOTÃO DO INSTAGRAM ADICIONADO */}
          <button onClick={() => shareTo('instagram')} className="flex flex-col items-center gap-2 group">
            <div className="h-14 w-14 rounded-full bg-zinc-50 border border-zinc-200 dark:bg-white/5 dark:border-white/5 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/20 transition-all">
              <InstagramIcon />
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-gray-400 font-medium">Instagram</span>
          </button>
        </div>

        {/* Input de Link */}
        <div className="space-y-3">
          <p className="text-[11px] text-zinc-500 dark:text-gray-500 uppercase tracking-widest font-bold ml-1">Link de Acesso</p>
          <div className="flex items-center gap-2 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 p-1.5 rounded-2xl group hover:border-zinc-300 dark:hover:border-white/10 transition-all">
            <input 
              readOnly 
              value={shareUrl}
              className="flex-1 bg-transparent border-none outline-none text-zinc-700 dark:text-gray-300 text-sm px-3"
            />
            <button 
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${copied ? 'bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'}`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
          <p className="text-[10px] text-zinc-400 dark:text-gray-500 text-center italic mt-4">Nota: O destinatário entrará no portal principal da plataforma.</p>
        </div>

      </div>
    </div>
  )
}