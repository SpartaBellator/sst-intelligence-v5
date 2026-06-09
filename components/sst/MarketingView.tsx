"use client";

import { useState } from "react";
import { Menu, Megaphone, BookOpen, Clock, ArrowLeft, LayoutGrid, Sparkles, TrendingUp, Target, FileCheck, HelpCircle } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

interface MarketingViewProps {
  onMenuClick: () => void;
}

// ==========================================
// DADOS DOS FLASHCARDS (ESTRUTURA DEFINITIVA)
// ==========================================
// Preparado para edição individual. Basta substituir os dados quando a curadoria for concluída.
const marketingFlashcardsData = [
  {
    id: "mkt-1",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-2",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-3",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-4",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-5",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-6",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-7",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-8",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-9",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-10",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-11",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-12",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-13",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-14",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  },
  {
    id: "mkt-15",
    title: "Em andamento",
    description: "Em observação. Aguardando pesquisa e curadoria técnica da equipe de Marketing.",
    icon: Clock,
    colorClass: "from-zinc-500/20 to-zinc-600/20 text-zinc-400",
    content: "# Em andamento\n\nEste módulo está atualmente em fase de pesquisa e curadoria.\n\n## Próximos Passos\nAssim que os dados forem consolidados pela equipe, este espaço será atualizado com as diretrizes avançadas de gestão."
  }
];

const marketingBooksData = [
  { 
    id: "livro-20",
    title: "Empresas Feitas para Vencer", 
    author: "Jim Collins", 
    img: "/images/Livro-20-Empresas Feitas.png",
    summary: "A obra analisa por que algumas empresas dão um salto de qualidade duradouro enquanto outras estagnam. O autor identifica conceitos como a Liderança Nível 5, colocar as pessoas certas nos lugares certos antes da estratégia e a disciplina rigorosa de encarar a realidade nua e crua.",
    studyTip: "Aplique o confronto da realidade crua e a disciplina operacional na investigação de quase-acidentes, eliminando justificativas superficiais para construir resiliência técnica."
  },
  { 
    id: "livro-21",
    title: "Antifrágil", 
    author: "Nassim Taleb", 
    img: "/images/Livro-21-Anti-frágil.jpg",
    summary: "Taleb introduz o conceito de coisas que se beneficiam do caos, da volatilidade, do estresse e do erro. O oposto do frágil não é o robusto (que apenas resiste), mas sim o antifrágil, que aprende com os choques inesperados e evolui a partir deles.",
    studyTip: "Estude o conceito para estruturar uma Gestão de Riscos baseada na Engenharia de Resiliência, transformando os pequenos desvios diários em aprendizado ativo para blindar o sistema de SST."
  },
  { 
    id: "livro-22",
    title: "Contágio: Por que as coisas pegam", 
    author: "Jonah Berger", 
    img: "/images/Livro-22-Contágio.jpg",
    summary: "O autor desvenda a ciência por trás do marketing de boca a boca e da viralização de ideias, produtos e comportamentos através de seis princípios psicológicos fundamentais: Moeda Social, Gatilhos, Emoção, Público, Valor Prático e Histórias (STEPPS).",
    studyTip: "Utilize os princípios de Gatilhos e Valor Prático para estruturar Diálogos Diários de Segurança (DDS) marcantes, garantindo que as regras de proteção sejam lembradas de forma orgânica no chão de fábrica."
  },
  { 
    id: "livro-23",
    title: "O Poder do Hábito", 
    author: "Charles Duhigg", 
    img: "/images/Livro-23-Poder do Hábito.jpg",
    summary: "Explica o funcionamento neurológico dos hábitos através do loop 'Deixa, Rotina e Recompensa'. O livro traz o caso histórico da gigante Alcoa, que utilizou a segurança do trabalho como um 'hábito mestre' para reestruturar toda a sua cadeia de eficiência e lucratividade global.",
    studyTip: "Este livro é de cabeceira obrigatória. Analise detalhadamente o caso Alcoa para provar à alta diretoria corporativa como a meta rigorosa de zero acidentes impulsiona a excelência operacional."
  },
  { 
    id: "livro-24",
    title: "Hábitos Atômicos", 
    author: "James Clear", 
    img: "/images/Livro-24-Hábitos Atômicos.jpg",
    summary: "Revela como pequenas melhorias incrementais diárias de 1% geram transformações massivas a longo prazo. O foco está em mudar o ambiente operacional e os sistemas de identidade individuais, tornando os bons hábitos inevitáveis e os maus impossíveis.",
    studyTip: "Projete o ambiente de trabalho e o acesso aos Equipamentos de Proteção Individual (EPIs) seguindo as leis do livro: tornando o comportamento seguro óbvio, atraente, fácil e satisfatório."
  },
  { 
    id: "livro-25",
    title: "Marketing 5.0", 
    author: "Philip Kotler", 
    img: "/images/Livro-25-Marketing 5.0.jpg",
    summary: "A bíblia do marketing moderno explica a aplicação de tecnologias avançadas (como Inteligência Artificial, Big Data e automação) para mimetizar o comportamento humano, personalizando a experiência e gerando valor real para a sociedade.",
    studyTip: "Utilize esta base teórica para fundamentar o SST Intelligence: posicione a inteligência artificial não como uma ferramenta fria de controle, mas como uma tecnologia humanizada voltada ao pilar Social do ESG."
  },
  { 
    id: "livro-26",
    title: "A Estratégia do Oceano Azul", 
    author: "W. Chan Kim", 
    img: "/images/Livro-26-Oceano Azul.jpg",
    summary: "Defende que a melhor forma de vencer a concorrência sangrenta (oceano vermelho) é criar novos espaços de mercado inexplorados (oceano azul), tornando a concorrência irrelevante através da inovação de valor — gerando alto impacto com menor custo.",
    studyTip: "Use esse framework para diferenciar o posicionamento de mercado da sua empresa de SST, saindo da guerra de preços de emissão de laudos básicos e oferecendo consultoria estratégica em business de proteção."
  },
  { 
    id: "livro-27",
    title: "As Armas da Persuasão", 
    author: "Robert Cialdini", 
    img: "/images/Livro-27-As armas da Persuasção.jpg",
    summary: "O autor detalha os seis princípios psicológicos que governam a influência e a tomada de decisão humana: Reciprocidade, Compromisso, Aprovação Social, Afeição, Autoridade e Escassez, revelando como ativar o gatilho do consentimento.",
    studyTip: "Aplique os gatilhos de Aprovação Social e Autoridade ao implementar novas políticas de SST, engajando influenciadores internos do chão de fábrica para acelerar a adoção de posturas seguras."
  },
  { 
    id: "livro-28",
    title: "Building a StoryBrand", 
    author: "Donald Miller", 
    img: "/images/Livro-28-Building a StoryBrand.jpg",
    summary: "Apresenta um método de comunicação baseado em storytelling focado no cliente. A tese central dita que o cliente deve ser posicionado sempre como o herói da jornada, enquanto a marca atua como o guia confiável que fornece um plano para evitar o fracasso.",
    studyTip: "Transforme o endomarketing da sua empresa: nos comunicados internos, posicione o operário como o herói que precisa voltar para sua família, e o técnico de SST como o guia que oferece o plano seguro."
  },
  { 
    id: "livro-29",
    title: "Comece pelo Porquê", 
    author: "Simon Sinek", 
    img: "/images/Livro-29-Comece pelo Porquê.jpg",
    summary: "Demonstra que líderes e marcas inspiradoras pensam, agem e se comunicam de dentro para fora do 'Círculo Dourado'. Compreender o 'Porquê' (o propósito fundamental) gera uma conexão leal e inspiradora muito mais forte do que focar no 'O quê' (o produto ou processo).",
    studyTip: "Mude a abordagem das Ordens de Serviço e integrações de segurança: explique detalhadamente o 'Porquê' humanitário daquela norma antes de impor as regras frias (o 'O quê')."
  },
  { 
    id: "livro-30",
    title: "Gestão de Alta Performance", 
    author: "Andrew Grove", 
    img: "/images/Livro-30-Gestão de Alta Performa.jpg",
    summary: "Escrito pelo lendário ex-CEO da Intel, foca nos princípios de alavancagem gerencial, otimização de processos de produção e avaliação de desempenho. O autor detalha como pequenas ações de controle na entrada de um sistema evitam crises catastróficas na saída.",
    studyTip: "Aplique o conceito de alavancagem gerencial nas auditorias preventivas, focando os recursos de fiscalização nos pontos críticos do processo produtivo que possuem maior potencial de dano."
  },
  { 
    id: "livro-31",
    title: "Capitalismo Consciente", 
    author: "John Mackey", 
    img: "/images/Livro-31-Capitalismo consciente.jpg",
    summary: "Defende que os negócios devem operar com base em propósitos maiores, integrando e gerando valor para todas as partes interessadas (stakeholders) — clientes, funcionários, fornecedores e investidores —, superando a visão clássica de foco exclusivo no lucro imediato.",
    studyTip: "Use os argumentos morais e econômicos deste livro para fundamentar teses corporativas de investimentos em ergonomia e saúde mental, alinhando o SESMT ao ecossistema de responsabilidade ESG."
  },
  { 
    id: "livro-32",
    title: "As 22 Leis do Marketing", 
    author: "Al Ries & Jack Trout", 
    img: "/images/Livro-32-As 22 leis do Marketing.jpg",
    summary: "Apresenta as leis imutáveis que governam o sucesso das marcas no mercado. Destaca a Lei da Liderança (é melhor ser o primeiro do que ser o melhor) e a Lei da Categoria (se você não puder ser o primeiro em uma categoria, crie uma nova onde você possa ser pioneiro).",
    studyTip: "Aplique a Lei da Categoria para o projeto de vocês: consolidem a solução como pioneira em Inteligência Artificial aplicada à acessibilidade da segurança no trabalho na Baixada Santista."
  },
  { 
    id: "livro-33",
    title: "Rápido e Devagar", 
    author: "Daniel Kahneman", 
    img: "/images/Livro-33-Rapido e Devagar.jpg",
    summary: "O autor (prêmio Nobel) explica os dois sistemas que moldam o pensamento humano: o Sistema 1 (rápido, intuitivo, automático e propenso a viesses) e o Sistema 2 (lento, lógico, deliberativo e exaustivo). Mostra como o cérebro busca atalhos mentais que geram falhas de julgamento.",
    studyTip: "Crucial para a Análise de Comportamento Seguro. Projete sinalizações, alertas visuais e bloqueios físicos prevendo que o trabalhador em rotina operará no Sistema 1 automático, ignorando perigos óbvios."
  },
  { 
    id: "livro-34",
    title: "O Gestor Eficaz", 
    author: "Peter Drucker", 
    img: "/images/Livro-34-O Gestor Eficaz.jpg",
    summary: "O pai da administração moderna consolida que a eficácia administrativa é um hábito que pode ser aprendido. Ele mapeia a gestão rigorosa do tempo, o foco na contribuição individual para a organização e a tomada de decisões de grande impacto de forma sistemática.",
    studyTip: "Direcione a atuação técnica do SESMT para fora da mera burocracia documental passiva, focando os esforços em indicadores de contribuição ativa para a redução da taxa de sinistralidade."
  },
  { 
    id: "livro-35",
    title: "A Quinta Disciplina", 
    author: "Peter Senge", 
    img: "/images/Livro-35-A Quinta Disciplina.jpg",
    summary: "Aborda a criação das organizações que aprendem, baseando-se no Pensamento Sistêmico. O autor prova que os problemas organizacionais não são isolados, mas fazem parte de um arranjo complexo de causas e efeitos circulares invisíveis à primeira vista.",
    studyTip: "Fundamental para acidentes do trabalho: elimine a cultura punitiva de culpar apenas o ato inseguro do trabalhador e investigue as falhas latentes da gerência e do modelo operacional."
  },
  { 
    id: "livro-36",
    title: "A Lógica do Consumo", 
    author: "Martin Lindstrom", 
    img: "/images/Livro-36-A Lógica do Consumo.jpg",
    summary: "Um estudo fascinante de neuromarketing que utilizou ressonância magnética funcional (fMRI) para rastrear o subconsciente humano diante de propagandas. Revela como o medo, o estresse e os neurônios-espelho afetam nossas decisões e percepções sem que percebamos conscientemente.",
    studyTip: "Estude como os mecanismos cerebrais de reação ao medo funcionam para projetar treinamentos de combate a incêndio e evacuação de emergência mais imersivos e biologicamente eficazes."
  },
  { 
    id: "livro-37",
    title: "Os 5 Desafios das Equipes", 
    author: "Patrick Lencioni", 
    img: "/images/Livro-37-Os 5 desafios das equipes.jpg",
    summary: "Utiliza uma fábula de negócios para ilustrar as cinco disfunções que destroem a eficiência de qualquer equipe: Falta de Confiança, Medo de Conflitos, Falta de Comprometimento, Evitar Responsabilidades e Falta de Foco nos Resultados Coletivos.",
    studyTip: "Construa uma forte base de confiança técnica na CIPA e nas brigadas, permitindo que os membros relatem desvios de diretores sem o medo psicológico de sofrer perseguições internas."
  },
  { 
    id: "livro-38",
    title: "A Organização Sem Medo", 
    author: "Amy Edmondson", 
    img: "/images/Livro-38-A organização sem medo.jpg",
    summary: "A maior pesquisa acadêmica sobre Segurança Psicológica no ambiente corporativo. Prova que o medo silencia as ideias dos colaboradores e encobre falhas críticas, resultando em catástrofes corporativas e acidentes industriais graves.",
    studyTip: "Este livro é o coração do pilar comportamental. Use-o para justificar a criação de ouvidorias e canais seguros onde o trabalhador possa relatar falhas de maquinários com tranquilidade."
  },
  { 
    id: "livro-39",
    title: "Pipeline de Liderança", 
    author: "Ram Charan", 
    img: "/images/Livro-39-Pipeline de Liderança.jpg",
    summary: "Apresenta o modelo definitivo de arquitetura de liderança, mapeando as transições de carreira e as mudanças necessárias em competências, gestão do tempo e valores profissionais à medida que um profissional sobe na hierarquia corporativa.",
    studyTip: "Use esta estrutura para desenhar matrizes de treinamento de SST personalizadas: o treinamento de segurança para um gerente sênior deve focar em responsabilidade civil e FAP, e não na operação de EPI."
  }
];

const marketingFrameworksData = [
  {
    id: "fw-swot",
    name: "SWOT Cruzada (Matriz TOWS)",
    title: "Análise de Cenários e Vantagem Competitiva",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>A Matriz SWOT tradicional apenas lista fatores. Na consultoria executiva, utilizamos a <strong className="text-zinc-900 dark:text-white font-semibold">Matriz TOWS (SWOT Cruzada)</strong> para formular estratégias de ataque e defesa no mercado de SST, alinhadas à ISO 31000 de Gestão de Riscos.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-emerald-500/5 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 rounded-xl">
            <h4 className="text-emerald-700 dark:text-emerald-400 font-bold mb-2">Estratégia Ofensiva (Forças + Oportunidades)</h4>
            <p className="text-zinc-600 dark:text-zinc-400">Utilizar a agilidade tecnológica (Força) do SST Intelligence para capturar a crescente demanda corporativa por relatórios ESG (Oportunidade). Transformar a IA em uma barreira de entrada intransponível para consultorias convencionais.</p>
          </div>
          <div className="p-4 bg-amber-500/5 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 rounded-xl">
            <h4 className="text-amber-700 dark:text-amber-400 font-bold mb-2">Estratégia de Defesa (Fraquezas + Ameaças)</h4>
            <p className="text-zinc-600 dark:text-zinc-400">Mitigar a resistência cultural de operários veteranos (Fraqueza) frente a mudanças bruscas nas Normas Regulamentadoras (Ameaça) através de campanhas de neuromarketing e gamificação preventiva.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "fw-gut",
    name: "Matriz GUT Analítica",
    title: "Escalonamento de Risco e Alocação de Capex",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>A Matriz GUT quantifica a subjetividade do risco. Ela traduz problemas operacionais em linguagem financeira para a diretoria, priorizando onde o orçamento (Capex/Opex) deve ser alocado primeiro através da equação de prioridade absoluta:</p>
        <div className="bg-zinc-100 dark:bg-white/5 p-4 rounded-xl text-center font-mono text-emerald-700 dark:text-emerald-400 text-lg border border-zinc-200 dark:border-white/10 font-bold">
          Prioridade = G × U × T
        </div>
        <ul className="space-y-3 mt-4">
          <li><strong className="text-zinc-900 dark:text-white font-semibold">Gravidade (G):</strong> Impacto sistêmico do problema (Escala 1 a 5). Ex: Risco de paralisação da fábrica por embargo (Nota 5).</li>
          <li><strong className="text-zinc-900 dark:text-white font-semibold">Urgência (U):</strong> O tempo disponível para agir antes do colapso. Ex: Auditoria do Ministério do Trabalho agendada para 48 horas (Nota 5).</li>
          <li><strong className="text-zinc-900 dark:text-white font-semibold">Tendência (T):</strong> Potencial de degradação. O problema piora se ignorado? Ex: Fadiga estrutural de um andaime (Nota 5).</li>
        </ul>
        <p className="italic text-zinc-500 dark:text-zinc-500 mt-2">Insight: Um problema com pontuação máxima (5 × 5 × 5 = 125) justifica investimento imediato sem necessidade de aprovação prolongada do conselho.</p>
      </div>
    )
  },
  {
    id: "fw-porter",
    name: "As 5 Forças de Porter",
    title: "Mapeamento do Ecossistema de SST",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>Framework microeconômico vital para o posicionamento da SST Intelligence. Ele mapeia como reter clientes através de 'Switching Costs' (Custos de Troca) elevados e tecnologia proprietária corporativa.</p>
        <ul className="space-y-3">
          <li><strong className="text-emerald-700 dark:text-emerald-500 font-semibold">1. Rivalidade entre Concorrentes:</strong> Alta saturação de clínicas "fábricas de laudos". Estratégia: Diferenciação via IA e dashboards preditivos.</li>
          <li><strong className="text-emerald-700 dark:text-emerald-500 font-semibold">2. Poder dos Clientes:</strong> Indústrias exigem compliance rígido. Estratégia: Oferecer integração sistêmica que torna o cliente dependente da facilidade da nossa plataforma.</li>
          <li><strong className="text-emerald-700 dark:text-emerald-500 font-semibold">3. Ameaça de Novos Entrantes:</strong> Startups genéricas de RH. Estratégia: Elevar a barreira de entrada com algoritmos hiper-especializados em NRs e medicina ocupacional.</li>
          <li><strong className="text-emerald-700 dark:text-emerald-500 font-semibold">4. Poder dos Fornecedores:</strong> Dependência de servidores e APIs. Estratégia: Arquitetura em nuvem distribuída para mitigar quedas de serviço.</li>
          <li><strong className="text-emerald-700 dark:text-emerald-500 font-semibold">5. Produtos Substitutos:</strong> Planilhas manuais avançadas. Estratégia: Provar o ROI da redução de tempo e eliminação de erro humano.</li>
        </ul>
      </div>
    )
  },
  {
    id: "fw-bradley",
    name: "Curva de Bradley (DuPont)",
    title: "Maturidade Cultural e Psicologia Comportamental",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>O padrão ouro global para medir a cultura de segurança. Prova a correlação matemática entre o engajamento comportamental e a queda das taxas de incidentes da organização.</p>
        <div className="space-y-4 mt-4">
          <div className="border-l-2 border-red-500 pl-4">
            <h4 className="text-red-600 dark:text-red-500 font-bold">1. Reativo (Instinto)</h4>
            <p className="text-zinc-600 dark:text-zinc-400">A segurança é vista como burocracia. Profissionais só agem após o acidente acontecer. Alta taxa de sinistralidade corporativa.</p>
          </div>
          <div className="border-l-2 border-amber-500 pl-4">
            <h4 className="text-amber-600 dark:text-amber-500 font-bold">2. Dependente (Supervisão)</h4>
            <p className="text-zinc-600 dark:text-zinc-400">O trabalhador usa EPI apenas por medo da punição ou porque a gerência está olhando. A cultura falha assim que a supervisão se afasta.</p>
          </div>
          <div className="border-l-2 border-emerald-500 pl-4">
            <h4 className="text-emerald-600 dark:text-emerald-400 font-bold">3. Independente (Convicção)</h4>
            <p className="text-zinc-600 dark:text-zinc-400">Internalização de hábitos atômicos. O trabalhador se protege pelo próprio valor à vida, compreendendo os riscos do ambiente de forma autônoma.</p>
          </div>
          <div className="border-l-2 border-emerald-700 pl-4">
            <h4 className="text-emerald-700 dark:text-emerald-600 font-bold">4. Interdependente (Excelência Organizacional)</h4>
            <p className="text-zinc-600 dark:text-zinc-400">O ápice da segurança psicológica. Equipes zelam umas pelas outras. O orgulho organizacional bloqueia atos inseguros coletivamente. Zero acidentes sustentável.</p>
          </div>
        </div>
      </div>
    )
  }
];

const marketingEndoPlansData = [
  {
    id: "endo-aida",
    name: "Método AIDA Comportamental",
    title: "Neuromarketing Aplicado à Conversão de Hábitos",
    content: (
      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p className="border-l-4 border-emerald-500 pl-4 py-1 italic bg-emerald-500/5">
          "O marketing de segurança não deve vender o medo do acidente, mas o desejo pela vida intacta." — Adaptação do Framework de Conversão.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">A</span> Atenção (Attention)
            </h4>
            <p>Quebra da 'Cegueira de Rotina' através de estímulos visuais disruptivos. Uso de cores contrastantes e sinalizações em locais inesperados para forçar o cérebro a sair do modo automático (Sistema 1 de Kahneman).</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">I</span> Interesse (Interest)
            </h4>
            <p>Demonstração técnica do 'Porquê'. Exposição científica das consequências biomecânicas da falta de proteção, despertando a curiosidade intelectual sobre a própria integridade física.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">D</span> Desejo (Desire)
            </h4>
            <p>Conexão emocional com o propósito. Ativação do StoryBrand: O colaborador é o herói que vence o perigo para retornar ao seu maior tesouro: sua família e seus sonhos pessoais.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">A</span> Ação (Action)
            </h4>
            <p>Redução drástica do atrito. O comportamento seguro deve ser a rota de menor esforço. Simplificação de formulários, checklists digitais via IA e acesso imediato aos EPIs.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "endo-gamificacao",
    name: "SIPAT 4.0 & Gamificação",
    title: "Engajamento Ativo e Retenção de Conhecimento",
    content: (
      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
          <h4 className="text-emerald-700 dark:text-emerald-400 font-bold mb-3 uppercase tracking-tighter">Roadmap de Implementação Gamificada</h4>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-white/10 shadow-sm flex items-center justify-center font-bold text-emerald-600">01</div>
              <div><strong>Hackathon de Segurança:</strong> Equipes de operários competem para identificar 'Gargalos de Risco' em seus próprios setores e propõem soluções de engenharia. A melhor ideia é implementada com bônus para a equipe.</div>
            </li>
            <li className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-white/10 shadow-sm flex items-center justify-center font-bold text-emerald-600">02</div>
              <div><strong>Leaderboards de Setor:</strong> Ranking visível de 'Dias sem Desvios' e 'Quase-Acidentes Reportados'. O foco muda da punição para o reconhecimento da proatividade preventiva.</div>
            </li>
            <li className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-white/10 shadow-sm flex items-center justify-center font-bold text-emerald-600">03</div>
              <div><strong>Simuladores Imersivos:</strong> Uso de Realidade Aumentada ou Quizzes Gamificados via SST Intelligence para testar protocolos de emergência de forma lúdica e competitiva.</div>
            </li>
          </ul>
        </div>
        <p className="text-xs italic text-zinc-500">Nota Acadêmica: A gamificação aumenta a retenção de protocolos técnicos em até 75% comparado a palestras passivas tradicionais.</p>
      </div>
    )
  },
  {
    id: "endo-nudges",
    name: "Teoria dos Nudges (Empurrãozinho)",
    title: "Arquitetura de Escolhas no Ambiente de Trabalho",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>Baseado na ciência de Richard Thaler (Prêmio Nobel), o <strong>Nudge em SST</strong> consiste em alterar o ambiente de forma que a decisão segura seja a mais intuitiva, sem proibir opções ou alterar incentivos econômicos.</p>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200 dark:border-white/10">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg text-emerald-700 dark:text-emerald-400">
               <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-bold text-zinc-900 dark:text-white">Design de Fluxo Intuitivo</h5>
              <p className="text-zinc-600 dark:text-zinc-400">Demarcações de piso que guiam visualmente o pedestre para rotas seguras de forma automática, usando o 'Efeito Manada' e o design de caminho.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200 dark:border-white/10">
            <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-700 dark:text-blue-400">
               <Target className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-bold text-zinc-900 dark:text-white">Padrão de Opção (Default)</h5>
              <p className="text-zinc-600 dark:text-zinc-400">Configurar sistemas e ferramentas para que o 'Modo de Segurança' seja o padrão inicial de fábrica, exigindo esforço consciente para ser desativado.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const marketingMetricsData = [
  {
    id: "kpi-fap",
    name: "Tributação: FAP & RAT",
    title: "Impacto Direto na Folha de Pagamento",
    content: (
      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>A gestão de SST impacta diretamente a carga tributária da empresa através do <strong>Fator Acidentário de Prevenção (FAP)</strong>, um multiplicador que varia de 0,5 a 2,0 aplicado sobre o <strong>Risco Ambiental do Trabalho (RAT)</strong>.</p>
        
        <div className="bg-zinc-100 dark:bg-white/5 p-5 rounded-2xl border border-zinc-200 dark:border-white/10 flex flex-col items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-bold mb-3">Fórmula de Tributação Previdenciária</span>
          <div className="text-zinc-900 dark:text-white text-base overflow-x-auto w-full text-center py-2 font-mono font-medium">
            Custo Tributário = Massa Salarial × (RAT × FAP)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-500/5 rounded-r-xl">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-1">Cenário Negativo (FAP 2,0)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">Uma empresa com alta sinistralidade dobra a sua alíquota do RAT. Em uma folha de pagamento milionária, isso representa um vazamento de capital que destrói a margem de lucro.</p>
          </div>
          <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-500/5 rounded-r-xl">
            <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Cenário Otimizado (FAP 0,5)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">Ao utilizar a inteligência preventiva da plataforma, a empresa reduz acidentes, cortando o imposto do RAT pela metade. O sistema se paga exclusivamente com essa economia fiscal.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "kpi-trir",
    name: "Indicadores Globais (TRIR / LTIR)",
    title: "Benchmarking Internacional de Sinistralidade",
    content: (
      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>Grandes players corporativos não avaliam a segurança por "número absoluto de acidentes", pois empresas maiores tendem a ter mais incidentes devido ao volume operacional. O mercado utiliza taxas normalizadas globais da OSHA (EUA).</p>
        
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col items-center">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 w-full text-left">TRIR (Total Recordable Incident Rate)</h4>
            <p className="text-xs mb-4 w-full text-left">Mede a taxa total de incidentes registráveis a cada 100 trabalhadores em tempo integral por ano.</p>
            
            {/* Fórmula TRIR em Flexbox (Sem erros de JSX) */}
            <div className="bg-white dark:bg-black/50 p-4 rounded-lg flex flex-col items-center justify-center font-mono text-sm border border-zinc-200 dark:border-white/10 overflow-x-auto w-full">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">TRIR = </span>
                <div className="flex flex-col items-center">
                  <span className="border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-1 px-2 text-center">Total de Incidentes Registráveis × 200.000</span>
                  <span className="px-2 text-center">Total de Horas Trabalhadas</span>
                </div>
              </div>
            </div>

          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 flex flex-col items-center">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 w-full text-left">LTIR (Lost Time Incident Rate)</h4>
            <p className="text-xs mb-4 w-full text-left">Mede apenas a gravidade dos incidentes que resultaram em afastamento (perda de dias de trabalho).</p>
            
            {/* Fórmula LTIR em Flexbox (Sem erros de JSX) */}
            <div className="bg-white dark:bg-black/50 p-4 rounded-lg flex flex-col items-center justify-center font-mono text-sm border border-zinc-200 dark:border-white/10 overflow-x-auto w-full">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">LTIR = </span>
                <div className="flex flex-col items-center">
                  <span className="border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-1 px-2 text-center">Incidentes com Afastamento × 200.000</span>
                  <span className="px-2 text-center">Total de Horas Trabalhadas</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  },
  {
    id: "kpi-roi",
    name: "ROI & Teoria do Iceberg",
    title: "Os Custos Ocultos dos Acidentes (Capex vs Opex)",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>O <strong>Retorno sobre Investimento (ROI)</strong> em SST é justificado pela Teoria do Iceberg de Heinrich. A diretoria costuma enxergar apenas a ponta do iceberg, ignorando a massa financeira submersa.</p>
        
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1 p-4 bg-zinc-100 dark:bg-white/5 rounded-2xl border-t-4 border-t-blue-500 border border-zinc-200 dark:border-white/10">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Ponta do Iceberg (Custos Diretos)</h4>
            <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
              <li>Despesas médicas imediatas.</li>
              <li>Indenizações trabalhistas básicas.</li>
              <li>Acréscimos no seguro.</li>
            </ul>
            <div className="mt-3 text-[10px] uppercase font-bold text-zinc-500">Proporção: 1x</div>
          </div>
          
          <div className="flex-1 p-4 bg-zinc-100 dark:bg-white/5 rounded-2xl border-t-4 border-t-zinc-800 dark:border-t-zinc-500 border border-zinc-200 dark:border-white/10">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Submerso (Custos Indiretos)</h4>
            <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
              <li>Paralisação da linha de produção.</li>
              <li>Danos à imagem da marca corporativa.</li>
              <li>Treinamento de funcionários substitutos.</li>
              <li>Equipamentos e materiais destruídos.</li>
            </ul>
            <div className="mt-3 text-[10px] uppercase font-bold text-zinc-500">Proporção: 4x a 10x</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "kpi-turnover",
    name: "Turnover & Employer Branding",
    title: "Retenção de Talentos Através da Segurança",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>A taxa de rotatividade (Turnover) e o Absenteísmo (faltas e atrasos) são métricas de Recursos Humanos fortemente influenciadas pelo clima de segurança psicológica e integridade física da corporação.</p>
        
        <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
          <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
            A Marca Empregadora (Employer Branding)
          </h4>
          <p className="text-zinc-700 dark:text-zinc-300 text-xs mb-3">
            O custo de substituir um colaborador técnico pode chegar a <strong>200% do seu salário anual</strong>. Ambientes com altos índices de riscos e acidentes geram:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            <li>Dificuldade de atrair mão de obra qualificada no mercado competitivo.</li>
            <li>Aumento da Síndrome de Burnout devido à vigilância e tensão constantes.</li>
            <li>Passivos trabalhistas que bloqueiam a participação da empresa em licitações públicas.</li>
          </ul>
        </div>
      </div>
    )
  }
];

const marketingCasesData = [
  {
    id: "case-alcoa",
    name: "Caso Alcoa: O Hábito Mestre",
    title: "A Transformação de um Gigante pela Segurança",
    content: (
      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>Em 1987, Paul O'Neill assumiu a Alcoa e declarou que seu único foco seria <strong>Zero Acidentes</strong>. Investidores venderam as ações em pânico, mas o resultado foi uma das maiores valorizações da história industrial.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
            <span className="text-[10px] uppercase text-zinc-500 block mb-1">Lucro Líquido</span>
            <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">5x Maior</span>
          </div>
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
            <span className="text-[10px] uppercase text-zinc-500 block mb-1">Valor de Mercado</span>
            <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">+$27 Bilhões</span>
          </div>
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
            <span className="text-[10px] uppercase text-zinc-500 block mb-1">Taxa de Acidentes</span>
            <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">1/20 da Média</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">🎯 A Lógica Executiva</h4>
          <p>O'Neill entendeu que para zerar acidentes, ele precisava de <strong>processos perfeitos</strong>. Se uma máquina falha, ela é um risco; se é um risco, ela é ineficiente. Ao focar na segurança, ele forçou a empresa a atingir a excelência operacional absoluta.</p>
        </div>
      </div>
    )
  },
  {
    id: "case-dupont",
    name: "Caso DuPont: Cultura Global",
    title: "A Ciência da Gestão por Comportamento",
    content: (
      <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>A DuPont é a criadora da <strong>Curva de Bradley</strong> e referência mundial em segurança. Eles tratam a SST como um valor inegociável que dita a qualidade de todos os produtos químicos e materiais da marca.</p>
        
        <div className="bg-zinc-100 dark:bg-white/5 p-5 rounded-2xl border border-zinc-200 dark:border-white/10">
          <h4 className="font-bold text-zinc-900 dark:text-white mb-3">Benchmarking de Performance</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span><strong>Integração Total:</strong> Toda reunião na DuPont, de operários a diretores, começa obrigatoriamente com um "Safety Minute" (Minuto da Segurança).</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span><strong>Responsabilidade em Cadeia:</strong> A empresa rastreia taxas de acidentes inclusive de subcontratados e ferimentos fora do horário de trabalho.</span>
            </li>
          </ul>
        </div>
        <p className="italic text-zinc-500 text-xs">Resultado: A DuPont mantém taxas de incidentes consistentemente 10x menores que a média da indústria química global.</p>
      </div>
    )
  },
  {
    id: "case-toyota",
    name: "Caso Toyota: Jidoka",
    title: "Automação com Toque Humano e Respeito",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>No Sistema Toyota de Produção (TPS), a segurança e a qualidade são indissociáveis através do pilar <strong>Jidoka</strong>.</p>
        
        <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-500/5 rounded-r-xl">
          <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">O Andon Cord (Corda de Parada)</h4>
          <p>Qualquer trabalhador tem autoridade total para parar a linha de produção inteira se detectar um risco ou defeito. Isso empodera a base e evita que o erro (ou risco) se propague.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-bold text-zinc-900 dark:text-white mb-2">Filosofia Lean SST</h5>
            <p className="text-xs">O respeito pelas pessoas é o centro. Um ambiente perigoso é considerado "Muda" (desperdício) de capital humano e inteligência.</p>
          </div>
          <div>
            <h5 className="font-bold text-zinc-900 dark:text-white mb-2">Impacto no Marketing</h5>
            <p className="text-xs">A reputação de "indestrutível" dos veículos Toyota nasce da segurança rigorosa em cada micro-processo da fábrica.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "case-esg",
    name: "Mercado Global: Impacto ESG",
    title: "Performance Financeira e Saúde do Trabalhador",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>Estudos recentes com empresas listadas no S&P 500 demonstram uma correlação direta entre o investimento em bem-estar e a performance das ações.</p>
        
        <div className="p-5 rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-white/5 dark:to-white/10 border border-zinc-300 dark:border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-20 h-20" />
          </div>
          <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Relatório de Mercado (S&P 500 Benchmarking)</h4>
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-end border-b border-zinc-300 dark:border-white/10 pb-2">
              <span className="text-xs">Empresas com Alta Maturidade em Saúde</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">314% Retorno</span>
            </div>
            <div className="flex justify-between items-end border-b border-zinc-300 dark:border-white/10 pb-2">
              <span className="text-xs">Média do Mercado (S&P 500)</span>
              <span className="text-zinc-500 font-bold">105% Retorno</span>
            </div>
          </div>
          <p className="mt-4 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
            Conclusão: O mercado financeiro premia empresas seguras com menor custo de capital e maior resiliência em crises.
          </p>
        </div>
      </div>
    )
  }
];

const marketingAuditData = [
  {
    id: "audit-p",
    name: "P - Planejamento & Diagnóstico",
    title: "Análise de Gaps (Gap Analysis) e Escopo Regulatório",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>A fase de Planejamento estabelece os requisitos fundamentais antes da execução das auditorias em campo. O foco é identificar o distanciamento entre o cenário atual da empresa e a conformidade ideal das NRs.</p>
        
        <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
          <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
            Checklist de Maturidade Inicial
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <input type="checkbox" readOnly checked className="accent-emerald-600 shrink-0" />
              <span><strong>Mapeamento Legal:</strong> Levantamento de todas as NRs aplicáveis ao CNAE da organização.</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" readOnly checked className="accent-emerald-600 shrink-0" />
              <span><strong>Inventário de Riscos (GRO):</strong> Arquitetura de identificação de perigos físicos, químicos e ergonômicos.</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" readOnly checked className="accent-emerald-600 shrink-0" />
              <span><strong>Cronograma de Treinamentos:</strong> Planejamento anual focado nas NRs obrigatórias (Ex: NR-35, NR-10).</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "audit-d",
    name: "D - Execução & Inspeção",
    title: "Inspeções de Campo e Monitoramento de Desvios",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm">
        <p>A fase de Execução consiste na aplicação das auditorias ativas no chão de fábrica, coletando evidências fotográficas e documentais de atos e condições inseguras.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5">
            <h5 className="font-bold text-zinc-900 dark:text-white mb-2 text-xs uppercase">1. Inspeção de Proteção Coletiva (EPC)</h5>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">Verificação física de guardas de proteção de maquinários (NR-12), sinalização de saídas de emergência (NR-23) e sistemas de exaustão industrial.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5">
            <h5 className="font-bold text-zinc-900 dark:text-white mb-2 text-xs uppercase">2. Auditoria Comportamental de EPIs</h5>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">Rastreamento de amostragem em tempo real sobre o uso correto, higienização, prazos de validade e registros de entrega de Certificados de Aprovação (CA).</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "audit-c",
    name: "C - Verificação & Controle",
    title: "Análise de Indicadores e Relatório de Conformidade",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>A fase de Checagem cruza os relatórios gerados pelas inspeções com as metas corporativas de sinistralidade. É onde o SST Intelligence tabula o <strong>Índice de Conformidade Legal (ICL)</strong>.</p>
        
        <div className="border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-black/20">
          <div className="grid grid-cols-3 bg-zinc-100 dark:bg-white/5 p-3 text-xs font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-white/10">
            <span>Módulo de Controle</span>
            <span className="text-center">Status Média</span>
            <span className="text-right">Ação Requerida</span>
          </div>
          <div className="grid grid-cols-3 p-3 text-xs border-b border-zinc-100 dark:border-white/5 text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Laudos e Programas (PGR/PCMSO)</span>
            <span className="text-center text-emerald-600 dark:text-emerald-400 font-bold">94% (Conforme)</span>
            <span className="text-right italic">Revisão Periódica</span>
          </div>
          <div className="grid grid-cols-3 p-3 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Maquinários e Ergonomia (NR-12/17)</span>
            <span className="text-center text-amber-600 dark:text-amber-500 font-bold">62% (Crítico)</span>
            <span className="text-right text-amber-700 dark:text-amber-400 font-medium">Auditoria de Engenharia</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "audit-a",
    name: "A - Ação Corretiva (5W2H)",
    title: "Tratamento de Não-Conformidades e Melhoria Contínua",
    content: (
      <div className="space-y-5 text-zinc-700 dark:text-zinc-300 font-light text-sm leading-relaxed">
        <p>A fase de Ação Corretiva encerra o ciclo PDCA. Diante de qualquer desvio ou risco crítico detectado nas fases anteriores, monta-se um plano de contra-ataque imediato utilizando o framework administrativo <strong>5W2H</strong>.</p>
        
        <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl">
          <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 text-xs uppercase tracking-wider">Diretriz de Disparo do Plano 5W2H</h4>
          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            <li>• <strong className="text-zinc-800 dark:text-zinc-200">What (O que):</strong> Descrição exata da correção da não-conformidade técnica.</li>
            <li>• <strong className="text-zinc-800 dark:text-zinc-200">Why (Por que):</strong> O risco biológico ou legal que justifica a intervenção.</li>
            <li>• <strong className="text-zinc-800 dark:text-zinc-200">Who (Quem):</strong> Engenheiro ou Técnico responsável pela execução civil.</li>
            <li>• <strong className="text-zinc-800 dark:text-zinc-200">When (Quando):</strong> Prazo limite rigoroso (atrelado à Matriz GUT).</li>
            <li>• <strong className="text-zinc-800 dark:text-zinc-200">Where (Onde):</strong> O posto de trabalho ou setor industrial afetado.</li>
          </ul>
        </div>
      </div>
    )
  }
];

const marketingGlossaryData = [
  {
    term: "ROI (Return on Investment)",
    category: "Finanças Corporativas",
    definition: "Métrica financeira que calcula o retorno econômico obtido em relação ao capital investido em um projeto ou ferramenta.",
    sstApplication: "Mapeia a economia gerada pela redução de acidentes, multas e absenteísmo contra o custo de implantação da plataforma SST Intelligence."
  },
  {
    term: "Capex (Capital Expenditure)",
    category: "Finanças Corporativas",
    definition: "Montante de capital investido na aquisição de bens materiais, ativos fixos ou melhorias estruturais de longo prazo da empresa.",
    sstApplication: "Orçamento destinado à compra de maquinários com proteção NR-12 de fábrica ou reformas físicas de grande porte em sistemas de exaustão industrial."
  },
  {
    term: "Opex (Operational Expenditure)",
    category: "Finanças Corporativas",
    definition: "Despesas operacionais cotidianas necessárias para manter a infraestrutura, os processos e a empresa rodando dia após dia.",
    sstApplication: "Verba mensal utilizada para a reposição de EPIs de desgaste rápido, manutenções corretivas rotineiras ou contratação de licenças de software de monitoramento."
  },
  {
    term: "ESG (Environmental, Social, Governance)",
    category: "Estratégia e Governança",
    definition: "Conjunto de critérios e padrões mundiais utilizados por investidores para avaliar a sustentabilidade e a responsabilidade social de uma corporação.",
    sstApplication: "A saúde física e psicológica do trabalhador é o pilar central do 'S' (Social) do ESG, ditando a atratividade da marca para fundos de investimento internacionais."
  },
  {
    term: "Compliance",
    category: "Estratégia e Governança",
    definition: "O estado de estar em conformidade absoluta com leis, normas regulamentares, políticas internas e diretrizes governamentais.",
    sstApplication: "Garantir que a empresa cumpra 100% das obrigatoriedades das NRs do Ministério do Trabalho, blindando a diretoria contra processos e passivos civis."
  },
  {
    term: "Benchmarking",
    category: "Estratégia e Governança",
    definition: "Processo contínuo de pesquisa e comparação das práticas da empresa com os líderes de mercado para identificar lacunas e melhorar processos.",
    sstApplication: "Análise sistêmica das taxas de sinistralidade corporativa comparadas com a média global do setor (como os índices TRIR da DuPont ou OSHA)."
  },
  {
    term: "Turnover",
    category: "Recursos Humanos",
    definition: "Métrica que calcula o índice de rotatividade de funcionários de uma empresa (relação entre admissões e demissões em um período).",
    sstApplication: "Ambientes insalubres e inseguros elevam o turnover, gerando custos catastróficos com rescisões, recrutamento e perda de know-how técnico."
  },
  {
    term: "Absenteísmo",
    category: "Recursos Humanos",
    definition: "Indicador que mede o percentual de ausências, faltas, atrasos ou afastamentos dos colaboradores em relação à jornada planejada.",
    sstApplication: "Fortemente impactado por doenças ocupacionais e acidentes típicos ou de trajeto, sobrecarregando equipes e reduzindo o ritmo produtivo da fábrica."
  },
  {
    term: "Stakeholders",
    category: "Estratégia Corporativa",
    definition: "Todas as partes interessadas que afetam ou são afetadas pelas decisões da empresa (acionistas, funcionários, clientes, fornecedores e comunidade).",
    sstApplication: "Provar aos acionistas e aos operários de base que a segurança física estabiliza a operação e gera valor mútuo para toda a cadeia de stakeholders."
  }
];

// ==========================================
// DADOS DAS ABAS INFERIORES (RECURSOS AVANÇADOS)
// ==========================================
// A definição das abas depende do estado local da biblioteca de livros,
// por isso foi movida para dentro do componente.
export default function MarketingView({ onMenuClick }: MarketingViewProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Controle de navegação entre o Grid e a Leitura Profunda
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const activeCard = marketingFlashcardsData.find(card => card.id === selectedCardId);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const activeBook = marketingBooksData.find(b => b.id === selectedBookId);
  const [activeTabId, setActiveTabId] = useState<string>("tab-livros");
  const [activeFrameworkId, setActiveFrameworkId] = useState<string>("fw-swot");
  const activeFramework = marketingFrameworksData.find(fw => fw.id === activeFrameworkId);
  const [activeEndoPlanId, setActiveEndoPlanId] = useState<string>("endo-aida");
  const activeEndoPlan = marketingEndoPlansData.find(plan => plan.id === activeEndoPlanId);
  const [activeMetricId, setActiveMetricId] = useState<string>("kpi-fap");
  const activeMetric = marketingMetricsData.find(metric => metric.id === activeMetricId);
  const [activeCaseId, setActiveCaseId] = useState<string>("case-alcoa");
  const activeCase = marketingCasesData.find(c => c.id === activeCaseId);
  const [activeAuditId, setActiveAuditId] = useState<string>("audit-p");
  const activeAudit = marketingAuditData.find(audit => audit.id === activeAuditId);

  const marketingTabsData = [
    {
      id: "tab-livros",
      shortTitle: "Livros Recomendados",
      icon: BookOpen,
      category: "Biblioteca Corporativa",
      title: "Acervo de Liderança e Estratégia",
      body: (
        <div className="animate-in fade-in duration-500">
          {!selectedBookId ? (
            /* GRID DE LIVROS */
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingBooksData.map((book) => (
                <button
                  key={book.id}
                  onClick={() => setSelectedBookId(book.id)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="relative w-full aspect-[2/3] mb-3 overflow-hidden rounded-lg shadow-lg border border-white/5 group-hover:scale-105 transition-transform duration-300">
                   <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-[10px] font-bold leading-tight line-clamp-2">{book.title}</h4>
                  <p className="text-[9px] text-zinc-500 mt-1">{book.author}</p>
                </button>
              ))}
            </div>
          ) : (
            /* PÁGINA DO LIVRO (ESTILO WIKIPÉDIA) */
            <div className="animate-in slide-in-from-right-4 duration-300">
              <button
                onClick={() => setSelectedBookId(null)}
                className="flex items-center gap-2 text-[10px] text-emerald-500 mb-6 hover:underline cursor-pointer"
              >
                <ArrowLeft className="h-3 w-3" /> Voltar para a Galeria
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-48 shrink-0">
                  <img src={activeBook?.img} alt={activeBook?.title} className="w-full rounded-xl shadow-2xl border border-white/10" />
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{activeBook?.title}</h3>
                    <p className="text-sm text-emerald-500">{activeBook?.author}</p>
                  </div>

                  <div className="space-y-4">
                    <section>
                      <h5 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Resumo Executivo</h5>
                      <p className="text-sm font-light leading-relaxed text-zinc-300">
                        {activeBook?.summary}
                      </p>
                    </section>

                    <section className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <h5 className="text-[10px] uppercase tracking-widest text-emerald-500 mb-2 font-bold">Insight para o Gestor de SST</h5>
                      <p className="text-sm font-light leading-relaxed italic">
                        {activeBook?.studyTip}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    },
    {
    id: "tab-matrizes",
    shortTitle: "Matrizes & Frameworks",
    icon: LayoutGrid,
    category: "Ferramentas Visuais",
    title: "Modelos de Tomada de Decisão",
    body: (
      <div className="animate-in fade-in duration-500 h-full flex flex-col">
        
        {/* Menu Superior de Pílulas (Pills) */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-white/5">
          {marketingFrameworksData.map((fw) => (
            <button
              key={fw.id}
              onClick={() => setActiveFrameworkId(fw.id)}
              className={`px-4 py-2 rounded-full text-[11px] font-medium transition-all duration-300 cursor-pointer ${
                activeFrameworkId === fw.id 
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200 border border-white/5"
              }`}
            >
              {fw.name}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo Renderizado (Rolável se ficar muito grande) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">{activeFramework?.name}</h3>
            <p className="text-xs text-emerald-500 font-mono tracking-widest uppercase">{activeFramework?.title}</p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            {activeFramework?.content}
          </div>
        </div>

      </div>
    )
  },
    {
    id: "tab-endomarketing",
    shortTitle: "Planos de Endomarketing",
    icon: Sparkles,
    category: "Engajamento Interno",
    title: "Playbook de Ativação Comportamental",
    body: (
      <div className="animate-in fade-in duration-500 h-full flex flex-col">
        
        {/* Menu de Sub-Navegação de Endomarketing */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-zinc-200 dark:border-white/5">
          {marketingEndoPlansData.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveEndoPlanId(plan.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeEndoPlanId === plan.id 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" 
                  : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5"
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo Playbook */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors">{activeEndoPlan?.name}</h3>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-mono tracking-[0.2em] uppercase font-bold">{activeEndoPlan?.title}</p>
          </div>
          
          <div className="relative">
             {activeEndoPlan?.content}
          </div>
        </div>

      </div>
    )
  },
    {
    id: "tab-metricas",
    shortTitle: "Métricas & KPIs Executivos",
    icon: TrendingUp,
    category: "Gestão Financeira",
    title: "Indicadores de Desempenho em SST",
    body: (
      <div className="animate-in fade-in duration-500 h-full flex flex-col">
        
        {/* Menu de Sub-Navegação de KPIs */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-zinc-200 dark:border-white/5">
          {marketingMetricsData.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setActiveMetricId(metric.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeMetricId === metric.id 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" 
                  : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5"
              }`}
            >
              {metric.name}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo dos KPIs */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors">{activeMetric?.name}</h3>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-mono tracking-[0.2em] uppercase font-bold">{activeMetric?.title}</p>
          </div>
          
          <div className="relative">
             {activeMetric?.content}
          </div>
        </div>

      </div>
    )
  },
    {
    id: "tab-cases",
    shortTitle: "Estudos de Caso",
    icon: Target,
    category: "Benchmarking Global",
    title: "Estratégias de Grandes Players",
    body: (
      <div className="animate-in fade-in duration-500 h-full flex flex-col">
        
        {/* Menu de Sub-Navegação de Cases */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-zinc-200 dark:border-white/5">
          {marketingCasesData.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCaseId === c.id 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" 
                  : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo dos Cases */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{activeCase?.name}</h3>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-mono tracking-[0.2em] uppercase font-bold">{activeCase?.title}</p>
          </div>
          
          <div className="relative">
             {activeCase?.content}
          </div>
        </div>

      </div>
    )
  },
    {
    id: "tab-auditoria",
    shortTitle: "Checklists & Auditoria",
    icon: FileCheck,
    category: "Melhoria Contínua",
    title: "Ferramentas de Avaliação (PDCA)",
    body: (
      <div className="animate-in fade-in duration-500 h-full flex flex-col">
        
        {/* Menu de Sub-Navegação de Auditoria (PDCA Pills) */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-zinc-200 dark:border-white/5">
          {marketingAuditData.map((audit) => (
            <button
              key={audit.id}
              onClick={() => setActiveAuditId(audit.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeAuditId === audit.id 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" 
                  : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5"
              }`}
            >
              {audit.name}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo do PDCA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors">{activeAudit?.name}</h3>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-mono tracking-[0.2em] uppercase font-bold">{activeAudit?.title}</p>
          </div>
          
          <div className="relative">
             {activeAudit?.content}
          </div>
        </div>

      </div>
    )
  },
    {
    id: "tab-glossario",
    shortTitle: "Glossário Executivo",
    icon: HelpCircle,
    category: "Dicionário Corporativo",
    title: "Termos de Finanças e Marketing",
    body: (
      <div className="animate-in fade-in duration-500 h-full flex flex-col">
        {/* Área de rolagem dos termos do Glossário */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 max-h-[420px]">
          <div className="grid grid-cols-1 gap-4">
            {marketingGlossaryData.map((item, index) => (
              <div 
                key={index} 
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-3 transition-all duration-300 hover:border-zinc-300 dark:hover:border-white/20"
              >
                {/* Cabeçalho do Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{item.term}</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/10 w-fit">
                    {item.category}
                  </span>
                </div>
                
                {/* Corpo do Conteúdo */}
                <div className="space-y-2 text-xs font-light leading-relaxed">
                  <p className="text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-800 dark:text-zinc-300 font-medium">Conceito:</strong> {item.definition}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 border-t border-zinc-200/50 dark:border-white/5 pt-2 italic">
                    <strong className="text-emerald-700 dark:text-emerald-400 font-semibold not-italic">Aplicação em SST:</strong> {item.sstApplication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  ];

  const activeTabContent = marketingTabsData.find(tab => tab.id === activeTabId);

  // ==========================================
  // MAPEAMENTO DE CORES (Tema Claro e Escuro)
  // ==========================================
  const styles = {
    mainText: isDark ? 'text-white' : 'text-zinc-900',
    overlay: isDark ? 'bg-black/75' : 'bg-[#f4f4f5]/60',
    headerBg: isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200/80',
    headerTitle: isDark ? 'text-zinc-400' : 'text-zinc-500 font-semibold',
    menuBtnHover: isDark ? 'hover:bg-white/10' : 'hover:bg-zinc-100',
    btnBack: isDark 
      ? 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10' 
      : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-200 shadow-sm',
    iconWrapper: isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200 shadow-sm',
    mainDesc: isDark ? 'text-zinc-400' : 'text-zinc-600',
    
    // Grid de Flashcards
    cardBg: isDark 
      ? 'bg-[#0f0f13]/90 hover:bg-[#15151a]/95 border border-transparent' 
      : 'bg-white/95 hover:bg-zinc-50 border border-zinc-200/80 shadow-md shadow-zinc-200/30',
    cardIconBg: isDark 
      ? 'bg-white/5 border-white/5 group-hover:bg-white/10' 
      : 'bg-zinc-50 border-zinc-200 group-hover:bg-white',
    cardTitleText: isDark ? 'text-zinc-100 group-hover:text-white' : 'text-zinc-800 group-hover:text-zinc-900',
    cardDescText: isDark ? 'text-zinc-400' : 'text-zinc-500',

    // Visão de Leitura (Wikipédia)
    wikiContainer: isDark 
      ? 'bg-zinc-900/50 border-white/5 text-zinc-300' 
      : 'bg-white border-zinc-200 text-zinc-700 shadow-xl shadow-zinc-200/40',
    wikiBorder: isDark ? 'border-white/5' : 'border-zinc-100',
    wikiIconBg: isDark ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-200',
    wikiTitle: isDark ? 'text-white' : 'text-zinc-900',
    wikiSub: isDark ? 'text-emerald-400' : 'text-emerald-600',
    wikiText: isDark ? 'text-zinc-300' : 'text-zinc-600',

    // NOVO: Divisor Central
    dividerLine: isDark ? 'bg-white/5' : 'bg-zinc-200',
    dividerBadge: isDark 
      ? 'bg-[#0a0a0d] text-zinc-500 border-white/5' 
      : 'bg-white text-zinc-500 border-zinc-200 shadow-sm',
    
    // NOVO: Painel Split (Tabs Laterais vs Conteúdo)
    tabContainer: isDark 
      ? 'bg-zinc-900/30 border-white/5' 
      : 'bg-white border-zinc-200 shadow-md shadow-zinc-200/30',
    tabItemBase: 'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs transition-all',
    tabItemActive: isDark 
      ? 'bg-emerald-500/10 border border-emerald-500/20 text-white shadow-md shadow-emerald-950/20' 
      : 'bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm font-medium',
    tabItemInactive: isDark 
      ? 'border border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200' 
      : 'border border-transparent text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900',
    contentPanel: isDark 
      ? 'bg-zinc-900/40 border-white/5' 
      : 'bg-white border-zinc-200 shadow-md shadow-zinc-200/30',
  };

  return (
    <div className={`h-screen flex flex-col relative overflow-hidden transition-colors duration-300 ${styles.mainText}`}>
      
      {/* 1. Wallpaper de Fundo Dinâmico */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: isDark 
              ? "url('/images/background.jpg')" 
              : "url('/images/Background-white.jpg')"
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-[8px] transition-colors duration-500 ${styles.overlay}`} />
      </div>

      {/* 2. Luzes de fundo sutis (Aurora) */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0">
        <div className={`absolute w-[600px] h-[600px] rounded-full blur-[140px] -top-40 -left-40 animate-pulse duration-[10000ms] ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-400/15'}`} />
        <div className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] bottom-10 right-10 animate-pulse duration-[7000ms] ${isDark ? 'bg-amber-500/10' : 'bg-amber-400/10'}`} />
      </div>

      {/* Header Dinâmico */}
      <div className={`relative z-10 p-6 flex items-center gap-4 shrink-0 border-b backdrop-blur-md transition-colors duration-300 ${styles.headerBg}`}>
        {activeCard ? (
          <button 
            onClick={() => setSelectedCardId(null)} 
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-light transition-all border cursor-pointer ${styles.btnBack}`}
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para os Módulos
          </button>
        ) : (
          <>
            <button onClick={onMenuClick} className={`p-2 rounded-lg transition-colors cursor-pointer ${styles.menuBtnHover}`}>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className={`text-sm tracking-wider uppercase transition-colors ${styles.headerTitle}`}>
              Módulo de Gestão Empresarial e Estratégia
            </h1>
          </>
        )}
      </div>

      {/* ÁREA CENTRAL DE CONTEÚDO */}
      <div className="flex-1 relative z-10 overflow-y-auto px-6 py-8 custom-scrollbar">
        
        {!activeCard ? (
          /* TELA 1: DASHBOARD COMPLETO (GRID + TABS) */
          <div className="w-full max-w-6xl mx-auto flex flex-col animate-in fade-in duration-300">
            
            {/* Título Principal */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className={`mb-4 p-3 rounded-xl border transition-colors ${styles.iconWrapper}`}>
                <Megaphone className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
                Marketing e Gestão Empresarial
              </h2>
              <p className={`text-xs md:text-sm max-w-2xl font-light mt-2 leading-relaxed transition-colors ${styles.mainDesc}`}>
                A evolução da Segurança e Saúde no Trabalho como diferencial competitivo. Hub estratégico para liderança, gestão de pessoas, atração de talentos e valorização da marca corporativa.
              </p>
            </div>

            {/* Grid dos 15 Flashcards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-8">
              {/* O map tem tipagem 'any' para evitar erros de compilação com os dados provisórios */}
              {marketingFlashcardsData.map((card: any) => {
                const CardIcon = card.icon;
                const iconTextColor = card.colorClass.split(' ').find((c: string) => c.startsWith('text-')) || 'text-zinc-400';

                return (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCardId(card.id)}
                    className="group relative flex flex-col text-left rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer"
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.colorClass} opacity-10 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className={`relative flex flex-col h-full flex-1 m-[1px] p-5 rounded-[15px] backdrop-blur-xl transition-all duration-300 ${styles.cardBg}`}>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-xl border transition-colors duration-300 ${styles.cardIconBg}`}>
                          <CardIcon className={`h-5 w-5 ${isDark ? iconTextColor : 'text-zinc-600'}`} />
                        </div>
                        <span className={`text-[10px] uppercase font-mono tracking-widest flex items-center gap-1 transition-colors ${isDark ? 'text-zinc-500 group-hover:text-zinc-300' : 'text-zinc-400 group-hover:text-emerald-600'}`}>
                          <BookOpen className="h-3 w-3" /> Estudar
                        </span>
                      </div>

                      <h3 className={`text-sm font-semibold mb-2 leading-tight transition-colors ${styles.cardTitleText}`}>
                        {card.title}
                      </h3>
                      <p className={`text-xs font-light leading-relaxed flex-1 line-clamp-2 transition-colors ${styles.cardDescText}`}>
                        {card.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* DIVISOR DE SEÇÃO */}
            <div className={`w-full h-[1px] my-8 relative transition-colors ${styles.dividerLine}`}>
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 text-[10px] tracking-[0.25em] font-mono uppercase rounded-full border py-0.5 transition-colors ${styles.dividerBadge}`}>
                Ferramentas & Recursos Estratégicos
              </div>
            </div>

            {/* NOVO PAINEL EXECUTIVO EM TABS INTERATIVAS (SPLIT-PANE DESIGN) */}
            <div className="w-full flex flex-col md:flex-row gap-6 pb-16">
              
              {/* Painel Esquerdo: Menu Vertical com as 7 Abas */}
              <div className={`w-full md:w-72 flex flex-col gap-1.5 shrink-0 backdrop-blur-md border rounded-2xl p-3 h-fit transition-colors duration-300 ${styles.tabContainer}`}>
                <span className={`text-[9px] font-mono tracking-widest uppercase px-3 mb-2 block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Selecione o Recurso
                </span>
                {marketingTabsData.map((tab: any) => {
                  const TabIcon = tab.icon;
                  const isSelected = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`${styles.tabItemBase} cursor-pointer ${isSelected ? styles.tabItemActive : styles.tabItemInactive}`}
                    >
                      <TabIcon className={`h-4 w-4 ${isSelected ? (isDark ? "text-emerald-400" : "text-emerald-700") : "text-zinc-500"}`} />
                      <span className="truncate">{tab.shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Painel Direito: Caixa de Renderização de Conteúdo */}
              <div className={`flex-1 min-h-[320px] backdrop-blur-md border rounded-2xl p-6 md:p-8 relative overflow-hidden transition-colors duration-300 ${styles.contentPanel}`}>
                {/* Aurora interna para dar um toque sofisticado na caixa */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
                
                {activeTabContent ? (
                  <div className="animate-in fade-in duration-200 relative z-10">
                    <div className={`flex items-center gap-2 mb-4 text-[10px] font-mono tracking-wider uppercase ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      <span>{activeTabContent.category}</span>
                      <span>•</span>
                      <span className={isDark ? "text-emerald-500/80" : "text-emerald-600 font-semibold"}>{activeTabContent.title}</span>
                    </div>
                    <div className={styles.mainText}>
                       {activeTabContent.body}
                    </div>
                  </div>
                ) : (
                  <div className={`h-full flex items-center justify-center text-xs italic ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Selecione um tópico para exibir os dados.
                  </div>
                )}
              </div>

            </div>

          </div>
        ) : (
          /* TELA 2: VISÃO DE LEITURA (WIKIPÉDIA ACADÊMICA) */
          <div className={`w-full max-w-3xl mx-auto border rounded-3xl p-6 md:p-10 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300 select-text selection:bg-emerald-500/30 transition-colors duration-300 ${styles.wikiContainer}`}>
            <div className={`flex items-center gap-3 border-b pb-6 mb-6 transition-colors duration-300 ${styles.wikiBorder}`}>
              <div className={`p-3 rounded-2xl border transition-colors duration-300 ${styles.wikiIconBg}`}>
                <activeCard.icon className={`h-6 w-auto ${styles.wikiSub}`} />
              </div>
              <div>
                <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold transition-colors duration-300 ${styles.wikiSub}`}>
                  SST Intelligence • Gestão e Estratégia
                </span>
                <h2 className={`text-xl md:text-2xl font-bold mt-1 transition-colors duration-300 ${styles.wikiTitle}`}>
                  {activeCard.title}
                </h2>
              </div>
            </div>

            {/* Renderização do Texto Profundo */}
            <div className={`max-w-none space-y-4 text-sm font-light leading-relaxed ${isDark ? 'prose prose-invert text-zinc-300' : 'text-zinc-700'}`}>
  {/* Seu map de linhas continua igual... */}
              {typeof activeCard.content === 'string' ? activeCard.content.split('\n').map((line: string, index: number) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className={`text-2xl font-bold mt-6 mb-2 transition-colors duration-300 ${styles.wikiTitle}`}>{line.replace('# ', '')}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index} className={`text-lg font-semibold mt-5 mb-2 transition-colors duration-300 ${styles.wikiSub}`}>{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className={`text-base font-medium mt-4 mb-1 transition-colors duration-300 ${styles.wikiTitle}`}>{line.replace('### ', '')}</h3>;
                }
                if (line.trim() === '') return <div key={index} className="h-2" />;
                return <p key={index} className={`transition-colors duration-300 ${styles.wikiText}`}>{line}</p>;
              }) : (
                <p className="text-zinc-500 italic">Conteúdo não disponível.</p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}