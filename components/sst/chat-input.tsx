"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Loader2, X } from "lucide-react" 
import { ChatActionMenu } from "./action-menu"
import { toast } from "sonner";
import { supabase } from '@/lib/supabaseClient';
import { useTheme } from "@/providers/theme-provider"; // ADICIONADO: Importação do tema global

export function ChatInput({ 
  onSendMessage, 
  isLoading,
  variant = "default"
}: { 
  onSendMessage: (text: string, image_data?: string, userName?: string) => void, 
  isLoading?: boolean,
  variant?: "default" | "inline"
}) {
  const [message, setMessage] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // ==========================================
  // CONEXÃO GLOBAL DE TEMA & MAPA DE CORES
  // ==========================================
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    // Sombra de Rodapé (Fade out na parte inferior da tela)
    fadeBottom: isDark 
      ? 'bg-linear-to-t from-black/80 via-black/50 to-transparent' 
      : 'bg-linear-to-t from-white/90 via-white/50 to-transparent',
    
    // Caixa de Digitação Principal
    containerBg: isDark 
      ? 'border-white/10 bg-black/40 focus-within:border-white/20' 
      : 'border-zinc-200/80 bg-white/90 focus-within:border-zinc-300 shadow-xl shadow-zinc-200/40',
    
    // Ícone da Lupa e Spinner de Loading
    iconColor: isDark ? 'text-muted-foreground' : 'text-zinc-400',
    loadingSpinner: isDark ? 'text-indigo-400' : 'text-emerald-600',
    
    // Área de Texto
    textArea: isDark 
      ? 'text-foreground placeholder:text-muted-foreground' 
      : 'text-zinc-900 placeholder:text-zinc-400 font-normal',
      
    // Miniatura da Imagem Anexada
    imagePreviewBorder: isDark ? 'border-white/20' : 'border-zinc-200'
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [message])

  const handleFileSelect = (file: File | null) => {
    if (!file) return;
    const MAX_SIZE = 10 * 1024 * 1024; 
    if (file.size > MAX_SIZE) {
      toast.error("Arquivo muito grande! O limite é de 10MB.");
      return;
    }
    if (!file.type.startsWith('image/')) {
      toast.error("Por favor, selecione apenas arquivos de imagem (JPG, PNG, WEBP).");
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  const handleLevelChange = () => console.log("level changed")
  const handlePinMessage = () => console.log("pin toggled")

  const handleSend = async () => {
    if ((!message.trim() && !selectedImage) || isLoading) return;
    const textToSend = message;
    const imagePreview = selectedImage;
    const fileToUpload = selectedFile;

    // Buscamos o nome do localStorage apenas no momento do envio
    const savedName = localStorage.getItem('@sst-treatment-name') || 'Usuário';

    // Enviamos o nome atualizado para o componente pai
    onSendMessage(textToSend, imagePreview || undefined, savedName);
    
    setMessage("");
    setSelectedImage(null);
    setSelectedFile(null);

    let imageUrl = null;
    if (fileToUpload) {
      const fileExt = fileToUpload.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('chat-images') 
        .upload(fileName, fileToUpload);

      if (uploadError) {
        console.error('Erro no upload da imagem:', uploadError);
        toast.error("Erro ao enviar a imagem para o servidor.");
      } else {
        const { data: urlData } = supabase.storage.from('chat-images').getPublicUrl(fileName);
        imageUrl = urlData.publicUrl;
      }
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([
        { 
          content: textToSend, 
          role: 'user', 
          user_id: '00000000-0000-0000-0000-000000000000', 
          image_url: imageUrl 
        },
      ]);
    if (error) console.error('Erro ao salvar no Supabase:', error);
  };

  const isInline = variant === "inline";

  return (
    <div className={isInline ? "w-full" : `absolute bottom-0 left-0 right-0 pb-6 pt-8 transition-colors duration-300 ${styles.fadeBottom}`}>
      <div className={isInline ? "w-full" : "mx-auto max-w-3xl px-4 lg:px-8"}>
        <div className="relative flex items-center">
          
          {/* Caixa de Digitação Central */}
          <div className={`flex w-full items-end gap-3 rounded-2xl border backdrop-blur-xl px-4 py-3 transition-all duration-300 ${styles.containerBg} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
            
            {/* Ícone Lateral Esquerdo */}
            <div className="mb-1">
              {isLoading ? (
                <Loader2 className={`h-4 w-4 shrink-0 animate-spin ${styles.loadingSpinner}`} />
              ) : (
                <Search className={`h-4 w-4 shrink-0 transition-colors ${styles.iconColor}`} />
              )}
            </div>

            {/* Renderização de Prévia de Imagem */}
            {selectedImage && (
              <div className="relative group mb-0.5 animate-in fade-in zoom-in duration-200">
                <img src={selectedImage} alt="Preview" className={`h-8 w-8 rounded-lg object-cover border ${styles.imagePreviewBorder}`} />
                <button 
                  onClick={() => { setSelectedImage(null); setSelectedFile(null); }} 
                  className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 rounded-full p-0.5 text-white transition-colors cursor-pointer"
                >
                  <X className="h-2 w-2" />
                </button>
              </div>
            )}
            
            {/* Área de Digitação Multilinha */}
            <textarea
              ref={textareaRef}
              rows={1}
              disabled={isLoading}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (!isLoading) handleSend();
                }
              }}
              placeholder={isLoading ? "IA processando..." : selectedImage ? "Adicione uma legenda..." : "Peça a SST Intelligence..."}
              className={`flex-1 bg-transparent text-sm focus:outline-none disabled:cursor-not-allowed resize-none max-h-[150px] py-0.5 min-h-[20px] overflow-y-auto transition-colors ${styles.textArea}`}
            />
            
            {/* Menu de Ações Secundárias (Botão +) */}
            {!isLoading && (
              <div className="mb-0.5">
                {/* 
                  ATENÇÃO: Este componente (ChatActionMenu) também pode ter cores escuras nativas. 
                  Se ao abrir o botão "+" as opções ficarem invisíveis, precisaremos refatorar ele também!
                */}
                <ChatActionMenu onFileSelect={handleFileSelect} onLevelChange={handleLevelChange} onPin={handlePinMessage} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}