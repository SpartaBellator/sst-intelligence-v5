"use client";

import { useState } from "react";
import { useTheme } from "@/providers/theme-provider";
import { 
  Menu, Leaf, ArrowLeft, BookOpen, 
  Droplet, Trash2, ShieldAlert, Building2, 
  Trees, Volume2, HardHat, Truck, Sparkles, 
  Activity, Recycle, Bug, FileCheck, Sun, HelpCircle,
  GraduationCap, Library, Scale, BarChart3, Globe, 
  Cpu, Megaphone, Repeat, Landmark, Bookmark, ChevronDown,
  Gavel, Users, Wheat, HeartPulse, Droplets, 
  Briefcase, Factory, Equal, CloudLightning, 
  Waves, Handshake, MapPin, ExternalLink, FileSignature,
  Calendar,FileText, Skull, Biohazard, Radiation, Thermometer, VolumeX, Stethoscope, 
  Anchor, FlaskConical, AlertTriangle, FishOff, ShieldCheck
} from "lucide-react";

// Definição da estrutura do Flashcard Antigo
interface Flashcard {
  id: string;
  title: string;
  description?: string;
  shortTitle?: string;
  icon: any;
  colorClass?: string;
  category?: string;
  content: React.ReactNode;
  body?: React.ReactNode;
}

// Definição da estrutura das Abas Inferiores
interface ResourceTab {
  id: string;
  title: string;
  shortTitle: string;
  icon: any;
  category: string;
  body: React.ReactNode;
}

export const flashcardsData: Flashcard[] = [
  {
    id: "quimica_marinha",
    title: "Ambiente Marinho e Química Marítima",
    description: "Dinâmica físico-química do litoral, impactos da degradação marinha, corrosão estrutural e toxicologia portuária.",
    icon: Anchor,
    colorClass: "from-blue-500 to-cyan-400 text-blue-400",
    content: `📊 DINÂMICA FÍSICO-QUÍMICA DO AMBIENTE LITORÂNEO

Análise aprofundada dos agentes químicos presentes em estuários e zonas costeiras. Este módulo cruza os impactos da degradação marinha com os riscos estruturais de engenharia e a toxicologia ocupacional em operações portuárias.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔬 1. SALINIDADE E CORROSÃO ELETROQUÍMICA (MARESIA)

• O Mecanismo Químico:
A névoa salina é rica em íons de Cloreto (Cl-) e Sódio (Na+). Essa alta concentração salina atua como um eletrólito de altíssima condutividade, acelerando a reação de oxidação do Ferro (Fe) presente no aço estrutural (Fe -> Fe2+ + 2e-).

• Risco em SST (NR-18 e NR-35):
A corrosão galvânica destrói silenciosamente a integridade de andaimes, ganchos de guindastes e pontos de ancoragem de linhas de vida. Uma microfissura oxidada pode levar ao colapso estrutural, causando acidentes fatais por queda de altura.

• Curiosidade Oceanográfica:
O oceano é o maior sumidouro de carbono do planeta, absorvendo cerca de 30% de todo o CO2 emitido. Porém, essa reação forma Ácido Carbônico, diminuindo o pH marinho (acidificação), o que dissolve o Carbonato de Cálcio (CaCO3) de corais e moluscos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ 2. HIDROCARBONETOS E TOXICOLOGIA PORTUÁRIA

• Dinâmica de Fluídos:
O petróleo cru e o óleo diesel marítimo (Bunker) são misturas complexas de cadeias carbônicas hidrofóbicas. Em vazamentos, a fração leve evapora (risco de explosão), enquanto a pesada forma uma película superficial que bloqueia a fotossíntese do fitoplâncton.

• Hidrocarbonetos Aromáticos Policíclicos (HAPs):
Compostos formados por múltiplos anéis benzênicos fundidos. Altamente lipofílicos, eles bioacumulam no tecido adiposo da fauna marinha e são classificados pela IARC como mutagênicos e carcinogênicos para o organismo humano.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💧 3. IMPACTO LOCAL AND ÍNDICES DE BALNEABILIDADE (CONAMA 357)

• OD (Oxigênio Dissolvido):
Mede o nível de O2 gás misturado na água. Se o OD cair para menos de 2 mg/L, ocorre mortalidade asfíxica em massa da fauna marítima.

• DBO (Demanda Bioquímica de Oxigênio):
Mede o oxigênio consumido por bactérias para decompor matéria orgânica. Uma DBO alta é o principal indicador de contaminação recente por esgoto sanitário clandestino.

• Eutrofização e Marés Vermelhas:
Multiplicação descontrolada de algas devido ao excesso de nutrientes em canais urbanos, gerando acúmulo de microtoxinas perigosas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. TRATAMENTO, BARREIRAS E DEFESA DA FAUNA

O ecossistema costeiro e as tartarugas marinhas são as primeiras vítimas de incidentes por óleo. A engenharia de mitigação exige resposta rápida baseada no PEI (Plano de Emergência Individual):

• Contenção Mecânica: Lançamento de barreiras flutuantes ao redor do vazamento e uso de Skimmers (recolhedores de óleo a vácuo).

• Biorremediação: Aplicação de colônias de bactérias liofilizadas especializadas que metabolizam e degradam os hidrocarbonetos em CO2 e água limpa.

• EPIs de Resposta (SST): Uso obrigatório de macacões impermeáveis Tyvek, luvas de nitrila de cano longo e óculos de ampla visão para evitar intoxicações e queimaduras químicas por solventes dispersantes.`
  },
  
  // ==========================================
  // ESTRUTURA BASE DOS OUTROS 14 FLASHCARDS
  // ==========================================

  {
    id: "limpeza-praia",
    title: "Gestão de Resíduos na Orla (NR-38)",
    description: "Diretrizes de SST aplicadas aos trabalhadores municipais de limpeza pública urbana na faixa de areia.",
    icon: Trash2,
    colorClass: "from-emerald-400 to-teal-500 text-emerald-400",
    content: `🧹 GESTÃO DE RESÍDUOS NA ORLA E COMPLIANCE DA NR-38

Diretrizes de Segurança e Saúde no Trabalho (SST) aplicadas especificamente aos garis costeiros e operadores de limpeza pública urbana na faixa de areia. Este módulo integra as exigências de gerenciamento de riscos da NR-38 com os desafios ambientais e ergonômicos do ecossistema praiano.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 1. ANÁLISE DE RISCOS FISCO-AMBIENTAIS NA FAIXA DE AREIA

• Sobrecarga Térmica e Radiação Solar (NR-15 e NR-38):
O gari de orla atua sob exposição direta e contínua à radiação solar não ionizante (Ultravioleta UV-A e UV-B) e ao calor radiante amplificado pela reflexão da areia clara. Esse cenário gera alto risco de insolação, desidratação crônica, exaustão térmica e, a longo prazo, desenvolvimento de neoplasias dérmicas (câncer de pele).

• Ruído Ocupacional e Maquinário de Apoio:
A operação conjunta com tratores saneadores de areia e caminhões compactadores de lixo expõe a equipe a níveis de pressão sonora contínuos acima dos limites de tolerância sem a devida proteção, podendo causar fadiga auditiva e estresse neurológico.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦠 2. RISCOS BIOLÓGICOS E ACIDENTES PERFUROCORTANTES

• Contaminação por Resíduos Infectantes:
A coleta manual expõe o trabalhador ao contato direto com lixo orgânico em decomposição, fezes de animais urbanos e carcaças de fauna marinha. Isso abre portas para vetores biológicos e patógenos causadores de infecções gastrointestinais e dermatites.

• Perigo Oculto de Perfurocortantes:
O descarte irregular feito por banhistas esconde na areia cacos de vidro, palitos de espetinho, latas oxidadas e agulhas descartadas. O risco de perfuração dérmica é crítico, associado à transmissão de patógenos sanguíneos graves (Tétano, Hepatite B e C).

• Animais Peçonhentos e Biologia Marinha:
Durante a limpeza da linha de detritos da maré, há o risco real de contato com águas-vivas e caravelas remanescentes na areia, causando queimaduras químicas graves, além de picadas de escorpiões ou aranhas alojados em materiais acumulados na vegetação de restinga.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏋️ 3. DINÂMICA ERGONÔMICA NA AREIA FOFA (CONEXÃO NR-17)

• Biomecânica da Marcha em Solo Instável:
A locomoção contínua por quilômetros sobre a areia fofa altera completamente a cinemática da marcha humana. O trabalhador exige maior torque muscular e sobrecarrega as articulações dos tornozelos, joelhos e coluna lombar, potencializando lesões osteomusculares.

• Esforço Repetitivo e Postura Inadequada:
O uso contínuo de ancinhos (ciscadores), vassouras praianas e o ato repetitivo de agachamento para recolhimento de sacos pesados geram sobrecarga estática na musculatura dorsal. A NR-38 exige que o PGR inclua medidas de pausas e rodízios para mitigar os Distúrbios Osteomusculares Relacionados ao Trabalho (DORT).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE CONTROLE, EPIs E PONTOS DE APOIO

A engenharia de segurança aplica rigorosamente os controles administrativos e de proteção individual previstos na legislação:

• Vestimentas de Alta Visibilidade e Proteção UV:
Uso obrigatório de uniformes com faixas retrorrefletivas para evitar atropelamentos por maquinários, tecidos leves com fator de proteção solar integrado (FPU 50+), calças compridas e o Chapéu de Legionário (modelo com aba traseira cobrindo o pescoço).

• Barreiras Oculares e Dérmicas:
Óculos de segurança com lentes de proteção contra impactos e filtro UV (evitando a fotoceratite ocular causada pelo reflexo solar na areia) e fornecimento contínuo de protetor solar fps mínimo 30.

• Calçados de Segurança Específicos:
Botas de cano médio impermeáveis com palmilhas de aço antiperfurantes, impedindo que cacos de vidro ou pregos atravessem o solado durante a caminhada na areia.

• Luvas de Proteção Mecânica:
Utilização de luvas de raspa de couro grossa ou nitrílicas de alta densidade no manuseio direto dos sacos de lixo e detritos.

• Infraestrutura de Apoio (Compliance com a NR-24):
A prefeitura ou empresa concessionária deve disponibilizar pontos de apoio fixos ou móveis ao longo da orla. Esses locais devem garantir água potável refrigerada para hidratação constante, sanitários funcionais e área sombreada para as pausas regulamentares de recuperação térmica.`
  },

  { 
    id: "saneamento", 
    title: "Saneamento e Drenagem Costeira", 
    description: "Prevenção de riscos biológicos em galerias subterrâneas pluviais durante variações de maré alta.", 
    icon: Bug, 
    colorClass: "from-cyan-400 to-blue-600 text-cyan-400", 
    content: `🌊 SANEAMENTO, MACRODRENAGEM E ENGENHARIA DE RISCOS

Estudo dos impactos ambientais e ocupacionais na manutenção de sistemas de drenagem pluvial e redes de saneamento em regiões litorâneas. Este módulo analisa os desafios impostos pela dinâmica das marés sobre as galerias subterrâneas e os rígidos protocolos de proteção à saúde do trabalhador.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ 1. DINÂMICA DE MACRODRENAGEM E REFLUXO DE MARÉ

• Desafio da Topografia Plana:
Cidades litorâneas como Praia Grande possuem um relevo de baixíssima declividade. Isso exige sistemas complexos de macrodrenagem (canais e galerias subterrâneas) dependentes da gravidade para o escoamento das águas das chuvas até o estuário ou mar.

• O Fenômeno do Engolfamento por Maré:
Durante episódios de maré alta meteorológica ou astronômica, ocorre a inversão do fluxo hidráulico (refluxo). A água do mar entra nas galerias pluviais, reduzindo a capacidade de escoamento e causando o "engolfamento" do sistema. Para as equipes de manutenção, isso representa um risco crítico e repentino de inundação total das frentes de trabalho subterrâneas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🕳️ 2. RISCOS ATMOSFÉRICOS EM ESPAÇOS CONFINADOS (NR-33)

As galerias subterrâneas e poços de visita (PVs) são classificados legalmente como Espaços Confinados pela NR-33, apresentando perigos invisíveis e letais:

• Gás Sulfídrico (H2S) - O Veneno Ocular e Respiratório:
Gerado pela decomposição anaeróbica de matéria orgânica acumulada no esgoto. É um gás altamente tóxico, inflamável e denso (acumula-se no fundo das galerias). Em baixas concentrações tem odor de ovo podre, mas em altas concentrações ele paralisa o sistema olfativo instantaneamente, impedindo que o trabalhador perceba o perigo antes de desmaiar por asfixia química.

• Gás Metano (CH4) - Risco Crítico de Explosão:
Produto da biodegradação de resíduos orgânicos. É um gás inodoro, menos denso que o ar e altamente explosivo. O acúmulo de metano em redes fechadas transforma a galeria em uma bomba em potencial, onde uma faísca de ferramenta manual pode causar uma detonação.

• Deficiência de Oxigênio (O2):
O consumo de oxigênio por colônias de bactérias ativas reduz a concentração de O2 no ar abaixo do nível mínimo de segurança (19,5% em volume), causando hipóxia, perda de consciência e morte por asfixia mecânica em poucos minutos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦠 3. TOXICOLOGIA AMBIENTAL E RISCOS BIOLÓGICOS

• O Perigo Ocular da Leptospirose:
A água acumulada nas galerias pluviais e canais costeiros serve como vetor de transmissão da bactéria Leptospira interrogans, eliminada na urina de roedores sinantrópicos. O trabalhador que entra em contato com essa água sem proteção adequada sofre infecção por via dérmica (especialmente se houver pequenas escoriações na pele) ou pelas mucosas.

• Patógenos Entéricos e Infecções Hídricas:
As redes de drenagem frequentemente recebem ligações clandestinas de esgoto doméstico. Isso expõe os operadores a uma carga biológica massiva de vírus e bactérias causadores de Hepatite A, febre tifoide, giardíase e gastroenterites graves.

• Animais Sinantrópicos e Peçonhentos:
A umidade e a escuridão tornam essas redes o habitat ideal para a proliferação de baratas, ratos, escorpiões e aranhas, aumentando exponencialmente o risco de picadas e infecções secundárias por mordeduras.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. PROTOCOLOS DE ENGENHARIA DE MITIGAÇÃO E SST

O compliance com a NR-33 exige o cumprimento rigoroso de etapas administrativas e técnicas antes de qualquer descida de nível:

• Emissão da PET (Permissão de Entrada e Trabalho):
Documento obrigatório, escrito e assinado pelo supervisor, que valida que todas as condições de segurança foram testadas e aprovadas antes do início da jornada.

• Monitoramento Atmosférico Contínuo:
Uso obrigatório de detectores multigás portáteis devidamente calibrados. As leituras de O2, H2S, Monóxido de Carbono (CO) e Limite Inferior de Explosividade (LEL) devem ser feitas antes da entrada e mantidas em tempo real enquanto houver operários no subsolo.

• Ventilação Mecânica Forçada:
Instalação de insufladores e exaustores mecânicos portáteis para renovação contínua do ar, expulsando os gases tóxicos e garantindo níveis estáveis de oxigênio respirável.

• Equipamentos de Proteção Individual Avançados:
Utilização de macacões de proteção química impermeáveis de PVC de alta resistência, botas de segurança de cano longo impermeáveis com biqueira de aço, luvas de nitrila texturizadas e respiradores autônomos ou de linha de ar comprimido (quando a ventilação não atingir níveis seguros).

• Sistema de Resgate Vertical Ativo:
Todo trabalhador em espaço confinado deve utilizar um cinturão de segurança tipo paraquedista conectado a um sistema de resgate vertical (tripé de ancoragem com guincho resgatador mecânico portátil), permitindo a sua extração imediata pelo Vigia de Superfície em caso de mal súbito, sem que o resgatista precise descer na galeria.`
  },

  { 
    id: "pgrcc", 
    title: "PGRCC: Resíduos da Construção Civil", 
    description: "Gerenciamento do boom imobiliário local, descarte legalizado e mitigação de poeiras de sílica.", 
    icon: Building2, 
    colorClass: "from-amber-500 to-orange-600 text-amber-500", 
    content: `🏗️ GESTÃO DE RESÍDUOS NA CONSTRUÇÃO CIVIL E RISCOS OPERACIONAIS

Diretrizes de sustentabilidade urbana e Engenharia de Segurança aplicadas ao canteiro de obras. Este módulo destrincha o Plano de Gerenciamento de Resíduos da Construção Civil (PGRCC) frente ao adensamento imobiliário vertical e estabelece os critérios de proteção à saúde pulmonar dos trabalhadores.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 1. CLASSIFICAÇÃO LEGAL DOS RESÍDUOS (RESOLUÇÃO CONAMA 307)

O gerenciamento eficaz exige a triagem na fonte geradora, separando obrigatoriamente os resíduos em quatro classes regulamentadas:

• Classe A - Reutilizáveis ou Recicláveis como Agregados:
Resíduos de alvenaria, concreto, argamassa, telhas e blocos cerâmicos. São materiais de alto potencial para reciclagem, podendo ser triturados em usinas de britagem para reutilização como sub-base de pavimentos ou concreto não estrutural.

• Classe B - Recicláveis para Outras Destinações:
Plásticos, papel, papelão, madeiras, vidros, metais e o gesso. Nota técnica: O gesso exige armazenamento seco e isolado, pois em contato com a umidade pode liberar gás sulfídrico.

• Classe C - Sem Tecnologia de Reciclagem Viável:
Resíduos para os quais ainda não foram desenvolvidas aplicações economicamente viáveis (ex: lã de vidro, lã de rocha, mantas isolantes e lixas industriais). Devem ser dispostos em aterros específicos.

• Classe D - Resíduos Perigosos (Risco Químico e Biológico):
Tintas, solventes, óleos lubrificantes, estopas contaminadas, impermeabilizantes e o amianto (asbesto). Exigem armazenamento em baías impermeabilizadas e coleta especializada com destinação para coprocessamento ou aterros de resíduos perigosos (Classe I).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

😷 2. RISCO CRÍTICO: POEIRA DE SÍLICA CRISTALINA (NR-15 E NR-18)

O corte, a britagem, o lixamento e a furação de materiais como concreto, tijolos e pedras liberam na atmosfera do canteiro micropartículas invisíveis de Sílica Cristalina Respirável (SiO2).

• A Patologia da Silicose:
As partículas de sílica possuem dimensões submicrométricas que ultrapassam as barreiras naturais do sistema respiratório, alojando-se profundamente nos alvéolos pulmonares. O organismo tenta fagocitar essas partículas, gerando um processo inflamatório crônico que resulta em fibrose pulmonar progressiva e irreversível (Silicose). A doença causa perda gradual da capacidade respiratória e é classificada internacionalmente (IARC) como um agente carcinogênico do Grupo 1.

• Nexo Ocupacional e Insalubridade:
O Anexo 12 da NR-15 estabelece limites de tolerância extremamente rígidos para poeiras minerais. A exposição sem proteção adequada configura insalubridade em grau máximo, além de passivo trabalhista imediato para a construtora.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 3. RASTREABILIDADE, CONTROLE E FISCALIZAÇÃO (SIGOR / SINIR)

Para mitigar o descarte clandestino de entulho em áreas de preservação ambiental (como faixas de restinga, manguezais ou terrenos baldios), o município exige controle rígido de trânsito de materiais:

• MTR (Manifesto de Transporte de Resíduos):
Documento digital obrigatório que acompanha fisicamente o caminhão caçambeiro desde a saída da obra até o destino. Registra eletronicamente o gerador, o transportador e o receptor autorizado.

• CDF (Certificado de Destinação Final):
Laudo emitido pela área de transbordo e triagem (ATT) ou aterro licenciado que comprova a entrega legal do material. É a única salvaguarda jurídica da construtora perante a fiscalização da Secretaria de Meio Ambiente e o Ministério Público.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE ENGENHARIA E EQUIPAMENTOS DE PROTEÇÃO (SST)

A mitigação do risco de poeiras minerais e acidentes na gestão de resíduos segue a hierarquia das medidas de controle da NR-1) e NR-18:

• Umectação Ativa (Processos Úmidos):
Proibição por lei do corte a seco de blocos e concreto. É obrigatória a utilização de ferramentas manuais equipadas com sistemas de injeção direta de água (marteletes, serras circulares e politrizes úmidas), abatendo a poeira antes que ela fique em suspensão.

• Ventilação e Exaustão Localizada:
Uso de sistemas de exaustão com filtros de alta eficiência (HEPA) acoplados diretamente às ferramentas em ambientes fechados ou subsolos de prédios em construção.

• Proteção Coletiva (EPCs):
Instalação de barreiras físicas e isolamento das áreas de corte, sinalização visual de advertência e uso de dutos fechados de gravidade para o descarte vertical de entulho entre os andares, evitando a dispersão de poeira pelo ar.

• Equipamentos de Proteção Individual (EPIs):
Uso mandatório de respiradores semifaciais purificadores de ar com filtros mecânicos de alta eficiência contra poeiras finas (PFF2/N95 no mínimo, ou respiradores com cartuchos P3 para cortadores de bloco), óculos de segurança contra impactos (vedados contra poeira), protetores auriculares (devido ao ruído das serras) e luvas de raspa de couro grossa para manuseio e triagem manual de entulho.`
  },

  { 
    id: "vegetacao", 
    title: "Supressão de Vegetação e Encostas", 
    description: "Regras ambientais e segurança de operação em cortes públicos e contenção de encostas.", 
    icon: Trees, 
    colorClass: "from-green-500 to-emerald-700 text-green-400", 
    content: `🌲 SUPRESSÃO DE VEGETAÇÃO, MANEJO FLORESTAL E SEGURANÇA EM ENCOSTAS

Diretrizes ambientais e de engenharia de segurança aplicadas a obras de infraestrutura urbana, cortes públicos e contenção de encostas. Este módulo aborda o controle técnico na remoção de cobertura vegetal nativa e a mitigação de riscos geotécnicos em taludes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 1. LEGALIDADE AMBIENTAL: AUTORIZAÇÃO DE SUPRESSÃO (ASV)

• O Rigor do Bioma Mata Atlântica:
A supressão de vegetação nativa em áreas litorâneas é fortemente protegida pela Lei da Mata Atlântica (Lei nº 11.428/2006). Nenhuma remoção de árvores de grande porte, manejo florestal ou capina em áreas de restinga e encostas pode ser realizada sem a ASV (Autorização de Supressão de Vegetação) emitida pela CETESB ou pela Secretaria Municipal de Meio Ambiente (SEMA).

• Áreas de Preservação Permanente (APPs):
As encostas com declividade superior a 45 graus e as faixas marginais de canais pluviais são protegidas por lei como APPs pelo Código Florestal (Lei nº 12.651/2012). Qualquer intervenção nesses locais exige comprovação técnica extrema de utilidade pública ou interesse social.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⛰️ 2. RISCOS GEOTÉCNICOS E ESTABILIZAÇÃO DE ENCOSTAS

• Dinâmica da Erosão de Encostas:
A vegetação desempenha um papel mecânico crucial na estabilidade dos solos: as raízes agem como uma malha natural de reforço estrutural, e as copas amortecem o impacto direto das chuvas tropicais severas. A supressão expõe o solo à erosão pluvial acelerada, saturação hídrica e consequente perda de coesão, resultando em deslizamentos de terra, corridas de lama e desmoronamentos de taludes urbanos.

• Engenharia de Contenção Preventiva:
Antes ou imediatamente após as intervenções em taludes, a engenharia deve aplicar soluções estruturais de contenção, tais como solo grampeado, cortinas atirantadas, aplicação de concreto projetado e instalação de mantas geotêxteis com plantio de vegetação rasteira de crescimento rápido (hidrosemeadura) para fixação imediata do solo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🪓 3. OPERAÇÃO SEURA DE MOTOSSERRAS E ROÇADEIRAS (NR-12)

O manejo florestal envolve ferramentas portáteis motorizadas de altíssimo potencial de acidentes severos, exigindo compliance absoluto com a NR-12:

• Treinamento e Licença Legal (IBAMA):
O operador de motosserra deve obrigatoriamente possuir treinamento de capacitação teórica e prática com reciclagem periódica conforme a NR-12. Perante o IBAMA, a ferramenta deve possuir o registro ativo de Licença para Porte e Uso (LPU).

• Mecanismos de Segurança Obrigatórios na Máquina:
A motosserra deve possuir freio manual ou inercial de corrente, pino pega-corrente, trava de segurança do gatilho do acelerador e sistema de amortecimento contra vibrações.

• Riscos Ocupacionais Críticos:
O corte de árvores expõe o trabalhador ao risco de queda de galhos pesados sobre a equipe, ruído intenso (risco de PAIR) e vibração localizada nas mãos e braços (causando a síndrome dos dedos brancos).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE CONTROLE, EPIs E TRABALHO EM ALTURA (NR-35)

A proteção das equipes de manejo de encostas exige barreiras rigorosas de controles operacionais e de proteção individual:

• Sistemas de Proteção Contra Quedas em Taludes (NR-35):
Trabalhadores atuantes em encostas com risco de queda de nível devem utilizar obrigatoriamente o cinturão de segurança tipo paraquedista acoplado a linhas de vida verticais ou cabos de segurança de aço fixados em ancoragens estruturais testadas na crista do morro.

• EPIs Específicos para Operadores de Motosserra:
Uso mandatório de calça anticorte (com forro interno de fios de nylon de alta resistência que travam a corrente da motosserra instantaneamente em caso de contato acidental), botas de segurança de couro com biqueira de aço, luvas de raspa com reforço palmar, protetor auricular de alta atenuação e capacete de segurança com protetor facial de tela contra estilhaços de madeira.

• Planejamento e Isolamento de Área:
Definição prévia do plano de derrubada (analisando a inclinação natural do tronco e a direção do vento) e isolamento total do perímetro com sinalização visual ostensiva, impedindo o trânsito de pessoas nas proximidades do raio de corte.`
  },

  { 
    id: "ruido", 
    title: "Poluição Sonora e Ruído Urbano", 
    description: "Estudo dos impactos dos ruídos mecânicos industriais sobre a saúde humana e a fauna local.", 
    icon: Volume2, 
    colorClass: "from-purple-400 to-indigo-500 text-purple-400", 
    content: `🔊 POLUIÇÃO SONORA, ACÚSTICA URBANA E LIMITES REGULAMENTARES

Avaliação técnica dos impactos das pressões sonoras elevadas geradas por atividades industriais, comerciais e de infraestrutura. Este módulo analisa as metodologias de mensuração do ruído, seus reflexos na saúde do trabalhador e o estresse acústico nos ecossistemas urbanos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 1. MARCO LEGAL DO RUÍDO: CONFORTO COMUNITÁRIO VS. OCUPACIONAL

A engenharia avalia a poluição sonora sob duas óticas legais totalmente distintas, utilizando indexadores específicos:

• Ruído Ambiental e Comunitário (ABNT NBR 10151):
Regulamenta a avaliação do ruído em áreas habitadas, visando o conforto da comunidade. Os limites são medidos em decibéis ponderados em "A" - dB(A) - e variam conforme o zoneamento urbano e o horário. Em zonas residenciais urbanas, o limite típico é de 55 dB(A) no período diurno e cai para 50 dB(A) no período noturno. Valores acima disso configuram contravenção penal e poluição ambiental.

• Ruído Ocupacional e Industrial (NR-15 - Anexo 1):
Regulamenta a exposição do trabalhador no ambiente de trabalho. O limite de tolerância para ruído contínuo ou intermitente é de 85 dB(A) para uma jornada máxima de 8 horas diárias. A norma adota o fator de dobra de incremento de energia (q=5), o que significa que a cada acréscimo de 5 dB, o tempo de exposição permitida cai pela metade (ex: 90 dB(A) permite apenas 4 horas de exposição diárias).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 2. PATOLOGIAS E RISCOS CLÍNICOS DA EXPOSIÇÃO AO RUÍDO

A exposição contínua a níveis elevados de pressão sonora desencadeia danos severos à saúde humana, divididos em efeitos auditivos e extra-auditivos:

• Perda Auditiva Induzida por Ruído (PAIR):
É uma patologia degenerativa crônica, simétrica e irreversível que destrói as células ciliadas do órgão de Corti, localizadas na cóclea (ouvido interno). A PAIR inicia-se de forma silenciosa, afetando primeiro as frequências mais altas (3000 a 6000 Hz), comprometendo gradualmente a capacidade de compreensão da fala do trabalhador.

• O Fenômeno do Zumbido (Tinnitus):
Surgimento de um ruído fantasma contínuo no sistema auditivo, gerando distúrbios do sono, irritabilidade crônica e episódios de depressão.

• Efeitos Extra-Auditivos (Sistêmicos):
O ruído atua como um agente estressores no sistema nervoso central, ativando a liberação contínua de cortisol e adrenalina na corrente sanguínea. Isso resulta em distúrbios cardiovasculares (hipertensão arterial, aumento da frequência cardíaca), problemas gastrointestinais (úlceras e gastrites), distúrbios do sono, perda de concentração e aumento exponencial do risco de acidentes de trabalho por fadiga.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦊 3. ESTRESSE ACÚSTICO E IMPACTO NA FAUNA LOCAL

A poluição sonora urbana atua de forma devastadora sobre a biodiversidade dos ecossistemas costeiros e fragmentos florestais:

• Mascaramento de Sinais Acústicos:
Muitas espécies de aves, anfíbios e mamíferos dependem da vocalização para ritos de acasalamento, delimitação de território e alertas de predadores. O ruído mecânico das cidades "mascara" essas frequências, interrompendo ciclos reprodutivos e isolando populações.

• Desorientação e Abandono de Habitat:
Ruídos agudos de obras ou tráfego pesado geram reações de fuga em massa na fauna silvestre, levando ao abandono de ninhos e habitats naturais. No ambiente marítimo e portuário, o ruído subaquático de motores e dragagens desorienta cetáceos (golfinhos e baleias) que dependem da ecolocalização, resultando em encalhes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. ENGENHARIA DE CONTROLE ACÚSTICO E COMPLIANCE EM SST

A mitigação do ruído deve seguir rigorosamente a ordem de prioridade estabelecida pela NR-1 para proteção coletiva e individual:

• Medidas na Fonte (Engenharia de Concepção):
Substituição de máquinas antigas por modelos mais silenciosos, lubrificação preventiva rigorosa de engrenagens, balanceamento de motores e instalação de coxins antivibratórios de borracha ou molas helicoidais para evitar a propagação do ruído estrutural.

• Medidas na Trajetória (Isolamento Coletivo):
Enclausuramento acústico de compressores e geradores por meio de barreiras físicas compostas por materiais densos (chapa de aço ou alvenaria) revestidos internamente com materiais porosos absorventes (lã de rocha ou espuma acústica). Instalação de barreiras acústicas vegetais ou painéis defletores em perímetros industriais urbanos.

• Medidas Administrativas e Organizacionais:
Redução do tempo de exposição dos trabalhadores por meio de rotatividade de funções (rodízio), planejamento de turnos de trabalho para horários de menor impacto comunitário e realização de exames audiométricos periódicos preventivos (conforme o PCMSO da NR-7).

• Medidas de Proteção Individual (EPI):
Quando as barreiras coletivas forem técnica ou economicamente inviáveis, torna-se obrigatório o uso de protetores auriculares. Podem ser do tipo inserção (plug de silicone ou espuma moldável) ou circum-auricular (tipo concha/abafador). Nota técnica: A escolha do EPI deve basear-se no método de atenuação de ruído (Nível de Redução de Ruído Amostral - NRRsf), garantindo que a pressão sonora que atinge o tímpano do trabalhador fique abaixo de 80 dB(A).`
  },

  { 
    id: "quimicos", 
    title: "Armazenamento de Produtos Químicos", 
    description: "Controle de vazamentos de materiais inflamáveis ou corrosivos e contaminação de solos arenosos.", 
    icon: ShieldAlert, 
    colorClass: "from-red-400 to-orange-500 text-red-400", 
    content: `🛢️ ARMAZENAMENTO DE PRODUTOS QUÍMICOS E CONTROLE DE SÍTIO DIRECIONADO

Diretrizes de Segurança do Trabalho e Engenharia Ambiental aplicadas ao armazenamento, manuseio e transporte interno de substâncias perigosas (inflamáveis, combustíveis, corrosivas e tóxicas). Este módulo destrincha os sistemas de contenção física e o gerenciamento de riscos toxicológicos e ambientais.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏷️ 1. CLASSIFICAÇÃO, SINALIZAÇÃO E COMPATIBILIDADE QUÍMICA (NR-26)

• O Sistema Global Harmonizado (GHS):
A NR-26 exige que todo produto químico armazenado no canteiro ou indústria seja devidamente rotulado e classificado conforme o GHS. Isso inclui pictogramas de perigo universais (losangos de borda vermelha) que alertam visualmente se a substância é inflamável, corrosiva, tóxica, explosiva ou perigosa para o meio ambiente.

• A Transição Técnica da FISPQ para a FDS:
Conforme a atualização da ABNT NBR 14725, a antiga FISPQ (Ficha de Informações de Segurança de Produtos Químicos) foi substituída globalmente pela FDS (Ficha de Dados de Segurança). Esse documento obrigatório possui 16 seções padronizadas que detalham desde a composição química até medidas de primeiros socorros, combate a incêndio e procedimentos em caso de vazamento. O local de armazenamento deve manter uma pasta física ou digital acessível de todas as FDS.

• Matriz de Incompatibilidade Química:
É terminantemente proibido estocar produtos químicos por ordem alfabética ou conveniência de espaço. A engenharia deve aplicar a matriz de compatibilidade: substâncias ácidas nunca podem ser armazenadas próximas a substâncias básicas (risco de reação exotérmica violenta), e oxidantes devem ficar totalmente isolados de inflamáveis (risco de ignição espontânea).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏳ 2. VULNERABILIDADE DE SOLOS ARENOSOS E IMPLICACÕES AMBIENTAIS

• Alta Permeabilidade Mecânica do Solo:
O solo característico de regiões litorâneas possui uma altíssima concentração de fragmentos arenosos e quartzosos de granulometria grossa. Isso confere ao terreno uma porosidade e permeabilidade extremas. Em caso de vazamento superficial de combustíveis (como óleo diesel ou gasolina) ou solventes industriais, o contaminante penetra no solo em velocidade acelerada, sem sofrer atenuação natural significativa.

• Contaminação do Lençol Freático Superficial:
Devido à proximidade com o nível do mar, o lençol freático em zonas costeiras encontra-se a poucos metros da superfície (nível d'água raso). O produto químico infiltrado atinge o aquífero subterrâneo em questão de horas, espalhando uma pluma de contaminação hídrica que compromete a qualidade da água subterrânea e migra diretamente para os canais de drenagem e áreas de manguezal vizinhas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 3. ENGENHARIA DE CONTENÇÃO E DIRETRIZES DA NR-20

Para o armazenamento seguro de granéis líquidos perigosos, a engenharia civil e de segurança projeta barreiras físicas passivas:

• Dimensionamento das Bacias de Contenção (Bund Walls):
Tanques de armazenamento de combustíveis e produtos corrosivos devem obrigatoriamente ser cercados por bacias de contenção em alvenaria armada ou concreto. O volume útil dessa bacia deve obedecer a critérios rígidos: reter, no mínimo, 110% da capacidade do maior tanque nela instalado (prevendo o cenário de ruptura total do tanque mais o acúmulo de águas pluviais).

• Impermeabilização Estrutural Crítica:
O piso e as paredes internas da bacia de contenção não podem ser de concreto poroso cru. Devem receber revestimento químico de alta performance impermeável (como mantas de polietileno de alta densidade - PEAD, resinas epóxi ou poliuretano industrial), impedindo qualquer infiltração no subsolo em caso de sinistro.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. PROTOCOLOS DE EMERGÊNCIA, RESPOSTA RÁPIDA E EPIS

O plano de resposta a emergências químicas exige estrutura ativa e capacitação das equipes operacionais:

• Kits de Mitigação e Absorção Química:
O depósito de produtos químicos deve dispor de kits de emergência ambiental contendo barreiras absorventes de polipropileno, turfa orgânica tratada (para encapsulamento de hidrocarbonetos), mantas absorventes, material neutralizante (para ácidos e bases) e ferramentas antifaiscantes de bronze ou alumínio (para áreas inflamatórias).

• Chuveiro de Emergência e Lava-Olhos (Compliance Ocupacional):
Instalação obrigatória de um conjunto de chuveiro e lava-olhos de emergência a uma distância máxima de 10 segundos de caminhada rápida da área de risco, livre de obstáculos, com manutenção e testes de vazão semanais documentados.

• Equipamentos de Proteção Individual de Alta Performance:
Para o manuseio e resposta a vazamentos, os operadores devem utilizar EPIs compatíveis com a FDS do produto: luvas de borracha nitrílica ou butílica de cano longo (resistentes a solventes e ácidos), aventais ou macacões impermeáveis de PVC/Tychem, botas de segurança de borracha vulcanizada com solado antiderrapante e respiradores semifaciais ou faciais inteiros com filtros combinados (contra gases de vapores orgânicos e névoas ácidas).`
  },

  { 
    id: "logistica", 
    title: "SST na Logística e Retroporto", 
    description: "Emissão de gases de frotas pesadas e segurança na movimentação de grandes cargas na região.", 
    icon: Truck, 
    colorClass: "from-slate-400 to-zinc-600 text-slate-400", 
    content: `🚚 SST NA LOGÍSTICA RETROPORTUÁRIA E MOVIMENTAÇÃO DE GRANDES CARGAS

Análise técnica dos riscos operacionais e impactos ambientais associados ao fluxo de frotas pesadas, pátios de armazenagem de contêineres e terminais retroportuários. Este módulo foca na movimentação segura de materiais e na mitigação de poluentes atmosféricos gerados pelo escoamento logístico.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛣️ 1. CONTEXTO RETROPORTUÁRIO E SINALIZAÇÃO DE TRÁFEGO URBANIZADO

• O Escoamento Logístico Regional:
A proximidade com grandes complexos portuários gera um fluxo massivo e ininterrupto de veículos articulados pesados (carretas e bitrens) pelas rodovias e vias de acesso locais. A gestão de retroporto envolve pátios de triagem e armazéns alfandegados que demandam planejamento logístico rigoroso para evitar gargalos estruturais e sinistros.

• Segregação entre Pedestres e Veículos:
O principal fator de risco em pátios logísticos é o atropelamento devido à coexistência de trabalhadores a pé (conferentes, vistoriadores) e máquinas em movimento. A engenharia de tráfego interno deve projetar faixas de pedestres isoladas por barreiras físicas (guard-rails), estabelecer limites de velocidade rígidos e implantar sinalização vertical e horizontal ostensiva.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ 2. MOVIMENTAÇÃO DE CARGAS E COMPLIANCE COM A NR-11

A operação de movimentação, transporte e armazenagem de grandes volumes (como contêineres e maquinários pesados) exige controle rigoroso de engenharia:

• Inspeção de Acessórios de Içamento:
Cabos de aço, cintas sintéticas, manilhas e ganchos de guindastes ou empilhadeiras portuárias (Reach Stackers) devem sofrer inspeções diárias pré-operacionais (checklists). Materiais com desgaste, fios rompidos acima do limite ou deformações plásticas devem ser descartados e inutilizados imediatamente.

• Plano de Rigging e Cálculo de Cargas:
Operações complexas de içamento exigem a elaboração do Plano de Rigging — um estudo formal de engenharia que calcula o centro de gravidade da carga, a capacidade de carga do guindaste em relação ao raio de operação, a resistência do solo de apoio (patolamento) e a velocidade do vento, mitigando o risco de tombamento da máquina ou queda do material.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💨 3. EMISSÕES ATMOSFÉRICAS DE FROTAS PESADAS E TOXICOLOGIA

A queima de óleo diesel por centenas de caminhões e frotas de movimentação interna compromete severamente a qualidade do ar nos pátios industriais:

• Material Particulado (MP 2.5 e MP 10):
A fuligem preta do diesel é composta por micropartículas que penetram profundamente no sistema respiratório dos trabalhadores de pátio. A exposição crônica está diretamente associada ao desenvolvimento de asma ocupacional, bronquite crônica, enfisema pulmonar e maior incidência de doenças cardiovasculares.

• Gases Tóxicos (NOx e Monóxido de Carbono - CO):
Os Óxidos de Nitrogênio (NOx) atuam como potentes irritantes das vias aéreas superiores, reduzindo a imunidade pulmonar. Já o Monóxido de Carbono (CO) possui afinidade química com a hemoglobina sanguínea, formando a carboxihemoglobina, o que bloqueia o transporte de oxigênio para os tecidos, causando cefaleia, tonturas, perda de reflexos e fadiga extrema nos operadores.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE CONTROLE TECNOLÓGICO E EPIS DE ALTA VISIBILIDADE

A proteção das equipes operacionais combina tecnologias ativas e passivas integradas aos sistemas de segurança:

• Sistemas Tecnológicos de Proximidade (Sensores de Ré e Câmeras):
Obrigatoriedade de instalação de sensores de proximidade por radar ou ultrassom e câmeras de ré de 360 graus em todas as empilhadeiras e caminhões internos, eliminando os pontos cegos dos operadores e emitindo alertas sonoros automáticos se um pedestre se aproximar.

• Gerenciamento de Fadiga dos Motoristas (Compliance com a Lei do Motorista):
Implementação de escalas rígidas de descanso, proibição de jornadas estendidas sem pausas regulamentares e controle de ergonomia das cabines de operação para mitigar falhas humanas causadas pelo cansaço extremo.

• Equipamentos de Proteção Individual (EPIs):
Uso mandatório e intransigível de coletes ou jaquetas com faixas retrorrefletivas de alta visibilidade (classe 2 ou 3), botas de segurança com biqueira e palmilha de aço (proteção contra esmagamento e perfuração), capacete de segurança com jugular e óculos de proteção. Para trabalhadores fixos em pátios fechados com alto índice de fuligem, torna-se necessário o fornecimento de respiradores semifaciais com filtros mecânicos contra poeiras e névoas (PFF2).`
  },

  { 
    id: "defensivos", 
    title: "Paisagismo e Defensivos Urbanos", 
    description: "Riscos do uso de herbicidas e produtos de manutenção em praças, parques e canteiros centrais públicos.", 
    icon: Sparkles, 
    colorClass: "from-lime-400 to-green-500 text-lime-400", 
    content: `🌿 PAISAGISMO, JARDINAGEM URBANA E MANEJO DE DEFENSIVOS

Análise dos riscos ocupacionais e impactos ambientais associados às atividades de manutenção de áreas verdes, praças públicas e canteiros centrais. Este módulo foca na toxicologia dos defensivos fitossanitários (agrotóxicos urbanos), na biossegurança da manipulação e nas diretrizes ergonômicas da jardinagem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 1. TOXICOLOGIA OPERACIONAL DOS DEFENSIVOS URBANOS

O uso de produtos químicos para o controle de pragas, vetores e plantas invasoras (herbicidas, inseticidas e formicidas) em áreas urbanas expõe os trabalhadores a riscos químicos severos por três vias de absorção:

• Absorção Dérmica (A mais crítica):
Durante o preparo da calda (diluição) ou a aplicação por pulverizadores costais, respingos ou a névoa do produto em suspensão atingem a pele do operador. Compostos organofosforados e carbamatos possuem alta lipossolubilidade, atravessando a barreira cutânea rapidamente e entrando na corrente sanguínea.

• Absorção Respiratória (Inalação):
A dispersão de microgotas gerada por bicos pulverizadores propicia a inalação direta do princípio ativo. A exposição crônica pode causar fibrose pulmonar, asma ocupacional e danos ao sistema nervoso central.

• Intoxicação Aguda vs. Crônica:
- Aguda: manifesta-se imediatamente após a exposição (cefaléia, náuseas, vômitos, tonturas, miose e salivação excessiva).
- Crônica: surge após anos de exposição contínua a baixas doses, associada a distúrbios neurológicos, disfunções endócrinas, toxicidade reprodutiva e potencial carcinogênico (como amplamente discutido na literatura científica a respeito do Glifosato).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ 2. RISCO DE DERIVA E CONTAMINAÇÃO AMBIENTAL URBANA

A aplicação de defensivos em ambientes urbanos exige cuidados muito superiores aos da agricultura convencional devido à proximidade com a população e ecossistemas sensíveis:

• O Fenômeno da Deriva Hidráulica:
Ocorre quando as gotas pulverizadas são arrastadas pelo vento para fora do alvo planejado. Em canteiros urbanos e praças, a deriva pode atingir diretamente banhistas, pedestres, residências vizinhas e parquinhos infantis, gerando passivos jurídicos e riscos de saúde pública.

• Lixiviação e Contaminação do Sistema de Drenagem:
Praias e áreas urbanas costeiras possuem solos arenosos de alta infiltração e redes pluviais próximas. A aplicação de defensivos antes de chuvas severas causa a lavagem do produto (run-off), direcionando os resíduos químicos tóxicos diretamente para as galerias de drenagem, canais e estuários, provocando a mortalidade de organismos aquáticos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏋️ 3. RISCOS ERGONÔMICOS E MECÂNICOS NO PAISAGISMO (NR-17)

Além do risco químico, a jardinagem de infraestrutura urbana envolve severa carga de trabalho físico e operação de equipamentos rotativos:

• Vibração de Corpo Inteiro e Localizada (NR-15):
O uso contínuo de roçadeiras costais e podadores de cerca-viva motorizados expõe os membros superiores do trabalhador a níveis elevados de vibração localizada (VMB). Isso pode desencadear a Síndrome de Raynaud (dedos brancos), caracterizada por distúrbios circulatórios, perda de sensibilidade e dores agudas nas mãos.

• Sobrecarga Musculoesquelética:
Posturas estáticas prolongadas, inclinação contínua da coluna para manuseio de ferramentas manuais (enxadas, pás) e o transporte manual de sacos de terra e mudas pesadas geram fadiga muscular crônica e lombalgias, exigindo pausas ergonômicas estruturadas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE MITIGAÇÃO, SINALIZAÇÃO E EPIS ESPECÍFICOS

O gerenciamento de segurança no paisagismo público exige conformidade com as regras de proteção e isolamento de sítio:

• Isolamento e Sinalização Preventiva de Área:
A aplicação de qualquer defensivo em praças ou canteiros deve ocorrer obrigatoriamente em horários de fluxo mínimo de pessoas (madrugada ou início da manhã). O perímetro deve ser isolado com fitas zebradas e placas de advertência ostensivas contendo avisos claros: "ÁREA TRATADA QUIMICAMENTE - PROIBIDA A ENTRADA DE PESSOAS E ANIMAIS".

• Implementação do Controle Ecológico Alternativo:
Substituição progressiva do controle químico por técnicas de Manejo Integrado de Pragas (MIP), tais como capina mecânica manual, uso de barreiras físicas, mulching (cobertura morta do solo para evitar plantas invasoras) e aplicação de defensivos biológicos biodegradáveis de baixa toxicidade.

• Equipamentos de Proteção Individual (EPI) Mandatórios:
Para a equipe de aplicação de defensivos, é obrigatório o uso do Kit de Defensivos completo (padrão IAC):
- Macacão hidrorrepelente (tecido tratado que impede a passagem do líquido para a pele);
- Avental impermeável de PVC (utilizado obrigatoriamente no peito durante o preparo da calda);
- Luvas de nitrila de alta densidade (cano médio a longo);
- Botas de segurança de borracha ou PVC impermeáveis;
- Respirador semifacial purificador de ar equipado com filtros combinados (filtro mecânico P2 contra névoas + filtro químico contra vapores orgânicos);
- Viseira ou protetor facial transparente contra respingos e óculos de proteção.`
  },

  { 
    id: "pgrss", 
    title: "PGRSS: Resíduos de Saúde Municipal", 
    description: "Descarte seguro em hospitais e UPAs de Praia Grande contra riscos biológicos cruzados.", 
    icon: Activity, 
    colorClass: "from-pink-500 to-rose-600 text-pink-400", 
    content: `🩺 PGRSS: GERENCIAMENTO DE RESÍDUOS DE SAÚDE E BIOSSEGURANÇA

Diretrizes de proteção biológica e Engenharia de Segurança aplicadas às unidades de saúde municipais, hospitais e UPAs. Este módulo destrincha o Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) e estabelece os critérios de conformidade da NR-32 para mitigar acidentes ocupacionais com patógenos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 1. CLASSIFICAÇÃO DOS RESÍDUOS DE SAÚDE (RDC ANVISA 222/2018)

Para garantir a biossegurança hospitalar, todos os resíduos gerados no atendimento clínico e cirúrgico devem ser segregados na fonte conforme cinco grupos normativos:

• Grupo A (Infectantes): Resíduos com presença de agentes biológicos que apresentam risco de infecção (ex: sangue, secreções, gazes contaminadas, tecidos humanos, culturas de microrganismos e bolsas de transfusão sanguínea).

• Grupo B (Químicos): Substâncias químicas que apresentam risco à saúde pública ou ao meio ambiente devido às suas características inflamáveis, corrosivas ou tóxicas (ex: medicamentos vencidos, reagentes de laboratório, reveladores de raio-X e resíduos de quimioterapia).

• Grupo C (Rejeitos Radioativos): Quaisquer materiais que contenham radionuclídeos em quantidades superiores aos limites de eliminação (ex: medicina nuclear e laboratórios de pesquisa em radiologia).

• Grupo D (Resíduos Comuns): Materiais que não apresentam risco biológico, químico ou radiológico, equivalentes aos resíduos domiciliares (ex: papéis de escritório, restos de comida da copa, gesso limpo e fraldas descartáveis não contaminadas).

• Grupo E (Perfurocortantes): Materiais que podem causar perfurações ou cortes (ex: agulhas, lâminas de bisturi, ampolas de vidro quebradas, lancetas e fios de sutura com agulha).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦠 2. RISCOS BIOLÓGICOS E PATOLOGIAS CRÍTICAS (NR-32)

Os profissionais de saúde, equipes de higienexação e coletores públicos enfrentam riscos severos devido ao contato potencial com Fluidos Biológicos Potencialmente Infectantes (FBPI):

• Transmissão de Patógenos Sanguíneos:
O maior perigo ocupacional está associado a acidentes percutâneos com agulhas ou lâminas contaminadas. Esse cenário é a principal via de transmissão de vírus de alta gravidade clínica, como o HIV (Vírus da Imunodeficiência Humana), o HBV (Vírus da Hepatite B) e o HCV (Vírus da Hepatite C).

• Infecções por Via Respiratória e Gotículas:
A manipulação de resíduos infectantes em áreas de isolamento sem a devida ventilação ou proteção respiratória pode expor o trabalhador a bioaerossóis contendo bacilos da Tuberculose, vírus da Influenza e outros patógenos de transmissão aérea cratística.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚨 3. PROTOCOLO DE SEGREGAÇÃO E ACONDICIONAMENTO EM UPAS

O compliance com o PGRSS exige o uso de embalagens e identificações padronizadas por lei no ponto exato da geração do resíduo:

• Acondicionamento do Grupo A (Infectantes):
Devem ser depositados em sacos plásticos brancos leitosos, impermeáveis e resistentes, identificados com o símbolo internacional de Risco Biológico. Esses sacos devem ser substituídos quando atingirem 2/3 de sua capacidade ou pelo menos uma vez a cada 24 horas.

• Descarte do Grupo E (Perfurocortantes):
É terminantemente proibido o descarte de agulhas e lâminas em sacos plásticos. Devem ser depositados imediatamente após o uso em caixas rígidas de papelão ondulado plastificado (padrão Descarpack), dotadas de bocal anti-refluxo e identificadas com o símbolo de Risco Biológico. Nota técnica: Essas caixas devem ser fechadas e lacradas quando o nível de preenchimento atingir a linha pontilhada de segurança (80% da capacidade), sendo vedado o seu esvaziamento manual ou reaproveitamento.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE CONTROLE, IMUNIZAÇÃO E EPIS MANDATÓRIOS

A mitigação dos riscos biológicos hospitalares combina barreiras administrativas, de engenharia e proteção individual conforme as diretrizes da NR-32:

• Programa de Imunização Ocupacional Ativo:
Todo trabalhador que atua no ambiente de saúde ou na coleta de resíduos deve, obrigatoriamente, receber vacinação gratuita e atualizada contra Hepatite B, Tétano/Difteria (Dupla Adulta), Tríplice Viral e Febre Amarela, com comprovação de soroconversão documentada no PCMSO.

• Proibição de Práticas de Alto Risco:
É expressamente proibido por lei o reencape manual de agulhas usadas, a desconexão manual de agulhas da seringa e a dobra ou quebra intencional de materiais perfurocortantes. Todas as seringas utilizadas devem, idealmente, possuir dispositivos de segurança retráteis automáticos.

• Equipamentos de Proteção Individual (EPI):
Uso mandatório de luvas de procedimento nitrílicas (para atendimento clínico), luvas de borracha grossa de cano médio (para equipes de coleta e higienização interna), aventais descartáveis impermeáveis, óculos de proteção contra respingos de fluidos, máscaras de proteção respiratória cirúrgica ou respiradores PFF2/N95 (obrigatórios em áreas de isolamento respiratório) e calçados de segurança totalmente fechados e impermeáveis.`
  },

  { 
    id: "manguezal", 
    title: "Riscos em Zonas de Manguezal", 
    description: "Segurança de agentes fiscais e biólogos atuantes em áreas úmidas estuarinas estritas.", 
    icon: HardHat, 
    colorClass: "from-emerald-600 to-teal-800 text-teal-300", 
    content: `🦀 RISCOS OCUPACIONAIS EM ZONAS DE MANGUEZAL E ÁREAS ESTUARINAS

Diretrizes de Segurança e Saúde no Trabalho (SST) aplicadas a biólogos, oceanógrafos, engenheiros ambientais e agentes de fiscalização que atuam diretamente no ecossistema de manguezal. Este módulo analisa os perigos biológicos, físicos e químicos específicos de áreas úmidas estritas e os protocolos de proteção à integridade física das equipes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚶‍♂️ 1. RISCOS FÍSICOS E GEOTÉCNICOS DO SOLO LAMACENTO

• Instabilidade de Marcha e Fadiga Mecânica:
O solo do manguezal é composto por um lodo argiloso extremamente mole, profundo e instável, rico em raízes aéreas (pneumatóforos). A locomoção exige esforço físico muscular exaustivo (sobrecarga dos membros inferiores) e gera alto risco de torções, luxações, quedas e aprisionamento dos pés no lodo, o que dificulta evacuações rápidas.

• Riscos de Afogamento e Dinâmica das Marés:
As zonas estuarinas sofrem variações rápidas de marés cíclicas. O desconhecimento da tábua de marés local ou a perda de orientação geográfica dentro do ecossistema fechado pode cercar as equipes de campo, expondo-as ao risco crítico de isolamento e afogamento em canais profundos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦂 2. RISCOS BIOLÓGICOS E FAUNA PEÇONHENTA

• Exposição a Vetores e Doenças Infecciosas:
O ambiente úmido e sombreado do manguezal propicia a proliferação em massa de mosquitos vetores (como o mosquito-pólvora e culicídeos). Os operadores enfrentam riscos biológicos de transmissão de arboviroses (Dengue, Zika, Chikungunya) e reações alérgicas severas causadas por picadas múltiplas.

• Fauna Peçonhenta e Animais Agressores:
O ecossistema é habitat de serpentes peçonhentas (como jararacas), escorpiões e aranhas que utilizam a vegetação caída como refúgio. Nas áreas de transição aquática, há o risco de acidentes com raias (ferroadas venenosas ocultas na lama) e bagres marinhos. Além disso, os fragmentos cortantes de conchas de moluscos e garras de crustáceos (caranguejos-uçá) podem causar ferimentos dermo-perfurantes com alto potencial de infecção bacteriana secundária.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 3. TOXICOLOGIA AMBIENTAL E BIOACUMULAÇÃO QUÍMICA

• Poluição Estuarina Antrópica:
Por estarem localizados nas porções finais das bacias hidrográficas urbanas, os manguezais frequentemente recebem descargas clandestinas de efluentes industriais e esgoto doméstico bruto. Os trabalhadores em contato com a água e o lodo enfrentam exposição crônica a metais pesados (Chumbo, Mercúrio, Cádmio) e compostos orgânicos persistentes.

• Riscos Microbiológicos Cruzados:
A forte presença de matéria orgânica contaminada expõe os agentes de campo a patógenos entéricos e bactérias anaeróbicas perigosas (como os agentes causadores do Tétano e da Leptospirose), que podem penetrar no organismo através de microfissuras na pele causadas pelo atrito com a vegetação.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE CONTROLE, EPIS E PROTOCOLOS DE CAMPO

A execução segura de vistorias técnicas e pesquisas de campo em manguezais exige planejamento operacional rigoroso e equipamentos de proteção adequados:

• Equipamentos de Proteção Individual (EPIs) Mandatórios:
- Perneiras de proteção anticorte e antiofídica: de uso obrigatório para proteger as pernas contra picadas de cobras e perfurações por pneumatóforos cortantes;
- Calçados impermeáveis especiais (botas de PVC de cano longo ou macacão de saneamento integrado): vedados para impedir a entrada de lama contaminada;
- Luvas de raspa de couro ou nitrílicas de alta resistência mecânica: fundamentais para o manuseio de amostras e movimentação entre galhos;
- Chapéu de abas largas, óculos de proteção (lentes claras) e uso contínuo de repelentes de alta eficácia com princípio ativo DEET ou Icaridina.

• Protocolo de Comunicação e Rastreamento Local:
Proibição terminante de missões de campo individuais. Todas as vistorias devem ser realizadas em duplas ou equipes, portando rádios comunicadores VHF impermeáveis ou rastreadores via satélite (Spot), devido à baixa cobertura de redes celulares convencionais nessas áreas.

• Plano de Emergência e Resgate Estuarino:
Obrigatoriedade de monitoramento prévio da tábua de marés e condições meteorológicas antes do início da jornada. A equipe de superfície deve manter um plano de contingência ativo, mapeando pontos de extração rápida e rotas de fuga por embarcações de apoio em caso de acidentes.`
  },

  { 
    id: "iso", 
    title: "Integração ISO 14001 e ISO 45001", 
    description: "Metodologias de governança unindo Gestão Ambiental e Saúde Ocupacional em repartições públicas.", 
    icon: FileCheck, 
    colorClass: "from-yellow-500 to-orange-400 text-yellow-500", 
    content: `🏗️ SGI: INTEGRAÇÃO ISO 14001:2015 E ISO 45001:2018 E GOVERNANÇA COMPLIANCE

Diretrizes avançadas para a implementação, auditoria e manutenção de um Sistema de Gestão Integrado (SGI) unificando a Gestão Ambiental (ISO 14001) e a Segurança e Saúde no Trabalho (ISO 45001). Este módulo detalha os pilares normativos, a convergência estrutural do Anexo SL e os mecanismos de conformidade legal aplicados às organizações modernas e repartições públicas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 1. A ESTRUTURA DE ALTO NÍVEL (HIGH-LEVEL STRUCTURE - ANEXO SL)

A integração eficiente das normas internacionais baseia-se na adoção do Anexo SL, uma estrutura conceitual comum desenvolvida pela ISO que padronizou os títulos das cláusulas, definições e textos fundamentais de todos os sistemas de gestão. Isso elimina redundâncias e permite uma governança unificada através de 10 seções principais:

• Cláusula 4 - Contexto da Organização: Exige a determinação de questões internas e externas que afetam o SGI, além do mapeamento das partes interessadas (comunidade, órgãos fiscalizadores como CETESB, e colaboradores).

• Cláusula 5 - Liderança e Participação dos Trabalhadores: Elemento crítico e diferencial da ISO 45001, que exige não apenas o comprometimento da alta direção, mas a criação de mecanismos reais de consulta e participação ativa dos trabalhadores (ligando-se diretamente à CIPA nas normas brasileiras).

• Cláusula 6 - Planejamento: Foco na mentalidade de risco para identificar oportunidades e estabelecer objetivos do SGI.

• Cláusula 7 - Apoio: Gerenciamento de competências, conscientização, comunicação interna/externa e controle da informação documentada.

• Cláusula 8 - Operação: Planejamento e controle operacional, incluindo o gerenciamento de mudanças e a preparação e resposta a emergências.

• Cláusula 9 - Avaliação de Desempenho: Monitoramento, medição, análise de indicadores, auditorias internas e análise crítica pela alta direção.

• Cláusula 10 - Melhoria: Gestão de não-conformidades, incidentes e implementação de ações corretivas contínuas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 2. CONVERGÊNCIA TÉCNICA: ASPECTOS/IMPACTOS VS. PERIGOS/RISCOS

O núcleo operacional do SGI consiste em cruzar e unificar o Requisito 6.1.2 de ambas as normas, correlacionando as matrizes de risco de forma científica:

• Abordagem da ISO 14001 (Gestão Ambiental):
- Aspecto Ambiental: Elemento das atividades, produtos ou serviços de uma organização que pode interagir com o meio ambiente (causa). Exemplo: Geração de efluentes químicos ou vazamento de óleo diesel.
- Impacto Ambiental: Qualquer modificação no meio ambiente, adversa ou benéfica, resultante de um aspecto ambiental (efeito). Exemplo: Contaminação de solo arenoso ou degradação de aquífero costeiro.

• Abordagem da ISO 45001 (Saúde e Segurança Ocupacional):
- Perigo: Fonte com potencial para causar lesões e agravos à saúde (causa). Exemplo: Manuseio de produtos inflamáveis ou agentes químicos corrosivos.
- Risco Ocupacional: Combinação da probabilidade de ocorrência de um evento perigoso com a gravidade da lesão ou agravo à saúde causados pela exposição (efeito). Exemplo: Queimadura química dermal ou intoxicação por inalação de vapores.

• A Unificação no SGI:
A engenharia de segurança e ambiental cria uma matriz integrada única. Um único evento — como a falha de uma válvula em um tanque de produto químico — é tratado simultaneamente como um Aspecto Ambiental Crítico (risco de impacto ao ecossistema) e como um Perigo Ocupacional Grave (risco à integridade física do operador). Os controles operacionais (Cláusula 8) passam a ser desenhados de forma bifocal, mitigando ambos os cenários com uma única barreira técnica.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ 3. REQUISITOS LEGAIS E COMPLIANCE REGULATÓRIO (REQUISITO 6.1.3)

O SGI exige o estabelecimento de um procedimento robusto para identificar, acessar e avaliar o atendimento à legislação aplicável. O não cumprimento de leis nacionais quebra o compliance e impede a certificação internacional das organizações:

• Interface com a Legislação Ambiental Federal e Estadual:
Atendimento estrito às resoluções do CONAMA (ex: CONAMA 357 para padrões de efluentes e águas), PNRS (Política Nacional de Resíduos Sólidos - Lei 12.305/10), exigências de licenciamento ambiental (LP, LI, LO) e controle de emissões atmosféricas.

• Interface com as Normas Regulamentadoras (NRs) do Ministério do Trabalho:
O PGR (Programa de Gerenciamento de Riscos) exigido pela NR-1 deve ser o espelho técnico dos levantamentos da ISO 45001. A gestão de espaços confinados (NR-33), trabalho em altura (NR-35), inflamáveis (NR-20) e saúde ocupacional (PCMSO da NR-7) devem estar totalmente integrados às auditorias internas do SGI.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛠️ 4. O CICLO PDCA INTEGRADO E INDICADORES DE DESEMPENHO

A governança do SGI baseia-se na dinâmica contínua do ciclo PDCA (Plan-Do-Check-Act), gerando melhoria sistêmica e reduzindo perdas operacionais:

• PLAN (Planejar): Estabelecer a Política do SGI unificada, identificar os requisitos legais, mapear a matriz de riscos e definir metas claras (ex: Redução de 20% na geração de resíduos industriais e Meta Zero Acidentes de Trabalho no ano).

• DO (Fazer): Executar o controle operacional, realizar treinamentos de capacitação integrados, disponibilizar EPIs adequados e implementar infraestruturas físicas de proteção (como bacias de contenção impermeabilizadas).

• CHECK (Verificar): Mensurar o desempenho do SGI por meio de auditorias internas cruzadas (auditores treinados que avaliam segurança e meio ambiente simultaneamente) e monitorar KPIs técnicos, tais como:
- Taxa de Frequência de Acidentes (TF);
- Taxa de Gravidade de Lesões (TG);
- Volume de água reutilizada no processo;
- Índice de eficiência na destinação final de resíduos perigosos.

• ACT (Agir): Tratar os desvios e as não-conformidades identificadas nas auditorias. Se um incidente ocorrer, a equipe do SGI aplica metodologias de análise de causa-raiz (como os 5 Porquês ou Diagrama de Ishikawa) para implementar ações corretivas estruturais, alterando o padrão operacional para garantir que a falha ambiental ou ocupacional nunca mais se repita.`
  },

  { 
    id: "termico", 
    title: "Estresse Térmico e Clima Costeiro", 
    description: "Análise de riscos para trabalhadores expostos ao sol severo (GCM, agentes de trânsito e salva-vidas).", 
    icon: Sun, 
    colorClass: "from-orange-400 to-red-500 text-orange-400", 
    content: `☀️ ESTRESSE TÉRMICO, FISIOLOGIA DO CALOR E MICROCLIMA COSTEIRO

Avaliação quantitativa e qualitativa dos riscos ocupacionais associados à sobrecarga térmica em ambientes abertos litorâneos. Este módulo analisa os mecanismos homeostáticos do corpo humano, as metodologias de mensuração da NR-15 e as medidas de controle para trabalhadores expostos ao sol severo, como guardas municipais, agentes de trânsito e salvamentos aquáticos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 1. FISIOLOGIA HUMANA SOB SOBRECARGA TÉRMICA CRÍTICA

O organismo humano opera sob uma temperatura interna rigorosamente controlada pelo hipotálamo, mantida em torno de 36,5°C. A exposição contínua ao calor severo ativa os mecanismos de termorregulação mecânica:

• Vaso-dilatação Periférica e Sudorese:
O coração aumenta o débito cardíaco para direcionar o fluxo sanguíneo do núcleo do corpo para a pele, facilitando a perda de calor para o ambiente. As glândulas sudoríparas excretam suor, cuja evaporação resfria a superfície cutânea.

• O Colapso dos Mecanismos (Síncope e Insolação):
Quando a taxa de ganho de calor ambiental e metabólico supera a capacidade de perda, ocorre a falha homeostática. 
- Exaustão Térmica: Perda massiva de água e eletrólitos pelo suor, resultando em hipotensão, tonturas, cefaleia intensa e fraqueza muscular.
- Insolação (Heatstroke): Emergência médica extrema onde o mecanismo de sudorese cessa por completo. A temperatura interna ultrapassa rapidamente os 40°C, desencadeando danos neurológicos, convulsões, falência múltipla de órgãos e óbito se não houver resfriamento imediato.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 2. AVALIAÇÃO QUANTITATIVA DO CALOR: O ÍNDICE IBUTG (NR-15)

A NR-15 (Anexo 3) regulamenta de forma estrita os limites de tolerância para exposição ao calor com base no Índice de Bulbo Úmido Termômetro de Globo (IBUTG). A avaliação deve considerar a taxa de metabolismo do trabalhador (medida em Watts) e o tipo de ambiente:

• Equação para Ambientes Externos com Carga Solar Direta:
IBUTG = 0,7 x tbn + 0,1 x tg + 0,2 x ta
Onde:
- tbn = Temperatura de bulbo úmido natural (avalia o impacto da umidade do ar na evaporação do suor).
- tg = Temperatura de globo (avalia o calor radiante infravermelho emitido pelo sol e superfícies aquecidas).
- ta = Temperatura de bulbo seco (temperatura do ar ambiente).

• Aplicação Prática e Limites de Tolerância:
Atividades externas pesadas exigem monitoramento contínuo. Se o IBUTG ultrapassar os limites de ação regulamentares, a organização torna-se legalmente obrigada a implementar regimes de trabalho-descanso intermitentes e pausas em locais sombreados, conforme a taxa de metabolismo (M) calculada para a função.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌊 3. MICROCLIMA COSTEIRO E FATORES DE AMPLIFICAÇÃO DE RISCO

O ambiente litorâneo apresenta variáveis meteorológicas específicas que transformam as operações a céu aberto em cenários de alta complexidade em SST:

• Elevada Umidade Relativa do Ar (Baixada Santista):
A proximidade com o oceano mantém a umidade relativa do ar constantemente elevada. Isso reduz drasticamente a taxa de evaporação do suor da pele (o ar já está saturado de vapor d'água), anulando o principal mecanismo de resfriamento do trabalhador e disparando a sensação térmica.

• O Efeito Albedo (Reflexão Radiante):
O gari de orla, o agente de trânsito e o guarda-vidas não recebem radiação solar apenas verticalmente. A areia clara da praia possui um albedo de até 40% (reflete quase metade da radiação ultravioleta e infravermelha de volta para o trabalhador). O asfalto escuro das avenidas litorâneas absorve calor e o reemite continuamente na faixa do infravermelho, enclausurando o operador entre dois fluxos térmicos severos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE MITIGAÇÃO, CRONOGRAMAS DE PAUSA E EPIS

O gerenciamento do estresse térmico exige o cumprimento integrado de barreiras administrativas, de engenharia e de proteção individual:

• Critério de Aclimatação Mandatório:
Um trabalhador novo ou que retorna de férias prolongadas não pode ser exposto à carga máxima de calor imediatamente. A NR-15 exige um período de aclimatação progressiva: a exposição deve ser aumentada gradualmente ao longo de uma ou duas semanas (ex: 20% no primeiro dia, 40% no segundo), permitindo que o sistema cardiovascular e as glândulas sudoríparas se adaptem metabolicamente ao estresse térmico.

• Hidratação Ativa Estruturada (Compliance com a NR-24):
A reposição hídrica não deve ocorrer apenas quando o trabalhador sente sede (pois a sede já indica um estágio inicial de desidratação). A engenharia deve fornecer água potável fresca a distâncias máximas preestabelecidas, instruindo a equipe a ingerir pequenas frações de água (200ml a 250ml) a cada 15 ou 20 minutos de trabalho contínuo. Em regimes de calor extremo, torna-se obrigatória a distribuição de soluções isotônicas para reposição de eletrólitos (Sódio e Potássio).

• Cronograma de Pausas Organizacionais:
Instituição de pausas obrigatórias para recuperação térmica em abrigos ou postos móveis sombreados e ventilados, fora da exposição direta ao sol e da influência de superfícies com alto albedo.

• Vestimentas de Proteção e Equipamentos Individuais (EPI):
- Tecidos Técnicos Inteligentes: Uso de uniformes de algodão ou poliéster técnico leve que facilitem a dispersão do suor, com tratamento de proteção contra radiação ultravioleta (FPU 50+);
- Chapéus de abas largas ou bonés modelo legionário (com proteção de nuca);
- Óculos de segurança com lentes escuras dotadas de proteção UV400 calibrada, reduzindo a fadiga visual provocada pela reflexão na areia e na água;
- Protetor solar com fator de proteção mínimo FPS 30, com aplicação obrigatória repetida em intervalos máximos de duas horas.`
  },

  { 
    id: "contingencia", 
    title: "Planos de Contingência e Defesa Civil", 
    description: "Atuação integrada em eventos climáticos extremos, ressacas marítimas severas e inundações.", 
    icon: HelpCircle, 
    colorClass: "from-violet-500 to-purple-700 text-violet-400", 
    content: `🚨 PLANOS DE CONTINGÊNCIA, DEFESA CIVIL E GESTÃO DE DESASTRES COSTEIROS

Diretrizes técnicas de Engenharia de Segurança e Proteção Comunitária aplicadas à mitigação, preparação e resposta rápida frente a desastres naturais e tecnológicos. Este módulo estabelece os critérios para a atuação integrada em eventos climáticos extremos, ressacas marítimas severas e inundações.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌊 1. DINÂMICA DE EVENTOS CLIMÁTICOS EXTREMOS E RESSACAS MARÍTIMAS

• Atuação Integrada em Sinistros Costeiros:
A gestão de desastres exige uma atuação integrada em eventos climáticos extremos, ressacas marítimas severas e inundações para proteger a população e a infraestrutura. O choque de frentes frias intensas com sistemas de alta pressão gera ventos de magnitude ciclônica sobre o espelho d'água oceânico, empurrando a massa líquida em direção ao continente.

• O Fenômeno da Sobreelevação do Nível do Mar:
A combinação da maré astronômica (picos de sizígia) com a maré meteorológica (pressão atmosférica baixa) causa uma sobreelevação crítica do nível do mar (storm surge). Essa dinâmica resulta em ressacas severas que destroem estruturas de contenção na orla, causam erosão costeira imediata e bloqueiam os canais de macrodrenagem, disparando inundações generalizadas nas áreas urbanas baixas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗺️ 2. MAPEAMENTO DE ÁREAS DE RISCO E VULNERABILIDADE SOCIOAMBIENTAL

• Identificação de Setores Críticos na Região:
A Defesa Civil adota metodologias científicas para o mapeamento de áreas de risco em Praia Grande, classificando os setores urbanos de acordo com o grau de suscetibilidade a desastres (Risco Baixo, Médio, Alto e Muito Alto). São analisados dados topográficos, altimetria do terreno e proximidade com canais de drenagem.

• Fatores de Vulnerabilidade Estrutural:
O adensamento urbano e a impermeabilização do solo amplificam a retenção de águas pluviais. O mapeamento foca nas bacias hidrográficas locais que sofrem influência direta das marés, identificando habitações e infraestruturas críticas (como hospitais, subestações de energia e vias arteriais) que demandam ações de engenharia preventiva e obras de macrodrenagem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 3. ESTRUTURAÇÃO DO PLANCON E PROTOCOLOS DE EVACUAÇÃO RÁPIDA

• O Plano de Contingência Municipal (PLANCON):
O PLANCON é o instrumento formal que define as responsabilidades, os recursos disponíveis e os procedimentos de resposta para cada tipo de desastre cadastrado. O plano estabelece níveis de alerta graduais (Observação, Atenção, Alerta e Alerta Máximo) baseados nos índices pluviométricos medidos em milímetros e nas previsões oceanográficas de curto prazo.

• Instruções Técnicas para Evacuação Rápida:
O plano detalha instruções técnicas para evacuação rápida de comunidades localizadas nos setores de alto risco em cenários de inundação iminente. Isso envolve o acionamento de sistemas de alerta sonoro (sirenes comunitárias), o balizamento de rotas de fuga seguras e livres de alagamentos, e a coordenação de transporte logístico para grupos vulneráveis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. SUPORTE EM ABRIGOS PÚBLICOS E BIOSSEGURANÇA DOS RESGATISTAS

• Organização e Suporte em Abrigos Públicos:
O plano de contingência prevê a ativação e o suporte em abrigos públicos temporários instalados em ginásios municipais ou escolas previamente cadastradas. A logística humanitária deve garantir condições dignas de alojamento, alimentação, provisão de água potável e atendimento médico e psicológico emergencial.

• Segurança Ocupacional das Equipes de Resposta (SST):
Os agentes da Defesa Civil, guardas municipais e voluntários atuam sob severos riscos físicos, químicos e biológicos em áreas inundadas. É obrigatório o cumprimento de diretrizes de SST, incluindo o fornecimento e uso intransigível de Equipamentos de Proteção Individual (EPIs) adequados para salvamento aquático (coletes salva-vidas homologados, botas de alta aderência impermeáveis, luvas de proteção mecânica e lanternas intrinsecamente seguras à prova de explosão).`
  },

  { 
    id: "reciclagem", 
    title: "Ergonomia na Coleta Seletiva", 
    description: "Apoio técnico para cooperativas de reciclagem, reduzindo lesões e acidentes com resíduos.", 
    icon: Recycle, 
    colorClass: "from-yellow-400 to-amber-500 text-yellow-400", 
    content: `♻️ ERGONOMIA, BIOSSEGURANÇA E ENGENHARIA DE RISCOS NA COLETA SELETIVA

Análise aprofundada dos riscos biomecânicos, biológicos e mecânicos associados ao trabalho dos catadores e operadores em cooperativas de reciclagem e galpões de triagem de resíduos sólidos urbanos. Este módulo foca no compliance com as diretrizes de ergonomia da NR-17 e na prevenção de acidentes severos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏋️ 1. ANÁLISE BIOMECÂNICA EM ESTEIRAS DE TRIAGEM (NR-17)

• Postura Estática Prolongada e Fadiga:
O operador de triagem atua em pé de forma contínua durante toda a jornada de trabalho diante das esteiras transportadoras de materiais. Essa postura estática prolongada causa sobrecarga venosa nos membros inferiores (risco de varizes ocupacionais) e compressão crônica dos discos intervertebrais da coluna lombar.

• Altíssima Repetitividade e LER/DORT:
O ciclo de pinçagem manual de materiais (plásticos, vidros, papéis) exige movimentos de pinça fina com os dedos em frequência extremamente elevada. Esse esforço repetitivo, associado à velocidade constante da esteira mecânica, tensiona severamente os tendões dos punhos e braços, desencadeando Tenossinovites, Síndrome do Túnel do Carpo e outras Lesões por Esforços Repetitivos (LER/DORT).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🩸 2. RISCOS MECÂNICOS E ACIDENTES POR PERFUROCORTANTES OCULTOS

• Materiais Cortantes Invisíveis na Massa de Resíduos:
Apesar de ser rotulada como "lixo limpo", a coleta seletiva frequentemente recebe materiais descartados incorretamente pela população. Os triadores enfrentam o risco diário de cortes profundos causados por cacos de vidro de lâmpadas ou garrafas quebradas, rebarbas de latas de alumínio e pregos ocultos em caixas de madeira.

• O Risco Crítico de Agulhas Descartadas:
O descarte clandestino de seringas com agulhas usadas por usuários domiciliares (como diabéticos) em sacos de recicláveis representa o maior perigo mecânico e biológico da atividade. A perfuração acidental dos dedos introduz patógenos diretamente na corrente sanguínea, expondo o trabalhador a infecções por vírus graves (HIV, Hepatite B e C).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦠 3. RISCO QUÍMICO E MICROBIOLÓGICO NO PERÍMETRO DE TRIAGEM

• Contaminação por Restos Orgânicos e Fungos:
A presença de resíduos alimentares em potes e embalagens não lavadas propicia a biodegradação acelerada e a proliferação de colônias massivas de fungos, bactérias e bolores dentro dos fardos e sacos armazenados.

• Exposição a Bioaerossóis e Inalação de Esporos:
Ao rasgar os sacos de resíduos para despejá-los na esteira, ocorre a liberação forçada de poeiras orgânicas e bioaerossóis. A inalação crônica desses esporos fúngicos e endotoxinas bacterianas causa reações inflamatórias severas no sistema respiratório, resultando em rinites, alveolites alérgicas e asma ocupacional crônica nos operadores de galpão.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ 4. MEDIDAS DE CONTROLE ENGENHARIA, ADEQUAÇÃO DE POSTO E EPIS

A melhoria das condições de trabalho e proteção à saúde nas cooperativas de reciclagem exige a aplicação de intervenções ergonômicas e barreiras físicas rígidas:

• Intervenções de Engenharia no Posto de Trabalho:
- Instalação de plataformas elevatórias ou esteiras com regulagem de altura, garantindo que a área de alcance dos braços do trabalhador fique na altura do cotovelo, evitando a flexão contínua do tronco;
- Fornecimento obrigatório de tapetes antifadiga de borracha expandida nas estações de trabalho em pé, reduzindo o impacto articular nas pernas e coluna.

• Controles Administrativos e Organizacionais:
- Implementação de pausas ergonômicas obrigatórias de 10 minutos a cada 50 minutos de trabalho contínuo para recuperação muscular;
- Organização de rodízio de funções entre os operadores (ex: alternar entre a triagem na esteira, alimentação da prensa hidráulica e movimentação de fardos com paleteiras).

• Equipamentos de Proteção Individual (EPI) Mandatórios:
- Luvas de Proteção de Alta Densidade: Uso de luvas de raspa de couro grossas ou luvas revestidas com fibras de nitrila/PU resistentes a cortes e perfurações mecânicas;
- Mangotes de proteção de raspa para os antebraços;
- Aventais impermeáveis de PVC ou lona para proteger o tronco contra umidade e perfurações;
- Máscaras filtrantes PFF2 contra poeiras e bioaerossóis orgânicos;
- Calçados de segurança com biqueira de aço e palmilha antiperfurante estruturada.`
  },

];

const resourceTabsData: ResourceTab[] = [
  {
    id: "livros",
    title: "Biblioteca & Literatura Recomendada",
    shortTitle: "Livros Recomendados",
    icon: Library,
    category: "Estudos",
    body: (
      <div className="space-y-4">
        <h4 className="text-base font-semibold text-emerald-400">Obras Fundamentais para Consulta Acadêmica</h4>
        <p className="text-xs text-zinc-400 leading-relaxed font-light">
          Para fundamentação teórica de projetos públicos e TCCs, a IA mapeou as principais referências normativas e científicas utilizadas pelas bancas avaliadoras:
        </p>
        
        {/* AQUI ESTÁ A MÁGICA: Chamando o componente do Accordion com as capas dos livros */}
        <LibraryAccordion />
        
      </div>
    )
  },
  
  {
    id: "carreiras",
    title: "Formação Acadêmica & Engenharia de Segurança",
    shortTitle: "Formação & Universidades",
    icon: GraduationCap,
    category: "Carreira",
    body: (
      <div className="space-y-6">
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Trilhas Acadêmicas e Diretrizes de Ensino</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Mapeamento analítico de ementas, instituições na Baixada Santista e critérios de admissão para a formação de excelência em Health, Safety and Environment (HSE).
          </p>
        </div>

        {/* 1. Nível Técnico */}
        <div className="flex flex-col p-5 rounded-2xl bg-zinc-950/50 border border-white/10 relative overflow-hidden group hover:bg-zinc-900/80 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
          
          <h5 className="text-base font-bold text-white mb-3">Técnico em Segurança do Trabalho e Meio Ambiente</h5>
          
          <div className="flex flex-wrap gap-2 mb-4 select-none">
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Titulação: Nível Técnico</span>
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Duração: 3 Semestres</span>
          </div>

          <div className="space-y-3 text-xs font-light text-zinc-300">
            <p><strong className="text-emerald-400 font-medium">Perfil Profissiográfico:</strong> O Técnico em Segurança do Trabalho é o profissional responsável por proteger a integridade física e a saúde dos colaboradores nas empresas. Ele atua na prevenção de acidentes e doenças ocupacionais, garantindo o cumprimento das Normas Regulamentadoras (NRs), elaborando planos de risco e orientando o uso de EPIs.</p>
            <p><strong className="text-emerald-400 font-medium">Instituições na Região:</strong> ETECs do Centro Paula Souza (Unidades Praia Grande, Santos, São Vicente, Mongaguá, Cubatão, Guarujá, Itanhaém e Peruíbe).</p>
            <p><strong className="text-emerald-400 font-medium">Investimento:</strong> Ensino 100% gratuito.*</p>
            <p><strong className="text-emerald-400 font-medium">Admissão:</strong> Exclusivamente via <em>Vestibulinho ETEC</em> (Exame objetivo de 40 questões de materias escolares.). <br/><span className="text-[10px] text-zinc-500">*Requer pagamento de taxa de inscrição do edital (aprox. R$ 40,00), com possibilidade de isenção/redução socioeconômica.</span></p>
          </div>
        </div>

        {/* 2. Nível Tecnológico */}
        <div className="flex flex-col p-5 rounded-2xl bg-zinc-950/50 border border-white/10 relative overflow-hidden group hover:bg-zinc-900/80 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors" />
          
          <h5 className="text-base font-bold text-white mb-3">Tecnologia em Gestão Ambiental</h5>
          
          <div className="flex flex-wrap gap-2 mb-4 select-none">
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Titulação: Tecnólogo (Superior)</span>
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Duração: 6 Semestres (3 anos)</span>
          </div>

          <div className="space-y-3 text-xs font-light text-zinc-300">
            <p><strong className="text-emerald-400 font-medium">Perfil Profissiográfico:</strong> O tecnólogo em Gestão Ambiental é o profissional responsável por conciliar o desenvolvimento econômico e social com a preservação do meio ambiente. Ele atua no planejamento, execução e coordenação de projetos voltados para o uso sustentável dos recursos naturais.</p>
            <p><strong className="text-emerald-400 font-medium">Instituições na Região:</strong> As Fatecs (Faculdades de Tecnologia) estão localizadas exclusivamente no Estado de São Paulo. Atualmente, existem 87 unidades espalhadas por mais de 80 municípios paulistas. e Universidades Privadas (UNIP, Unimes (Santos), Unisanta, SENAC e outras.).</p>
            <p><strong className="text-emerald-400 font-medium">Investimento:</strong> FATEC (Ensino Gratuito*). Rede Privada e Pública (Mensalidades entre R$ 300 a R$ 800).</p>
            <p><strong className="text-emerald-400 font-medium">Admissão (FATEC):</strong> Via <em>Vestibular FATEC</em> (Prova objetiva + Redação) ou através das cotas do <em>Provão Paulista Seriado</em>. <br/><span className="text-[10px] text-zinc-500">*Requer pagamento de taxa de vestibular (aprox. R$ 90,00).</span></p>
          </div>
        </div>

        {/* 3. Nível Bacharelado (Engenharia) */}
        <div className="flex flex-col p-5 rounded-2xl bg-zinc-950/50 border border-white/10 relative overflow-hidden group hover:bg-zinc-900/80 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
          
          <h5 className="text-base font-bold text-white mb-3">Engenharia Ambiental e Sanitária</h5>
          
          <div className="flex flex-wrap gap-2 mb-4 select-none">
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Titulação: Bacharelado Pleno</span>
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Duração: 10 Semestres (5 anos)</span>
          </div>

          <div className="space-y-3 text-xs font-light text-zinc-300">
            <p><strong className="text-emerald-400 font-medium">Perfil Profissiográfico:</strong> Profissional habilitado pelo CREA para elaboração de projetos complexos de infraestrutura urbana, como Estações de Tratamento de Água (ETA), macrodrenagem contra enchentes costeiras e estudos de impacto atmosférico.</p>
            <p><strong className="text-emerald-400 font-medium">Instituições na Região:</strong> UNESP (São Vicente), UNIFESP (Santos) e instituições privadas como UNISANTOS, USP e Universidades Nacionais..</p>
            <p><strong className="text-emerald-400 font-medium">Investimento:</strong> Públicas (Gratuito através de provas). Privadas (Aproximadamente R$ 1.500 a R$ 2.800/mês).</p>
            <p><strong className="text-emerald-400 font-medium">Admissão:</strong> ENEM/SISU (para UNIFESP), Vestibular VUNESP (para UNESP), Fuvest (para USP) e vestibulares próprios ou Prouni/FIES para rede particular.</p>
          </div>
        </div>

        {/* 4. Nível Bacharelado (Biologia/Oceanografia) */}
        <div className="flex flex-col p-5 rounded-2xl bg-zinc-950/50 border border-white/10 relative overflow-hidden group hover:bg-zinc-900/80 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500/50 group-hover:bg-teal-400 transition-colors" />
          
          <h5 className="text-base font-bold text-white mb-3">Oceanografia / Ciências Biológicas (Biol. Marinha)</h5>
          
          <div className="flex flex-wrap gap-2 mb-4 select-none">
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Titulação: Bacharelado Pleno</span>
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-white/5 text-zinc-300 border border-white/10 rounded-md">Duração: 8 a 10 Semestres</span>
          </div>

          <div className="space-y-3 text-xs font-light text-zinc-300">
            <p><strong className="text-emerald-400 font-medium">Perfil Profissiográfico:</strong> Foco absoluto na dinâmica estuarina e marinha. Analisa a balneabilidade, gerencia impactos de derramamento de hidrocarbonetos e atua em centros de pesquisa ou IBAMA focados em ecossistemas costeiros e manguezais.</p>
            <p><strong className="text-emerald-400 font-medium">Instituições na Região:</strong> UNESP (Instituto de Biociências - Câmpus do Litoral Paulista), USP, UFSC, UFES, UNIVALI, UNIFESP e outras.</p>
            <p><strong className="text-emerald-400 font-medium">Investimento:</strong> Ensino 100% gratuito (Públicas).</p>
            <p><strong className="text-emerald-400 font-medium">Admissão:</strong> Vestibular VUNESP, Sistema SISU via nota do ENEM, Fuvest (USP) e outros.</p>
          </div>
        </div>

        {/* 5. Especialização (Eng. Segurança) */}
        <div className="flex flex-col p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 relative overflow-hidden group hover:bg-amber-950/40 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
          
          <h5 className="text-base font-bold text-white mb-3">Especialização em Engenharia de Segurança do Trabalho</h5>
          
          <div className="flex flex-wrap gap-2 mb-4 select-none">
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-md">Titulação: Pós-Graduação Lato Sensu</span>
            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-md">Duração: 18 a 24 Meses (Mínimo 600h)</span>
          </div>

          <div className="space-y-3 text-xs font-light text-zinc-300">
            <p><strong className="text-amber-400 font-medium">Perfil Profissiográfico:</strong> O mais alto nível de autoridade técnica em SST. É o único profissional legalmente autorizado a assinar Laudos Técnicos de Condições Ambientais do Trabalho (LTCAT) determinando o pagamento de periculosidade e insalubridade, além de projetar sistemas de combate a incêndio (AVCB).</p>
            <p><strong className="text-amber-400 font-medium">Pré-requisito Obrigatório:</strong> Lei Federal exige diploma prévio de Bacharel em Engenharia ou Arquitetura.</p>
            <p><strong className="text-amber-400 font-medium">Instituições na Região:</strong> USP • UNICAMP • UFRJ • UFMG • UFSC • SENAI • PUC • Mackenzie • UNIP • Estácio • Cruzeiro do Sul Virtual e outros.</p>
            <p><strong className="text-amber-400 font-medium">Investimento Médio:</strong> R$ 600,00 a R$ 1.500,00/mês ou através de ENEM, Fuvest, VUNESP e outros processos seletivos.</p>
          </div>
        </div>

      </div>
    )
  },

  {
    id: "licenciamento",
    title: "Licenciamento Ambiental em Praia Grande (SEMA)",
    shortTitle: "Licenciamento & Leis",
    icon: Landmark,
    category: "Diretrizes Judiciais",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Arcabouço Normativo da SEMA e Licenciamento</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Diretrizes jurídicas, leis de crimes ambientais e exigências documentais para aprovação de projetos de impacto local em Praia Grande, em conformidade com as esferas Federal, Estadual e Municipal.
          </p>
        </div>

        {/* 1. TABELA DE LEIS E NORMAS (FEDERAL / ESTADUAL) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Scale className="h-4 w-4 text-emerald-400" /> Fundamentação Legal (Federal e SP)
          </h5>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/50 shadow-inner">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/5 text-zinc-300 font-semibold border-b border-white/10">
                <tr>
                  <th className="p-3 w-1/3">Norma / Lei</th>
                  <th className="p-3 w-2/3">Aplicação Prática no Município</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400 font-light divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-emerald-400 font-medium">CF/88 (Art. 225) & LC 140/2011</td>
                  <td className="p-3">Dá poder à Prefeitura para licenciar atividades de <strong>impacto ambiental local</strong>, descentralizando a atuação que antes era exclusiva da CETESB.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-emerald-400 font-medium">Resolução CONAMA nº 237/97</td>
                  <td className="p-3">Institui a obrigatoriedade do sistema de aprovação trifásico: <strong>LP (Prévia), LI (Instalação) e LO (Operação)</strong> para obras e indústrias.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-amber-400 font-medium">Lei Federal nº 9.605/98</td>
                  <td className="p-3"><strong>Lei de Crimes Ambientais:</strong> Fixa sanções penais e multas diárias para empresas que operam, poluem ou constroem sem licença oficial da SEMA.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">Decreto Estadual 8.468/76 (SP)</td>
                  <td className="p-3">Rege o controle da poluição em SP. Define os padrões rigorosos para o lançamento de efluentes líquidos e emissões atmosféricas na Baixada.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">Deliberação CONSEMA 01/2024</td>
                  <td className="p-3">Tabela exata das atividades que a SEMA de Praia Grande tem autonomia para licenciar (ex: postos de gasolina, condomínios verticais e terraplenagem).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. CARDS DAS FASES DO LICENCIAMENTO (RITO TRIFÁSICO) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">O Rito Trifásico de Licenciamento</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-[#0f0f13]/80 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors">
              <span className="font-bold text-emerald-400 block text-sm mb-1">1. Licença Prévia (LP)</span>
              <p className="text-zinc-400 font-light">Aprova a localização e a concepção. A prefeitura atesta a <strong>viabilidade ambiental</strong> do projeto antes da obra existir no papel.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0f0f13]/80 border border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <span className="font-bold text-amber-400 block text-sm mb-1">2. Licença de Instalação (LI)</span>
              <p className="text-zinc-400 font-light">Autoriza o <strong>início das obras</strong> no canteiro. Exige mitigação em SST, controle rigoroso de poeira e descarte de resíduos do solo.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0f0f13]/80 border border-blue-500/20 hover:border-blue-500/50 transition-colors">
              <span className="font-bold text-blue-400 block text-sm mb-1">3. Licença de Operação (LO)</span>
              <p className="text-zinc-400 font-light">Libera o <strong>funcionamento comercial</strong>. Fiscais testam se as medidas de controle de poluição prometidas foram de fato construídas.</p>
            </div>
          </div>
        </div>

        {/* 3. CHECKLIST DE DOCUMENTAÇÃO (DIVIDIDO EM 2 COLUNAS) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Documentação Técnica Exigida para Protocolo</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Coluna Esquerda: Estudos */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h6 className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                <FileCheck className="h-3 w-3" /> Estudos Ambientais (AIA)
              </h6>
              <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                <li><strong className="text-white">FCA:</strong> Formulário de Caracterização (dados do projeto).</li>
                <li><strong className="text-white">RAP / EAS:</strong> Relatório Simplificado p/ dimensionar impactos de médio porte na vizinhança.</li>
                <li><strong className="text-white">EIA/RIMA:</strong> Exigido apenas para obras de impacto massivo (ex: portos, rodovias litorâneas).</li>
                <li><strong className="text-emerald-400">PGRCC:</strong> Plano obrigatório p/ construção civil (garante destinação correta de gesso e entulho).</li>
                <li><strong className="text-amber-400">PGRSS:</strong> Plano exigido para UPAs e Hospitais (manejo de perfurocortantes e lixo infectante).</li>
              </ul>
            </div>

            {/* Coluna Direita: Laudos e Alvarás */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h6 className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                <Building2 className="h-3 w-3" /> Laudos e Urbanismo
              </h6>
              <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                <li><strong className="text-white">Certidão de Uso do Solo:</strong> Confirma se o Plano Diretor do município autoriza a indústria naquele bairro.</li>
                <li><strong className="text-white">Laudo Acústico Industrial:</strong> Garante que os maquinários não violam a Lei do Silêncio e NR-15.</li>
                <li><strong className="text-white">Laudo de Supressão Vegetal:</strong> Autoriza o corte de árvores, estipulando taxas de compensação.</li>
                <li><strong className="text-white">Outorga DAEE:</strong> Documento estadual obrigatório para perfuração de poços e uso de lençol freático.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  },

    {
    id: "legislacao",
    title: "Legislação e Crimes Ambientais (Lei 9.605/98)",
    shortTitle: "Lei de Crimes Ambientais",
    icon: Scale,
    category: "Diretrizes Judiciais",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Lei Federal nº 9.605/1998</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            A base jurídica magna que define as sanções penais e administrativas aplicadas a condutas lesivas ao meio ambiente. É o principal instrumento do Ministério Público para punir negligências em SST e Meio Ambiente.
          </p>
        </div>

        {/* 1. CARDS: A TRÍPLICE RESPONSABILIDADE (ESTILO LICENCIAMENTO) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">A Tríplice Responsabilidade Ambiental</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-[#0f0f13]/80 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors">
              <span className="font-bold text-emerald-400 block text-sm mb-1">1. Esfera Civil (Reparação)</span>
              <p className="text-zinc-400 font-light">A responsabilidade é <strong>Objetiva</strong> (não depende de culpa). A empresa é obrigada a pagar indenizações e recuperar a área degradada a qualquer custo.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0f0f13]/80 border border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <span className="font-bold text-amber-400 block text-sm mb-1">2. Esfera Administrativa</span>
              <p className="text-zinc-400 font-light">Punições aplicadas pelos órgãos fiscais (SEMA/CETESB/IBAMA), como <strong>multas milionárias, embargos de obra</strong> e cassação de licenças.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0f0f13]/80 border border-red-500/20 hover:border-red-500/50 transition-colors">
              <span className="font-bold text-red-400 block text-sm mb-1">3. Esfera Penal (Crime)</span>
              <p className="text-zinc-400 font-light">A responsabilidade atinge o <strong>CPF do Diretor/Engenheiro</strong> (podendo gerar prisão) e o <strong>CNPJ da Empresa</strong> (podendo fechar a corporação).</p>
            </div>
          </div>
        </div>

        {/* 2. TABELA DOS ARTIGOS CRÍTICOS (GLASSMORPHISM) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Gavel className="h-4 w-4 text-emerald-400" /> Principais Artigos Aplicados à Indústria e Construção
          </h5>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/50 shadow-inner">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/5 text-zinc-300 font-semibold border-b border-white/10">
                <tr>
                  <th className="p-3 w-1/4">Artigo da Lei</th>
                  <th className="p-3 w-3/4">Descrição e Impacto no Compliance (SST e Meio Ambiente)</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400 font-light divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-red-400 font-medium">Art. 3º e 4º <br/><span className="text-[10px] text-zinc-500">Pessoa Jurídica</span></td>
                  <td className="p-3"><strong>A Empresa comete crime:</strong> A pessoa jurídica (CNPJ) pode ser processada criminalmente. O juiz pode <em>desconsiderar a pessoa jurídica</em> e invadir os bens pessoais dos sócios se a empresa usar o CNPJ como "escudo" para não pagar os danos.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-emerald-400 font-medium">Art. 54 <br/><span className="text-[10px] text-zinc-500">Poluição</span></td>
                  <td className="p-3"><strong>Crime de Poluição:</strong> Causar poluição de qualquer natureza em níveis que resultem em danos à saúde humana (SST) ou mortandade de animais. <em>Pena: Reclusão, de 1 a 4 anos, e multa.</em></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-emerald-400 font-medium">Art. 56 <br/><span className="text-[10px] text-zinc-500">Produtos Tóxicos</span></td>
                  <td className="p-3"><strong>Transporte e Armazenamento Irregular:</strong> Produzir, processar, embalar, importar, exportar ou guardar produtos perigosos/tóxicos em desacordo com as exigências legais (Falta de FISPQ, bacias de contenção ou EPI).</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-amber-400 font-medium">Art. 60 <br/><span className="text-[10px] text-zinc-500">Falta de Licença</span></td>
                  <td className="p-3"><strong>Operação Clandestina:</strong> Construir, instalar ou fazer funcionar estabelecimentos, obras ou serviços potencialmente poluidores SEM licença ou contrariando as normas da CETESB/SEMA.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-purple-400 font-medium">Art. 69-A <br/><span className="text-[10px] text-zinc-500">Fraude Técnica</span></td>
                  <td className="p-3"><strong>Laudo Falso (Perigo para Engenheiros):</strong> Elaborar ou apresentar laudo, estudo ou relatório ambiental (EIA/RIMA, PGR, LTCAT) total ou parcialmente falso ou enganoso. <em>Pena: Reclusão, de 3 a 6 anos, e multa.</em></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. CHECKLIST DE PENALIDADES (DIVIDIDO EM 2 COLUNAS) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Sanções Aplicáveis e Dosimetria da Pena</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Coluna Esquerda: Penas para as Empresas */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h6 className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                <Building2 className="h-3 w-3" /> Penas para as Empresas (Art. 21)
              </h6>
              <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                <li><strong className="text-white">Multa Financeira:</strong> Pode chegar a R$ 50 milhões.</li>
                <li><strong className="text-white">Suspensão de Atividades:</strong> Interdição parcial ou total do maquinário ou da planta industrial.</li>
                <li><strong className="text-red-400">Proibição de Contratar:</strong> A empresa fica proibida de participar de licitações com a Prefeitura e de receber subsídios.</li>
                <li><strong className="text-red-400">Liquidação Forçada:</strong> Se a empresa foi criada apenas para ocultar crimes, o juiz decreta seu fechamento e o patrimônio vai para o Fundo Penitenciário.</li>
              </ul>
            </div>

            {/* Coluna Direita: Agravantes e Atenuantes */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h6 className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                <Gavel className="h-3 w-3" /> Agravantes e Atenuantes
              </h6>
              <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                <li><strong className="text-emerald-400">Atenuante (Reduz a pena):</strong> Comunicação imediata do vazamento às autoridades; colaboração com fiscais; baixo grau de instrução do operário.</li>
                <li><strong className="text-amber-400">Agravante (Aumenta a pena):</strong> Cometer o crime à noite ou em feriados; reincidência técnica; tentar obter vantagem financeira com a poluição.</li>
                <li><strong className="text-red-400">Agravante Máximo:</strong> Quando a infração atinge áreas de preservação permanente (APPs), manguezais ou causa danos irreversíveis à fauna costeira.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  },
  
  {
    id: "matriz",
    title: "Matriz de Aspectos e Impactos Ambientais (ISO 14001 & NR-9)",
    shortTitle: "Matriz de Impactos",
    icon: BarChart3,
    category: "Ferramentas Analíticas",
    body: (
      <div className="space-y-8">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Mapeamento Prático de Riscos e Mitigações</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Baseado na metodologia da ISO 14001 e NR-9, este painel cruza as atividades operacionais com suas causas ambientais (Aspectos) e detalha cientificamente os 10 maiores agentes de risco físico, químico e biológico, incluindo patologias, números CAS e protocolos médicos.
          </p>
        </div>

        {/* PARTE 1: ASPECTOS E IMPACTOS OPERACIONAIS (OS 5 CARDS ORIGINAIS) */}
        <div className="space-y-4">
          <h5 className="text-sm font-bold text-white mb-2">1. Impactos Operacionais de Engenharia</h5>
          
          {/* CARD 1: Movimentação de Terra */}
          <div className="flex flex-col rounded-2xl bg-[#0f0f13]/80 border border-white/10 overflow-hidden">
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Trees className="h-4 w-4" /></div>
              <h5 className="text-sm font-bold text-white">Terraplenagem e Supressão Vegetal</h5>
            </div>
            <div className="p-4 space-y-4 text-xs font-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Aspecto (A Causa)</span>
                  <p className="text-zinc-300">Geração de material particulado (poeira de sílica), supressão de flora local e exposição do solo nu à chuva.</p>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 font-bold">Impacto (O Dano)</span>
                  <p className="text-zinc-300">Poluição do ar respirável, perda de biodiversidade e assoreamento (entupimento) de rios e canais de drenagem.</p>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">Medidas de Mitigação e Prevenção</span>
                <p className="text-emerald-100/80">Umectação contínua (molhar) as vias de terra, instalação de tapumes, replantio de mudas e uso de máscaras PFF2.</p>
              </div>
            </div>
          </div>

          {/* CARD 2: Manutenção de Frota Pesada */}
          <div className="flex flex-col rounded-2xl bg-[#0f0f13]/80 border border-white/10 overflow-hidden">
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Truck className="h-4 w-4" /></div>
              <h5 className="text-sm font-bold text-white">Manutenção de Frotas e Troca de Óleo</h5>
            </div>
            <div className="p-4 space-y-4 text-xs font-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Aspecto (A Causa)</span>
                  <p className="text-zinc-300">Geração de óleo lubrificante usado (OLUC), descarte de estopas sujas e vazamento acidental de hidrocarbonetos.</p>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 font-bold">Impacto (O Dano)</span>
                  <p className="text-zinc-300">Contaminação severa do solo arenoso, infiltração no lençol freático e intoxicação hídrica da fauna.</p>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">Medidas de Mitigação e Prevenção</span>
                <p className="text-emerald-100/80">Bandejas de contenção, instalação de Caixas Separadoras de Água e Óleo (CSAO) e logística reversa certificada (ANP).</p>
              </div>
            </div>
          </div>

          {/* CARD 3: Galerias */}
          <div className="flex flex-col rounded-2xl bg-[#0f0f13]/80 border border-white/10 overflow-hidden">
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Bug className="h-4 w-4" /></div>
              <h5 className="text-sm font-bold text-white">Desobstrução de Galerias Subterrâneas</h5>
            </div>
            <div className="p-4 space-y-4 text-xs font-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Aspecto (A Causa)</span>
                  <p className="text-zinc-300">Liberação de gases confinados (como Sulfeto de Hidrogênio) e contato direto com efluentes biológicos.</p>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 font-bold">Impacto (O Dano)</span>
                  <p className="text-zinc-300">Asfixia química do trabalhador, proliferação de vetores de doenças (leptospirose) e contaminação cruzada.</p>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">Medidas de Mitigação e Prevenção</span>
                <p className="text-emerald-100/80">Aplicação da NR-33. Exaustores mecânicos no bueiro, explosímetro multigas antes da entrada e macacões impermeáveis.</p>
              </div>
            </div>
          </div>

          {/* CARD 4: Fundações */}
          <div className="flex flex-col rounded-2xl bg-[#0f0f13]/80 border border-white/10 overflow-hidden">
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400"><VolumeX className="h-4 w-4" /></div>
              <h5 className="text-sm font-bold text-white">Fundações de Obras Civis (Bate-Estacas)</h5>
            </div>
            <div className="p-4 space-y-4 text-xs font-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Aspecto (A Causa)</span>
                  <p className="text-zinc-300">Emissão de ondas de choque no solo, vibração estrutural profunda e ruído contínuo de alto impacto.</p>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 font-bold">Impacto (O Dano)</span>
                  <p className="text-zinc-300">Poluição sonora extrema, perturbação da comunidade, evasão da avifauna e rachaduras em imóveis no entorno.</p>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">Medidas de Mitigação e Prevenção</span>
                <p className="text-emerald-100/80">Substituição por sistemas hélice contínua, restrição de horário (Lei do Silêncio) e proteção auditiva tipo concha dupla.</p>
              </div>
            </div>
          </div>

          {/* CARD 5: Pintura */}
          <div className="flex flex-col rounded-2xl bg-[#0f0f13]/80 border border-white/10 overflow-hidden">
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><ShieldAlert className="h-4 w-4" /></div>
              <h5 className="text-sm font-bold text-white">Pintura Industrial e Uso de Solventes</h5>
            </div>
            <div className="p-4 space-y-4 text-xs font-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">Aspecto (A Causa)</span>
                  <p className="text-zinc-300">Emissão de Compostos Orgânicos Voláteis (COVs) na atmosfera e geração de resíduos perigosos (Classe I).</p>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500 font-bold">Impacto (O Dano)</span>
                  <p className="text-zinc-300">Alteração da qualidade do ar respirável, intoxicação aguda neurológica e potencial explosivo inflamável.</p>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">Medidas de Mitigação e Prevenção</span>
                <p className="text-emerald-100/80">Uso de tintas à base de água, cabines com filtros exaustores, cofres de inflamáveis e Respirador Purificador de Ar (EPR).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-4"></div>

        {/* PARTE 2: OS 10 PRINCIPAIS RISCOS OCUPACIONAIS E AMBIENTAIS (NOVIDADE) */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg"><Stethoscope className="h-5 w-5 text-red-400" /></div>
            <div>
              <h5 className="text-sm font-bold text-white">2. Clínica Ocupacional: Top 10 Agentes de Risco</h5>
              <p className="text-[11px] text-zinc-400 font-light">Abaixo constam as fichas toxicológicas de acordo com a categorização oficial de cores da Segurança do Trabalho.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* --- RISCOS QUÍMICOS (VERMELHO) --- */}
            <div className="col-span-1 md:col-span-2 text-[10px] font-mono tracking-widest text-red-400 uppercase mt-2 mb-1 flex items-center gap-2">
              <Skull className="h-4 w-4" /> Grupo 1: Riscos Químicos (Fumos, Névoas e Vapores)
            </div>

            {/* Químico 1: Sílica */}
            <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/30 flex flex-col hover:bg-red-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-red-400">Sílica Cristalina Livre</h6>
                <span className="bg-red-500/20 text-red-300 text-[9px] px-2 py-0.5 rounded font-mono">CAS: 14808-60-7</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Corte de concreto, jateamento de areia, britagem.</p>
                <p><strong className="text-red-300">Patologia:</strong> Silicose (Pneumoconiose irreversível), Câncer de pulmão.</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Umectação contínua da via seca, exaustão mecânica localizada, Respirador PFF2/PFF3.</p>
                <p className="pt-2 border-t border-red-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> A silicose não tem cura. O tratamento é paliativo com suporte pulmonar, broncodilatadores e oxigenoterapia. Prevenção é a única via.
                </p>
              </div>
            </div>

            {/* Químico 2: Benzeno */}
            <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/30 flex flex-col hover:bg-red-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-red-400">Benzeno (Hidrocarboneto)</h6>
                <span className="bg-red-500/20 text-red-300 text-[9px] px-2 py-0.5 rounded font-mono">CAS: 71-43-2</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Refinarias, postos de combustíveis, indústrias petroquímicas (polo de Cubatão).</p>
                <p><strong className="text-red-300">Patologia:</strong> Benzenismo, Leucemia Mieloide Aguda, aplasia medular.</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Enclausuramento total do processo, bombas com recuperação de vapor, rodízio de função.</p>
                <p className="pt-2 border-t border-red-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Cessação imediata da exposição. Transfusão de sangue em casos de anemia grave e transplante de medula óssea nos casos de Leucemia.
                </p>
              </div>
            </div>

            {/* Químico 3: Amônia */}
            <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/30 flex flex-col hover:bg-red-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-red-400">Amônia Anidra</h6>
                <span className="bg-red-500/20 text-red-300 text-[9px] px-2 py-0.5 rounded font-mono">CAS: 7664-41-7</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Sistemas de refrigeração industrial e armazéns frigoríficos portuários.</p>
                <p><strong className="text-red-300">Patologia:</strong> Queimaduras químicas na córnea, asfixia letal e edema pulmonar agudo.</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Chuveiros lava-olhos de emergência, máscaras faciais completas (Filtro K) ou linha de ar.</p>
                <p className="pt-2 border-t border-red-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Irrigação ocular/dérmica imediata com água por 15 a 30 minutos. Suporte ventilatório invasivo rápido no PS, devido ao edema obstrutivo.
                </p>
              </div>
            </div>

            {/* Químico 4: Monóxido de Carbono */}
            <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/30 flex flex-col hover:bg-red-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-red-400">Monóxido de Carbono (CO)</h6>
                <span className="bg-red-500/20 text-red-300 text-[9px] px-2 py-0.5 rounded font-mono">CAS: 630-08-0</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Escapamentos de geradores a diesel, fornos, espaços confinados (NR-33).</p>
                <p><strong className="text-red-300">Patologia:</strong> Intoxicação química aguda (hipóxia tecidual letal) por alta afinidade com a hemoglobina.</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Ventilação mecânica insufladora, detectores multigás alarmantes pessoais.</p>
                <p className="pt-2 border-t border-red-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Remoção imediata para área ventilada. Administração de Oxigênio a 100% via máscara não reinalante. Em casos neurológicos graves, uso de Câmara Hiperbárica.
                </p>
              </div>
            </div>

            {/* --- RISCOS FÍSICOS (VERDE) --- */}
            <div className="col-span-1 md:col-span-2 text-[10px] font-mono tracking-widest text-green-500 uppercase mt-4 mb-1 flex items-center gap-2">
              <Radiation className="h-4 w-4" /> Grupo 2: Riscos Físicos (Energia e Vibração)
            </div>

            {/* Físico 1: Ruído */}
            <div className="p-4 rounded-xl bg-green-950/10 border border-green-500/30 flex flex-col hover:bg-green-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-green-400">Ruído Contínuo e Impulsivo</h6>
                <span className="bg-green-500/20 text-green-300 text-[9px] px-2 py-0.5 rounded font-mono">NR-15 (Anexo 1 e 2)</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Motores pesados, britadeiras, prensas, serras circulares.</p>
                <p><strong className="text-red-300">Patologia:</strong> PAIR (Perda Auditiva Induzida por Ruído), hipertensão, estresse crônico.</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Manutenção em coxins de máquinas, isolamento acústico de cabines, uso de Protetores Auditivos (Plug ou Concha) com NRRsf adequado.</p>
                <p className="pt-2 border-t border-green-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> A PAIR é neuro-sensorial e irreversível. O tratamento é reabilitativo, utilizando aparelhos auditivos ortopédicos para estagnar a evolução do isolamento social.
                </p>
              </div>
            </div>

            {/* Físico 2: Calor */}
            <div className="p-4 rounded-xl bg-green-950/10 border border-green-500/30 flex flex-col hover:bg-green-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-green-400">Sobrecarga Térmica (Calor)</h6>
                <span className="bg-green-500/20 text-green-300 text-[9px] px-2 py-0.5 rounded font-mono">Índice IBUTG</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Pavimentação asfáltica sob sol costeiro, siderurgia, fornos industriais.</p>
                <p><strong className="text-red-300">Patologia:</strong> Cãibras térmicas, exaustão por calor, Intermação (Heat Stroke - risco de morte).</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Pausas obrigatórias em áreas aclimatizadas, hidratação reposta via bebedouros próximos, vestimentas leves refletivas.</p>
                <p className="pt-2 border-t border-green-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Na intermação: remoção rápida das roupas, resfriamento corporal ativo (gelo/borrifamento) e hidratação intravenosa imediata (Ringer Lactato) na UTI.
                </p>
              </div>
            </div>

            {/* Físico 3: Radiação UV */}
            <div className="p-4 rounded-xl bg-green-950/10 border border-green-500/30 flex flex-col hover:bg-green-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-green-400">Radiação Não Ionizante (UV/IR)</h6>
                <span className="bg-green-500/20 text-green-300 text-[9px] px-2 py-0.5 rounded font-mono">Espectro Eletromagnético</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Operações com solda (MIG/TIG/Eletrodo), exposição solar prolongada em canteiros.</p>
                <p><strong className="text-red-300">Patologia:</strong> Fotoceratite ocular (cegueira temporária da solda), cataratas, melanoma (câncer de pele).</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Máscaras de solda com escurecimento automático, cortinas inactínicas, vestimenta anti-UV, filtro solar laboratório.</p>
                <p className="pt-2 border-t border-green-500/20 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Fotoceratite tratada com curativos oculares oclusivos e colírios analgésicos. Lesões tumorais dérmicas requerem biópsia, excisão cirúrgica e oncologia.
                </p>
              </div>
            </div>

            {/* --- RISCOS BIOLÓGICOS (MARROM) --- */}
            <div className="col-span-1 md:col-span-2 text-[10px] font-mono tracking-widest text-amber-600 uppercase mt-4 mb-1 flex items-center gap-2">
              <Biohazard className="h-4 w-4" /> Grupo 3: Riscos Biológicos (Vírus e Bactérias)
            </div>

            {/* Biológico 1: Leptospirose */}
            <div className="p-4 rounded-xl bg-amber-950/10 border border-amber-700/50 flex flex-col hover:bg-amber-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-amber-500">Leptospira interrogans (Bactéria)</h6>
                <span className="bg-amber-900/40 text-amber-400 text-[9px] px-2 py-0.5 rounded font-mono">Risco Classe 2</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Obras pluviais, manutenção de redes de esgoto e alagamentos por chuvas litorâneas.</p>
                <p><strong className="text-red-300">Patologia:</strong> Leptospirose (Doença de Weil). Causa icterícia, insuficiência renal grave e hemorragias pulmonares.</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Controle rígido de pragas e roedores no canteiro, uso de botas de PVC de cano longo e impermeáveis.</p>
                <p className="pt-2 border-t border-amber-700/30 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Antibioticoterapia intravenosa precoce (Penicilina Cristalina, Doxiciclina). Em casos evolutivos da Síndrome de Weil, requer hemodiálise de urgência.
                </p>
              </div>
            </div>

            {/* Biológico 2: Arboviroses */}
            <div className="p-4 rounded-xl bg-amber-950/10 border border-amber-700/50 flex flex-col hover:bg-amber-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-amber-500">Vírus da Dengue (Arbovírus)</h6>
                <span className="bg-amber-900/40 text-amber-400 text-[9px] px-2 py-0.5 rounded font-mono">Risco Classe 2</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> Água parada em lajes e poços de elevadores em canteiros de obra (vetor: Aedes aegypti).</p>
                <p><strong className="text-red-300">Patologia:</strong> Dengue clássica e Dengue Hemorrágica (choque hipovolêmico).</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Drenagem sistemática do canteiro (PGRCC), telamento de caixas d'água, campanhas SIPATMA, uso de repelentes cutâneos com DEET/Icaridina.</p>
                <p className="pt-2 border-t border-amber-700/30 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Hidratação intravenosa massiva. Repouso absoluto. É estritamente proibido o uso de Salicilatos (AAS/Aspirina) e anti-inflamatórios devido ao risco de hemorragia cerebral fatal.
                </p>
              </div>
            </div>

            {/* Biológico 3: Coliformes e VHA */}
            <div className="p-4 rounded-xl bg-amber-950/10 border border-amber-700/50 flex flex-col hover:bg-amber-950/20 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h6 className="text-sm font-bold text-amber-500">Patógenos Entéricos (E. coli / VHA)</h6>
                <span className="bg-amber-900/40 text-amber-400 text-[9px] px-2 py-0.5 rounded font-mono">Risco Classe 2/3</span>
              </div>
              <div className="space-y-2 text-xs font-light text-zinc-300">
                <p><strong className="text-white">Fonte Comum:</strong> ETA/ETE, manutenção de banheiros químicos de obra, limpeza urbana.</p>
                <p><strong className="text-red-300">Patologia:</strong> Gastroenterites agudas, cólera e Hepatite A (inflamação hepática viral aguda).</p>
                <p><strong className="text-emerald-400">Mitigação:</strong> Vacinação ocupacional (Hepatite A), lavatório funcional nos canteiros com sabão bactericida (NR-24), luvas nitrílicas.</p>
                <p className="pt-2 border-t border-amber-700/30 text-[11px] text-zinc-400">
                  <strong className="text-white">Tratamento Médico:</strong> Reposição agressiva de fluidos e eletrólitos (Soro de Rehidratação). A Hepatite A exige acompanhamento da função hepática; não possui antivirais específicos.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  },
  
  {
  id: "ods",
    title: "Agenda 2030 e as ODS na Baixada Santista",
    shortTitle: "ODS da ONU na Região",
    icon: Globe,
    category: "Diretrizes Globais",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Os 17 Objetivos de Desenvolvimento Sustentável (ODS)</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            A Agenda 2030 da ONU aplicada à realidade de Praia Grande. Abaixo estão os 17 compromissos globais focados em erradicar a pobreza, proteger o ecossistema costeiro e garantir paz e prosperidade.
          </p>
        </div>

        {/* GRID DOS CARDS ODS (Estilo Flashcard Minimalista) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { num: 1, title: "Erradicação da Pobreza", color: "bg-[#E5243B]", icon: Users, desc: "Acabar com a pobreza em todas as suas formas e em todos os lugares." },
            { num: 2, title: "Fome Zero e Agric. Sustentável", color: "bg-[#DDA63A]", icon: Wheat, desc: "Acabar com a fome, alcançar segurança alimentar e agricultura sustentável." },
            { num: 3, title: "Saúde e Bem-Estar", color: "bg-[#4C9F38]", icon: HeartPulse, desc: "Garantir uma vida saudável e promover o bem-estar para todas as idades." },
            { num: 4, title: "Educação de Qualidade", color: "bg-[#C5192D]", icon: BookOpen, desc: "Garantir educação inclusiva, equitativa e oportunidades de aprendizado." },
            { num: 5, title: "Igualdade de Gênero", color: "bg-[#FF3A21]", icon: Equal, desc: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas." },
            { num: 6, title: "Água Limpa e Saneamento", color: "bg-[#26BDE2]", icon: Droplets, desc: "Garantir disponibilidade e manejo sustentável da água e saneamento." },
            { num: 7, title: "Energia Limpa e Acessível", color: "bg-[#FCC30B]", icon: Sun, desc: "Garantir acesso à energia barata, confiável, sustentável e renovável." },
            { num: 8, title: "Trabalho Decente e Crescimento", color: "bg-[#A21942]", icon: Briefcase, desc: "Promover o crescimento econômico e trabalho decente para todos." },
            { num: 9, title: "Indústria, Inovação e Infra.", color: "bg-[#FD6925]", icon: Factory, desc: "Construir infraestrutura resiliente e promover a industrialização sustentável." },
            { num: 10, title: "Redução das Desigualdades", color: "bg-[#DD1367]", icon: Scale, desc: "Reduzir a desigualdade dentro dos países e entre eles." },
            { num: 11, title: "Cidades Sustentáveis", color: "bg-[#FD9D24]", icon: Building2, desc: "Tornar as cidades inclusivas, seguras, resilientes e sustentáveis." },
            { num: 12, title: "Consumo e Produção Responsáveis", color: "bg-[#BF8B2E]", icon: Recycle, desc: "Assegurar padrões de produção e de consumo sustentáveis e eficientes." },
            { num: 13, title: "Ação Contra a Mudança Global", color: "bg-[#3F7E44]", icon: CloudLightning, desc: "Tomar medidas urgentes para combater a mudança do clima e seus impactos." },
            { num: 14, title: "Vida na Água", color: "bg-[#0A97D9]", icon: Waves, desc: "Conservar e usar os oceanos e recursos marinhos para o desenvolvimento." },
            { num: 15, title: "Vida Terrestre", color: "bg-[#56C02B]", icon: Trees, desc: "Proteger florestas, combater desertificação e reverter degradação da terra." },
            { num: 16, title: "Paz, Justiça e Instituições Fortes", color: "bg-[#00689D]", icon: Scale, desc: "Promover sociedades pacíficas, acesso à justiça e instituições eficazes." },
            { num: 17, title: "Parcerias e Meios de Implem.", color: "bg-[#19486A]", icon: Handshake, desc: "Fortalecer meios de implementação e revitalizar a parceria global." },
          ].map((ods) => {
            const Icon = ods.icon;
            return (
              <div key={ods.num} className="flex flex-col rounded-2xl overflow-hidden bg-[#0f0f13] border border-white/10 shadow-lg group">
                
                {/* QUADRADO DA ODS (Cores Oficiais Hexadecimais) */}
                <div className={`${ods.color} p-4 aspect-square flex flex-col justify-between relative`}>
                  <span className="text-white font-black text-2xl drop-shadow-md">{ods.num}</span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-20 h-20 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-[11px] uppercase tracking-wide leading-tight drop-shadow-md z-10">
                    {ods.title}
                  </h5>
                </div>

                {/* RESUMO INFERIOR (< 100 caracteres) */}
                <div className="p-3 bg-zinc-950/80 flex-1 flex items-center">
                  <p className="text-[10px] text-zinc-400 leading-relaxed font-light">
                    {ods.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    )
  },

  {
    id: "tecnologias",
    title: "Tecnologias Verdes e Monitoramento Ambiental",
    shortTitle: "Tecnologias Verdes",
    icon: Cpu,
    category: "Inovação e Indústria 4.0",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Inovação Aplicada à Prevenção (Greentechs)</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            A integração da Indústria 4.0 com a Engenharia de Segurança. O uso de dados, automação e inteligência artificial para prever falhas operacionais e neutralizar impactos ambientais antes que atinjam o ecossistema urbano.
          </p>
        </div>

        {/* GRID DE TECNOLOGIAS (3 COLUNAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* TECNOLOGIA 1: IoT */}
          <div className="flex flex-col p-4 rounded-2xl bg-zinc-950/60 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl" />
            
            {/* Imagem Demonstrativa da Telemetria */}
            <div className="w-full h-32 rounded-xl overflow-hidden mb-3 border border-white/5 bg-zinc-900">
              <img 
                src="/images/telemetria.jpg" 
                alt="Demonstração de Telemetria e Sensores de Líquidos" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Activity className="h-4 w-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Telemetria e Sensores IoT</h5>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-3 flex-1">
              Dispositivos conectados à internet que medem a qualidade do ar e o nível de efluentes em tempo real.
            </p>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-400 block mb-1">Aplicação Prática</span>
              <p className="text-[10px] text-zinc-300 font-light">Sensores em Caixas Separadoras (CSAO) de postos e indústrias disparam alarmes automáticos, travando válvulas antes de um vazamento atingir o solo arenoso.</p>
            </div>
          </div>

          {/* TECNOLOGIA 2: Drones */}
          <div className="flex flex-col p-4 rounded-2xl bg-zinc-950/60 border border-blue-500/20 hover:border-blue-500/40 transition-all group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
            
            {/* Imagem Demonstrativa do Drone */}
            <div className="w-full h-32 rounded-xl overflow-hidden mb-3 border border-white/5 bg-zinc-900">
              <img 
                src="/images/drone.jpg" 
                alt="Modelos de Drones para Sensoriamento Remoto" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Globe className="h-4 w-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Drones e Sensoriamento</h5>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-3 flex-1">
              Veículos Aéreos Não Tripulados (VANTs) equipados com câmeras térmicas e espectrais para mapeamento rápido.
            </p>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-blue-400 block mb-1">Aplicação Prática</span>
              <p className="text-[10px] text-zinc-300 font-light">Auditoria remota em áreas de preservação e manguezais. Permite mapear descarte irregular de entulho sem expor o engenheiro a riscos físicos de campo.</p>
            </div>
          </div>

          {/* TECNOLOGIA 3: IA e Gestão */}
          <div className="flex flex-col p-4 rounded-2xl bg-zinc-950/60 border border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl" />
            
            {/* Logo Exclusiva da SST Intelligence */}
            <div className="w-full h-32 rounded-xl overflow-hidden mb-3 border border-white/5 bg-zinc-950 flex items-center justify-center p-4">
              <img 
                src="/images/sst-logo.png" 
                alt="SST Intelligence Logo" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Cpu className="h-4 w-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Softwares Preditivos (IA)</h5>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-3 flex-1">
              Algoritmos que cruzam grandes volumes de dados (Big Data) para automatizar o compliance corporativo e relatórios de SST.
            </p>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-purple-400 block mb-1">Aplicação Prática</span>
              <p className="text-[10px] text-zinc-300 font-light">Sistemas centralizados cruzam dados de validade de EPIs, treinamentos (NRs) e vencimento de licenças ambientais, evitando multas e paralisações fiscais.</p>
            </div>
          </div>

        </div>
      </div>
    )
  },

  {
    id: "campanhas",
    title: "Gestão Estratégica e Engenharia de SIPATMA",
    shortTitle: "Campanhas SIPATMA",
    icon: Megaphone,
    category: "Cultura de Prevenção",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Planejamento de Engenharia Comportamental (NR-5)</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Metodologia científica para aplicação da Semana Interna de Prevenção de Acidentes e Meio Ambiente. Alinhado às diretrizes da NR-5 e da ISO 45001, este módulo estabelece o rito legal de conscientização, triagem de NRs críticas e governança corporativa.
          </p>
        </div>

        {/* 1. EMBASAMENTO LEGAL E DIRETRIZES JURÍDICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950/50 border border-white/10 flex gap-3">
            <div className="mt-1"><Scale className="h-4 w-4 text-emerald-400" /></div>
            <div>
              <h6 className="text-[12px] font-bold text-white uppercase tracking-wide mb-1">Fundamentação Normativa (NR-5)</h6>
              <p className="text-[10px] text-zinc-400 font-light leading-relaxed">
                Cumprimento legal estrito do item <strong>5.3.1 (g) da NR-5</strong>. A campanha não é facultativa; constitui uma atribuição anual obrigatória da CIPA em conjunto com o SESMT para mitigar os riscos mapeados no PGR.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/50 border border-white/10 flex gap-3">
            <div className="mt-1"><FileText className="h-4 w-4 text-emerald-400" /></div>
            <div>
              <h6 className="text-[12px] font-bold text-white uppercase tracking-wide mb-1">Inclusão de Temas Obrigatórios por Lei</h6>
              <p className="text-[10px] text-zinc-400 font-light leading-relaxed">
                Conforme atualização recente da legislação, a SIPATMA deve incluir obrigatoriamente tópicos de <strong>prevenção e combate ao assédio sexual e demais formas de violência no ambiente de trabalho</strong>, integrando a saúde psicossocial à segurança física.
              </p>
            </div>
          </div>
        </div>

        {/* 2. MATRIZ CRONOGRAMA DE NRs CRÍTICAS (TABELA PREMIUM) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-emerald-400" /> Matriz Temática de Engenharia e NRs Relacionadas
          </h5>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/50 shadow-inner">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/5 text-zinc-300 font-semibold border-b border-white/10">
                <tr>
                  <th className="p-3 w-1/4">Dia / Norma Balizadora</th>
                  <th className="p-3 w-2/4">Foco Técnico Ocupacional</th>
                  <th className="p-3 w-1/4">Abordagem Ambiental Integrada</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400 font-light divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-amber-400 font-medium">Dia 1 • NR-1 & NR-6 <br/><span className="text-[9px] text-zinc-500">Percepção e Proteção</span></td>
                  <td className="p-3">Gerenciamento de Riscos Ocupacionais (PGR), uso correto, guarda, higienização e descarte seguro de EPIs contaminados.</td>
                  <td className="p-3 text-zinc-300">Logística Reversa de EPIs Classe I (NBR 10.004).</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-amber-400 font-medium">Dia 2 • NR-17 <br/><span className="text-[9px] text-zinc-500">Ergonomia Aplicada</span></td>
                  <td className="p-3">Análise Ergonômica do Trabalho (AET), prevenção de LER/DORT, biomecânica e pausas ativas na operação pesada.</td>
                  <td className="p-3 text-zinc-300">Otimização de layout fabril e redução de fadiga térmica.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-purple-400 font-medium">Dia 3 • NR-35 / NR-10 <br/><span className="text-[9px] text-zinc-500">Riscos de Alta Magnitude</span></td>
                  <td className="p-3">Sistemas de proteção contra quedas (SPCQ), permissão de trabalho (PT) e bloqueios de energias perigosas (LOTO).</td>
                  <td className="p-3 text-zinc-300">Planos de Evacuação de Emergência em desastres climáticos.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-emerald-400 font-medium">Dia 4 • NR-7 & NR-15 <br/><span className="text-[9px] text-zinc-500">Saúde e Higiene</span></td>
                  <td className="p-3">Controle médico (PCMSO), dosimetria de ruído industrial, monitoramento de agentes químicos voláteis e poeiras de sílica.</td>
                  <td className="p-3 text-zinc-300">Prevenção de Doenças do Trabalho por poluição hídrica/solo.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-emerald-400 font-medium">Dia 5 • 5 R's & ISO 14001 <br/><span className="text-[9px] text-zinc-500">Sustentabilidade</span></td>
                  <td className="p-3">Workshop de segregação na fonte geradora, auditorias internas de resíduos industriais e prevenção de vazamentos.</td>
                  <td className="p-3 text-zinc-300">Rastreabilidade legal com emissão de MTR e CDF.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. SISTEMA DE MÉTRICAS E INDICARES DE EFICÁCIA (MUITO ACADÊMICO) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Auditoria de Eficácia da Campanha (Métricas Básicas)</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px] font-light">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block mb-1 text-xs">Taxa de Adesão (TA)</span>
              <p className="text-zinc-400">Mensura o percentual de colaboradores ativos que participaram efetivamente de ao menos 75% das sessões técnicas dirigidas.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block mb-1 text-xs">Índice de Acertos (IA)</span>
              <p className="text-zinc-400">Calculado via testes pós-palestra para avaliar a retenção imediata do conhecimento técnico normativo repassado.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block mb-1 text-xs">Taxa de Near-Misses</span>
              <p className="text-zinc-400">Monitoramento do aumento ou queda no relato espontâneo de "quase-acidentes" nas semanas subsequentes à SIPATMA.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block mb-1 text-xs">ROI do Treinamento</span>
              <p className="text-zinc-400">Cruzamento de dados financeiros entre o custo de implantação da campanha e a redução do índice de sinistralidade e FAP.</p>
            </div>
          </div>
        </div>

        {/* 4. BLOCO DE INTEGRAÇÃO TECNOLÓGICA COM O SEU PROJETO */}
        <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row items-start gap-4">
          <div className="p-3 bg-emerald-500/20 rounded-xl shrink-0">
            <Cpu className="h-6 w-6 text-emerald-400" />
          </div>
          <div>
            <h6 className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-1.5">Automação de Inteligência com o SST Intelligence</h6>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              O ecossistema do **SST Intelligence** redefine a execução da SIPATMA por meio da digitalização completa: o motor de IA gera dinamicamente *Quizzes* interativos de conformidade regulatória, distribui cartilhas personalizadas via canais digitais e processa os dados de engajamento em tempo real, gerando relatórios automatizados de eficácia prontos para submissão à Auditoria Fiscal do Trabalho e Secretarias Municipais.
            </p>
          </div>
        </div>

      </div>
    )
  },

{
    id: "circular",
    title: "Economia Circular e Gestão de Resíduos",
    shortTitle: "Economia Circular",
    icon: Repeat,
    category: "Ferramentas Analíticas",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Transição Circular e Gestão de Resíduos (SGR)</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            A substituição do descarte linear por ciclos industriais fechados. Envolve a Logística Reversa e a categorização técnica de passivos ambientais para evitar multas e acidentes de trabalho com materiais perigosos.
          </p>
        </div>

        {/* 1. OS 5 R's DA SUSTENTABILIDADE (NOVIDADE) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">A Hierarquia dos 5 R's na Engenharia</h5>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              { r: "Repensar", desc: "A necessidade do consumo e os processos atuais." },
              { r: "Recusar", desc: "Produtos que geram impactos socioambientais significativos." },
              { r: "Reduzir", desc: "O desperdício de matéria-prima e energia na fonte." },
              { r: "Reutilizar", desc: "Aumentar a vida útil do produto antes de descartar." },
              { r: "Reciclar", desc: "Transformar o resíduo em nova matéria-prima (Última opção)." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 font-black text-lg mb-1">{item.r}</span>
                <p className="text-[9px] text-zinc-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. RASTREABILIDADE E DOCUMENTAÇÃO (O FOCO DA SECRETARIA DE MEIO AMBIENTE) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Compliance e Rastreabilidade de Resíduos (SIGOR/SINIR)</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-950/10 border border-blue-500/20 flex gap-3">
              <div className="mt-1"><Truck className="h-5 w-5 text-blue-400" /></div>
              <div>
                <h6 className="text-[12px] font-bold text-blue-400 uppercase tracking-wide mb-1">MTR (Manifesto de Transporte)</h6>
                <p className="text-[10px] text-zinc-300 font-light leading-relaxed">
                  Documento autodeclaratório nacional gerado pelo portal do SINIR (ou SIGOR em SP). Acompanha o caminhão durante todo o trajeto. <strong>Sem o MTR, o transporte é considerado crime ambiental, sujeito à apreensão do veículo pela Polícia Ambiental.</strong>
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-500/20 flex gap-3">
              <div className="mt-1"><FileSignature className="h-5 w-5 text-emerald-400" /></div>
              <div>
                <h6 className="text-[12px] font-bold text-emerald-400 uppercase tracking-wide mb-1">CDF (Certificado de Destinação)</h6>
                <p className="text-[10px] text-zinc-300 font-light leading-relaxed">
                  O atestado final emitido pelo receptor (aterro ou usina de reciclagem). <strong>É o único documento que isenta o gerador (sua empresa) da responsabilidade civil e penal</strong> sobre aquele resíduo perante o Ministério Público.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CLASSIFICAÇÃO NBR 10004 E CONAMA 307 (CONSTRUÇÃO CIVIL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Lado Esquerdo: NOVO - Tipos de Plásticos (NBR 13.230) */}
          <div>
            <h5 className="text-sm font-bold text-white mb-3">Triagem de Polímeros/Plásticos (ABNT NBR 13.230)</h5>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-emerald-400">[1] PET • [2] PEAD • [4] PEBD</span>
                  <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">Alta Reciclabilidade</span>
                </div>
                <p className="text-zinc-400 text-[10px] font-light">Garrafas de bebida, frascos de amaciante, sacolas e filmes flexíveis. Mercado de compra e venda altamente consolidado.</p>
              </div>
              
              <div className="p-3 rounded-xl bg-white/5 border border-amber-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-amber-400">[5] PP (Polipropileno) • [6] PS</span>
                  <span className="text-[8px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded font-mono">Médio Valor Técnico</span>
                </div>
                <p className="text-zinc-400 text-[10px] font-light">Tampas de garrafa, potes de utilidades domésticas, copos descartáveis e bandejas. Exige maquinário industrial limpo para refusão.</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-red-500/30">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-red-400">[3] PVC • [7] OUTROS / Mistos</span>
                  <span className="text-[8px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded font-mono">Crítico / Risco SST</span>
                </div>
                <p className="text-zinc-400 text-[10px] font-light">Tubos hidráulicos, acrílicos, poliuretano e peças técnicas de engenharia. <strong>Risco em SST:</strong> A incineração do PVC libera ácido clorídrico e dioxinas cancerígenas.</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: CONAMA 307 PGRCC */}
          <div>
            <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <HardHat className="h-4 w-4 text-amber-500" /> Construção Civil (CONAMA 307)
            </h5>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <span className="font-bold text-white block">Classe A (Agregados)</span>
                  <p className="text-zinc-400 text-[10px]">Tijolos, blocos, concreto, argamassa.</p>
                </div>
                <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded uppercase">100% Reciclável</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <span className="font-bold text-white block">Classe B (Recicláveis Básicos)</span>
                  <p className="text-zinc-400 text-[10px]">Papelão, plásticos, vidros, madeira.</p>
                </div>
                <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded uppercase">Logística Reversa</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-amber-500/30 flex justify-between items-center">
                <div>
                  <span className="font-bold text-amber-400 block">Classe C (Sem Tecnologia Viável)</span>
                  <p className="text-zinc-400 text-[10px]">Gesso (Drywall/Forro) e isopor (EPS).</p>
                </div>
                <span className="text-[8px] bg-amber-500/20 text-amber-400 px-2 py-1 rounded uppercase">Atenção Especial</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-red-500/30 flex justify-between items-center">
                <div>
                  <span className="font-bold text-red-400 block">Classe D (Perigosos)</span>
                  <p className="text-zinc-400 text-[10px]">Tintas, solventes e telhas de amianto.</p>
                </div>
                <span className="text-[8px] bg-red-500/20 text-red-400 px-2 py-1 rounded uppercase">Risco de Multa</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* 3. GUIA DE DESCARTE CONAMA 275 (AS LIXEIRAS EXPLICADAS) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Guia Prático de Coleta Seletiva (CONAMA nº 275)</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            {/* Azul - Papel */}
            <div className="flex gap-3 p-3 rounded-xl bg-blue-900/10 border border-blue-500/20">
              <div className="bg-blue-600 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">
                <Trash2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h6 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">Azul (Papel e Papelão)</h6>
                <p className="text-[11px] text-zinc-300 mb-1"><strong className="text-white">Permitido:</strong> Caixas, cadernos, jornais, panfletos e sulfites.</p>
                <p className="text-[10px] text-zinc-400 font-light bg-black/20 p-1.5 rounded"><strong className="text-blue-300">Regra de Ouro:</strong> Nunca amasse o papel em bolas (isso quebra a fibra e dificulta a reciclagem). Dobre-o! Papel engordurado (caixa de pizza) vai para o lixo comum (Cinza).</p>
              </div>
            </div>

            {/* Vermelho - Plástico */}
            <div className="flex gap-3 p-3 rounded-xl bg-red-900/10 border border-red-500/20">
              <div className="bg-red-600 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-900/50">
                <Trash2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h6 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-1">Vermelha (Plástico)</h6>
                <p className="text-[11px] text-zinc-300 mb-1"><strong className="text-white">Permitido:</strong> Garrafas PET, potes, sacolas, copos e canudos.</p>
                <p className="text-[10px] text-zinc-400 font-light bg-black/20 p-1.5 rounded"><strong className="text-red-300">Regra de Ouro:</strong> Lave potes de iogurte e marmitas para tirar o excesso de comida antes de descartar. Retire as tampinhas e amasse as garrafas para reduzir o volume.</p>
              </div>
            </div>

            {/* Amarelo - Metal */}
            <div className="flex gap-3 p-3 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
              <div className="bg-yellow-500 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow-900/50">
                <Trash2 className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <h6 className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amarela (Metal)</h6>
                <p className="text-[11px] text-zinc-300 mb-1"><strong className="text-white">Permitido:</strong> Latas de alumínio, lacres, parafusos, pregos e panelas.</p>
                <p className="text-[10px] text-zinc-400 font-light bg-black/20 p-1.5 rounded"><strong className="text-yellow-300">Regra de Ouro:</strong> Esponjas de aço enferrujadas ou latas com restos de produtos químicos tóxicos NÃO devem ir aqui. Amasse as latas de bebida para otimizar o espaço da lixeira.</p>
              </div>
            </div>

            {/* Verde - Vidro */}
            <div className="flex gap-3 p-3 rounded-xl bg-green-900/10 border border-green-500/20">
              <div className="bg-green-600 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-900/50">
                <Trash2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h6 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-1">Verde (Vidro)</h6>
                <p className="text-[11px] text-zinc-300 mb-1"><strong className="text-white">Permitido:</strong> Garrafas de bebida, copos, frascos de perfume.</p>
                <p className="text-[10px] text-zinc-400 font-light bg-black/20 p-1.5 rounded"><strong className="text-green-300">Regra de Ouro:</strong> Esvazie totalmente os líquidos. Se o vidro estiver quebrado, enrole em jornal ou coloque dentro de uma caixa de papelão para não cortar as mãos do coletor.</p>
              </div>
            </div>

            {/* Marrom - Orgânico */}
            <div className="flex gap-3 p-3 rounded-xl bg-amber-900/10 border border-amber-600/20">
              <div className="bg-amber-800 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-900/50">
                <Trash2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h6 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-1">Marrom (Orgânico)</h6>
                <p className="text-[11px] text-zinc-300 mb-1"><strong className="text-white">Permitido:</strong> Restos de comida, cascas de frutas, borra de café.</p>
                <p className="text-[10px] text-zinc-400 font-light bg-black/20 p-1.5 rounded"><strong className="text-amber-300">Regra de Ouro:</strong> Se a empresa ou cidade tiver um programa de compostagem, este material vai virar adubo. Nunca misture com plásticos ou papel.</p>
              </div>
            </div>

            {/* Cinza - Não Reciclável */}
            <div className="flex gap-3 p-3 rounded-xl bg-zinc-600/10 border border-zinc-500/20">
              <div className="bg-zinc-500 p-3 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-zinc-900/50">
                <Trash2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h6 className="text-zinc-400 font-bold text-sm uppercase tracking-wider mb-1">Cinza (Não Reciclável/Rejeito)</h6>
                <p className="text-[11px] text-zinc-300 mb-1"><strong className="text-white">Permitido:</strong> Papel higiênico, fraldas, adesivos, esponjas e fitas.</p>
                <p className="text-[10px] text-zinc-400 font-light bg-black/20 p-1.5 rounded"><strong className="text-zinc-300">Regra de Ouro:</strong> É o lixo que não pode ser reciclado e nem compostado, destinado diretamente para o Aterro Sanitário.</p>
              </div>
            </div>

          </div>
        </div>

        {/* 1. COMPARAÇÃO: LINEAR VS CIRCULAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/20 flex flex-col">
            <h6 className="text-[11px] font-mono tracking-widest text-red-400 uppercase mb-3 text-center border-b border-red-500/20 pb-2">
              O Modelo Linear (Ultrapassado)
            </h6>
            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-300 font-bold uppercase tracking-wider my-4">
              <span>Extrair</span> <ChevronDown className="h-3 w-3 -rotate-90 text-red-500" />
              <span>Produzir</span> <ChevronDown className="h-3 w-3 -rotate-90 text-red-500" />
              <span>Descartar</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light leading-relaxed text-center mt-auto">
              Gera esgotamento acelerado de recursos naturais e passivos ambientais acumulados.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-500/20 flex flex-col">
            <h6 className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase mb-3 text-center border-b border-emerald-500/20 pb-2">
              O Modelo Circular (Sustentável)
            </h6>
            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-300 font-bold uppercase tracking-wider my-4">
              <span>Produzir</span> <Repeat className="h-3 w-3 text-emerald-500" />
              <span>Reutilizar</span> <Repeat className="h-3 w-3 text-emerald-500" />
              <span>Reciclar</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light leading-relaxed text-center mt-auto">
              O resíduo vira matéria-prima limpa. Exige segregação inteligente na fonte geradora.
            </p>
          </div>
        </div>

        {/* 2. CLASSIFICAÇÃO NBR 10004 (O CORAÇÃO DO SST) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Classificação Oficial de Resíduos (ABNT NBR 10.004)</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            
            <div className="p-4 rounded-xl bg-white/5 border border-red-500/30 hover:bg-white/10 transition-colors">
              <span className="font-bold text-red-400 block text-sm mb-1 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> Classe I (Perigosos)
              </span>
              <p className="text-zinc-400 font-light mb-2">Apresentam risco à saúde pública e ao meio ambiente (Inflamabilidade, toxicidade ou reatividade).</p>
              <p className="text-[10px] text-zinc-500 font-medium bg-black/20 p-2 rounded">Ex: Óleos, solventes, tintas, telhas de amianto e pilhas.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-amber-500/30 hover:bg-white/10 transition-colors">
              <span className="font-bold text-amber-400 block text-sm mb-1 flex items-center gap-2">
                <Leaf className="h-4 w-4" /> Classe II A (Não Inertes)
              </span>
              <p className="text-zinc-400 font-light mb-2">Não são perigosos, mas podem poluir por biodegradação ou solubilidade em água.</p>
              <p className="text-[10px] text-zinc-500 font-medium bg-black/20 p-2 rounded">Ex: Restos de refeitório, madeira, EPIs de algodão (limpos) e papel.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-zinc-500/30 hover:bg-white/10 transition-colors">
              <span className="font-bold text-zinc-300 block text-sm mb-1 flex items-center gap-2">
                <Building2 className="h-4 w-4" /> Classe II B (Inertes)
              </span>
              <p className="text-zinc-400 font-light mb-2">Não sofrem transformações físicas, químicas ou biológicas. Podem ir direto para reciclagem base.</p>
              <p className="text-[10px] text-zinc-500 font-medium bg-black/20 p-2 rounded">Ex: Concreto, tijolos, entulho limpo, vidros e plásticos duros.</p>
            </div>

          </div>
        </div>

        {/* 3. PADRÃO DE CORES CONAMA 275 */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Padrão Nacional de Cores (Resolução CONAMA nº 275)</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {[
              { cor: "Azul", nome: "Papel / Papelão", bg: "bg-blue-600" },
              { cor: "Vermelho", nome: "Plástico", bg: "bg-red-600" },
              { cor: "Verde", nome: "Vidro", bg: "bg-green-600" },
              { cor: "Amarelo", nome: "Metal", bg: "bg-yellow-500" },
              { cor: "Preto", nome: "Madeira", bg: "bg-zinc-800" },
              { cor: "Laranja", nome: "Perigosos / Pilhas", bg: "bg-orange-500" },
              { cor: "Branco", nome: "Ambulatorial", bg: "bg-white text-black font-bold border-zinc-300" },
              { cor: "Marrom", nome: "Orgânico", bg: "bg-amber-800" },
              { cor: "Cinza", nome: "Não Reciclável", bg: "bg-zinc-500" }
            ].map((item, idx) => (
              <div key={idx} className={`p-2 rounded-lg flex flex-col items-center justify-center text-center border border-white/10 ${item.bg}`}>
                <span className={`text-[10px] uppercase tracking-wider ${item.cor === 'Branco' ? 'text-black' : 'text-white'}`}>
                  {item.nome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LOGÍSTICA REVERSA E O DIRETÓRIO DE ECOPONTOS (ACCORDION NATIVO) */}
        <div>
          <h5 className="text-sm font-bold text-white mb-3">Ecopontos e Descarte Descentralizado</h5>
          
          <details className="group bg-[#0f0f13]/80 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors rounded-xl overflow-hidden cursor-pointer">
            
            <summary className="p-4 flex items-center justify-between text-sm font-bold text-emerald-400 select-none outline-none">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Diretório de Ecopontos (Baixada Santista e SP)
              </span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            
            <div className="p-4 pt-0 border-t border-white/5 bg-zinc-950/50">
              <p className="text-xs text-zinc-400 font-light mb-4 mt-3">
                Acesse o portal oficial de cada prefeitura para consultar o mapa completo, horários de funcionamento e regras sobre quais resíduos da construção civil (PGRCC) ou domésticos são aceitos em cada município.
              </p>
              
              {/* GRID DE LINKS DAS CIDADES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { city: "Praia Grande", url: "https://www.praiagrande.sp.gov.br/administracao/Projeto_descricao01.asp?cdSecretaria=72&cdProjeto=23" },
                  { city: "Santos", url: "https://www.santos.sp.gov.br/?q=servico/ecopontos-pontos-de-reciclagem" },
                  { city: "São Vicente", url: "https://www.saovicente.sp.gov.br/carta-de-servicos/meio-ambiente-e-animais/residuos/coleta-seletiva-rotas" },
                  { city: "Guarujá", url: "https://www.guaruja.sp.gov.br/ecoponto-municipal" },
                  { city: "Cubatão", url: "https://www.cubatao.sp.gov.br/logistica-reversa-pontos-de-coleta-em-cubatao/" },
                  { city: "Mongaguá", url: "https://mongagua.sp.gov.br/diretoria-de-meio-ambiente-reforca-acoes-de-incentivo-a-reciclagem" },
                  { city: "Itanhaém", url: "https://www2.itanhaem.sp.gov.br/2022/09/26/ecopontos-distribuidos-pelo-municipio-recebem-entrega-voluntaria-de-residuos/" },
                  { city: "Peruíbe", url: "https://www.peruibe.sp.gov.br/2025/09/reciclagem-em-peruibe-tudo-o-que-voce-precisa-saber/" },
                  { city: "Bertioga", url: "https://www.bertioga.sp.gov.br/saiba-onde-descartar-residuos-gratuitamente-em-bertioga" },
                  { city: "São Paulo (Capital)", url: "https://prefeitura.sp.gov.br/w/conheça-os-ecopontos-da-cidade-de-são-paulo" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 transition-all text-xs group/link"
                  >
                    <span className="text-zinc-300 font-medium group-hover/link:text-emerald-400 transition-colors">
                      {item.city}
                    </span>
                    <ExternalLink className="h-3 w-3 text-zinc-500 group-hover/link:text-emerald-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
          </details>
        </div>

      </div>
    )
  },

  {
    id: "glossario",
    title: "Glossário Técnico e Terminolgias EHS",
    shortTitle: "Glossário",
    icon: HelpCircle,
    category: "Ferramentas Analíticas",
    body: (
      <div className="space-y-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
          <h4 className="text-xl font-bold text-emerald-400 font-serif tracking-wide">Dicionário de Termos e Siglas Técnicas</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Central de inteligência terminológica do **SST Intelligence**. Consulte de forma rápida os conceitos regulatórios, siglas de licenciamento e indexadores químicos exigidos por órgãos fiscalizadores (SEMA, CETESB e Ministério do Trabalho).
          </p>
        </div>

        {/* 1. SIGLAS DE LICENCIAMENTO E ÓRGÃOS REGULADORES */}
        <div className="space-y-2">
          <h5 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-3 flex items-center gap-2">
            <Scale className="h-3.5 w-3.5" /> 1. Órgãos e Licenciamento Ambiental
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>SEMA • Secretaria Municipal de Meio Ambiente</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Órgão executivo municipal responsável pela fiscalização, emissão de pareceres técnicos e licenciamento de atividades de impacto local no município de Praia Grande. É a primeira linha de conformidade de obras urbanas.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>CETESB • Companhia Ambiental de São Paulo</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Agência do Governo do Estado de São Paulo encarregada do controle, fiscalização, monitoramento e licenciamento de atividades geradoras de poluição profunda (indústrias químicas, portuárias e grandes plantas industriais).
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>Rito Trifásico • LP, LI and LO</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                O encadeamento obrigatório de licenças. <strong className="text-white">LP (Licença Prévia):</strong> aprova a viabilidade e localização. <strong className="text-white">LI (Licença de Instalação):</strong> autoriza o início das construções físicas. <strong className="text-white">LO (Licença de Operação):</strong> autoriza o funcionamento oficial da planta.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>EIA / RIMA • Estudo e Relatório de Impacto</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Exigência para macro-obras. O <strong className="text-white">EIA</strong> é o estudo científico profundo e altamente sigiloso de engenharia. O <strong className="text-white">RIMA</strong> é o relatório conclusivo traduzido em linguagem clara e acessível, apresentado obrigatoriamente em audiência pública à população.
              </p>
            </details>

          </div>
        </div>

        {/* 2. DOCUMENTAÇÃO E PLANOS DE ENGENHARIA */}
        <div className="space-y-2">
          <h5 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 flex items-center gap-2">
            <FileText className="h-3.5 w-3.5" /> 2. Gestão de Planos e Programas Técnicos
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>PGRCC • Plano de Resíduos da Construção Civil</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Documento técnico normativo baseado na Resolução CONAMA 307. Detalha como o canteiro de obras vai triar, acondicionar e destinar o entulho, dividindo-os obrigatoriamente em Classes A, B, C e D para evitar descarte clandestino.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>PGRSS • Plano de Resíduos de Serviços de Saúde</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Plano obrigatório pela ANVISA e CONAMA para clínicas, hospitais e laboratórios. Exige gerenciamento extremo sobre resíduos infectantes (Grupo A) e perfurocortantes (Grupo E), mitigando riscos biológicos cratísticos de acidentes de trabalho.
              </p>
            </details>

          </div>
        </div>

        {/* 3. RASTREABILIDADE E CADEIA REVERSA */}
        <div className="space-y-2">
          <h5 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold mb-3 flex items-center gap-2">
            <Repeat className="h-3.5 w-3.5" /> 3. Rastreabilidade e Logística Reversa
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>MTR • Manifesto de Transporte de Resíduos</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Guia digital obrigatória emitida eletronicamente pelo portal SINIR/SIGOR. Acompanha fisicamente a carga de resíduos industriais ou perigosos em trânsito rodoviário. Sua ausência constitui crime ambiental imediato.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>CDF • Certificado de Destinação Final</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Laudo final com certificação jurídica emitido pela usina de tratamento ou aterro licenciado. É o único documento auditável que encerra a co-responsabilidade do gerador (indústria/obra) perante fiscais e o Ministério Público.
              </p>
            </details>

          </div>
        </div>

        {/* 4. HIGIENE OCUPACIONAL E CLÍNICA (CONEXÃO SST) */}
        <div className="space-y-2">
          <h5 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-2">
            <Stethoscope className="h-3.5 w-3.5" /> 4. Higiene Ocupacional e Toxicologia
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>CAS Number • Chemical Abstracts Service</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Registro numérico internacional exclusivo atribuído a cada substância química conhecida. Essencial na Engenharia de Segurança para identificar agentes perigosos na FISPQ/FDS, independentemente do nome comercial do produto.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>IBUTG • Índice de Sobrecarga Térmica</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Métrica matemática complexa regulamentada pela NR-15 para mensurar a exposição ocupacional ao calor extremo. Utiliza leituras combinadas de termômetro de globo, bulbo úmido e bulbo seco para determinar limites de tolerância e pausas.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>COVs • Compostos Orgânicos Voláteis</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Vapores químicos lipossolúveis emitidos por solventes, tintas e derivados de petróleo. Possuem alta pressão de vapor à temperatura ambiente, gerando riscos de toxicidade aguda neurológica no trabalhador e poluição fotoquímica atmosférica.
              </p>
            </details>

            <details className="group bg-[#0f0f13]/80 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-3 text-xs font-bold text-zinc-200 flex items-center justify-between outline-none select-none">
                <span>PAIR • Perda Auditiva Ocupacional</span>
                <ChevronDown className="h-3 w-3 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="p-3 pt-0 text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 bg-zinc-950/40">
                Dano coclear irreversível provocado pela exposição crônica a níveis de pressão sonora elevados (Ruído). Regulamentado como doença do trabalho passível de estabilidade e nexo causal direto com o ambiente industrial.
              </p>
            </details>

          </div>
        </div>

      </div>
    )
  },
];

interface AmbientalViewProps {
  onMenuClick: () => void;
}

const booksData = [
  { 
    id: "b1", 
    title: "Manual de Prevenção e Combate a Incêndios", 
    author: "A. B. Camillo Junior", 
    hasImage: true, 
    image: "/images/Livro-1-Manuel de Pr. E c. Incêndios.webp", 
    synopsis: "Uma obra essencial que aborda a química do fogo, classes de incêndio, dimensionamento de rotas de fuga e operação de sistemas hidráulicos de combate a sinistros em edificações públicas e industriais.", 
    studyTip: "Foco de Estudo: Concentre-se nas diretrizes de dimensionamento de extintores e na organização de brigadas de incêndio municipais." 
  },
  { 
    id: "b2", 
    title: "Curso de Direito Ambiental Brasileiro", 
    author: "Celso Antonio Pacheco Fiorillo", 
    hasImage: true, 
    image: "/images/Livro-2-Curso de D. Amb. Brasileiro .jpg", 
    synopsis: "Analisa o meio ambiente sob a ótica constitucional como um bem de uso comum do povo. Divide a matéria didaticamente entre meio ambiente natural, artificial, cultural e do trabalho.", 
    studyTip: "Foco de Estudo: Dedique atenção especial ao capítulo sobre o 'Meio Ambiente do Trabalho' e o conceito de patrimônio público ambiental." 
  },
  { 
    id: "b3", 
    title: "Segurança e Medicina do Trabalho (Atlas)", 
    author: "Equipe Atlas", 
    hasImage: true, 
    image: "/images/Livro-3-Seg. E med. do trabalho.png", 
    synopsis: "A consolidação definitiva de todas as Normas Regulamentadoras (NRs) do Ministério do Trabalho, acompanhada de notas explicativas, ementas e legislação correlata atualizada.", 
    studyTip: "Foco de Estudo: Use como manual de consulta rápida para os parâmetros de insalubridade (NR-15) e proteção na construção civil (NR-18)." 
  },
  { 
    id: "b4", 
    title: "Gerenciamento de Resíduos Sólidos na Construção Civil", 
    author: "André Nagalli", 
    hasImage: true, 
    image: "/images/Livro-4-Ger. Resíduos S. na C.Civil.jpg", 
    synopsis: "Um estudo técnico cirúrgico sobre a gestão de entulhos, gesso, madeiras e resíduos perigosos gerados nos canteiros de obras urbanos, alinhado ao PGRCC.", 
    studyTip: "Foco de Estudo: Memorize a classificação dos resíduos (Classes A, B, C e D) e as respectivas destinações legais exigidas pelas prefeituras." 
  },
  { 
    id: "b5", 
    title: "Gestão Ambiental Empresarial", 
    author: "José Carlos Barbieri", 
    hasImage: true, 
    image: "/images/Livro-5-Gestão Amb. Empresarial.jpg", 
    synopsis: "Apresenta conceitos, modelos e instrumentos modernos de ecoeficiência, auditorias e políticas de Produção Mais Limpa (P+L) para mitigar a degradação ambiental nas corporações.", 
    studyTip: "Foco de Estudo: Compreenda a transição do modelo corretivo de controle de poluição para as abordagens preventivas modernas." 
  },
  { 
    id: "b6", 
    title: "Avaliação de Impacto Ambiental: Conceitos e Métodos", 
    author: "Luis Enrique Sánchez", 
    hasImage: true, 
    image: "/images/Livro-6-Avaliação de Imp. Ambiental.jpg", 
    synopsis: "O livro definitivo sobre a elaboração de estudos ambientais (EIA/RIMA). Detalha metodologias científicas para prever, mensurar e propor medidas mitigadoras de impactos na fauna, flora e sociedade.", 
    studyTip: "Foco de Estudo: Estude a montagem da Matriz de Leopold e os indicadores de impactos ambientais cumulativos." 
  },
  { 
    id: "b7", 
    title: "Direito Ambiental Esquematizado", 
    author: "Frederico Amado", 
    hasImage: true, 
    image: "/images/Livro-7-Direito Amb. esquematizado.jpg", 
    synopsis: "A legislação ambiental brasileira explicada de forma altamente didática, com gráficos, esquemas e resumos focados em concursos públicos e doutrinas do SISNAMA.", 
    studyTip: "Foco de Estudo: Foque nas etapas e competências do Licenciamento Ambiental e nas penalidades da Lei de Crimes Ambientais." 
  },
  { 
    id: "b8", 
    title: "Ergonomia Prática", 
    author: "Jan Dul e Bernard Weerdmeester", 
    hasImage: true, 
    image: "/images/Livro-8-Ergonomia Prática.jpg", 
    synopsis: "Um guia ilustrado e prático sobre como projetar postos de trabalho confortáveis, ergonômicos e eficientes, prevenindo o surgimento de LER/DORT nos colaboradores.", 
    studyTip: "Foco de Estudo: Use os parâmetros de alcance mecânico e ângulos de visão para avaliar a ergonomia de escritórios corporativos." 
  },
  { 
    id: "b9", 
    title: "Perícia Médica no Direito", 
    author: "João Baptista Opitz Junior", 
    hasImage: true, 
    image: "/images/Livro-9-Perícia Med. no Direito.jpg", 
    synopsis: "Trata dos aspectos técnicos, jurídicos e práticos da realização de perícias médicas judiciais, com foco na avaliação do nexo causal de doenças ocupacionais e acidentes.", 
    studyTip: "Foco de Estudo: Entenda os critérios utilizados pelos peritos para a caracterização legal de invalidez e incapacidade laboral." 
  },
  { 
    id: "b10", 
    title: "Manual Prático de Higiene Ocupacional e PGR", 
    author: "Tuffi Messias Saliba", 
    hasImage: true, 
    image: "/images/Livro-10-Man. Pratico de H. Oc. e PGR.jpg", 
    synopsis: "Manual prático consagrado que ensina a reconhecer, avaliar e controlar os riscos físicos, químicos e biológicos nos ambientes de trabalho sob a ótica do novo PGR.", 
    studyTip: "Foco de Estudo: Domine as metodologias de amostragem de agentes químicos no ar e a medição técnica de ruído contínuo." 
  },
  { 
    id: "b11", 
    title: "Desenvolvimento Sustentável: O Desafio do Século XXI", 
    author: "José Eli da Veiga / Ignacy Sachs", 
    hasImage: true, 
    image: "/images/Livro-11-Des. Sustentável, D. Sc. XXI.jpg", 
    synopsis: "Uma profunda reflexão socioeconômica sobre as estratégias globais para conciliar o crescimento industrial com a preservação dos recursos naturais planetários.", 
    studyTip: "Foco de Estudo: Conecte os pilares deste livro diretamente com a evolução conceitual da Agenda 2030 da ONU." 
  },
  { 
    id: "b12", 
    title: "Introdução à Qualidade das Águas e Tratamento de Esgotos", 
    author: "Marcos von Sperling", 
    hasImage: true, 
    image: "/images/Livro-12-Intr. à Qua. das Ag. e Tra. Esgotos.jpg", 
    synopsis: "Volume fundamental que detalha a dinâmica da poluição hídrica por matéria orgânica e os princípios biológicos aplicados nas estações de tratamento de esgotos (ETE).", 
    studyTip: "Foco de Estudo: Ideal para cidades costeiras. Foque no ciclo do oxigênio dissolvido e no impacto do lançamento de efluentes no mar." 
  },
  { 
    id: "b13", 
    title: "Introduction to Environmental Engineering and Science", 
    author: "Gilbert M. Masters / Wendell P. Ela", 
    hasImage: true, 
    image: "/images/Livro-13-Envorimental Eng. And Science.jpg", 
    synopsis: "Referência internacional que aborda os fundamentos científicos e de engenharia para o controle de poluição atmosférica, química do solo e balanço de massa ecológica.", 
    studyTip: "Foco de Estudo: Pratique os modelos matemáticos básicos de balanço de massa aplicados a fluxos poluentes em rios e canais." 
  },
  { 
    id: "b14", 
    title: "Logística Reversa: Sustentabilidade e Competitividade", 
    author: "Paulo Roberto Leite", 
    hasImage: true, 
    image: "/images/Livro-14-Logística Reversa.jpg", 
    synopsis: "Explica a estruturação dos canais de distribuição reversos para o retorno de produtos de pós-consumo e pós-venda ao ciclo produtivo, atendendo à Política Nacional de Resíduos Sólidos (PNRS).", 
    studyTip: "Foco de Estudo: Avalie os fluxos de logística reversa obrigatórios na legislação brasileira, como pneus, pilhas e lâmpadas." 
  },
  { 
    id: "b15", 
    title: "Toxicologia Ocupacional", 
    author: "Juliane Medeiros do Santos", 
    hasImage: true, 
    image: "/images/Livro-19-Toxicologia Ocupacional.webp", 
    synopsis: "Estudo científico de como os agentes químicos perigosos penetram nas vias biológicas dos trabalhadores, provocando mutações, intoxicações e patologias crônicas ao longo do tempo.", 
    studyTip: "Foco de Estudo: Estude a diferença entre limite de tolerância média ponderada (TWA) e limite de exposição curta duração (STEL)." 
  },
  { 
    id: "b16", 
    title: "Cultura de Segurança no Trabalho", 
    author: "Juliana Bley", 
    hasImage: false, 
    image: "/images/Livro-16-Cultura de Segurança.jpg", 
    synopsis: "Uma quebra de paradigma na SST. O livro ensina dinâmicas comportamentais e de percepção de risco para engajar equipes operacionais pesadas e implantar a segurança baseada no comportamento.", 
    studyTip: "Foco de Estudo: Foque nas ferramentas de facilitação e escuta ativa para lideranças de chão de fábrica." 
  },
  { 
    id: "b17", 
    title: "Gestão Ambiental Baseada na ISO 14001", 
    author: "Francesco De Cicco", 
    hasImage: true, 
    image: "/images/Livro-17-Quali. Amb.jpg", 
    synopsis: "Guia técnico de compliance focado na estruturação do Sistema de Gestão Ambiental (SGA), focado no cumprimento de requisitos legais e preparação para auditorias de certificação.", 
    studyTip: "Foco de Estudo: Domine a aplicação prática do ciclo PDCA integrado às metas de redução de aspectos e impactos ambientais." 
  },
  { 
    id: "b18", 
    title: "A Segurança na Construção Civil", 
    author: "Anderson Gomes dos Reis", 
    hasImage: true, 
    image: "/images/Livro-16-Segurança do Trabalho Construção Civil.jpg", 
    synopsis: "Manual de engenharia e proteção focado nos riscos mutáveis da NR-18. Detalha proteções coletivas (EPCs) contra quedas, riscos elétricos em canteiros e montagem de andaimes.", 
    studyTip: "Foco de Estudo: Estude o planejamento do PCMAT/PGR focado em obras prediais de alta verticalização." 
  },
  { 
    id: "b19", 
    title: "Acidentes Industriais Ampliados: Desafios e Perspectivas", 
    author: "Renato Ramos", 
    hasImage: true, 
    image: "/images/Livro-18-Ac. Indus. Ampl..webp", 
    synopsis: "Analisa grandes catástrofes industriais históricas, demonstrando como falhas latentes nos sistemas e processos operacionais rompem barreiras de proteção e atingem a comunidade e o ecossistema externo.", 
    studyTip: "Foco de Estudo: Compreenda o gerenciamento de riscos de processo e os Planos de Ação de Emergência (PAE) comunitários." 
  },
  { 
    id: "b20", 
    title: "Espaços Confinados: Livreto do Trabalhador", 
    author: "Fundacentro", 
    hasImage: true, 
    image: "/images/Livro-15-Espaço Confinado.png", 
    synopsis: "Guia de segurança focado na NR-33. Orienta sobre a entrada, trabalho seguro e salvamento em poços, tanques, galerias de drenagem e tubulações subterrâneas com atmosfera IPVS.", 
    studyTip: "Foco de Estudo: Memorize as funções obrigatórias do Vigia e do Supervisor de Entrada e o preenchimento da PET (Permissão de Entrada e Trabalho)." 
  }
];

export function LibraryAccordion() {
  const [openBookId, setOpenBookId] = useState<string | null>(null);

  // ==========================================
  // CONEXÃO GLOBAL DE TEMA & MAPA DE CORES
  // ==========================================
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    // 1. Textos e Fundos base
    mainText: isDark ? 'text-white' : 'text-zinc-900',
    overlay: isDark ? 'bg-black/75' : 'bg-[#f4f4f5]/60', // Máscara do wallpaper
    
    // 2. Header Superior
    headerBg: isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200/80',
    headerTitle: isDark ? 'text-zinc-400' : 'text-zinc-500 font-semibold',
    btnBack: isDark 
      ? 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10' 
      : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-200 shadow-sm',
    
    // 3. Área de Título e Ícones Centrais
    iconWrapper: isDark 
      ? 'bg-emerald-500/10 border-emerald-500/20' 
      : 'bg-emerald-50 border-emerald-200 shadow-sm',
    mainDesc: isDark ? 'text-zinc-400' : 'text-zinc-600',
    
    // 4. Cartões do Grid (Flashcards)
    cardBg: isDark 
      ? 'bg-[#0f0f13]/90 hover:bg-[#15151a]/95 border border-transparent' 
      : 'bg-white/95 hover:bg-zinc-50 border border-zinc-200 shadow-lg shadow-zinc-200/50',
    cardTitle: isDark ? 'text-zinc-100 group-hover:text-white' : 'text-zinc-800 group-hover:text-zinc-900',
    cardDesc: isDark ? 'text-zinc-400' : 'text-zinc-500',
    cardIconBg: isDark 
      ? 'bg-white/5 border-white/5 group-hover:bg-white/10' 
      : 'bg-zinc-50 border-zinc-200 group-hover:bg-white',
    
    // 5. Divisor Central
    dividerLine: isDark ? 'bg-white/5' : 'bg-zinc-200',
    dividerBadge: isDark 
      ? 'bg-[#0a0a0d] text-zinc-500 border-white/5' 
      : 'bg-white text-zinc-500 border-zinc-200 shadow-sm',
    
    // 6. Painel Split (Tabs Laterais vs Conteúdo)
    tabContainer: isDark 
      ? 'bg-zinc-900/30 border-white/5' 
      : 'bg-white border-zinc-200 shadow-xl shadow-zinc-200/40',
    tabItemBase: 'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs transition-all',
    tabItemActive: isDark 
      ? 'bg-emerald-500/10 border border-emerald-500/20 text-white shadow-md shadow-emerald-950/20' 
      : 'bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm',
    tabItemInactive: isDark 
      ? 'border border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200' 
      : 'border border-transparent text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900',
    contentPanel: isDark 
      ? 'bg-zinc-900/40 border-white/5' 
      : 'bg-white/80 border-zinc-200 shadow-xl shadow-zinc-200/50',
    
    // 7. Visão de Leitura Profunda (Tela 2)
    wikiContainer: isDark 
      ? 'bg-zinc-900/50 border-white/5 text-zinc-300' 
      : 'bg-white border-zinc-200 text-zinc-700 shadow-2xl shadow-zinc-300/50',
    wikiBorder: isDark ? 'border-white/5' : 'border-zinc-100',
    wikiIconBg: isDark ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-200',
    wikiTitle: isDark ? 'text-white' : 'text-zinc-900',
    wikiSub: isDark ? 'text-emerald-400' : 'text-emerald-600',
    wikiText: isDark ? 'text-zinc-300' : 'text-zinc-600',
  };

  return (
    <div className="space-y-3 mt-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
      {booksData.map((book) => {
        const isOpen = openBookId === book.id;
        
        return (
          <div 
            key={book.id} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-zinc-950/80 border-emerald-500/50 shadow-lg shadow-emerald-900/10' : 'bg-[#0f0f13]/60 border-white/5 hover:border-white/10 hover:bg-white/5'}`}
          >
            <button 
              onClick={() => setOpenBookId(isOpen ? null : book.id)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
            >
              <div className="flex flex-col pr-4">
                <span className={`text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-emerald-400' : 'text-zinc-200 group-hover:text-white'}`}>
                  {book.title}
                </span>
                <span className="text-xs text-zinc-500 font-light mt-0.5">Autor: {book.author}</span>
              </div>
              <div className={`p-2 rounded-full shrink-0 transition-all duration-300 ${isOpen ? 'bg-emerald-500/10 text-emerald-400 rotate-180' : 'bg-white/5 text-zinc-500'}`}>
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-4 pt-0 flex flex-col sm:flex-row gap-5 border-t border-white/5 mt-1 pt-4">
                  
                  <div className="shrink-0 flex justify-center sm:block">
                    {book.hasImage ? (
                      <div className="w-24 h-36 sm:w-28 sm:h-40 rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                        <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-24 h-36 sm:w-28 sm:h-40 rounded-lg overflow-hidden shadow-2xl border border-emerald-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-3 text-center relative select-none">
                        <BookOpen className="h-6 w-6 text-emerald-500/30 mb-2" />
                        <span className="text-[9px] font-bold text-zinc-300 leading-tight line-clamp-3">{book.title}</span>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-center space-y-3.5">
                    <div>
                      <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">Sinopse da Obra</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light">{book.synopsis}</p>
                    </div>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3">
                      <h4 className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-1 flex items-center gap-1">
                         <Sparkles className="h-3 w-3" /> Foco de Estudo
                      </h4>
                      <p className="text-xs text-emerald-100/70 leading-relaxed font-light">{book.studyTip}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AmbientalView({ onMenuClick }: AmbientalViewProps) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  // Estado para controlar a aba ativa no painel inferior
  const [activeTabId, setActiveTabId] = useState<string>("livros");

  const activeCard = flashcardsData.find(card => card.id === selectedCardId);
  const activeTabContent = resourceTabsData.find(tab => tab.id === activeTabId);

  // ==========================================
  // CONEXÃO GLOBAL DE TEMA & MAPA DE CORES
  // ==========================================
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const styles = {
    mainText: isDark ? 'text-white' : 'text-zinc-900',
    overlay: isDark ? 'bg-black/75' : 'bg-[#f4f4f5]/60', 
    headerBg: isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200/80',
    headerTitle: isDark ? 'text-zinc-400' : 'text-zinc-500 font-semibold',
    btnBack: isDark 
      ? 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10' 
      : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-200 shadow-sm',
    iconWrapper: isDark 
      ? 'bg-emerald-500/10 border-emerald-500/20' 
      : 'bg-emerald-50 border-emerald-200 shadow-sm',
    mainDesc: isDark ? 'text-zinc-400' : 'text-zinc-600',
    cardBg: isDark 
      ? 'bg-[#0f0f13]/90 hover:bg-[#15151a]/95 border border-transparent' 
      : 'bg-white/95 hover:bg-zinc-50 border border-zinc-200/80 shadow-md shadow-zinc-200/30',
    cardTitle: isDark ? 'text-zinc-100 group-hover:text-white' : 'text-zinc-800 group-hover:text-zinc-900',
    cardDesc: isDark ? 'text-zinc-400' : 'text-zinc-500',
    cardIconBg: isDark 
      ? 'bg-white/5 border-white/5 group-hover:bg-white/10' 
      : 'bg-zinc-50 border-zinc-200 group-hover:bg-white',
    dividerLine: isDark ? 'bg-white/5' : 'bg-zinc-200',
    dividerBadge: isDark 
      ? 'bg-[#0a0a0d] text-zinc-500 border-white/5' 
      : 'bg-white text-zinc-500 border-zinc-200 shadow-sm',
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
    wikiContainer: isDark 
      ? 'bg-zinc-900/50 border-white/5 text-zinc-300' 
      : 'bg-white border-zinc-200 text-zinc-700 shadow-xl shadow-zinc-200/40',
    wikiBorder: isDark ? 'border-white/5' : 'border-zinc-100',
    wikiIconBg: isDark ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-200',
    wikiTitle: isDark ? 'text-white' : 'text-zinc-900',
    wikiSub: isDark ? 'text-emerald-400' : 'text-emerald-600',
    wikiText: isDark ? 'text-zinc-300' : 'text-zinc-600',
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
        <div className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] bottom-10 right-10 animate-pulse duration-[7000ms] ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/10'}`} />
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
            <button onClick={onMenuClick} className={`p-2 rounded-lg transition-colors cursor-pointer ${isDark ? 'hover:bg-white/10' : 'hover:bg-zinc-100'}`}>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className={`text-sm tracking-wider uppercase transition-colors ${styles.headerTitle}`}>
              Módulo de Sustentabilidade & Governança Ambiental
            </h1>
          </>
        )}
      </div>

      {/* RENDERIZAÇÃO CONDICIONAL */}
      <div className="flex-1 relative z-10 overflow-y-auto px-6 py-8 custom-scrollbar">
        {!activeCard ? (
          /* TELA 1: DASHBOARD COMPLETO (GRID + NOVO PAINEL DE TABS) */
          <div className="w-full max-w-6xl mx-auto flex flex-col animate-in fade-in duration-300">
            
            {/* Título Principal */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className={`mb-4 p-3 rounded-xl border transition-colors ${styles.iconWrapper}`}>
                <Leaf className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
                Módulos Acadêmicos Ambientais
              </h2>
              <p className={`text-xs md:text-sm max-w-xl font-light mt-2 leading-relaxed transition-colors ${styles.mainDesc}`}>
                Base científica de consulta sobre Saúde Ocupacional integrada à Gestão de Ecossistemas para a Prefeitura de Praia Grande. Selecione um card para iniciar o estudo profundo.
              </p>
            </div>

            {/* Grid dos 15 Flashcards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-8">
              {/* FIX: Adicionado tipo explícito (card: any) para o compilador estrito do TS */}
              {flashcardsData.map((card: any) => {
                const CardIcon = card.icon;
                const iconTextColor = card.colorClass ? card.colorClass.split(' ').find((c: string) => c.startsWith('text-')) : 'text-zinc-400';

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

                      <h3 className={`text-sm font-semibold mb-2 leading-tight transition-colors ${styles.cardTitle}`}>
                        {card.title}
                      </h3>
                      <p className={`text-xs font-light leading-relaxed flex-1 line-clamp-2 transition-colors ${styles.cardDesc}`}>
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
                Central de Recursos Avançados
              </div>
            </div>

            {/* NOVO PAINEL ACADÊMICO EM TABS INTERATIVAS */}
            <div className="w-full flex flex-col md:flex-row gap-6 pb-16">
              
              {/* Painel Esquerdo: Menu Vertical de Abas */}
              <div className={`w-full md:w-72 flex flex-col gap-1.5 shrink-0 backdrop-blur-md border rounded-2xl p-3 h-fit transition-colors duration-300 ${styles.tabContainer}`}>
                <span className={`text-[9px] font-mono tracking-widest uppercase px-3 mb-2 block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Selecione o Recurso
                </span>
                {/* FIX: Adicionado tipo explícito (tab: any) */}
                {resourceTabsData.map((tab: any) => {
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

              {/* Painel Direito: Caixa de Renderização de Conteúdo Dinâmico */}
              <div className={`flex-1 min-h-[320px] backdrop-blur-md border rounded-2xl p-6 md:p-8 relative overflow-hidden transition-colors duration-300 ${styles.contentPanel}`}>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
                
                {activeTabContent ? (
                  <div className="animate-in fade-in duration-200">
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
          /* TELA 2: VISÃO ESTILO WIKIPÉDIA ACADÊMICA (LEITURA PROFUNDA) */
          <div className={`w-full max-w-3xl mx-auto border rounded-3xl p-6 md:p-10 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300 select-text selection:bg-emerald-500/30 transition-colors duration-300 ${styles.wikiContainer}`}>
            <div className={`flex items-center gap-3 border-b pb-6 mb-6 transition-colors duration-300 ${styles.wikiBorder}`}>
              <div className={`p-3 rounded-2xl border transition-colors duration-300 ${styles.wikiIconBg}`}>
                <activeCard.icon className={`h-6 w-auto ${styles.wikiSub}`} />
              </div>
              <div>
                <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold transition-colors duration-300 ${styles.wikiSub}`}>
                  SST Intelligence • Enciclopédia Acadêmica
                </span>
                <h2 className={`text-xl md:text-2xl font-bold mt-1 transition-colors duration-300 ${styles.wikiTitle}`}>
                  {activeCard.title}
                </h2>
              </div>
            </div>

            {/* Renderização do Texto Profundo */}
            <div className="prose prose-invert max-w-none space-y-4 text-sm font-light leading-relaxed">
              {/* FIX definitivo de tipagem implícita aqui para sumir com os erros das linhas vermelhas */}
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