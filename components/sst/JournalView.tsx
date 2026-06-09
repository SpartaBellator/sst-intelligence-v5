"use client";

import { useState, useMemo } from 'react';
import { useTheme } from "@/providers/theme-provider";
import { 
  Menu, Newspaper, Clock, Search, BookOpen, 
  ArrowRight, Calendar, User, Tag, ChevronRight, X 
} from "lucide-react";

interface JournalViewProps {
  onMenuClick: () => void;
}

// ==========================================
// BASE DE CONHECIMENTO TÉCNICO - 40 ASSUNTOS RIGOROSOS (MTE / NRs / FUNDACENTRO)
// ==========================================
const SST_KNOWLEDGE_BASE = [
 {
    id: 1,
    category: "Legislação",
    title: "Tudo sobre a CIPA: Organização e Atribuições da NR-5",
    excerpt: "Guia completo sobre o dimensionamento, processo eleitoral e o novo papel da Comissão Interna de Prevenção de Acidentes no combate ao assédio laboral.",
    content: "A Comissão Interna de Prevenção de Acidentes e Assédio (CIPA), regida pela Norma Regulamentadora nº 5, passou por profundas transformações estruturais. Sua missão legal vai além da clássica investigação de sinistros e elaboração do mapa de riscos: a comissão agora é agente ativa no combate ao assédio sexual e demais formas de violência no ambiente de trabalho, conforme diretrizes consolidadas. O dimensionamento dos membros da CIPA deve seguir estritamente os parâmetros do Quadro I da NR-5, cruzando a Classificação Nacional de Atividades Econômicas (CNAE) com o número total de empregados do estabelecimento. O processo eleitoral exige escrutínio secreto, com estabilidade provisória garantida aos representantes eleitos dos empregados desde o registro da candidatura até um ano após o término do mandato, vedando a dispensa arbitrária ou sem justa causa.",
    author: "SST Intelligence",
    date: "09 Jun 2026",
    read_time: "10 min",
    image_url: "https://picsum.photos/seed/safety_committee_meeting/800/600",
    is_featured: true,
  },
  {
    id: 2,
    category: "Educação",
    title: "Tudo sobre a SIPAT: Planejamento Eficaz e Prático",
    excerpt: "Como estruturar a Semana Interna de Prevenção de Acidentes atendendo às exigências regulamentares com foco no engajamento comportamental.",
    content: "A Semana Interna de Prevenção de Acidentes do Trabalho (SIPAT) é uma das atribuições obrigatórias mais críticas delegadas à CIPA, sob a tutela do item 5.3.1 da NR-5. O planejamento técnico deve iniciar com meses de antecedência, utilizando os dados de morbidade e os perigos mapeados no Programa de Gerenciamento de Riscos (PGR) para definir o cronograma de palestras. É mandatório que o evento inclua dinâmicas voltadas à conscientização sobre temas psicossociais, inclusão e canais de denúncia de violência corporativa. O sucesso operacional da SIPAT baseia-se em metodologias andragógicas ativas, mensuradas através de indicadores de frequência, testes de retenção de conhecimento e análise estatística de quase-acidentes nas semanas subsequentes.",
    author: "SST Intelligence",
    date: "09 Jun 2026",
    read_time: "8 min",
    image_url: "https://picsum.photos/seed/safety_seminar_presentation/800/600",
    is_featured: false,
  },
  {
    id: 3,
    category: "Legislação",
    title: "EPIs: Direitos, Deveres e a Importância do CA (NR-6)",
    excerpt: "A responsabilidade civil e criminal por trás do fornecimento e uso correto dos Equipamentos de Proteção Individual.",
    content: "A Norma Regulamentadora nº 6 estabelece as balizas legais absolutas para o uso de Equipamentos de Proteção Individual (EPI). Perante a legislação, o EPI só deve ser adotado quando as medidas de proteção coletiva estiverem em fase de implantação ou forem tecnicamente inviáveis. É obrigação do empregador fornecer dispositivos adequados ao risco, higienizados e gratuitos, registrando rigorosamente cada entrega em fichas físicas ou sistemas biométricos integrados. O trabalhador, por sua vez, assume o dever de utilizá-los exclusivamente para a finalidade destinada e zelar pela sua guarda. Qualquer EPI só pode ser comercializado ou utilizado no território nacional se possuir o Certificado de Aprovação (CA) emitido pelo Ministério do Trabalho e Emprego, cuja validade atesta a conformidade técnica em ensaios laboratoriais contra agentes nocivos.",
    author: "SST Intelligence",
    date: "08 Jun 2026",
    read_time: "9 min",
    image_url: "https://picsum.photos/seed/ppe_warehouse_inspection/800/600",
    is_featured: false,
  },
  {
    id: 4,
    category: "Inovação",
    title: "EPCs: Engenharia de Proteção Coletiva e Prioridade de Controle",
    excerpt: "Por que as medidas coletivas de proteção devem obrigatoriamente preceder o uso de EPIs na hierarquia de riscos.",
    content: "A engenharia de segurança adota uma hierarquia rígida de controle de riscos ocupacionais determinada pela NR-1. Nessa escala, as Medidas de Proteção Coletiva (EPCs) situam-se no topo da eficácia, logo após a eliminação ou substituição do perigo. Sistemas de exaustão localizada para particulados e névoas químicas, enclausuramento acústico de compressores, guarda-corpos periféricos fixos e redes de proteção contra quedas são exemplos estruturais de EPC. O desenvolvimento e a instalação dessas defesas coletivas atenuam o risco diretamente na fonte geradora, blindando todo o coletivo de trabalhadores e reduzindo drasticamente a dependência de fatores comportamentais individuais e os custos operacionais com substituições contínuas de EPIs.",
    author: "SST Intelligence",
    date: "07 Jun 2026",
    read_time: "9 min",
    image_url: "https://picsum.photos/seed/collective_engineering_protection/800/600",
    is_featured: false,
  },
  {
    id: 5,
    category: "Acidentes",
    title: "EPI na Construção Civil: Riscos de Impacto e Quedas (NR-18)",
    excerpt: "Mapeamento rigoroso dos equipamentos indispensáveis para a proteção de operários em canteiros de obras.",
    content: "A indústria da construção civil é estatisticamente uma das maiores geradoras de acidentes de trabalho graves no país. Sob os ditames da NR-18, o canteiro de obras exige um plano de proteção individual e coletiva dinâmico. Os operários devem obrigatoriamente portar capacetes de alta resistência mecânica contra impactos com jugular de fixação, óculos de policarbonato com proteção ultravioleta e tratamento antirrisco, e calçados de segurança com biqueira de aço e palmilhas anti-perfuro de alta engenharia. Para trabalhos executados acima de dois metros de altura, impõe-se o uso do cinturão de segurança tipo paraquedista conectado permanentemente a cabos de aço horizontais ou verticais dimensionados por engenheiros legalmente habilitados.",
    author: "SST Intelligence",
    date: "06 Jun 2026",
    read_time: "11 min",
    image_url: "https://picsum.photos/seed/construction_site_scaffolding/800/600",
    is_featured: false,
  },
  {
    id: 6,
    category: "Inovação",
    title: "EPI na Metalurgia: Radiações e Respingos de Metal Fundido",
    excerpt: "Proteção térmica avançada e conservação auditiva contra os riscos severos das linhas de fundição e solda.",
    content: "O ambiente de processamento metalúrgico combina riscos físicos de alta intensidade, como calor radiante extremo, ruído de impacto de prensas e exposição a radiações não ionizantes em arcos de soldagem. A proteção dérmica exige o uso de blusões, aventais e perneiras de raspa de couro tratado ou tecidos aluminizados com tecnologia retardante de chamas que repelem respingos de metal líquido a mais de 1000°C. Máscaras de solda com lentes de escurecimento automático por células fotoelétricas evitam a ocorrência de ceratoconjuntivite. A conservação auditiva é garantida pela dupla proteção (protetor auricular de inserção combinado a abafadores tipo concha de alta atenuação dielétrica).",
    author: "SST Intelligence",
    date: "05 Jun 2026",
    read_time: "10 min",
    image_url: "https://picsum.photos/seed/foundry_welding_manufacturing/800/600",
    is_featured: false,
  },
  {
    id: 7,
    category: "Economia",
    title: "EPI no Trabalho Marinho: Proteção e Sobrevivência na NR-30",
    excerpt: "Análise dos equipamentos de salvamento e proteção contra as intempéries em operações em alto-mar.",
    content: "O trabalho embarcado e as rotinas em terminais portuários regulados pela NR-30 expõem os trabalhadores a um dos meios mais hostis da atividade industrial: o ambiente marinho. Além de roupas impermeáveis de alta visibilidade com fitas retrorrefletivas padrão SOLAS, o pessoal de convés deve portar calçados com solado de borracha nitrílica vulcanizada antiderrapante, resistente à ação corrosiva de óleos combustíveis e salinidade. É obrigatório o porte de coletes salva-vidas de ativação automática por insuflação de CO2 equipados com sinalizadores estroboscópicos e apitos de emergência, vitais para a sobrevivência em cenários críticos de homem ao mar.",
    author: "SST Intelligence",
    date: "04 Jun 2026",
    read_time: "8 min",
    image_url: "https://picsum.photos/seed/maritime_port_offshore/800/600",
    is_featured: false,
  },
  {
    id: 8,
    category: "Inovação",
    title: "EPI no Trabalho Petrolífero: Atmosferas Explosivas (NR-37)",
    excerpt: "Tecnologia têxtil antiestática e proteção respiratória em refinarias e plataformas de petróleo.",
    content: "Plataformas de petróleo offshore e refinarias terrestres (enquadradas na NR-37) operam sob o risco constante de vazamentos de hidrocarbonetos e formação de atmosferas explosivas. Vestimentas comuns são expressamente proibidas devido à eletricidade estática gerada pelo atrito. Toda a força de trabalho deve utilizar macacões confeccionados com fibras inerentemente antichama (como aramidas) entrelaçadas com filamentos condutores de carbono que dissipam cargas elétricas. Para intervenções em locais com presença latente de gás sulfídrico (H2S), adota-se o uso de conjuntos autônomos de ar comprimido com máscaras de pressão positiva e alarmes de vibração por saturação.",
    author: "SST Intelligence",
    date: "03 Jun 2026",
    read_time: "12 min",
    image_url: "https://picsum.photos/seed/oil_refinery_platform/800/600",
    is_featured: false,
  },
  { 
    id: 9, 
    category: "Legislação", 
    title: "EPI para Trabalhos com Eletricidade (NR-10)", 
    excerpt: "Uso de vestimentas categoria ATPV contra arco elétrico e luvas isolantes de alta tensão sob testes dielétricos rigorosos.", 
    content: "A execução de atividades em instalações elétricas energizadas sob a NR-10 exige blindagem absoluta contra choques elétricos e arcos voltaicos de alta energia. O vestuário de trabalho deve possuir classificação ATPV (Arc Thermal Performance Value) expressa em cal/cm², calculada conforme a energia de descarga potencial do painel. Luvas isolantes de borracha natural de alta rigidez dielétrica devem ser testadas pneumaticamente antes de cada uso pelo eletricista para detecção de microfuros e passar por testes de isolação elétrica laboratoriais a cada seis meses. Calçados de segurança sem componentes metálicos (biqueiras de composite) e ferramentas manuais totalmente isoladas para até 1000V completam os requisitos.", 
    author: "SST Intelligence", 
    date: "02 Jun 2026", 
    read_time: "9 min", 
    image_url: "https://picsum.photos/seed/electrical_substation_lineman/800/600", 
    is_featured: false 
  },
  { 
    id: 10, 
    category: "Acidentes", 
    title: "EPI para Trabalho em Altura (NR-35)", 
    excerpt: "Dimensionamento de cinturão antiqueda tipo paraquedista, talabartes em Y e cálculo do fator de queda.", 
    content: "O trabalho em altura (NR-35) impõe o uso de Sistemas de Proteção Individual Contra Quedas (SPIQ). O cinturão de segurança tipo paraquedista deve possuir conexões dorsais e peitorais de aço forjado acopladas a talabartes em Y dotados de absorvedores de energia cinético. A análise de risco deve calcular com exatidão o fator de queda — mantendo o ponto de ancoragem sempre acima da cabeça do trabalhador (Fator de Queda menor que 1) — e a Zona de Livre Queda (ZLQ), garantindo que o comprimento do talabarte estendido mais a deflexão da linha de vida e a altura do trabalhador sejam menores que a distância física até o solo, eliminando o impacto contra o piso inferior.", 
    author: "SST Intelligence", 
    date: "01 Jun 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/high_altitude_rope_access/800/600", 
    is_featured: false 
  },
 { 
    id: 11, 
    category: "Legislação", 
    title: "EPI para Espaços Confinados (NR-33)", 
    excerpt: "Uso obrigatório de detectores multigases, tripés de resgate e insufladores de ar mecânicos permanentes.", 
    content: "O gerenciamento de segurança em espaços confinados, conforme estritamente preconizado pela Norma Regulamentadora nº 33 (NR-33), demanda uma abordagem analítica e preventiva extrema, dada a letalidade intrínseca de atmosferas IPVS (Imediatamente Perigosas à Vida e à Saúde). A execução de qualquer atividade técnica nesses ambientes não rotineiros é terminantemente condicionada à emissão prévia da Permissão de Entrada e Trabalho (PET), documento gerencial que atesta a neutralização de perigos mecânicos, elétricos e fluidodinâmicos através de bloqueios e etiquetagens (LOTO). No âmbito do monitoramento ambiental, é mandatório o uso contínuo de detectores multigases portáteis com calibração e teste de resposta (bump test) rastreáveis, programados para aferir em tempo real as concentrações volumétricas de oxigênio (evitando anoxia ou enriquecimento), o Limite Inferior de Explosividade (LEL), além de gases tóxicos severos como o monóxido de carbono (CO) e o gás sulfídrico (H2S). Complementarmente, as medidas de engenharia exigem sistemas de ventilação mecânica por insuflação e exaustão combinadas para manter o equilíbrio atmosférico. Em caso de resgate, o trabalhador deve portar cinturão de segurança tipo paraquedista conectado a um sistema de suspensão vertical por tripé mecânico com guincho de resgate autorrecuperável, permitindo a sua rápida evacuação externa sem que a equipe de salvamento necessite adentrar a zona de perigo.", 
    author: "SST Intelligence", 
    date: "31 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/confined_space_gas_detector/800/600", 
    is_featured: false 
  },
  { 
    id: 12, 
    category: "Acidentes", 
    title: "EPI para Serviços de Saúde e Riscos Biológicos (NR-32)", 
    excerpt: "Uso de respiradores PFF2/N95, óculos de ampla visão e aventais impermeáveis contra patógenos fluidos.", 
    content: "No universo da biossegurança hospitalar e laboratorial, regulamentado de forma rigorosa pela Norma Regulamentadora nº 32 (NR-32), a exposição a agentes biológicos de classes de risco elevadas exige uma matriz de Equipamentos de Proteção Individual altamente especializada. O risco de transmissão aérea de patógenos por aerossóis ou gotículas (como bacilos e vírus respiratórios) impõe o uso mandatório de peças semifaciais filtrantes das classes PFF2 ou N95, as quais possuem eficiência de filtragem mínima de 95% de partículas microscópicas. Para a proteção das mucosas oculares contra projeções acidentais de fluidos orgânicos, sangue e secreções potencialmente infectantes, utilizam-se óculos de proteção de ampla visão com vedação perimetral em elastômero e tratamento anti-embaçante. A integridade cutânea do tronco e membros superiores é resguardada por aventais e capotes impermeáveis com barreira química e biológica certificada. No tocante às extremidades, o uso de luvas de procedimento em nitrilo ou látex deve ser duplo em procedimentos cirúrgicos. O cumprimento deste protocolo reduz drasticamente os índices de acidentes de trabalho com materiais perfurocortantes, cuja manipulação exige descarte imediato em caixas rígidas blindadas, mitigando o risco de soroconversão para hepatites e HIV na equipe de saúde.", 
    author: "SST Intelligence", 
    date: "30 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/hospital_biosafety_ppe/800/600", 
    is_featured: false 
  },
  { 
    id: 13, 
    category: "Economia", 
    title: "EPI para Frigoríficos e Ambientes Frios (NR-36)", 
    excerpt: "Uso de luvas de malha de aço anticorte e vestimentas térmicas para proteção térmica extrema.", 
    content: "O ambiente de processamento e abate de carnes nas indústrias frigoríficas, tutelado pela Norma Regulamentadora nº 36 (NR-36), impõe uma combinação severa de riscos ergonômicos, movimentos repetitivos e exposição contínua ao frio extremo. O choque térmico e as baixas temperaturas artificiais exigem o fornecimento de vestimentas térmicas em camadas (juntamente com meias, capuzes e luvas de sub-isolamento), dimensionadas cientificamente para manter a homeostase corpórea sem limitar a destreza motora do operário. Para as rotinas de desossa e cortes de peças com facas manuais, a engenharia de proteção individual determina o uso obrigatório de luvas de malha de aço inoxidável flexível tricotadas sem costura, que atuam como uma armadura impenetrável contra lesões por corte e amputações mecânicas perigosas. Os calçados de segurança devem possuir isolamento térmico interno em poliuretano expandido, biqueiras protetoras em composite leve (para evitar a condução térmica do aço) e solados com ranhuras profundas antiderrapantes de alta aderência, testados para mitigar escorregamentos em pisos industriais recobertos por fluidos, sangue e gorduras animais congeladas.", 
    author: "SST Intelligence", 
    date: "29 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/cold_storage_meat_processing/800/600", 
    is_featured: false 
  },
  { 
    id: 14, 
    category: "Legislação", 
    title: "EPI para Agricultura e Defensivos Agrícolas (NR-31)", 
    excerpt: "Kit protetor completo com respiradores químicos de carvão ativado e vestimentas hidro-repelentes.", 
    content: "A manipulação, preparo de calda e aplicação de defensivos fitossanitários no ambiente rural encontram-se sob a severa regulamentação da Norma Regulamentadora nº 31 (NR-31). Os riscos químicos associados à exposição a pesticidas orgânicos e sintéticos são combatidos por meio de um conjunto indissociável de EPIs conhecido tecnicamente como kit de defensivos. Este conjunto é composto por um macacão hidro-repelente tratado com tecnologias têxteis fluorocarbonadas que impedem que as névoas químicas penetrem e entrem em contato direto com a pele do trabalhador, evitando a absorção cutânea crônica. A proteção das vias aéreas superiores contra vapores orgânicos e névoas respiráveis exige respiradores semifaciais equipados com cartuchos combinados de carvão ativado e filtros mecânicos da classe P2. Viseiras faciais transparentes de policarbonato de alto impacto protegem os olhos e o rosto contra respingos durante a abertura de embalagens sob pressão, enquanto luvas de nitrilo de cano longo e botas de PVC impermeável garantem a vedação completa das extremidades do trabalhador contra contaminações agudas do solo.", 
    author: "SST Intelligence", 
    date: "28 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/agriculture_pesticide_protection/800/600", 
    is_featured: false 
  },
  { 
    id: 15, 
    category: "Acidentes", 
    title: "EPI para Mineração e Extração de Subsolo (NR-22)", 
    excerpt: "Uso de auto-salvadores respiratórios de oxigênio e capacetes integrados com sistemas de lanternas.", 
    content: "As atividades de mineração subterrânea e extração de opala, carvão ou minérios pesados, reguladas pela Norma Regulamentadora nº 22 (NR-22), configuram-se entre as mais perigosas da engenharia devido ao confinamento extremo e instabilidade geológica estrutural. O risco de inalação contínua de poeiras minerais geradas por detonações obriga o uso de respiradores com filtros mecânicos classe P3 de máxima eficiência contra a poeira de sílica livre cristalizada, agente causador da silicose, uma fibrose pulmonar irreversível. Diante do perigo de incêndios em subsolo ou contaminação por monóxido de carbono, cada mineiro deve portar fixado ao cinto um equipamento auto-salvador de geração química de oxigênio em circuito fechado, garantindo autonomia respiratória de emergência por até 60 minutos para evasão rápida. Os capacetes de segurança devem possuir nervuras de absorção de impactos severos por quedas de blocos rochosos, além de suportes para lanternas com baterias seladas intrinsecamente seguras (anti-fílmicas), projetadas para não gerar centelhas que possam detonar bolsas ocultas de gás metano (grisu).", 
    author: "SST Intelligence", 
    date: "27 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/underground_mining_safety/800/600", 
    is_featured: false 
  },
  { 
    id: 16, 
    category: "Educação", 
    title: "EPI para Cozinhas Industriais e Panificação", 
    excerpt: "Luvas de alta temperatura de aramida e aventais de lona impermeável contra queimaduras térmicas de óleo.", 
    content: "O ambiente operacional de cozinhas industriais de grande porte e plantas de panificação em massa apresenta riscos físicos críticos de origem térmica e ergonômica, exigindo mapeamento severo sob a ótica da higiene ocupacional. A manipulação contínua de assadeiras, cubas e grelhas aquecidas em fornos turbos de alta convecção a temperaturas superiores a 180°C demanda o uso compulsório de luvas de proteção térmica confeccionadas em fibras de aramida de alta densidade (como o Kevlar), material resistente à carbonização imediata e com baixo índice de condutibilidade térmica. Para as atividades executadas próximas a fritadeiras industriais e caldeiras de cocção, impõe-se o uso de aventais de PVC impermeabilizados pesados ou raspa tratada, que funcionam como barreira contra respingos de óleo vegetal fervente e jatos de vapor superaquecido. O risco mecânico de cortes severos no manuseio de fatiadores industriais e facas de açougue é neutralizado por luvas de fios sintéticos de alta performance anticorte, enquanto os pés são protegidos por calçados impermeáveis com solado de borracha vulcanizada vulcanizada antiderrapante resistente a óleos.", 
    author: "SST Intelligence", 
    date: "26 Mai 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/industrial_kitchen_safety/800/600", 
    is_featured: false 
  },
  { 
    id: 17, 
    category: "Inovação", 
    title: "EPI para Soldagem: Máscaras Automáticas", 
    excerpt: "Proteção ocular avançada com filtros de escurecimento ajustáveis para blindagem de raios UV/IV.", 
    content: "A atividade de soldagem industrial por processos como MIG/MAG, TIG ou eletrodo revestido emite energias radiantes de alta intensidade, gerando radiações ionizantes e não ionizantes severas (infravermelho e ultravioleta). O uso das tradicionais máscaras com lentes fixas escuras aumentava os índices de fadiga e acidentes devido à necessidade constante de levantar o escudo protetor. A engenharia de segurança moderna superou essa lacuna através do desenvolvimento de máscaras de solda com escurecimento automático eletrônico. Equipadas com sensores fotoelétricos infravermelhos de alta sensibilidade e filtros de cristal líquido (LCD), essas máscaras detectam a abertura do arco elétrico em frações de milissegundos (velocidade de chaveamento de até 1/25.000 de segundo), alterando o nível de tonalidade óptica do visor de um estado claro de repouso (DIN 3 ou 4) para um estado de proteção extrema (ajustável de DIN 9 a 13). Essa inovação tecnológica blinda totalmente a visão do soldador contra a foto-oftalmia, catarata ocupacional e ceratoconjuntivite actínica, além de elevar a precisão do cordão de solda e eliminar os riscos mecânicos de batidas no rosto decorrentes do manuseio repetitivo da máscara.", 
    author: "SST Intelligence", 
    date: "25 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/auto_darkening_welding_helmet/800/600", 
    is_featured: false 
  },
  { 
    id: 18, 
    category: "Legislação", 
    title: "EPI para Laboratórios Químicos (NR-26)", 
    excerpt: "Uso de luvas de neoprene de alta densidade e capuzes de proteção total contra respingos de ácidos.", 
    content: "A manipulação de agentes químicos agressivos, substâncias corrosivas, bases concentradas e solventes aromáticos inflamáveis em laboratórios de controle de qualidade demanda estrita conformidade com os requisitos de sinalização e proteção previstos na Norma Regulamentadora nº 26 (NR-26). Diante do risco de degradação e permeação química rápida sofrida pelas luvas comuns de látex, os químicos laboratoriais devem utilizar luvas confeccionadas em neoprene de alta densidade, borracha butílica ou borracha nitrílica espessa, cujos coeficientes de resistência química barram a penetração molecular de ácidos fortes. A proteção facial contra projeções de fluidos em reações exotérmicas imprevistas é executada por meio de protetores faciais inteiriços de policarbonato óptico acoplados a capuzes químicos de PVC. Como medida mitigadora complementar obrigatória na engenharia do laboratório, sistemas coletivos como capelas de exaustão de gases com cortinas de vidro temperado devem ser mantidos operando em paralelo com os chuveiros de emergência e lava-olhos hidraulicamente pressurizados instalados nas saídas de emergência da sala.", 
    author: "SST Intelligence", 
    date: "24 Mai 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/chemical_laboratory_ppe/800/600", 
    is_featured: false 
  },
  { 
    id: 19, 
    category: "Acidentes", 
    title: "EPI para Coleta de Lixo e Saneamento", 
    excerpt: "Luvas anti-perfuro de alta resistência e calçados com solado com blindagem perfurocortante.", 
    content: "Os profissionais alocados nos serviços essenciais de coleta de resíduos sólidos urbanos e saneamento básico enfrentam uma matriz de riscos biológicos e mecânicos de alta frequência e gravidade. O descarte residencial irregular de fragmentos de vidro, latas cortantes e agulhas hipodérmicas contaminadas provoca centenas de acidentes de trabalho anuais por perfuração. Para neutralizar essa ameaça, os garis e operadores de triagem devem utilizar luvas de segurança confeccionadas com suporte têxtil de fios de polietileno de alta performance (HPPE) tricotados com filamentos internos de aço inoxidável ou aramida, conferindo notas máximas de resistência ao corte e perfuração mecânica conforme a norma EN 388. Os calçados de segurança devem possuir entressolas e palmilhas de aço forjado ou tecidos técnicos de alta aramida anti-perfuro, impedindo que materiais pontiagudos perfurem o solado e atinjam a planta dos pés do trabalhador. Visando mitigar o risco crítico de atropelamentos em vias públicas, as vestimentas operacionais devem conter faixas retrorrefletivas de alta visibilidade com certificação de luminescência ativa para operações noturnas sob intempéries.", 
    author: "SST Intelligence", 
    date: "23 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/waste_management_safety/800/600", 
    is_featured: false 
  },
  { 
    id: 20, 
    category: "Inovação", 
    title: "EPI para Indústria Têxtil e Confecção", 
    excerpt: "Uso de luvas protetoras de malha de aço e protetores auriculares para atenuação de teares pneumáticos.", 
    content: "O ambiente de processamento mecânico da indústria têxtil e de alta confecção de vestuário oculta riscos físicos e mecânicos severos que necessitam de intervenção técnica sob a ótica da higiene do trabalho. Nas salas de corte e enfesto, onde lâminas de serras fita giratórias operam em altas velocidades para o fracionamento de pilhas densas de tecidos, é mandatório o uso de luvas de malha de aço inoxidável flexível de cinco dedos na mão de apoio do operador, impedindo amputações catastróficas por contato direto com a lâmina de corte. No setor de tecelagem automatizada, a operação contínua de dezenas de teares pneumáticos gera níveis de pressão sonora contínuos que frequentemente extrapolam os limites de tolerância de 85 dB(A) fixados pela NR-15. Para evitar o desenvolvimento da surdez profissional (PAIR), os trabalhadores devem utilizar protetores auriculares tipo concha com almofadas de vedação em poliuretano de alta atenuação acústica acoplados a arcos ergonômicos ajustáveis, complementados por óculos de proteção de policarbonato contra a projeção de agulhas partidas sob pressão mecânica.", 
    author: "SST Intelligence", 
    date: "22 Mai 2026", 
    read_time: "10 min", 
    image_time: "10 min", 
    image_url: "https://picsum.photos/seed/textile_factory_hearing_protection/800/600", 
    is_featured: false 
  },
{ 
    id: 21, 
    category: "Acidentes", 
    title: "EPI para Brigadas de Incêndio e Emergências (NR-23)", 
    excerpt: "Roupas de aproximação de Kevlar e botas com isolamento contra choque térmico e elétrico.", 
    content: "O dimensionamento e a equipação das Brigadas de Incêndio, sob as diretrizes da Norma Regulamentadora nº 23 (NR-23) em consonância com as instruções técnicas dos Corpos de Bombeiros Militares, exigem Equipamentos de Proteção Individual de engenharia avançada capazes de suportar estresses térmicos severos. O traje de aproximação padrão é composto por estruturas multicamadas: uma camada externa de fibra inerentemente antichama (como o Kevlar ou Nomex) que impede a ignição e resiste a rasgos; uma barreira interna de umidade que impede a entrada de vapor d'água superaquecido e líquidos quentes; e um forro de isolamento térmico denso que dissipa o calor por condução e irradiação. A proteção das vias respiratórias é mandatória através do uso de Equipamentos de Proteção Respiratória (EPR) autônomos de circuito aberto com cilindros de ar comprimido a 300 bar, dotados de máscaras faciais de pressão positiva que evitam a intrusão de monóxido de carbono e cianeto de hidrogênio gerados pela combustão de polímeros. As botas para combate a incêndio estrutural são confeccionadas em borracha vulcanizada com blindagem interna em aço ou composite na biqueira e na entressola, oferecendo resistência ao perfuramento e, fundamentalmente, isolamento dielétrico certificado para proteger o brigadista contra tensões de passo e choques elétricos em ambientes inundados com fiação energizada exposta.", 
    author: "SST Intelligence", 
    date: "21 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/firefighter_brigade_emergency/800/600", 
    is_featured: false 
  },
  { 
    id: 22, 
    category: "Inovação", 
    title: "EPI para Movimentação de Cargas e Logística Pesada (NR-11)", 
    excerpt: "Calçados com proteção metatarsal integrada e luvas de alta abrasão mecânica.", 
    content: "A operação de movimentação, armazenamento e manuseio de materiais pesados, regulada de forma estrita pela Norma Regulamentadora nº 11 (NR-11), expõe os trabalhadores a riscos contínuos de esmagamento, aprisionamento e impactos de grande energia cinética provocados por pontes rolantes, empilhadeiras e guindastes. No âmbito da proteção individual, o calçado de segurança assume papel central de engenharia preventiva: além da biqueira de aço ou composite resistente a impactos de até 200 Joules, exige-se a incorporação da proteção metatarsal externa ou interna. Essa blindagem anatômica estende-se sobre o peito do pé, distribuindo uniformemente as forças de compressão mecânica causadas pela queda de chapas metálicas ou blocos de concreto, salvaguardando a integridade dos ossos metatarianos contra fraturas estruturais complexas. As mãos dos operadores e sinaleiros devem ser resguardadas por luvas de alta performance mecânica revestidas com borracha nitrílica ou poliuretano na palma, apresentando altos índices de resistência à abrasão, corte e rasgamento conforme os parâmetros internacionais da norma EN 388, garantindo aderência absoluta no manuseio de cabos de aço e cintas de poliéster, além de capacetes de segurança com alta absorção contra impactos verticais e laterais provindos de cargas oscilantes suspensas.", 
    author: "SST Intelligence", 
    date: "20 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/crane_logistics_cargo_handling/800/600", 
    is_featured: false 
  },
  { 
    id: 23, 
    category: "Legislação", 
    title: "EPI para Postos de Combustíveis e Controle de Benzeno (NR-20)", 
    excerpt: "Uso de máscaras contra vapores orgânicos de benzeno e aventais de PVC impermeáveis.", 
    content: "Os postos de reabastecimento de combustíveis líquidos enquadram-se nas exigências rigorosas de segurança da Norma Regulamentadora nº 20 (NR-20), com atenção especial ao seu Anexo IV, que dita as medidas de prevenção à exposição ocupacional ao Benzeno, um composto aromático altamente volátil classificado como agente cancerígeno humano de classe 1. Durante as rotinas de abastecimento, medição de tanques e descarga selada, os frentistas enfrentam riscos de contaminação por via respiratória e cutânea. A proteção respiratória exige o uso de respiradores semifaciais equipados com cartuchos filtrantes de carvão ativado específicos para vapores orgânicos, que retêm as moléculas gasosas antes do contato alveolar. A via dérmica é protegida por aventais impermeáveis de PVC ou poliuretano de alta densidade e luvas de nitrilo ou neoprene com resistência à permeação de solventes orgânicos. A legislação proíbe terminantemente o uso de panos ou estopas para limpeza de respingos nos veículos, impondo o uso de materiais absorventes industriais. Complementarmente, os trabalhadores passam por monitoramento biológico periódico por meio de exames laboratoriais de Ácido Trans,Trans-Mucônico Urinário (TTMA) para aferir os níveis de absorção biológica do composto, integrando os dados clínicos ao PCMSO da empresa.", 
    author: "SST Intelligence", 
    date: "19 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/gas_station_fuel_safety/800/600", 
    is_featured: false 
  },
  { 
    id: 24, 
    category: "Acidentes", 
    title: "EPI para Silos e Armazenamento de Grãos Agrícolas", 
    excerpt: "Proteção contra poeiras combustíveis orgânicas e explosões com mapas de cabos de vida.", 
    content: "As estruturas de armazenamento vertical de grãos (silos agrícolas) configuram um dos cenários mais complexos da engenharia de segurança, unindo os riscos de espaços confinados (NR-33) com os perigos de poeiras orgânicas combustíveis regulados pela NR-31. O atrito e a movimentação de milho, soja e trigo geram bioaerossóis suspensos que, sob confinamento, formam uma atmosfera explosiva (ATEX). Qualquer faísca de origem estática ou mecânica pode deflagrar explosões catastróficas em cadeia. Portanto, os operadores devem portar lanternas, rádios e ferramentas com certificação Ex (segurança intrínseca de proteção elétrica). O risco mecânico de engolfamento e soterramento por grãos — que agem de forma similar a fluidos densos — exige o uso ininterrupto de cinturões de segurança tipo paraquedista dotados de conexões dorsais firmemente acoplados a cabos de vida verticais retráteis de aço inox fixados no topo do silo. No tocante à higiene ocupacional, a proteção respiratória contra fungos, ácaros e poeiras orgânicas causadoras de alveolites requer respiradores com filtros do tipo PFF3 de vedação hermética, impedindo patologias respiratórias crônicas severas e intoxicações por defensivos residuais acumulados na massa de grãos.", 
    author: "SST Intelligence", 
    date: "18 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/grain_silo_agriculture_explosion/800/600", 
    is_featured: false 
  },
  { 
    id: 25, 
    category: "Legislação", 
    title: "Diretrizes de Exames Clínicos e Laboratoriais no PCMSO (NR-7)", 
    excerpt: "Monitoramento de indicadores biológicos através de exames admissionais, periódicos e demissionais.", 
    content: "O Programa de Controle Médico de Saúde Ocupacional (PCMSO), disciplinado pela Norma Regulamentadora nº 7 (NR-7), constitui a ferramenta clínica de rastreamento e diagnóstico precoce dos agravos à saúde relacionados ao trabalho. Sua estrutura deve ser estritamente integrada com os dados levantados no Inventário de Riscos do PGR (NR-1). O médico coordenador determina a realização de exames admissionais antes que o trabalhador assuma suas funções, periódicos em intervalos que variam de acordo com a faixa etária e exposição a agentes nocivos, de retorno ao trabalho após afastamentos superiores a 30 dias por motivos de saúde, de mudança de riscos ocupacionais, e demissionais. Além da avaliação clínica detalhada com anamnese ocupacional, o PCMSO impõe a realização de Indicadores Biológicos de Exposição (IBE) previstos no Anexo I da norma. Trabalhadores expostos ao chumbo passam por dosagens de chumbo no sangue (plumbemia); operadores expostos ao ruído realizam exames audiométricos repetitivos sob repouso acústico de 14 horas; e trabalhadores expostos a poeiras minerais realizam telerradiografias de tórax padronizadas pela OIT (padrão ILO) para detecção de pneumoconioses, garantindo a rastreabilidade médica legal do quadro corporativo.", 
    author: "SST Intelligence", 
    date: "17 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/medical_occupational_exam_doctor/800/600", 
    is_featured: false 
  },
  { 
    id: 26, 
    category: "Inovação", 
    title: "Ergonomia Biomecânica: Análise Ergonômica Preliminar (NR-17)", 
    excerpt: "Adoção de posturas adequadas, pausas programadas e adaptação biomecânica de postos de trabalho.", 
    content: "A Norma Regulamentadora nº 17 (NR-17) estabelece as diretrizes para a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, visando proporcionar o máximo de conforto, segurança e desempenho eficiente. A grande inovação trazida pelas revisões normativas recentes foi a obrigatoriedade da Análise Ergonômica Preliminar (AEP), que atua como uma triagem dinâmica executada por meio de metodologias consolidadas (como os métodos RULA, REBA ou equações de NIOSH) para avaliar a sobrecarga mecânica em membros superiores, coluna vertebral e pescoço. A AEP deve mapear perigos associados ao levantamento manual de cargas volumosas, repetitividade excessiva em linhas de montagem automotivas e posturas estáticas prolongadas em escritórios (teletrabalho). Constatada a sobrecarga, a empresa deve implementar medidas imediatas de engenharia ergonômica: introdução de braços pneumáticos articulados de sustentação, adaptação dimensional do mobiliário industrial com regulagens de altura milimétricas e o estabelecimento compulsório de pausas ativas integradas para recuperação muscular. Essa abordagem científica ataca a causa raiz de Distúrbios Osteomusculares Relacionados ao Trabalho (DORT/LER), reduzindo os índices de absenteísmo médico.", 
    author: "SST Intelligence", 
    date: "16 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/ergonomics_industrial_office_assessment/800/600", 
    is_featured: false 
  },
  { 
    id: 27, 
    category: "Legislação", 
    title: "Adicional de Insalubridade e Limites de Tolerância (NR-15)", 
    excerpt: "Limites de tolerância física para ruído, calor, poeiras e agentes químicos perigosos.", 
    content: "A caracterização e a classificação da Insalubridade são balizadas de forma analítica e quantitativa pela Norma Regulamentadora nº 15 (NR-15). Juridicamente, são consideradas atividades insalubres aquelas que expõem os colaboradores a agentes físicos (ruído contínuo, calor radiante, vibrações de corpo inteiro, radiações ionizantes), agentes químicos (gases, névoas e vapores tóxicos) ou agentes biológicos nocivos à saúde acima dos Limites de Tolerância (LT) fixados nos anexos da norma. Para agentes como o ruído, adota-se o critério de dosimetria acústica baseada na taxa de incremento de duplo decibel (q=5), onde o LT para 8 horas de exposição diária é fixado rigidamente em 85 dB(A). A aferição do estresse térmico em ambientes fechados ou abertos com incidência de carga solar requer o cálculo do Índice de Bulbo Úmido Termômetro de Globo (IBUTG). Constatado o extravasamento dos limites por meio de Laudo de Insalubridade assinado por Engenheiro de Segurança ou Médico do Trabalho, o trabalhador faz jus ao recebimento de um adicional pecuniário equivalente a 10% (grau mínimo), 20% (grau médio) ou 40% (grau máximo), calculados de forma compulsória sobre o salário-mínimo vigente, cessando o direito ao pagamento caso medidas de proteção coletiva ou EPI eliminem a exposição nociva na fonte.", 
    author: "SST Intelligence", 
    date: "15 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/industrial_hygiene_measurement_insalubridade/800/600", 
    is_featured: false 
  },
  { 
    id: 28, 
    category: "Legislação", 
    title: "Adicional de Periculosidade e Riscos de Fatalidade (NR-16)", 
    excerpt: "Direito garantido de 30% sobre o salário base para atividades com inflamáveis, explosivos e eletricidade.", 
    content: "A Norma Regulamentadora nº 16 (NR-16) dita os preceitos técnicos e legais que regulam as Atividades e Operações Perigosas no território nacional. Diferentemente do conceito de insalubridade — focado em adoecimentos crônicos de longo prazo por exposição cumulativa —, a periculosidade lida com o risco iminente, imediato e violento de óbito decorrente de sinistros industriais ou operacionais de grande escala. Os anexos da NR-16 definem taxativamente como áreas perigosas o armazenamento e manipulação de explosivos de demolição, combustíveis inflamáveis em tanques elevados ou subterrâneos, instalações de energia elétrica sob condições de alta tensão da NR-10, atividades de segurança pessoal e patrimonial com uso de armas de fogo, além do uso profissional de motocicletas em vias públicas. A caracterização jurídica da periculosidade exige vistoria pericial in loco e, uma vez ratificada, garante ao empregado o direito ao recebimento de um adicional salarial fixo de 30% incidente diretamente sobre o seu salário nominal base, vedada a inclusão de gratificações, prêmios ou participações nos lucros corporativos, não sendo permitida por lei a acumulação com o adicional de insalubridade.", 
    author: "SST Intelligence", 
    date: "14 Mai 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/high_voltage_hazardous_danger/800/600", 
    is_featured: false 
  },
  { 
    id: 29, 
    category: "Economia", 
    title: "LTCAT e a Transmissão das Cargas de SST no eSocial", 
    excerpt: "Envio das cargas obrigatórias dos eventos S-2210, S-2220 e S-2240 para os servidores federais.", 
    content: "O Laudo Técnico das Condições Ambientais do Trabalho (LTCAT) constitui um documento de natureza estritamente previdenciária, instituído pela Lei nº 8.213/91 do INSS, cuja finalidade técnico-legal é atestar se a exposição do segurado aos agentes nocivos químicos, físicos ou biológicos dá direito à concessão do benefício de aposentadoria especial. Sob o ecossistema digital moderno do Governo Federal, as conclusões técnicas contidas no LTCAT devem ser obrigatoriamente transmitidas para o sistema unificado do eSocial por meio das cargas de eventos específicas de SST. O evento S-2210 trata da Comunicação de Acidente de Trabalho (CAT), exigindo abertura imediata em até 24 horas pós-sinistro; o evento S-2220 compila o Monitoramento da Saúde do Trabalhador, transmitindo os dados dos ASOs gerados pelo PCMSO; e o evento S-2240 consolida as Condições Ambientais do Trabalho - Fatores de Risco, mapeando detalhadamente os agentes nocivos aos quais o colaborador está exposto, a eficácia das medidas de proteção coletiva implantadas e os Códigos de Homologação de GFIP. Erros ou omissões no envio eletrônico dessas cargas sujeitam as companhias a multas pecuniárias retroativas automatizadas aplicadas pela Receita Federal.", 
    author: "SST Intelligence", 
    date: "13 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/esocial_digital_database_sst/800/600", 
    is_featured: false 
  },
  { 
    id: 30, 
    category: "Legislação", 
    title: "Perfil Profissiográfico Previdenciário (PPP) Eletrônico", 
    excerpt: "Histórico completo detalhado do trabalhador focado na comprovação legal junto ao INSS.", 
    content: "O Perfil Profissiográfico Previdenciário (PPP), documento histórico-laboral obrigatório que reúne todos os dados administrativos, registros ambientais e resultados de monitoramento biológico de um trabalhador, migrou de forma definitiva e compulsória para o formato 100% eletrônico. A estruturação do PPP Eletrônico é alimentada em tempo real pelas transmissões das cargas de SST enviadas pelas empresas ao eSocial (especialmente o evento S-2240). O documento consolidado fica disponível ao cidadão por meio dos canais digitais do Meu INSS, eliminando as antigas fraudes em formulários de papel e as dificuldades de preenchimento retroativo de empresas extintas. O preenchimento do PPP eletrônico exige a indicação exata dos profissionais legalmente habilitados responsáveis pelas avaliações ambientais (Engenheiro de Segurança) e médicas (Médico do Trabalho), servindo como peça jurídica basilar e irrefutável para a concessão administrativa ou judicial de aposentadorias especiais baseadas em tempos de contribuição de 15, 20 ou 25 anos expostos a níveis insalubres críticos.", 
    author: "SST Intelligence", 
    date: "12 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/digital_history_ppp_document/800/600", 
    is_featured: false 
  },
  { 
    id: 31, 
    category: "Acidentes", 
    title: "Nexo Técnico Previdenciário (NTEP) e a Gestão de Doenças Ocupacionais", 
    excerpt: "Cruzamento automatizado estatístico entre o CID médico e o CNAE empresarial pelo INSS.", 
    content: "O Nexo Técnico Previdenciário (NTEP), instituído pelo Decreto nº 6.042/2007, revolucionou a relação entre a saúde do trabalhador e a previdência social ao estabelecer um cruzamento estatístico e epidemiológico automatizado. O sistema funciona cruzando o código da Classificação Internacional de Doenças (CID), apresentado pelo trabalhador na perícia médica do INSS, com a Classificação Nacional de Atividades Econômicas (CNAE) da empresa contratante. Caso haja uma recorrência estatística significante daquela patologia específica naquele setor econômico, a autarquia federal presume de forma automática que a doença possui nexo causal com o trabalho realizado. Essa presunção inverte o ônus da prova, obrigando a organização a demonstrar, por meio de documentações técnicas robustas (como o PGR, PCMSO e laudos ergonômicos), que o ambiente laboral não deu causa ao adoecimento. O reconhecimento do NTEP converte o auxílio-doença comum (B31) em auxílio-doença acidentário (B91), o que acarreta severas implicações financeiras e jurídicas para o empregador: obrigatoriedade de recolhimento contínuo do FGTS durante o afastamento, estabilidade provisória de 12 meses para o funcionário pós-retorno e a elevação imediata da alíquota do Fator Acidentário de Prevenção (FAP), onerando a folha de pagamento tributária.", 
    author: "SST Intelligence", 
    date: "11 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/medical_epidemiology_data/800/600", 
    is_featured: false 
  },
  { 
    id: 32, 
    category: "Educação", 
    title: "Protocolos de Primeiros Socorros no Ambiente Corporativo", 
    excerpt: "Treinamento básico de ressuscitação cardiorrespiratória (RCR) e atendimento de engasgos.", 
    content: "O estabelecimento de protocolos emergenciais de primeiros socorros nas organizações atende tanto a preceitos humanitários de preservação da vida quanto a exigências legais explícitas contidas na NR-7 e na legislação nacional, a exemplo da Lei Lucas. A manutenção de uma equipe de colaboradores devidamente treinada em Atendimento Pré-Hospitalar (APH) básico assegura uma janela de resposta crítica em situações de paradas cardiorrespiratórias (PCR), engasgos obstrutivos e traumas mecânicos hemorrágicos antes da chegada do suporte médico avançado. O treinamento deve capacitar os socorristas na execução imediata da Ressuscitação Cardiorrespiratória (RCR), aplicando o ciclo padronizado de 30 compressões torácicas profundas para duas ventilações de resgate, além do manuseio correto do Desfibrilador Externo Automático (DEA), dispositivo eletrônico cuja presença é vital em plantas industriais. O protocolo também abrange a desobstrução de vias aéreas por meio da Manobra de Heimlich em casos de asfixia por corpos estranhos, bem como técnicas de compressão direta e aplicação de torniquetes homologados para contenção de hemorragias arteriais massivas decorrentes de acidentes com maquinários, minimizando os índices de óbito evitável no ambiente de trabalho.", 
    author: "SST Intelligence", 
    date: "10 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/first_aid_cpr_training/800/600", 
    is_featured: false 
  },
  { 
    id: 33, 
    category: "Educação", 
    title: "Sinalização de Segurança e Padronização de Rotulagem GHS (NR-26)", 
    excerpt: "Padronização internacional de cores, pictogramas de perigo e fichas de segurança química FDS.", 
    content: "A Norma Regulamentadora nº 26 (NR-26) disciplina de forma rigorosa as cores e os sistemas de comunicação visual destinados à prevenção de acidentes nos locais de trabalho, determinando a identificação inequívoca de tubulações industriais, zonas de perigo e equipamentos de combate a incêndio. As atualizações normativas integraram a legislação brasileira ao Sistema Global Harmonizado de Classificação e Rotulagem de Produtos Químicos (GHS), estabelecendo um padrão visual internacional para a comunicação de perigos químicos. Sob essa égide, qualquer insumo fracionado ou armazenado na planta deve conter rótulos estruturados com palavras de advertência, frases de perigo e os pictogramas padronizados (losangos de borda vermelha com símbolos pretos) indicando toxicidade, corrosão, inflamabilidade ou perigo à saúde. Adicionalmente, a antiga FISPQ foi substituída de forma definitiva pela Ficha com Dados de Segurança (FDS). Este documento técnico denso, dividido em 16 seções obrigatórias, detalha as propriedades físicas do composto, limites de tolerância ocupacional, medidas de primeiros socorros em caso de contato e os agentes de extinção ideais, funcionando como peça de consulta obrigatória para os engenheiros na elaboração do PGR.", 
    author: "SST Intelligence", 
    date: "09 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/chemical_safety_ghs_labels/800/600", 
    is_featured: false 
  },
  { 
    id: 34, 
    category: "Acidentes", 
    title: "Método da Árvore de Causas na Investigação Científica de Acidentes", 
    excerpt: "Engenharia reversa analítica para identificação minuciosa de falhas latentes organizacionais.", 
    content: "O método da Árvore de Causas constitui uma metodologia científica de engenharia reversa aplicada à investigação de acidentes do trabalho, desenvolvida originalmente pelo INRS na França, que recusa terminantemente explicações simplistas baseadas apenas em 'culpa da vítima' ou 'ato inseguro'. A premissa analítica baseia-se na constatação de que um acidente nunca é fruto de uma causa única isolada, mas sim o resultado final de uma rede complexa e multifatorial de antecedentes que se interrelacionam. A investigação inicia-se imediatamente após o sinistro por meio da coleta rigorosa de fatos objetivos e observáveis, banindo suposições ou juízos de valor. A árvore é construída graficamente da direita para a esquerda, partindo do dano final e retrocedendo cronologicamente através de perguntas lógicas estruturadas: 'O que foi necessário para que esse fato ocorresse?' e 'Se esse fato não tivesse ocorrido, o acidente teria sido evitado?'. Esse processo investigativo verticalizado expõe falhas latentes em toda a matriz de gestão corporativa, revelando problemas ocultos como a falta de manutenção preditiva em sensores, deficiências nos programas de treinamento andragógico e pressões de produção que induzem ao desvio de procedimentos operacionais padrão.", 
    author: "SST Intelligence", 
    date: "08 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/accident_investigation_analysis/800/600", 
    is_featured: false 
  },
  { 
    id: 35, 
    category: "Legislação", 
    title: "Sistemas de Proteção Contra Incêndios e Engenharia de Combate (NR-23)", 
    excerpt: "Classes de fogos de A a K, rotas de fuga sinalizadas e dimensionamento hidráulico de hidrantes.", 
    content: "A Norma Regulamentadora nº 23 (NR-23) estabelece as condições imperativas de proteção contra incêndios que todas as organizações devem possuir, visando à rápida evacuação dos ocupantes e à contenção primária de focos ígneos. A engenharia de incêndio baseia-se no controle das reações químicas do tetraedro do fogo, exigindo o dimensionamento rigoroso da carga de incêndio da edificação para determinar o tipo e a quantidade de extintores portáteis e sistemas de hidrantes. As classes de fogo exigem agentes de extinção específicos: a Classe A (sólidos combustíveis como madeira e papel) requer resfriamento por água; a Classe B (líquidos inflamáveis como tintas e solventes) exige abafamento por pó químico ou espuma; a Classe C (equipamentos elétricos energizados) demanda agentes não condutores como o CO2 para evitar curtos-circuitos severos; enquanto a Classe K é direcionada a óleos de cozinhas industriais. Além do combate ativo, a NR-23 foca intensamente na proteção passiva, impondo saídas de emergência e rotas de fuga desimpedidas, dotadas de iluminação de emergência autônoma e portas corta-fogo equipadas com barras antipânico de abertura mecânica imediata sob pressão corporal.", 
    author: "SST Intelligence", 
    date: "07 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/industrial_fire_protection_system/800/600", 
    is_featured: false 
  },
  { 
    id: 36, 
    category: "Economia", 
    title: "Gestão de Terceirizados e a Responsabilidade Civil e Criminal em SST", 
    excerpt: "Fiscalização preventiva e jurídica de terceiros sob a ótica da responsabilidade solidária de SST.", 
    content: "No atual cenário econômico de alta descentralização produtiva, a gestão de empresas contratadas e prestadoras de serviços terceirizados tornou-se um dos maiores desafios jurídicos e de compliance para os profissionais de Segurança do Trabalho. Sob a ótica do ordenamento jurídico trabalhista e previdenciário brasileiro, em consonância com as diretrizes da NR-1, a empresa tomadora de serviços possui responsabilidade solidária e subsidiária em relação à integridade física de todos os trabalhadores alocados em suas dependências. Isso significa que, em caso de acidentes graves ou desenvolvimento de doenças ocupacionais, a contratante responde civil e criminalmente perante a Justiça do Trabalho e o Ministério Público. Portanto, impõe-se a implementação de um sistema rigoroso de auditoria documental e operacional: a tomadora deve exigir a integração imediata dos inventários de riscos das empresas terceirizadas em seu PGR principal, fiscalizar ativamente a entrega e validade dos CAs dos EPIs dos trabalhadores terceiros, validar a conformidade dos ASOs emitidos pelo PCMSO externo e paralisar imediatamente qualquer atividade das contratadas que apresente risco grave e iminente à vida, sob pena de autuações administrativas severas.", 
    author: "SST Intelligence", 
    date: "06 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/corporate_compliance_contractors/800/600", 
    is_featured: false 
  },
  { 
    id: 37, 
    category: "Educação", 
    title: "Cultura de Segurança e a Aplicação Prática da Curva de Bradley", 
    excerpt: "Os estágios culturais de maturidade corporativa: do reativo ao interdependente focado em pessoas.", 
    content: "A Curva de Bradley, desenvolvida originalmente pela DuPont, constitui um dos modelos conceituais mais robustos da psicologia e engenharia de segurança para mapear o nível de maturidade e eficácia da cultura preventiva dentro de uma organização. O modelo correlaciona o índice de acidentes de trabalho com o comportamento coletivo da força laboral, dividindo a evolução cultural em quatro estágios rígidos. O primeiro estágio é o Reativo, onde a segurança é baseada no instinto e as ações ocorrem apenas após o sinistro. O segundo é o Dependente, caracterizado pela obediência cega a regras impostas por fiscais de segurança, onde o indicador só melhora sob supervisão direta. O terceiro estágio é o Independente, no qual o trabalhador assume a auto-responsabilidade, internaliza os conceitos e cuida de si de forma autônoma. O ápice da excelência operacional ocorre no quarto estágio, denominado Interdependente: nesse nível, a segurança transcende o indivíduo e torna-se um valor coletivo orgânico, onde os membros da equipe cuidam ativamente uns dos outros, recusam condições inseguras de forma mútua e compartilham o orgulho de atingir a meta histórica de zero acidentes.", 
    author: "SST Intelligence", 
    date: "05 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/bradley_curve_safety_culture/800/600", 
    is_featured: false 
  },
  { 
    id: 38, 
    category: "Legislação", 
    title: "Processos de Auditoria e Fiscalização Federal do Trabalho em SST", 
    excerpt: "Como funcionam as inspeções de rotina, lavratura de autos de infração e embargos técnicos.", 
    content: "O processo de fiscalização e inspeção do trabalho no Brasil é executado de forma autônoma pelos Auditores-Fiscais do Trabalho (AFT), agentes vinculados ao Ministério do Trabalho e Emprego dotados de prerrogativas legais amparadas pela CLT e pela Constituição Federal. Os auditores possuem livre acesso a todas as dependências de qualquer estabelecimento industrial, comercial ou agrícola do país, independentemente de aviso prévio. A auditoria fiscal baseia-se na verificação in loco das condições ambientais de trabalho e na conferência detalhada do acervo documental obrigatório. Caso o AFT constate descumprimentos diretos das Normas Regulamentadoras, é lavrado o Auto de Infração, disparando um processo administrativo que culmina em multas pecuniárias calculadas de acordo com o número de funcionários e o índice de infração verificado (NR-28). Diante da constatação de uma situação de Risco Grave e Iminente (RGI) à integridade física do trabalhador, o Auditor tem o poder-dever legal de determinar de forma imediata o embargo de uma obra ou a interdição de uma máquina ou setor fabril, paralisando as atividades operacionais sem prejuízo dos salários dos colaboradores envolvidos.", 
    author: "SST Intelligence", 
    date: "04 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/government_labor_inspection/800/600", 
    is_featured: false 
  },
  { 
    id: 39, 
    category: "Inovação", 
    title: "A Introdução de Exoesqueletos Ocupacionais na Indústria 4.0", 
    excerpt: "Adoção de estruturas passivas e ativas para redução drástica de torque lombar em montadoras.", 
    content: "A engenharia biomecânica e a ergonomia industrial atingiram um novo patamar de inovação tecnológica com o desenvolvimento dos exoesqueletos ocupacionais sob a égide da Indústria 4.0. Esses dispositivos vestíveis de alta performance são projetados especificamente para mitigar a fadiga muscular e atenuar a sobrecarga ortopédica em trabalhadores alocados em linhas de produção metalúrgica, montadoras automotivas e hubs de logística pesada. Dividem-se tecnicamente em duas categorias principais: os exoesqueletos passivos, que utilizam sistemas mecânicos de molas, molas a gás e contrapesos cinéticos para armazenar a energia do próprio movimento do usuário e redistribuir o torque gravitacional de regiões vulneráveis (como a articulação L5-S1 da coluna lombar e o manguito rotador dos ombros); e os exoesqueletos ativos, alimentados por servomotores e baterias que geram força externa ativa assistida. Estudos cinemáticos apontam que a adoção correta dessas estruturas reduz em até 40% a atividade eletromiográfica muscular do operário durante tarefas repetitivas de elevação de cargas, operando como uma barreira tecnológica definitiva contra o desenvolvimento de lesões de coluna e ombros.", 
    author: "SST Intelligence", 
    date: "03 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/industrial_exoskeleton_ergonomics/800/600", 
    is_featured: false 
  },
  { 
    id: 40, 
    category: "Educação", 
    title: "Gamificação e Métodos Andragógicos Aplicados ao DDS Moderno", 
    excerpt: "Substituição de palestras cansativas por aplicativos gamificados e dinâmicas interativas focadas.", 
    content: "O Diálogo Diário de Segurança (DDS) constitui uma das ferramentas de campo mais tradicionais e importantes da cultura preventiva, consistindo em breves reuniões de alinhamento operacional realizadas antes do início dos turnos de trabalho. Contudo, os modelos clássicos baseados em discursos passivos e leitura monótona de textos regulamentares sofrem com baixos índices de engajamento e retenção mental. A modernização do DDS apoia-se nos pilares científicos da Andragogia — a teoria da aprendizagem de adultos formulada por Malcolm Knowles —, que pressupõe que o trabalhador adulto necessita compreender a utilidade prática do conhecimento e ser agente ativo no processo de ensino. Através da incorporação de técnicas de Gamificação (Mecânica de Jogos) mediadas por dispositivos móveis ou painéis industriais, o DDS é transformado em um ambiente competitivo e interativo: simulações digitais de risco em 3D, quizzes em tempo real e dinâmicas de engenharia reversa de quase-acidentes geram um engajamento comportamental imediato, elevando exponencialmente a fixação dos procedimentos de segurança e o cumprimento voluntário do uso de EPIs na área fabril.", 
    author: "SST Intelligence", 
    date: "02 Mai 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/gamified_safety_training_dds/800/600", 
    is_featured: false 
  },
  { 
    id: 41, 
    category: "Legislação", 
    title: "Dimensionamento de Linhas de Vida Horizontais Flexíveis (NR-35)", 
    excerpt: "Análise de engenharia estrutural sobre absorção de impacto, seta de deflexão e cálculo de carga nos ancoragens.", 
    content: "O projeto e o dimensionamento de Sistemas de Proteção Coletiva Contra Quedas (SPCQ), especificamente as Linhas de Vida Horizontais Flexíveis sob a égide da Norma Regulamentadora nº 35 (NR-35) e da ABNT NBR 16329, exigem cálculos rigorosos de engenharia estrutural. Diferente das linhas rígidas, os sistemas flexíveis constituídos por cabos de aço sofrem uma deformação plástica significativa no momento da retenção de uma queda, fenômeno conhecido como seta de deflexão. O engenheiro calculista deve prever com exatidão a força de impacto transmitida para as ancoragens de extremidade e intermediárias, aplicando o princípio da conservação de energia e equações de catenária. É mandatória a inclusão de absorvedores de energia lineares que limitem a força de choque no corpo do trabalhador a no máximo 6 kN. O cálculo da Zona de Livre Queda (ZLQ) deve ser reavaliado considerando a extensão do absorvedor, a flecha dinâmica do cabo de aço sob estresse e a deformação dos pontos de fixação estruturais. Toda linha de vida horizontal deve possuir um Prontuário Técnico contendo memória de cálculo detalhada, desenho de engenharia, ensaios não destrutivos dos pontos de fixação e a respectiva Anotação de Responsabilidade Técnica (ART) emitida por profissional legalmente habilitado.", 
    author: "SST Intelligence", 
    date: "01 Mai 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/lifeline_engineering_fall_protection/800/600", 
    is_featured: false 
  },
  { 
    id: 42, 
    category: "Inovação", 
    title: "Apreciação de Riscos na NR-12 e Categorias de Interoperabilidade Falha", 
    excerpt: "Aplicação da norma ABNT NBR ISO 12100 para determinação do PL e arquiteturas de circuitos de segurança.", 
    content: "A adequação mecânica e elétrica de maquinários industriais sob a égide da Norma Regulamentadora nº 12 (NR-12) exige a execução preliminar de uma Apreciação de Riscos detalhada, balizada pelos parâmetros científicos da norma técnica ABNT NBR ISO 12100. Esse processo metodológico quantifica o índice de risco com base na severidade da lesão potencial, frequência de exposição e possibilidade de evitação do perigo. A partir dessa matriz, determina-se o Performance Level requerido (PLr) para os circuitos eletrônicos de segurança que comandam os dispositivos de intertravamento (sensores magnéticos, cortinas de luz e chaves de segurança com bloqueio). De acordo com a norma ABNT NBR ISO 13849-1, os circuitos devem ser projetados em arquiteturas que variam da Categoria B à Categoria 4. Em zonas de alto risco de amputação ou esmagamento, exige-se a Categoria 4, que adota redundância total (duplo canal) e monitoramento dinâmico contínuo por relés de segurança. Nessa configuração, uma falha isolada em qualquer componente do circuito (como o colamento de um contato de contator) é detectada imediatamente pelo sistema, impedindo que a máquina inicie um novo ciclo operacional perigoso até que o defeito seja sanado, eliminando os acidentes por falha oculta.", 
    author: "SST Intelligence", 
    date: "30 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/machinery_risk_assessment_nr12/800/600", 
    is_featured: false 
  },
  { 
    id: 43, 
    category: "Acidentes", 
    title: "Avaliação Quantitativa de Vibrações Ocupacionais (VCI e VMB) na NR-15", 
    excerpt: "Metodologias de triagem de Higiene Ocupacional baseadas nas normas ISO 2631 e ISO 5349.", 
    content: "A exposição ocupacional a vibrações mecânicas configura um risco físico crítico capaz de desencadear patologias vasculares, neurológicas e osteomusculares severas nos trabalhadores. A Higiene Ocupacional divide a avaliação desse agente de forma quantitativa em dois grandes grupos: Vibração de Corpo Inteiro (VCI), comum em operadores de retroescavadeiras, tratores e caminhões pesados, e Vibração de Mãos e Braços (VMB), associada ao manuseio de marteletes pneumáticos, motosserras e lixadeiras. A metodologia de medição, ditada pelo Anexo VIII da NR-15 e pelas normas ISO 2631 e ISO 5349, exige o uso de acelerômetros triaxiais fixados nos pontos de transmissão de energia (assento do operador para VCI e manopla da ferramenta para VMB). Os dados coletados são expressos em aceleração resultante de exposição normalizada (AREN) ou no valor da dose de vibração resultante (VDVR). O limite de tolerância diária para VCI é fixado em 1,1 m/s² para a AREN, enquanto para VMB o limite é de 5,0 m/s². O extravasamento desses parâmetros impõe a implementação imediata de rodízios de atividades, manutenção preditiva de coxins de amortecimento, fornecimento de luvas antivibração certificadas e acompanhamento médico rigoroso para prevenir a Síndrome dos Dedos Brancos (Fenômeno de Raynaud).", 
    author: "SST Intelligence", 
    date: "29 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/vibration_measurement_hygiene/800/600", 
    is_featured: false 
  },
  { 
    id: 44, 
    category: "Legislação", 
    title: "Exposição Ocupacional a Poeiras de Asbesto/Amianto e Riscos Epidemiológicos", 
    excerpt: "Análise médica e de engenharia sobre os impactos pulmonares irreversíveis e o controle de fibras respiráveis.", 
    content: "A poeira de asbesto (amianto) representa um dos agentes químicos de maior severidade epidemiológica na história da higiene ocupacional global, demandando restrições rigorosas previstas no Anexo XII da NR-15 e legislações federais específicas. As fibras de asbesto possuem características anfifílicas e formato acicular microscópico, permitindo que penetrem profundamente no trato respiratório, atingindo os alvéolos pulmonares e o espaço pleural. Uma vez retidas no tecido pulmonar, as macrofagocitoses falhas disparam processos inflamatórios crônicos e fibróticos irreversíveis conhecidos como asbestose, que reduzem drasticamente a capacidade de troca gasosa do trabalhador. Além do caráter restritivo pulmonar, o asbesto é um carcinógeno humano potente, associado ao desenvolvimento do mesotelioma de pleura e peritônio, uma neoplasia maligna de prognóstico severo cujo período de latência clínica pode ultrapassar 30 anos pós-exposição. A engenharia de controle em ambientes que lidam com a remoção de estruturas antigas contendo amianto exige o enclausuramento total da zona de trabalho sob pressão negativa, o uso de sistemas de filtragem absoluta com filtros HEPA, monitoramento diário da concentração de fibras por microscopia de contraste de fase e o fornecimento de proteção respiratória com filtros classe P3 integrados a macacões impermeáveis estanques tipo Tyvek.", 
    author: "SST Intelligence", 
    date: "28 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/asbestos_removal_hazard/800/600", 
    is_featured: false 
  },
  { 
    id: 45, 
    category: "Inovação", 
    title: "Luxmetria e Conforto Visual nos Ambientes de Trabalho (NR-17)", 
    excerpt: "Avaliação quantitativa de iluminância com base na norma técnica NHO 11 da Fundacentro.", 
    content: "A iluminação adequada dos locais de trabalho constitui um requisito ergonômico elementar regulado pelo item 17.5.3 da Norma Regulamentadora nº 17, cuja avaliação quantitativa deve seguir estritamente os procedimentos metodológicos descritos na Norma de Higiene Ocupacional nº 11 (NHO 11) da Fundacentro. A luxmetria ocupacional visa garantir o conforto visual, minimizar a fadiga ocular, prevenir erros operacionais e reduzir a ocorrência de acidentes de trabalho. As medições de iluminância devem ser executadas no plano de trabalho onde é realizada a atividade visual (seja uma bancada de montagem eletrônica ou uma mesa de escritório), utilizando luxímetros digitais devidamente calibrados dotados de fotocélulas corrigidas para a resposta do olho humano (curva fotópica V-lambda) e cosseno. Os valores mínimos de iluminância e o índice de iluminamento geral variam de acordo com a complexidade da tarefa visual, oscilando de 200 lux para depósitos a mais de 1000 lux para laboratórios de instrumentação fina. O projeto luminotécnico deve assegurar também a uniformidade da luz e a completa eliminação de ofuscamentos diretos ou reflexos velados nas telas de computadores, integrando os relatórios de avaliação técnica diretamente à Análise Ergonômica Preliminar (AEP) da organização.", 
    author: "SST Intelligence", 
    date: "27 Abr 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/luxmeter_lighting_ergonomics/800/600", 
    is_featured: false 
  },
  { 
    id: 46, 
    category: "Legislação", 
    title: "Estruturação do Prontuário de Instalações com Inflamáveis (NR-20)", 
    excerpt: "Exigências de compliance legal e engenharia para indústrias de classe I, II e III de fluidos combustíveis.", 
    content: "A Norma Regulamentadora nº 20 (NR-20) estabelece uma matriz complexa de segurança operacional direcionada a instalações que realizam a extração, produção, armazenamento, transferência e manipulação de inflamáveis e líquidos combustíveis. O coração do compliance dessa norma reside na estruturação do Prontuário da Instalação, documento mandatório cujos requisitos de engenharia se elevam de acordo com a classificação da planta (Classe I, II ou III). O prontuário deve conter o projeto detalhado dos tanques de armazenamento, memórias de cálculo de sistemas de aterramento elétrico contra cargas estáticas, diagramas de tubulações P&ID, além do estudo completo de Zoneamento de Áreas Classificadas, delimitando graficamente os raios de abrangência de atmosferas explosivas potenciais. Exige-se também a apresentação dos planos de inspeção preditiva e preventiva dos vasos de pressão, testes hidrostáticos de tubulações, os procedimentos operacionais padrão (POP) para cargas e descargas de caminhões-tanque e o Plano de Resposta a Emergências (PRE) detalhado com exercícios de simulados práticos periódicos. A ausência ou desatualização do prontuário técnico sujeita a planta industrial a interdições imediatas por risco iminente de explosões em grande escala.", 
    author: "SST Intelligence", 
    date: "26 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/oil_tank_refinery_nr20/800/600", 
    is_featured: false 
  },
  { 
    id: 47, 
    category: "Economia", 
    title: "Financiamento da Aposentadoria Especial e as Cargas Tributárias do FAE", 
    excerpt: "Como o controle dos agentes nocivos no PGR impacta diretamente o custeio previdenciário corporativo.", 
    content: "O financiamento da aposentadoria especial no Brasil envolve um cruzamento profundo entre a engenharia de segurança do trabalho e o direito tributário previdenciário corporativo. Regulado pelo artigo 57 da Lei nº 8.213/91 e pelo Regulamento da Previdência Social (Decreto nº 3.048/99), o benefício concede aposentadoria precoce (aos 15, 20 ou 25 anos de contribuição) para trabalhadores expostos a agentes nocivos químicos, físicos ou biológicos de forma contínua e ininterrupta. Para custear esse benefício, a legislação impõe às empresas o recolhimento do Financiamento da Aposentadoria Especial (FAE), uma alíquota tributária adicional incidente sobre a folha de pagamento do trabalhador exposto, variando em 6%, 9% ou 12% de acordo com o agente. Esse mapeamento fiscal é alimentado diretamente pelos envios do evento S-2240 ao eSocial, com base nas conclusões técnicas expressas no LTCAT. Empresas que implementam barreiras robustas de engenharia (EPC) capazes de eliminar a nocividade do agente ou reduzir as concentrações abaixo do nível de ação comprovado eliminam a obrigatoriedade do recolhimento tributário do FAE. Essa eliminação representa um alívio econômico milionário ao longo dos anos, transformando a segurança do trabalho em um centro estratégico de otimização fiscal e financeira para as corporações.", 
    author: "SST Intelligence", 
    date: "25 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/tax_finance_corporate_sst/800/600", 
    is_featured: false 
  },
  { 
    id: 48, 
    category: "Legislação", 
    title: "Inspeção de Vasos de Pressão e Caldeiras sob a Ótica da NR-13", 
    excerpt: "Aplicações práticas de Ensaios Não Destrutivos (END) e medição de espessura por ultrassom.", 
    content: "A operação de caldeiras, vasos de pressão, tubulações industriais e tanques metálicos de armazenamento é regulada de forma extremamente rígida pela Norma Regulamentadora nº 13 (NR-13), devido ao alto potencial de destruição em massa decorrente de falhas por explosão pneumática. A norma exige o controle rigoroso da integridade estrutural desses ativos por meio de inspeções de segurança periódicas, executadas sob a coordenação técnica de um Profissional Legalmente Habilitado (PH). O processo de inspeção fundamenta-se na aplicação de Ensaios Não Destrutivos (END) avançados, como a medição de espessura por ultrassom por varredura, ensaio por partículas magnéticas, líquido penetrante e radiografia industrial. Essas técnicas permitem identificar fenômenos de corrosão generalizada, pites, trincas de fadiga térmica e deformações plásticas nas paredes metálicas dos vasos sem comprometer a estrutura do equipamento. É obrigatório que cada vaso de pressão possua uma folha de dados técnicos contendo a Pressão Máxima de Trabalho Permitida (PMTP), válvula de segurança calibrada com prontuário de teste hidrostático e um livro de registro físico ou eletrônico onde constem todas as ocorrências operacionais e alterações estruturais do ativo.", 
    author: "SST Intelligence", 
    date: "24 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/boiler_pressure_vessel_nr13/800/600", 
    is_featured: false 
  },
  { 
    id: 49, 
    category: "Inovação", 
    title: "Amostragem de Agentes Químicos Voláteis com Bombas de Fluxo Ativo", 
    excerpt: "Princípios metodológicos de coleta e calibração com base nas normas NHO 08 da Fundacentro e metodologias NIOSH.", 
    content: "A avaliação quantitativa de contaminantes químicos no ar dos ambientes de trabalho representa uma das vertentes de maior complexidade científica na higiene ocupacional, sendo regulada pela NR-15 e pelas diretrizes internacionais do NIOSH e da OSHA. O método padrão para coleta de gases, vapores orgânicos e névoas envolve o uso de bombas de amostragem pessoal de fluxo ativo calibradas antes e após a amostragem com calibradores de bolha primários ou digitais de alta precisão. A bomba é fixada na cintura do colaborador, conectada por mangueiras flexíveis a dispositivos de captura (tubos de carvão ativado, cassetes com filtros de membrana de éster de celulose ou impinger contendo soluções reagentes) posicionados na zona respiratória do trabalhador (um raio de 30 cm do nariz e boca). O fluxo de sucção deve ser monitorado continuamente para evitar variações que invalidem o volume total de ar amostrado expressado em litros. Após o término da jornada laboral, as amostras são seladas hermeticamente e enviadas sob cadeia de custódia para laboratórios analíticos cromatográficos certificados, cujos resultados de concentração expressos em ppm ou mg/m³ são confrontados com os limites de tolerância legais vigentes.", 
    author: "SST Intelligence", 
    date: "23 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/chemical_sampling_pump_hygiene/800/600", 
    is_featured: false 
  },
  { 
    id: 50, 
    category: "Legislação", 
    title: "Auditoria do Prontuário de Instalações Elétricas (PIE) na NR-10", 
    excerpt: "Estruturação obrigatória do Relatório Técnico de Inspeções (RTI) e esquemas unifilares atualizados.", 
    content: "O Prontuário de Instalações Elétricas (PIE) é o documento técnico mais complexo e abrangente exigido pela Norma Regulamentadora nº 10 (NR-10), obrigatório para todos os estabelecimentos com carga instalada superior a 75 kW. O PIE constitui uma auditoria viva da segurança do sistema elétrico da empresa, devendo reunir um conjunto robusto de laudos, procedimentos e certificações de engenharia. O pilar central do prontuário é o Relatório Técnico das Inspeções (RTI), documento resultante de uma auditoria detalhada nas subestações, painéis e redes internas, apontando não conformidades e estabelecendo um cronograma de ações corretivas. É mandatório que o PIE contenha os diagramas unifilares das instalações totalmente atualizados com a indicação dos sistemas de aterramento e dispositivos de proteção, a certificação dos equipamentos de proteção individual e coletiva (ensaios dielétricos de luvas e mantas isolantes), os procedimentos operacionais para trabalho sob regime de desenergização e os registros de autorização, capacitação, qualificação e habilitação de todos os eletricistas da força de trabalho corporativa.", 
    author: "SST Intelligence", 
    date: "22 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/electrical_panel_pie_nr10/800/600", 
    is_featured: false 
  },
  { 
    id: 51, 
    category: "Acidentes", 
    title: "Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) na NR-32", 
    excerpt: "Classificação biológica e química de descarte hospitalar perigoso contra riscos de contaminação.", 
    content: "O gerenciamento seguro de resíduos no ambiente hospitalar, balizado pela Norma Regulamentadora nº 32 (NR-32) e pelas resoluções conjuntas da ANVISA (RDC 222) e do CONAMA, constitui uma barreira sanitária crítica indispensável para a prevenção de acidentes biológicos e contaminações ocupacionais em massa. O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) estabelece a segregação rigorosa dos resíduos na própria fonte geradora de acordo com grupos específicos. O Grupo A abrange resíduos com presença latente de agentes biológicos (sangue, culturas bacterianas e peças anatômicas), exigindo descarte em sacos plásticos brancos leitosos e autoclavação prévia antes do envio a aterros sanitários licenciados. O Grupo B engloba resíduos químicos perigosos (reagentes de quimioterapia, solventes e medicamentos vencidos), demandando descarte em recipientes rígidos estanques e incineração térmica controlada. O Grupo E, constituído por materiais perfurocortantes (agulhas, lâminas de bisturi e ampolas de vidro), exige descarte imediato em caixas de papelão rígidas blindadas de cor amarela, posicionadas em suportes ergonômicos na altura dos olhos dos profissionais, vedado o preenchimento acima da linha limite de segurança para evitar acidentes com agulhas contaminadas.", 
    author: "SST Intelligence", 
    date: "21 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/hospital_waste_management_nr32/800/600", 
    is_featured: false 
  },
  { 
    id: 52, 
    category: "Educação", 
    title: "Fadiga Cognitiva e Carga Mental no Trabalho de Alta Complexidade", 
    excerpt: "Análise psicofisiológica sobre estresse laboral, burnout e limites de atenção ergonômica (NR-17).", 
    content: "A ergonomia cognitiva, integrada às premissas avançadas da Norma Regulamentadora nº 17 (NR-17), expande o olhar clássico da biomecânica corporal para focar nas interações mentais dos trabalhadores alocados em postos de trabalho de alta complexidade operativa, como operadores de salas de controle de refinarias, controladores de tráfego aéreo e desenvolvedores de software. A carga mental de trabalho envolve o processamento contínuo de dados sob pressões temporais severas e exigências de atenção concentrada ininterrupta. Quando esses fatores extrapolam os limites psicofisiológicos do indivíduo de forma crônica, instala-se o quadro de fadiga cognitiva. Esse fenômeno compromete os reflexos motores, reduz a velocidade de tomadas de decisão críticas e eleva de forma exponencial o índice de erro humano e acidentes operacionais. As empresas devem implementar técnicas ergonômicas de atenuação mental, como o redesenho de interfaces de softwares (reduzindo a poluição visual de painéis), o controle rígido de jornadas extras repetitivas e a inserção de pausas de recuperação mental ativa em ambientes de descompressão apropriados, combatendo de forma sistêmica o desenvolvimento do esgotamento profissional.", 
    author: "SST Intelligence", 
    date: "20 Abr 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/mental_fatigue_cognitive_ergonomics/800/600", 
    is_featured: false 
  },
  { 
    id: 53, 
    category: "Legislação", 
    title: "Condições Sanitárias e de Conforto nos Locais de Trabalho (NR-24)", 
    excerpt: "Adequação de dimensionamento de vestiários, refeitórios e alojamentos industriais.", 
    content: "A Norma Regulamentadora nº 24 (NR-24) dita os padrões obrigatórios mínimos de engenharia sanitária e conforto habitacional que todas as empresas devem implantar, atuando diretamente sobre a dignidade do trabalhador e a higiene básica coletiva. O dimensionamento de banheiros, vestiários, refeitórios e alojamentos operacionais é rigorosamente calculado com base no número total de trabalhadores por turno de trabalho na planta industrial. A norma estabelece relações numéricas exatas: exige-se um vaso sanitário e um chuveiro para cada grupo de 20 trabalhadores em atividades de alta insalubridade mecânica ou térmica. Os vestiários devem possuir armários individuais dotados de sistemas de fechamento seguro, com compartimentos duplos obrigatórios para setores que exponham o operário a poeiras tóxicas ou agentes químicos perigosos, garantindo o isolamento físico completo entre a roupa de uso civil e o uniforme de trabalho contaminado. Refeitórios e cozinhas devem seguir padrões rígidos de vedação contra vetores biológicos, possuir pisos e paredes laváveis e sistemas de exaustão térmica localizados, sob pena de pesadas multas geradas por auditorias fiscais.", 
    author: "SST Intelligence", 
    date: "19 Abr 2026", 
    read_time: "10 min", 
    image_url: "https://picsum.photos/seed/industrial_dressing_room_nr24/800/600", 
    is_featured: false 
  },
  { 
    id: 54, 
    category: "Acidentes", 
    title: "Segurança e Proteção na Limpeza Urbana e Manejo de Resíduos (NR-38)", 
    excerpt: "Mapeamento estrutural de riscos biomecânicos e biológicos nas frentes operacionais de garis.", 
    content: "A aprovação e a implementação da Norma Regulamentadora nº 38 (NR-38) consolidaram um marco regulatório histórico indispensável para a proteção de centenas de milhares de garis e operadores de saneamento básico no país. Os profissionais desse setor enfrentam diariamente uma combinação perigosa de riscos biomecânicos graves (esforço físico extremo de corrida contínua acoplado ao levantamento repetitivo de cargas) e riscos biológicos críticos (exposição direta a bioaerossóis e agentes patógenos presentes nos resíduos domiciliares sem segregação). A NR-38 impõe às concessionárias de limpeza urbana a obrigatoriedade da elaboração de um PGR setorial específico com mapeamento analítico de rotas de coleta perigosas. Os caminhões compactadores de lixo devem passar por manutenções preditivas rigorosas nos sistemas hidráulicos de compressão para evitar acidentes por estouro de mangueiras. No âmbito da proteção individual, exige-se o fornecimento compulsório de uniformes confeccionados em tecidos com fator de proteção solar UVA/UVB integrado, calçados de segurança com solados anti-perfuro e biqueiras reforçadas leves, além de luvas com forros mecânicos anti-agulha certificados, elevando os padrões de segurança e reduzindo os índices históricos de acidentalidade da categoria.", 
    author: "SST Intelligence", 
    date: "18 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/urban_waste_cleaning_safety/800/600", 
    is_featured: false 
  },
  { 
    id: 55, 
    category: "Inovação", 
    title: "Radiações Ionizantes em Ensaios Industriais: Controle e Radioproteção", 
    excerpt: "Monitoramento de doses de exposição por dosímetros de lapela e protocolos de isolamento em gamografia.", 
    content: "O uso de radiações ionizantes na indústria pesada (ensaios não destrutivos de gamografia e radiografia industrial de dutos de alta pressão) exige a estruturação de um Plano de Radioproteção extremamente rigoroso, balizado pelas normas técnicas da Comissão Nacional de Energia Nuclear (CNEN) e pela NR-15. As radiações gama e raios-X possuem alta energia eletromagnética capaz de quebrar ligações moleculares e ionizar átomos nas células humanas, provocando mutações genéticas severas e câncer (efeitos estocásticos) ou necrose celular imediata por queimadura radiológica (efeitos determinísticos). Todos os operadores de radioproteção devem utilizar ininterruptamente dosímetros de leitura direta e dosímetros de lapela termoluminescentes (TLD) para monitorar cumulativamente a dose de radiação equivalente absorvida ao longo do mês. Durante as rotinas de exposição industrial em campo, o isolamento físico da área de exclusão deve ser calculado eletronicamente por meio de taxas de dose lidas por radiômetros calibrados, utilizando barreiras físicas densas de chumbo ou blocos de concreto (blindagem) acopladas ao princípio do tempo e distância, garantindo que nenhum trabalhador da planta sofra irradiações acima dos limites regulamentares anuais permitidos.", 
    author: "SST Intelligence", 
    date: "17 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/radiation_industrial_protection/800/600", 
    is_featured: false 
  },
  { 
    id: 56, 
    category: "Inovação", 
    title: "Plano de Carga para Operação de Gruas e Guindastes em Altura (NR-18)", 
    excerpt: "Cálculos de estabilidade de solo, ação dinâmica de ventos e rigidez estrutural de içamentos.", 
    content: "A elevação e movimentação vertical de cargas por meio de gruas de grande porte e guindastes telescópicos em canteiros de obras de edifícios multifamiliares de grande altura exige a elaboração obrigatória do Plano de Carga (Plano de Rigging), conforme exigências estritas da NR-18. Este estudo técnico denso de engenharia mecânica visa neutralizar o risco catastrófico de tombamento do equipamento ou colapso estrutural da lança sob estresse cinético. O engenheiro rigger deve calcular com exatidão a capacidade de carga do solo (capacidade portante de sapatas e patolas), a distribuição do centro de gravidade da peça içada e o efeito dinâmico gerado pelo arrasto dos ventos em altitudes elevadas por meio de anemômetros digitais calibrados acoplados ao topo da estrutura. Os cabos de aço, manilhas, estropos e cintas de poliéster de içamento devem passar por inspeções diárias rigorosas pré-uso com o registro de descarte imediato em caso de detecção de arames rompidos ou deformações plásticas por esmagamento. A zona de operação de raio de giro da grua deve ser totalmente isolada e sinalizada no canteiro, proibindo de forma absoluta a movimentação suspensa de cargas pesadas sobre frentes de trabalho ativas ou escritórios administrativos periféricos.", 
    author: "SST Intelligence", 
    date: "16 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/tower_crane_rigging_nr18/800/600", 
    is_featured: false 
  },
  { 
    id: 57,
    category: "Acidentes", 
    title: "Síndrome de Burnout como Doença do Trabalho: Implicações sob o CID-11", 
    excerpt: "Análise jurídica e de medicina ocupacional sobre o nexo causal do esgotamento profissional crônico.", 
    content: "A inclusão oficial da Síndrome de Burnout (Esgotamento Profissional) na Classificação Internacional de Doenças (CID-11) da Organização Mundial da Saúde, codificada sob o código QD85 como um fenômeno estritamente ocupacional, transformou profundamente as rotinas da medicina do trabalho e do compliance corporativo no Brasil. Juridicamente, o Burnout passou a ser classificado como Doença do Trabalho equiparada a acidente de trabalho, ativando os mecanismos estatísticos automáticos de Nexo Técnico Previdenciário (NTEP). O diagnóstico clínico baseia-se em três dimensões psicofisiológicas: sentimentos de exaustão ou esgotamento de energia física e mental extrema; aumento do distanciamento mental ou sentimentos de negativismo e cinismo relacionados ao trabalho; e redução da eficácia profissional. As empresas devem reestruturar seus inventários de riscos psicossociais dentro do PGR, mapeando perigos como metas abusivas irreais, assédio moral sistêmico, jornadas exaustivas e sobrecargas de cobrança sem suporte de ferramentas de trabalho apropriadas. O reconhecimento do nexo causal gera estabilidade previdenciária de 12 meses ao funcionário acidentado e abre passivos indenizatórios civis milionários por danos morais e materiais na esfera da Justiça do Trabalho.", 
    author: "SST Intelligence", 
    date: "15 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/burnout_psychosocial_risk/800/600", 
    is_featured: false 
  },
  { 
    id: 58, 
    category: "Inovação", 
    title: "Dispositivos de Parada de Emergência e Sistemas Ocleares de Redundância (NR-12)", 
    excerpt: "Instalação de botões cogumelo tipo trava e cortinas de luz infravermelha de segurança ativa.", 
    content: "A proteção ativa de trabalhadores contra os riscos mecânicos graves de aprisionamento, corte e esmagamento em prensas, guilhotinas e tornos automatizados baseia-se na instalação cirúrgica de dispositivos de parada de emergência e sensores de barreira eletrônica regulados pela NR-12. Os botões de parada de emergência do tipo cogumelo devem possuir ação mecânica positiva de travamento interno, cor vermelha sobre fundo amarelo contrastante, e estarem posicionados em locais de fácil acesso na zona de operação da máquina. Em paralelo, as zonas de perigo iminente devem ser monitoradas por cortinas de luz óptico-eletrônicas compostas por feixes infravermelhos emissores e receptores emparelhados. A interrupção de um único feixe de luz infravermelha pela mão do operador envia um sinal elétrico em milissegundos para o relé de segurança redundante da máquina, comandando a abertura imediata dos contatores e cortando a energia cinética de frenagem do motor antes que ocorra o contato físico com a zona de esmagamento. Todos os dispositivos de segurança ativa devem passar por testes de validação funcionais diários realizados e assinados pela equipe técnica operacional antes do início da jornada laboral.", 
    author: "SST Intelligence", 
    date: "14 Abr 2026", 
    read_time: "11 min", 
    image_url: "https://picsum.photos/seed/machinery_emergency_stop_button/800/600", 
    is_featured: false 
  },
  { 
    id: 59, 
    category: "Inovação", 
    title: "Avaliação Quantitativa de Calor Ocupacional pelo IBUTG na NR-15", 
    excerpt: "Metodologia de monitoramento com termômetros de globo e taxas de metabolismo por atividade.", 
    content: "A exposição ocupacional ao calor severo gerado por fontes artificiais industriais (fornos de fundição, caldeiras e vidrarias) ou fontes naturais (trabalho rural e construção civil sob exposição solar direta) exige monitoramento quantitativo analítico regulado pelo Anexo III da NR-15 e pela NHO 06 da Fundacentro. A Higiene Ocupacional adota como métrica oficial o Índice de Bulbo Úmido Termômetro de Globo (IBUTG), calculado por meio de conjuntos de sensores montados em um pedestal estável: um termômetro de bulbo úmido natural para medir a umidade relativa do ar e a velocidade do vento, um termômetro de globo (esfera de cobre pintada de preto fosco contendo um sensor interno no centro) para aferir a radiação térmica infravermelha por condução, e um termômetro de bulbo seco para ambientes com carga solar direta. As medições devem ser executadas na altura do tórax do trabalhador exposto durante o período de maior estresse térmico da jornada. O resultado obtido é confrontado com os Limites de Tolerância expressos em gráficos térmicos que cruzam o valor do IBUTG com a Taxa de Metabolismo da Atividade calculada em Watts de acordo com o esforço físico exigido do colaborador, ditando a obrigatoriedade de regimes de trabalho-descanso estruturados e o fornecimento contínuo de reposição hidroeletrolítica pressurizada.", 
    author: "SST Intelligence", 
    date: "13 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/heat_stress_measurement_ibutg/800/600", 
    is_featured: false 
  },
  { 
    id: 60, 
    category: "Legislação", 
    title: "Integração do PGR com Sistemas de Gestão de SST ISO 45001", 
    excerpt: "Alinhamento estrutural do PDCA entre o gerenciamento de riscos ocupacionais e certificações mundiais.", 
    content: "A modernização da legislação nacional de segurança do trabalho materializou-se através da reformulação completa da Norma Regulamentadora nº 1 (NR-1), instituindo a obrigatoriedade do Gerenciamento de Riscos Ocupacionais (GRO) materializado por meio do Programa de Gerenciamento de Riscos (PGR). O modelo estrutural adotado pelo PGR foi cientificamente projetado para permitir total interoperabilidade e alinhamento sistêmico com as diretrizes internacionais da norma ISO 45001, o padrão global para Sistemas de Gestão de Segurança e Saúde Ocupacional. Ambos os ecossistemas fundamentam-se no ciclo de melhoria contínua PDCA (Plan-Do-Check-Act): o Inventário de Riscos do PGR cumpre as etapas de planejamento e identificação de perigos, enquanto o Plano de Ação determina a execução física das medidas de controle adotando a hierarquia clássica de eliminação, engenharia, sinalização e EPI. A integração dinâmica do PGR com a ISO 45001 eleva o patamar da segurança corporativa, transformando obrigações legais reativas em ferramentas proativas de auditoria de alto desempenho organizacional, gerando valor de mercado, blindando a alta direção contra passivos cíveis criminais e chancelando a excelência operacional da marca em auditorias nacionais e internacionais de qualidade de processos industriais.", 
    author: "SST Intelligence", 
    date: "12 Abr 2026", 
    read_time: "12 min", 
    image_url: "https://picsum.photos/seed/iso_45001_management_system/800/600", 
    is_featured: false 
  }
];

export default function JournalView({ onMenuClick }: JournalViewProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Estados internos estruturados para a base local estática
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedTopic, setSelectedTopic] = useState<any | null>(null); // Estado controlador da Tela de Estudos (Modal)

  // Cérebro de filtragem executando instantaneamente em tempo real
  const filteredNews = useMemo(() => {
    return SST_KNOWLEDGE_BASE.filter((news) => {
      const matchesCategory = selectedCategory === "Todos" || news.category === selectedCategory;
      const matchesSearch = (news.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             news.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Separação de Capa (Destaque) e Grade Lateral
  const featuredNews = filteredNews.find(news => news.is_featured === true) || filteredNews[0];
  const gridNews = filteredNews.filter(news => news.id !== featuredNews?.id);

  const categories = ["Todos", "Legislação", "Inovação", "Acidentes", "Economia", "Educação"];

  const styles = {
    overlay: isDark ? 'bg-zinc-950/90' : 'bg-[#f4f4f5]/85 backdrop-blur-md',
    headerBtn: isDark 
      ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' 
      : 'bg-white border-zinc-200/80 shadow-sm text-zinc-800 hover:bg-zinc-50 shadow-zinc-200/40',
    title: isDark ? 'text-white' : 'text-zinc-900',
    textMuted: isDark ? 'text-zinc-400' : 'text-zinc-500',
    cardBg: isDark ? 'bg-black/40 border-white/10' : 'bg-white border-zinc-200 shadow-lg shadow-zinc-200/60',
    gridCardBg: isDark ? 'bg-[#111113]/80 border-white/5 hover:bg-[#16161a]' : 'bg-white border-zinc-200 hover:bg-zinc-50/50 shadow-md shadow-zinc-100',
    inputBg: isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-zinc-100 border-zinc-200/80 text-zinc-900 placeholder-zinc-400'
  };

  return (
    <div className={`relative h-full w-full overflow-y-auto bg-cover bg-center bg-fixed transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
      
      {/* Cenário de fundo unificado */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: isDark 
              ? "url('/images/background.jpg')" 
              : "url('/images/Background-white.jpg')"
          }}
        />
        <div className={`absolute inset-0 ${styles.overlay} transition-colors duration-500`} />
      </div>

      <div className="relative z-10 min-h-full p-6 md:p-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* BOTÃO DE MENU: z-index ajustado para z-10 para respeitar a abertura da sidebar */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
            <button
              onClick={onMenuClick}
              className={`p-3 rounded-xl transition-all border font-medium ${styles.headerBtn}`}
              aria-label="Abrir Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* MARCA REGISTRADA E CABEÇALHO */}
          <div className="flex flex-col items-center justify-center mb-16 space-y-6 border-b border-zinc-200 digital:border-white/10 pb-12">
            <div className="flex items-center gap-4">
              <BookOpen className="h-10 w-10 text-emerald-500" />
              <h1 className={`text-5xl md:text-6xl font-serif tracking-tight ${styles.title}`}>
                Jornal <span className="text-emerald-500 italic">SST Intelligence</span>
              </h1>
            </div>
            <p className={`text-center text-base md:text-lg font-light max-w-2xl tracking-wide ${styles.textMuted}`}>
              Base de conhecimento unificada para consultas de atualizações normativas, auditorias periciais e proteção industrial.
            </p>
            
            {/* INPUT DE PESQUISA E FILTROS */}
            <div className="w-full max-w-3xl mt-8 space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Pesquisar artigos, normas ou palavras-chave..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full rounded-full py-4 pl-12 pr-6 text-sm placeholder-zinc-400 outline-none border transition-all ${styles.inputBg}`}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat, idx) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-emerald-600 border-emerald-500 text-white shadow-md' 
                          : isDark 
                            ? 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                            : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 shadow-sm'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* NOTÍCIA DESTAQUE (A CAPA DO DIA) */}
          {featuredNews && (
            <div className="mb-16" onClick={() => setSelectedTopic(featuredNews)}>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-6 flex items-center gap-2">
                <Tag className="h-4 w-4 text-emerald-500" /> Destaque do Dia
              </h2>
              
              <div className={`group relative rounded-3xl overflow-hidden flex flex-col lg:flex-row hover:border-emerald-500/30 border transition-all duration-500 cursor-pointer ${styles.cardBg}`}>
                <div className="lg:w-3/5 h-64 lg:h-[420px] relative overflow-hidden">
                  <img 
                    src={featuredNews.image_url} 
                    alt="Destaque" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                </div>

                <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center relative z-20">
                  <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold tracking-wider mb-4 w-max uppercase">
                    {featuredNews.category}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-serif leading-tight mb-4 group-hover:text-emerald-500 transition-colors ${styles.title}`}>
                    {featuredNews.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 line-clamp-4 ${styles.textMuted}`}>
                    {featuredNews.excerpt}
                  </p>

                  <div className="mt-auto space-y-3">
                    <div className={`flex items-center gap-2 text-xs ${styles.textMuted}`}>
                      <User className="h-4 w-4 text-zinc-400" /> <span>{featuredNews.author}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-200 dark:border-white/10 pt-4">
                      <div className="flex items-center gap-4 text-[11px] font-medium text-zinc-400">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featuredNews.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featuredNews.read_time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
                        Estudar Matéria <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GRID PRINCIPAL DE OUTROS ASSUNTOS */}
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-2">
            <Newspaper className="h-4 w-4 text-emerald-500" /> Acervo de Publicações Técnicas
          </h2>

          {filteredNews.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-sm font-light">
              Nenhum tópico localizado para o critério de busca selecionado.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridNews.map((news) => (
                <div 
                  key={news.id} 
                  onClick={() => setSelectedTopic(news)}
                  className={`group rounded-3xl overflow-hidden border transition-all duration-300 shadow-sm cursor-pointer flex flex-col ${styles.gridCardBg}`}
                >
                  <div className="h-44 w-full relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-emerald-400 border border-white/10 rounded-full text-[9px] font-bold tracking-wider uppercase">
                        {news.category}
                      </span>
                    </div>
                    <img 
                      src={news.image_url} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-lg font-serif mb-3 leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2 ${styles.title}`}>
                      {news.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-6 line-clamp-3 flex-grow ${styles.textMuted}`}>
                      {news.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-white/5 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <User className="h-3.5 w-3.5 text-zinc-400" /> <span className="truncate">{news.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 font-medium">
                        <span>{news.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {news.read_time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ========================================== */}
      {/* MODAL IMERSIVO: TELA DE ESTUDOS DO CONTEÚDO (ESTILO ONSAFETY) */}
      {/* ========================================== */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className={`w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 md:p-10 transition-all duration-300 relative ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
          }`}>
            
            {/* BOTÃO FECHAR */}
            <button 
              onClick={() => setSelectedTopic(null)}
              className="absolute top-6 right-6 p-2 rounded-full transition-colors hover:bg-zinc-500/10 border border-transparent hover:border-zinc-500/20"
              aria-label="Fechar Tela de Estudos"
            >
              <X className="h-5 w-5" />
            </button>

            {/* TAG DA CATEGORIA */}
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold tracking-wider mb-6 uppercase">
              {selectedTopic.category}
            </span>

            {/* TÍTULO PRINCIPAL */}
            <h2 className="text-2xl md:text-4xl font-serif leading-tight mb-4">
              {selectedTopic.title}
            </h2>

            {/* CRÉDITOS E METADADOS */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-b border-zinc-200 dark:border-white/10 pb-6 mb-8">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {selectedTopic.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {selectedTopic.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Tempo de Estudo: {selectedTopic.read_time}</span>
            </div>

            {/* IMAGEM ILUSTRATIVA DENTRO DO MODAL */}
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img src={selectedTopic.image_url} alt="Capa Temática" className="w-full h-full object-cover" />
            </div>

            {/* TEXTO NORMATIVO COMPLETO */}
            <div className="text-sm md:text-base leading-relaxed space-y-4 font-sans tracking-wide text-zinc-700 dark:text-zinc-300 antialiased whitespace-pre-line">
              {selectedTopic.content}
            </div>

            {/* RODAPÉ DO MODAL */}
            <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-white/10 flex justify-end">
              <button 
                onClick={() => setSelectedTopic(null)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Concluir Leitura
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}