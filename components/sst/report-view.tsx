"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Menu, AlertTriangle, ChevronDown, ChevronUp, 
  Send, Paperclip, Phone, X, Download
} from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useTheme } from "@/providers/theme-provider";

const emergencyNumbers = [
  { n: "190", name: "Polícia Militar", desc: "Urgências e crimes em andamento" },
  { n: "193", name: "Corpo de Bombeiros", desc: "Incêndios, resgates e acidentes" },
  { n: "192", name: "SAMU", desc: "Emergências médicas" },
  { n: "191", name: "Polícia Rodoviária Federal", desc: "Acidentes em rodovias federais" },
  { n: "199", name: "Defesa Civil", desc: "Desastres naturais e áreas de risco" },
  { n: "153", name: "Guarda Municipal", desc: "Segurança patrimonial e municipal" },
  { n: "180", name: "Central de Atendimento à Mulher", desc: "Denúncias de violência" },
  { n: "181", name: "Disque-Denúncia", desc: "Denúncias anônimas" },
  { n: "100", name: "Disque Direitos Humanos", desc: "Violações contra crianças, idosos e minorias" },
  { n: "136", name: "Disque Saúde", desc: "Informações e ouvidoria do SUS" },
];

interface Message {
  role: string;
  content: string;
  userName?: string;
  timestamp?: string;
  image_data?: string;
}

interface ReportViewProps {
  onMenuClick: () => void;
  onSendMessage: (text: string, image_data?: string | File) => void;
  messages: Message[];
  isLoading: boolean;
}

export default function ReportView({ onMenuClick, onSendMessage, messages, isLoading }: ReportViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // NOVO: Referência para controlar a altura do textarea dinamicamente
  const reportTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // NOVO: Ajusta a altura da caixa conforme o relato ganha quebras de linha
  useEffect(() => {
    if (reportTextareaRef.current) {
      reportTextareaRef.current.style.height = "auto";
      // Limita o crescimento em aproximadamente 7 linhas (~150px)
      reportTextareaRef.current.style.height = `${Math.min(reportTextareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      toast.error("Arquivo muito grande! O limite é de 10MB.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast.error("Por favor, selecione apenas arquivos de imagem.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSend = () => {
    if (input.trim() === "" && !selectedImage) return;
    onSendMessage(input, selectedImage || undefined);
    setInput("");
    setSelectedImage(null);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('chat-report-content');
    if (!element) {
      toast.error("Conteúdo do chat não encontrado.");
      return;
    }

    toast.loading("Gerando relatório em PDF...");

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#000000",
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("Relatorio_Denuncia_SST.pdf");
      
      toast.dismiss();
      toast.success("Relatório baixado com sucesso!");
    } catch (error) {
      toast.dismiss();
      toast.error("Erro ao gerar PDF.");
      console.error(error);
    }
  };

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    mainContainer: isDark ? 'text-white' : 'text-zinc-900',
    overlay: isDark ? 'bg-black/85' : 'bg-[#f4f4f5]/60',
    menuButton: isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-zinc-700',
    headerText: isDark ? 'text-white font-light' : 'text-zinc-900 font-medium',
    
    // Accordion de Emergência
    accordionBtn: isDark 
      ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' 
      : 'bg-white border-zinc-200/80 hover:bg-zinc-50 text-zinc-800 shadow-sm',
    emergencyDropdown: isDark ? 'bg-black/90 border-white/10' : 'bg-white border-zinc-200 shadow-xl',
    emergencyItem: isDark ? 'border-white/5' : 'border-zinc-100',
    emergencyIconBg: isDark ? 'bg-white/5' : 'bg-zinc-100',
    emergencyText: isDark ? 'text-white' : 'text-zinc-800',
    emergencySubtext: isDark ? 'text-gray-400' : 'text-zinc-500',
    
    // Histórico de Chat
    chatArea: isDark ? 'bg-black/20' : 'bg-zinc-50/40',
    emptyStateText: isDark ? 'text-gray-400' : 'text-zinc-600',
    emptyStateSub: isDark ? 'text-gray-500' : 'text-zinc-400',
    timestamp: isDark ? 'text-gray-400' : 'text-zinc-500',
    
    // Balões de Mensagem da IA
    aiBubble: isDark 
      ? 'bg-white/10 text-white border-white/5 rounded-tl-none' 
      : 'bg-white text-zinc-800 border-zinc-200/80 rounded-tl-none shadow-md shadow-zinc-200/50',
    
    // Digitando... (Loading)
    loadingBubble: isDark 
      ? 'bg-white/5 border-white/5 text-gray-400' 
      : 'bg-white border-zinc-200 text-zinc-500 shadow-sm',
    
    // Input / Barra de Mensagem inferior
    inputBar: isDark 
      ? 'bg-black/40 border-white/10' 
      : 'bg-white border-zinc-200 shadow-xl shadow-zinc-300/30',
    textarea: isDark ? 'text-white placeholder:text-gray-500' : 'text-zinc-900 placeholder:text-zinc-400',
    clipButton: isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-zinc-500'
  };

  return (
    <div className={`h-screen flex flex-col ${styles.mainContainer} relative transition-colors duration-300`}>
      
      {/* 🛡️ FILTRO UNIFICADO (Fundo fixo e contínuo sem emendas no scroll) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
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

      {/* Header com botão de Download */}
      <div className="relative z-10 p-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className={`p-2 rounded-lg transition-colors cursor-pointer ${styles.menuButton}`}>
            <Menu className="h-6 w-6" />
          </button>
          <h1 className={`text-xl ${styles.headerText}`}>Canal de Denúncias Seguro</h1>
        </div>
        
        {messages.length > 0 && (
          <button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all text-sm font-medium cursor-pointer shadow-md shadow-emerald-600/10"
          >
            <Download size={16} />
            Exportar Relatório
          </button>
        )}
      </div>

      {/* Accordion de Emergência */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 mb-2 shrink-0">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${styles.accordionBtn}`}
        >
          <span className="flex items-center gap-2 font-medium">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Ver Números de Emergência e Apoio
          </span>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5 animate-pulse" />}
        </button>

        {isOpen && (
          <div className={`mt-2 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[25vh] overflow-y-auto custom-scrollbar relative z-50 transition-all duration-300 ${styles.emergencyDropdown}`}>
            {emergencyNumbers.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-2 border-b last:border-0 ${styles.emergencyItem}`}>
                <div className={`p-2 rounded-lg ${styles.emergencyIconBg}`}>
                  <Phone className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <p className={`font-bold text-sm ${styles.emergencyText}`}>{item.n}: {item.name}</p>
                  <p className={`text-xs ${styles.emergencySubtext}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HISTÓRICO DE MENSAGENS COM ID PARA PDF (INTEGRIDADE TOTAL PRESERVADA) */}
      <div id="chat-report-content" className={`flex-1 relative z-10 overflow-y-auto px-4 py-4 max-w-4xl mx-auto w-full flex flex-col gap-4 custom-scrollbar transition-colors duration-300 ${styles.chatArea}`}>
        {messages.length === 0 ? (
          <div className={`flex-1 flex flex-col items-center justify-center text-center p-6 ${styles.emptyStateText}`}>
            <AlertTriangle className="h-12 w-12 text-emerald-500/50 mb-3" />
            <p className="font-medium">Ambiente de Denúncia Criptografado e Anônimo</p>
            <p className={`text-xs max-w-md mt-1 ${styles.emptyStateSub}`}>
              As mensagens enviadas aqui trafegam direto para a IA e não salvam histórico no banco de dados. Ao fechar ou recarregar, tudo sumirá.
            </p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col max-w-[75%] ${msg.role === "user" ? "self-end items-end" : "self-start items-start"}`}
            >
              <span className={`text-[10px] mb-1 px-1 ${styles.timestamp}`}>
                {msg.userName || (msg.role === 'user' ? 'Você' : 'SST AI')} • {msg.timestamp || 'Agora'}
              </span>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed transition-all duration-200 ${
                msg.role === "user" 
                  ? "bg-emerald-600 text-white rounded-tr-none shadow-md shadow-emerald-600/10" 
                  : styles.aiBubble
              }`}>
                {msg.role === "user" ? (
                  <div className="flex flex-col">
                    {msg.image_data && (
                      <img 
                        src={msg.image_data} 
                        alt="Anexo" 
                        className="mb-2 max-w-full rounded-lg max-h-48 object-cover border border-white/20" 
                      />
                    )}
                    {msg.content}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <ReactMarkdown 
                      components={{
                        // Customização do Markdown adaptada para contraste no tema claro e escuro
                        strong: ({node, ...props}) => <strong className={`font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-1 marker:text-emerald-500" {...props} />,
                        code: ({node, inline, children, ...props}: any) => 
                          inline ? (
                            <code className={`px-1.5 py-0.5 rounded font-mono text-[13px] ${isDark ? 'bg-black/40 text-emerald-300' : 'bg-zinc-100 text-emerald-700'}`} {...props}>{children}</code>
                          ) : (
                            <div className={`border rounded-lg p-3 my-2 overflow-x-auto ${isDark ? 'bg-black/60 border-white/10 text-gray-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'}`}><code className="font-mono text-[13px]" {...props}>{children}</code></div>
                          ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="self-start flex flex-col items-start max-w-[75%] animate-pulse">
            <span className={`text-[10px] mb-1 px-1 ${styles.timestamp}`}>SST AI • Digitando...</span>
            <div className={`p-3 rounded-2xl rounded-tl-none text-sm italic border transition-colors duration-300 ${styles.loadingBubble}`}>
              Processando relato de forma segura...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Barra de Chat Atualizada (Textarea Inteligente Multilinha) */}
      <div className="relative z-10 p-4 max-w-4xl mx-auto w-full shrink-0">
        <div className={`rounded-2xl p-3 flex items-end gap-3 backdrop-blur-md border transition-all duration-300 ${styles.inputBar}`}>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
          
          <button 
            onClick={() => fileInputRef.current?.click()} 
            className={`p-2 rounded-lg transition-colors disabled:opacity-50 mb-0.5 cursor-pointer ${styles.clipButton}`}
            disabled={isLoading}
          >
            <Paperclip className="h-5 w-5" />
          </button>

          {selectedImage && (
            <div className="relative group shrink-0 mb-1">
              <img src={selectedImage} alt="Preview" className="h-8 w-8 rounded-lg object-cover border border-white/20" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-1 -right-1 bg-red-500 rounded-full p-0.5 text-white cursor-pointer"
                disabled={isLoading}
              >
                <X className="h-2 w-2" />
              </button>
            </div>
          )}

          <textarea 
            ref={reportTextareaRef}
            rows={1}
            placeholder={selectedImage ? "Adicione detalhes ao seu anexo..." : "Relate o ocorrido aqui..."}
            className={`flex-1 bg-transparent outline-none text-sm disabled:cursor-not-allowed resize-none max-h-[150px] py-1.5 min-h-[24px] overflow-y-auto custom-scrollbar focus:outline-none ${styles.textarea}`}
            value={input}
            disabled={isLoading}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!isLoading) handleSend();
              }
            }}
          />
          
          <button 
            onClick={handleSend} 
            disabled={isLoading || (input.trim() === "" && !selectedImage)}
            className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-0.5 customs-send-btn cursor-pointer"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}