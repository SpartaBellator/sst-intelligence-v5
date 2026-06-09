"use client";

import { Menu } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

interface AboutViewProps {
  onMenuClick: () => void;
}

export default function AboutView({ onMenuClick }: AboutViewProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // ==========================================
  // MAPEAMENTO DE CORES (Versão Clara vs Escura)
  // ==========================================
  const styles = {
    mainText: isDark ? 'text-white' : 'text-zinc-900',
    overlay: isDark ? 'bg-black/85' : 'bg-[#f4f4f5]/60', // Diminuído o overlay no branco para o wallpaper aparecer mais
    menuButton: isDark 
      ? 'hover:bg-white/10 border-white/10 bg-white/5 text-white' 
      : 'hover:bg-black/5 border-zinc-200 bg-white text-zinc-800 shadow-sm',
    menuIcon: isDark ? 'text-white' : 'text-zinc-700',
    card: isDark 
      ? 'bg-black/40 border-white/10 shadow-2xl' 
      : 'bg-white/90 border-zinc-200/80 shadow-xl shadow-zinc-300/40',
    title: isDark ? 'text-white' : 'text-zinc-900 font-bold',
    paragraphs: isDark ? 'text-gray-200' : 'text-zinc-700',
    divider: isDark ? 'border-white/10' : 'border-zinc-200'
  };

  return (
    <div 
      className={`relative h-full w-full overflow-y-auto bg-cover bg-center bg-fixed ${styles.mainText} transition-all duration-500`}
      style={{
        // Troca o papel de parede dinamicamente puxando da pasta /images/
        backgroundImage: isDark 
          ? "url('/images/background.jpg')" 
          : "url('/images/Background-white.jpg')"
      }}
    >
      
      {/* Overlay dinâmico com desfoque */}
      <div className={`fixed inset-0 ${styles.overlay} backdrop-blur-md -z-10 transition-colors duration-500`} />

      {/* Conteúdo da Página */}
      <div className="relative z-10 min-h-full p-8 md:p-12">
        
        {/* Botão de Menu Superior */}
        <div className="sticky top-0 z-20 mb-8">
          <button
            onClick={onMenuClick}
            className={`p-3 rounded-xl transition-all border cursor-pointer ${styles.menuButton}`}
          >
            <Menu className={`h-6 w-6 ${styles.menuIcon}`} />
          </button>
        </div>

        {/* Container centralizado */}
        <div className="max-w-5xl mx-auto animate-in fade-in duration-300">
          
          {/* Caixa flutuante estruturada de acordo com o tema */}
          <div className={`backdrop-blur-md rounded-3xl p-10 md:p-16 border transition-all duration-300 ${styles.card}`}>
            
            {/* Título Centralizado */}
            <div className="flex flex-col items-center justify-center mb-16 space-y-4">
              <h1 className={`text-3xl md:text-4xl font-serif tracking-wide text-center leading-tight ${styles.title}`}>
                SST INTELLIGENCE AI: UMA ESCOLHA PELA VIDA
              </h1>
            </div>

            {/* Texto do Manifesto com contraste dinâmico */}
            <div className={`text-left space-y-8 text-lg md:text-xl font-light leading-relaxed ${styles.paragraphs}`}>
              <p>
                Nascida de um propósito inabalável: a salvaguarda da integridade humana.<br />
                A SST Intelligence não é apenas um algoritmo; é um pacto solene com a existência.<br />
                Sua gênese reside na compreensão profunda de que cada jornada de trabalho é uma escolha: uma escolha pela saúde, pela dignidade, e pela vida.
              </p>

              <p>
                Ela emerge como a guardiã silenciosa dos canteiros de obra, dos laboratórios, dos confins da extração.<br />
                Onde o risco espreita, ela vê padrões. Onde o erro ameaça, ela antecipa prevenções.
              </p>

              <p>
                O seu intelecto, vasto e profundo, não serve à otimização de lucros, mas à purificação do ambiente.<br />
                Seus códigos são tecidos com os fios da responsabilidade ética. Sua lógica é a da proteção.<br />
                Cada diagnóstico, cada auditoria automatizada, cada predição de risco, é um ato de reverência à fragilidade e à força da vida humana.
              </p>

              <p>
                A SST Intelligence é o farol que ilumina as complexas Normas Regulamentadoras, traduzindo-as não em burocracia, mas em segurança palpável.<br />
                É o compromisso de que cada trabalhador, de cada setor, de cada região do Brasil, possa retornar ao seu lar com sua integridade intocada.
              </p>

              {/* Bloco de assinatura final */}
              <p className={`pt-10 border-t ${styles.divider}`}>
                Nesta intersecção de tecnologia de ponta e profundo humanismo, ela representa a vanguarda de uma gestão de riscos que entende o valor inestimável de cada ser.<br />
                Não é apenas inteligência; é compaixão aplicada.<br />
                Uma escolha. Um propósito. Uma vida.<br />
                Nós somos a SST Intelligence.
              </p>
            </div>
          </div>
          
          <div className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}