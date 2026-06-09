"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Folder, Image as ImageIcon, FileText, Menu } from "lucide-react";
import { useTheme } from "@/providers/theme-provider"; // ADICIONADO: Importação do tema global

interface MyItemsViewProps {
  onMenuClick: () => void;
}

export default function MyItemsView({ onMenuClick }: MyItemsViewProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("gen-images");
  const { theme } = useTheme(); // Puxa o tema ativo global
  const isDark = theme === 'dark';

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  // ==========================================
  // MAPEAMENTO DE CORES DO CONTAINER PRINCIPAL
  // ==========================================
  const styles = {
    mainText: isDark ? 'text-white' : 'text-zinc-900',
    overlay: isDark ? 'bg-black/85' : 'bg-[#f4f4f5]/60', // Camada uniforme sobre o wallpaper
    menuButton: isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-zinc-700',
    titleIcon: isDark ? 'text-white' : 'text-zinc-800',
    titleText: isDark ? 'text-white font-light' : 'text-zinc-900 font-medium'
  };

  return (
    // REMOVIDO: Classes de bg fixas saíram daqui para evitar quebras de scroll
    <div className={`min-h-screen ${styles.mainText} relative transition-all duration-300`}>
      
      {/* 🛡️ ASSINATURA VISUAL UNIFICADA (Fundo e desfoque blindados contra emendas) */}
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

      {/* Container de conteúdo posicionado acima do background */}
      <div className="relative z-10 p-8 animate-in fade-in duration-300">
        
        {/* Botão de Menu (Hambúrguer) */}
        <div className="mb-6">
          <button 
            onClick={onMenuClick}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${styles.menuButton}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Título da Página */}
        <div className="max-w-5xl mx-auto mb-10 flex items-center gap-4">
          <Folder className={`h-8 w-8 ${styles.titleIcon}`} />
          <h1 className={`text-3xl tracking-wide ${styles.titleText}`}>Menu de Itens e Criações</h1>
        </div>

        {/* Container das seções (Accordions) */}
        <div className="max-w-5xl mx-auto space-y-4">
          
          {/* Seção 1 */}
          <Section
            id="gen-images"
            title="Imagens Geradas por SST Intelligence"
            icon={<ImageIcon className="h-5 w-5" />}
            isOpen={expandedSection === "gen-images"}
            onToggle={() => toggleSection("gen-images")}
          >
            {/* Grid de Conteúdo */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border rounded-xl transition-colors duration-300 ${isDark ? 'border-white/10 bg-black/40' : 'border-zinc-200 bg-zinc-50/80'}`}>
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-video rounded border animate-pulse transition-colors duration-300 ${isDark ? 'bg-white/5 border-white/5' : 'bg-zinc-200/60 border-zinc-300/20'}`} 
                />
              ))}
            </div>
            <p className={`text-center text-sm mt-4 ${isDark ? 'text-gray-500' : 'text-zinc-400'}`}>
              Nenhuma imagem gerada ainda.
            </p>
          </Section>

          {/* Seção 2 */}
          <Section
            id="user-images"
            title="Imagens Anexadas do Usuário"
            icon={<ImageIcon className="h-5 w-5" />}
            isOpen={expandedSection === "user-images"}
            onToggle={() => toggleSection("user-images")}
          >
            <p className={`p-2 text-sm ${isDark ? 'text-gray-400' : 'text-zinc-600'}`}>Nenhuma imagem anexada.</p>
          </Section>

          {/* Seção 3 */}
          <Section
            id="docs"
            title="Documentos Anexados do Usuário"
            icon={<FileText className="h-5 w-5" />}
            isOpen={expandedSection === "docs"}
            onToggle={() => toggleSection("docs")}
          >
            <p className={`p-2 text-sm ${isDark ? 'text-gray-400' : 'text-zinc-600'}`}>Nenhum documento anexado.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE AUXILIAR DE SEÇÃO (ACCORDION)
// ==========================================
function Section({ id, title, icon, isOpen, onToggle, children }: any) {
  const { theme } = useTheme(); // Consome o tema interno para redesenhar a si mesmo
  const isDark = theme === 'dark';

  // Mapeamento de estilos local dos Accordions
  const styles = {
    container: isDark 
      ? 'border-white/10 bg-white/5' 
      : 'border-zinc-200 bg-white shadow-md shadow-zinc-300/20',
    button: isDark ? 'hover:bg-white/5' : 'hover:bg-zinc-50/80',
    label: isDark ? 'text-white font-light' : 'text-zinc-800 font-normal',
    chevron: isDark ? 'text-gray-400' : 'text-zinc-500',
    contentWrapper: isDark ? 'border-white/10 bg-black/20' : 'border-zinc-100 bg-zinc-50/40'
  };

  return (
    <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${styles.container}`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 transition-colors cursor-pointer ${styles.button}`}
      >
        <div className="flex items-center gap-3">
          <div className="text-emerald-500">{icon}</div>
          <span className={`text-lg tracking-wide ${styles.label}`}>{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className={`h-5 w-5 transition-colors ${styles.chevron}`} />
        ) : (
          <ChevronDown className={`h-5 w-5 transition-colors ${styles.chevron}`} />
        )}
      </button>

      {isOpen && (
        <div className={`p-4 border-t transition-all duration-300 ${styles.contentWrapper}`}>
          {children}
        </div>
      )}
    </div>
  );
}