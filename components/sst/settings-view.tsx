import React, { useState, useEffect } from 'react';
import { useTheme } from "@/providers/theme-provider";
import { 
  Settings, User, ExternalLink, Crown, Globe, 
  MessageSquare, Headphones, ChevronRight, CheckCircle2, 
  Moon, Sun, Loader2, Lock, Mail, Menu, ArrowLeft,
  ShieldAlert, BookOpen, BarChart3
} from 'lucide-react';

// 🌟 INTERFACE BLINDADA (Impede a tela de bugar)
interface SettingsViewProps {
  onMenuClick: () => void;
  user?: {
    email?: string;
  } | null;
  [key: string]: any; // Permite herdar outras propriedades do page.tsx silenciosamente
}

type ViewState = 'settings' | 'premium' | 'sites';

// 🌟 CAPTURANDO O USER E ESPALHANDO O RESTO COM O ...props
export function SettingsView({ onMenuClick, user, ...props }: SettingsViewProps) {
  // ==========================================
  // ESTADOS DO COMPONENTE
  // ==========================================
  const [currentView, setCurrentView] = useState<ViewState>('settings');
  const [treatmentName, setTreatmentName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedState, setShowSavedState] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // 🌟 O mockEmail agora vai ler o usuário autenticado sem quebrar o layout!
  const mockEmail = user?.email || "kaua.samarty@etec.sp.gov.br";

  useEffect(() => {
    const savedName = localStorage.getItem('@sst-treatment-name');
    if (savedName) setTreatmentName(savedName);
    
    const savedTheme = localStorage.getItem('@sst-theme') as 'dark' | 'light';
    if (savedTheme) toggleTheme(savedTheme);
  }, []);

  // ==========================================
  // MAPEAMENTO DE CORES
  // ==========================================
  const isDark = theme === 'dark';

  const styles = {
    bgOverlay: isDark ? 'bg-[#0a0a0a]/80' : 'bg-[#f4f4f5]/85',
    title: isDark ? 'text-white' : 'text-zinc-900',
    text: isDark ? 'text-zinc-300' : 'text-zinc-700',
    textMuted: isDark ? 'text-zinc-500' : 'text-zinc-500',
    card: isDark 
      ? 'bg-[#111113]/80 border-white/10 shadow-2xl' 
      : 'bg-white border-zinc-200/80 shadow-xl shadow-zinc-300/30',
    input: isDark 
      ? 'bg-black/40 border-white/10 text-white placeholder-zinc-600' 
      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400',
    button: isDark 
      ? 'bg-black/40 border-white/5 hover:bg-black/60' 
      : 'bg-zinc-50/60 border-zinc-200/60 hover:bg-zinc-100/80',
    menuButton: isDark 
      ? 'text-zinc-400 hover:text-white hover:bg-white/10' 
      : 'text-zinc-600 hover:text-zinc-900 hover:bg-black/5'
  };

  // ==========================================
  // FUNÇÕES DE AÇÃO
  // ==========================================
  const handleSaveName = () => {
    if (!treatmentName.trim()) return;
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('@sst-treatment-name', treatmentName);
      setIsSaving(false);
      setShowSavedState(true);
      setTimeout(() => setShowSavedState(false), 2000);
    }, 800);
  };

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    toggleTheme(newTheme);
    localStorage.setItem('@sst-theme', newTheme);
  };

  const handleFeedbackClick = () => {
    window.location.href = "mailto:sst.intelligence.petrovida@gmail.com?subject=Feedback%20SST%20Intelligence";
  };

  // ==========================================
  // BANCO DE DADOS DOS SITES
  // ==========================================
  const siteCategories = [
    {
      title: "Instituições de Segurança, Medicina e Leis do Trabalho",
      icon: <ShieldAlert className="w-5 h-5 text-emerald-500" />,
      colorClass: isDark ? "from-emerald-500/10 to-teal-500/5" : "from-emerald-500/5 to-teal-500/5",
      borderColor: isDark ? "border-emerald-500/20" : "border-emerald-500/20",
      links: [
        { name: "Fundação Jorge Duprat Figueiredo (Fundacentro)", url: "https://www.gov.br/fundacentro/pt-br" },
        { name: "Ministério do Trabalho e Emprego (MTE)", url: "https://www.gov.br/trabalho-e-emplego/pt-br" },
        { name: "Ministério Público do Trabalho (MPT)", url: "https://mpt.mp.br" },
        { name: "Associação Brasileira de Higienistas Ocupacionais (ABHO)", url: "https://abho.org.br" },
        { name: "Associação Brasileira de Ergonomia (Abergo)", url: "https://www.abergo.org.br" },
        { name: "Abraseg", url: "https://www.abraseg.com.br" },
        { name: "Associação Nacional de Medicina do Trabalho (ANAMT)", url: "https://www.anamt.org.br/portal/" },
        { name: "Associação Nacional dos Engenheiros de Segurança do Trabalho", url: "https://andestdobrasil.org/links-uteis/" },
        { name: "Ministério da Previdência Social", url: "https://www.gov.br/previdencia/pt-br" },
        { name: "Meu INSS", url: "https://meu.inss.gov.br/#/login" },
        { name: "SEBRAE", url: "https://sebrae.com.br" },
      ]
    },
    {
      title: "Instituições de Ensino no Ambiente do Trabalho",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      colorClass: isDark ? "from-blue-500/10 to-indigo-500/5" : "from-blue-500/5 to-indigo-500/5",
      borderColor: isDark ? "border-blue-500/20" : "border-blue-500/20",
      links: [
        { name: "PECE Poli-USP", url: "https://pecepoli.com.br" },
        { name: "FIOCRUZ", url: "https://fiocruz.br" },
        { name: "Instituto de Educação Médica (IDOMED)", url: "https://www.idomed.com.br" },
        { name: "SENAI CIMATEC", url: "https://senaicimatec.com.br" },
        { name: "SENAC", url: "https://www.senac.br" },
      ]
    },
    {
      title: "Instituições de Dados e Estatísticas",
      icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
      colorClass: isDark ? "from-amber-500/10 to-orange-500/5" : "from-amber-500/5 to-orange-500/5",
      borderColor: isDark ? "border-amber-500/20" : "border-amber-500/20",
      links: [
        { name: "Smartlab", url: "https://smartlabbr.org" },
        { name: "International Labour Organization (ILOSTAT)", url: "https://ilostat.ilo.org" },
        { name: "Portal IBGE", url: "https://www.ibge.gov.br" },
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${styles.text} font-sans relative overflow-x-hidden transition-colors duration-300`}>
      {/* BACKGROUND COM WALLPAPER E DESFOQUE GLOBAL (Barreira Quebrada) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ 
            backgroundImage: isDark 
              ? "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" 
              : "url('/images/Background-white.jpg')",
            // Aumentei um pouquinho a opacidade para o desenho aparecer melhor através do desfoque
            opacity: isDark ? 0.35 : 0.75 
          }} 
        />
        {/* Camada fumê/clara com desfoque */}
        <div className={`absolute inset-0 ${styles.bgOverlay} backdrop-blur-xl transition-colors duration-300`} />
      </div>

      {/* BOTÃO DE MENU LATERAL (GLOBAL) */}
      <button 
        onClick={onMenuClick}
        className={`absolute top-6 left-6 md:top-10 md:left-10 p-2 rounded-lg transition-all cursor-pointer backdrop-blur-md z-50 ${styles.menuButton}`}
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="relative z-10 p-6 md:p-10 pb-20">

        {/* ==========================================
            ABA 2: PREMIUM
            ========================================== */}
        {currentView === 'premium' && (
          <div className="max-w-3xl mx-auto pt-14 md:pt-0 pl-0 md:pl-16 min-h-[80vh] flex flex-col animate-in fade-in duration-200">
            <button 
              onClick={() => setCurrentView('settings')}
              className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} flex items-center gap-2 transition-colors w-fit mb-8 cursor-pointer`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar para Configurações</span>
            </button>

            <div className={`flex-1 flex flex-col items-center justify-center text-center p-8 backdrop-blur-md border rounded-3xl ${styles.card}`}>
              <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                <Crown className="w-12 h-12 text-amber-500" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${styles.title}`}>Assinatura Premium</h2>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-md leading-relaxed`}>
                Premium não liberado ainda, estamos em desenvolvimento. Em breve, você terá acesso a IA avançada e relatórios técnicos exclusivos de SST.
              </p>
            </div>
          </div>
        )}

        {/* ==========================================
            ABA 3: SITES E NORMAS (Flashcards)
            ========================================== */}
        {currentView === 'sites' && (
          <div className="max-w-6xl mx-auto pt-14 md:pt-0 pl-0 md:pl-16 animate-in fade-in duration-200">
            <button 
              onClick={() => setCurrentView('settings')}
              className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} flex items-center gap-2 transition-colors w-fit mb-8 cursor-pointer`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar para Configurações</span>
            </button>

            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-2 flex items-center gap-3 ${styles.title}`}>
                <Globe className="w-6 h-6 text-blue-500" />
                Base de Conhecimento e Sites Oficiais
              </h2>
              <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
                Acesse diretamente as plataformas governamentais, institucionais e de dados estatísticos utilizadas como base de pesquisa da SST Intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {siteCategories.map((category, idx) => (
                <div key={idx} className={`bg-gradient-to-b ${category.colorClass} backdrop-blur-md border ${category.borderColor} rounded-2xl p-6 md:p-8 flex flex-col h-full ${styles.card}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${isDark ? 'bg-black/30' : 'bg-zinc-100'} p-3 rounded-xl`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-base font-bold leading-tight ${styles.title}`}>{category.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    {category.links.map((link, linkIdx) => (
                      <a 
                        key={linkIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${isDark ? 'text-zinc-400 hover:text-white hover:bg-white/5' : 'text-zinc-600 hover:text-zinc-900 hover:bg-black/5'} text-sm p-3 rounded-lg transition-all flex items-center justify-between group`}
                      >
                        <span className="pr-4 leading-snug flex-1">{link.name}</span>
                        <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            ABA 1: CONFIGURAÇÕES PRINCIPAIS
            ========================================== */}
        {currentView === 'settings' && (
          <div className="max-w-5xl mx-auto pt-14 md:pt-0 pl-0 md:pl-16 animate-in fade-in duration-200">
            <div className="flex items-center gap-4 mb-10">
              <div className={`p-3 border rounded-xl hidden sm:flex backdrop-blur-sm ${isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50/50 border-emerald-200'}`}>
                <Settings className="w-6 h-6 text-emerald-500" />
              </div>
              <h1 className={`text-2xl font-medium tracking-wide ${styles.title}`}>Configurações e Suporte</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* COLUNA 1: PERFIL */}
              <div className={`backdrop-blur-md border rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 ${styles.card}`}>
                <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/10 pb-4">
                  {/* FIX CORRIGIDO: Removido o 'vices-w-5 h-5' que estava solto fora da string */}
                  <User className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                  <h2 className={`text-lg font-medium ${styles.title}`}>Perfil e Preferências</h2>
                </div>

                {/* Input Nome */}
                <div className="space-y-2 relative">
                  <label className={`text-[10px] font-bold uppercase tracking-wider ${styles.textMuted}`}>Nome de Tratamento</label>
                  <div className="relative">
                    <input 
                      type="text"
                      value={treatmentName}
                      onChange={(e) => setTreatmentName(e.target.value)}
                      onBlur={handleSaveName}
                      placeholder="Ex: Kauã, KS"
                      className={`w-full rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 ${styles.input}`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      {isSaving && <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />}
                      {showSavedState && <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-in fade-in zoom-in duration-300" />}
                    </div>
                  </div>
                  <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>A Inteligência Artificial iniciará as respostas usando este nome.</p>
                </div>

                {/* Input Email */}
                <div className="space-y-2">
                  <label className={`text-[10px] font-bold uppercase tracking-wider ${styles.textMuted}`}>E-mail (Autenticado)</label>
                  <div className="relative">
                    <Mail className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} />
                    <input 
                      type="email"
                      value={mockEmail}
                      disabled
                      className={`w-full rounded-xl pl-11 pr-10 py-3 text-sm cursor-not-allowed ${isDark ? 'bg-black/20 border-white/5 text-zinc-500' : 'bg-zinc-100/70 border-zinc-200 text-zinc-400'}`}
                    />
                    <Lock className={`w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-zinc-700' : 'text-zinc-400'}`} />
                  </div>
                </div>

                {/* Alternador de Tema */}
                <div className="space-y-3 pt-2">
                  <label className={`text-[10px] font-bold uppercase tracking-wider ${styles.textMuted}`}>Preferência de Tema</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleThemeChange('dark')}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all cursor-pointer ${isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-zinc-50 border-zinc-200 text-zinc-400 hover:text-zinc-600'}`}
                    >
                      <Moon className="w-4 h-4" />
                      <span className="text-sm font-medium">Tema Escuro</span>
                    </button>
                    <button 
                      onClick={() => handleThemeChange('light')}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all cursor-pointer ${!isDark ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-lg shadow-emerald-600/20' : 'bg-black/40 border-white/5 text-zinc-500 hover:text-zinc-300'}`}
                    >
                      <Sun className="w-4 h-4" />
                      <span className="text-sm font-medium">Tema Claro</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* COLUNA 2: AÇÕES */}
              <div className={`backdrop-blur-md border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${styles.card}`}>
                <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/10 pb-4 mb-2">
                  {/* FIX CORRIGIDO: Removido o outro 'vices-w-5 h-5' de fora das aspas */}
                  <ExternalLink className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                  <h2 className={`text-lg font-medium ${styles.title}`}>Ações e Integrações</h2>
                </div>

                <button 
                  onClick={() => setCurrentView('premium')}
                  className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${styles.button}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                      <Crown className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="text-left">
                      <h3 className={`text-sm font-medium group-hover:text-amber-500 transition-colors ${styles.title}`}>Assinatura Premium</h3>
                      <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Acesse recursos exclusivos e IA avançada</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-all`} />
                </button>

                <button 
                  onClick={() => setCurrentView('sites')}
                  className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${styles.button}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Globe className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <h3 className={`text-sm font-medium group-hover:text-blue-500 transition-colors ${styles.title}`}>Acessar Sites</h3>
                      <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Gerencie conexões de sites e normas técnicas</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-all`} />
                </button>

                <button 
                 onClick={() => {
            const assunto = "Feedback e Sugestões 🚀 - SST Intelligence";
            const corpoEmail = "Olá, equipe SST Intelligence!\n\nEstou usando a plataforma e decidi compartilhar minha experiência com vocês para ajudar na evolução da nossa IA de Segurança do Trabalho.\n\n💡 O QUE EU MAIS GOSTEI:\n[Escreva aqui o que achou legal na plataforma]\n\n🛠️ O QUE PODE MELHORAR (Ajustes ou dificuldades):\n[Relate aqui se sentiu falta de algo ou se algo pode ser mais fácil de usar]\n\n🚀 SUGESTÃO DE NOVA FUNCIONALIDADE:\n[Tem alguma ideia bacana? Conta pra gente!]\n\nAbraços!";
            const linkGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=sst.intelligence.petrovida@gmail.com&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
    
                window.open(linkGmail, "_blank");
                  }}
                    className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${styles.button}`}
                    >
                  <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
               <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className={`text-sm font-medium group-hover:text-purple-500 transition-colors ${styles.title}`}>Enviar Feedback</h3>
               <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Conte-nos sua experiência com o sistema</p>
                 </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-all`} />
                </button>
              </div>
            </div>

            {/* PAINEL INFERIOR: SUPORTE */}
            <div className="mt-6">
              <div className={`backdrop-blur-md border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden transition-all duration-300 ${styles.card}`}>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-5 z-10">
                  <div className={`p-4 border rounded-2xl ${isDark ? 'bg-black/40 border-white/10' : 'bg-zinc-50 border-zinc-200'}`}>
                    <Headphones className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className={`text-lg font-medium mb-1 ${styles.title}`}>Precisa de ajuda?</h2>
                    <p className={`text-xs max-w-md leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Relate um problema de usabilidade, um bug técnico ou dúvidas sobre alguma funcionalidade. Responderemos o mais breve possível; analisaremos e nossa equipe irá trabalhar caso sua solicitação seja válida.
                    </p>
                  </div>
                </div>

              <button 
              onClick={() => {
            const assunto = "Suporte / Relato Técnico ⚠️ - SST Intelligence";
            const corpoEmail = "Olá, equipe de engenharia do SST Intelligence!\n\nEstou entrando em contato para relatar uma situação ou tirar uma dúvida técnica específica.\n\n📌 TIPO DE OCORRÊNCIA (Marque um x):\n[ ] Bug / Erro no sistema\n[ ] Problema de Usabilidade / Interface\n[ ] Outro assunto\n\n🔍 DETALHES DO RELATO:\n[Escreva aqui detalhadamente o que aconteceu, o erro apresentado ou sua dúvida específica]\n\n📱 DISPOSITIVO OU NAVEGADOR (Opcional):\n[Ex: Computador Windows, Celular Android, Navegador Chrome, etc.]\n\nEstou deixando claro que este canal é exclusivo para relatos técnicos que necessitam de suporte direto.\n\nObrigado!";
            const linkGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=sst.intelligence.petrovida@gmail.com&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
    
                window.open(linkGmail, "_blank");
              }}
                className="z-10 w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(5,150,105,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                Entrar em contato
                <ChevronRight className="w-4 h-4" />
              </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}