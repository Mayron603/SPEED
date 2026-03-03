import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, GraduationCap, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const manuals = [
  {
    id: "conduta",
    icon: Shield,
    title: "Manual de Conduta",
    color: "amber",
    docsLink: "https://docs.google.com/document/d/1Y049q6zpxK3b_cljGbVFjlfjfcr9-bO_FFjcGC2i8P8/edit?usp=sharing",
    sections: [
      {
        title: "Função da ASD",
        content: "O Grupamento Aéreo Especializado Policial tem como função fornecer suporte para as unidades terrestres em diversas ocorrências, fornecer apoio aéreo para os paramédicos na ausência de um piloto especializado do hospital e também atuar em operações previamente planejadas como as operações de reconhecimento e mapeamento."
      },
      {
        title: "Regras Operacionais",
        content: `• Apenas Soldados+ poderão adentrar na unidade.
• Todos os membros da ASD têm autorização de ir em ações grandes quando solicitado (Banco Central, Paleto, Fleeca, Nióbio, Joalheria e Carro Forte).
• Não serão permitidas manobras arriscadas apenas para fins de diversão e exibição.
• Apenas membros da ASD possuem autorização para pilotar o helicóptero.
• Pousos em locais não homologados são permitidos apenas onde o acesso ao público é restringido, salvo em ocorrências onde o piloto ache necessário.
• Proibido qualquer tipo de modificação na aeronave.
• A ASD possui uma hierarquia interna e a mesma deverá ser respeitada dentro da aeronave independente da patente.
• Aeronaves de tripulação solo devem manter total cautela, dando apenas apoio visual em situações de código 5.
• Mantenha sempre uma comunicação limpa e assertiva na rádio.
• Nenhum comportamento negativo ou má conduta serão aceitos dentro da unidade.
• Prisioneiros não poderão ser transportados dentro da aeronave a menos que estejam em um local sem acesso terrestre e não tenha nenhuma aeronave de resgate do hospital disponível para transporte.
• Está permitido a patrulha para monitoramento das aeronaves que realizam táxi aéreo.
• O uso de helicópteros deverá ocorrer obrigatoriamente em altitude elevada, definida como acima da linha dos prédios da cidade. É estritamente proibido realizar voos abaixo dessa linha, exceto em situações específicas (como pousos em helipontos autorizados ou operações).`
      },
      {
        title: "Comunicação Operacional — Clock System",
        content: `Para orientar as unidades de solo, o piloto deve usar a proa da viatura ou do veículo suspeito como referência "12 horas".

• 12 Horas: À frente.
• 6 Horas: Atrás.
• 3 Horas: Direita.
• 9 Horas: Esquerda.

Exemplo: "Viatura 1, suspeito correndo para sua 3 horas (direita) em direção ao beco."`
      },
      {
        title: "Prioridade de Rádio",
        content: `Quando a ASD assume o visual de uma perseguição (Código 3) e solicita "Prioridade", todas as unidades de solo devem cessar comunicações não emergenciais.

A ASD torna-se a narradora principal da rota do suspeito (Cantoneira), permitindo que as viaturas de solo foquem na direção e no cerco.`
      },
      {
        title: "Aeronave — AS350",
        content: "A ASD possui 1 modelo de aeronave, a AS350, que será utilizada por todos os pilotos. Não sendo permitido nenhum tipo de alteração visual."
      },
      {
        title: "Hierarquia Interna",
        content: "A ASD possui uma hierarquia interna e deve ser respeitada a todo momento dentro da aeronave, sendo ela: Estagiário, Co-Piloto, Comandante, Comandante Sênior, Instrutor, Instrutor Chefe e Comando de Unidade. Não tendo tempo mínimo nem máximo para ser promovido, dependendo somente do seu desempenho dentro da unidade."
      },
      {
        title: "Glossário Técnico",
        content: `1 - NOTAM — (Notification To Airman) Notificação, avisos e informes para o aviador/operador.
2 - SOP — (Standard Operating Procedures) Procedimentos de operação padrão.
3 - OPR — (Operation) Operação. Geralmente usado nos NOTAMs para descrever alguma alteração referente à operação da aeronave.
4 - PROC — (Procedure) Procedimento.
5 - ACFT — (Aircraft) Aeronave.
6 - INFO — (Information) Informação.
7 - ETA — (Estimated Time Arrival) Estimado de chegada. Ex: ETA 2M.
8 - DEP — (Departure) Saída, Decolagem.
9 - ARR — (Arrival) Chegada, Pouso.
10 - TKOFF — (Take Off) Decolar, Decolagem.
11 - ETO — (Estimated Time Over) Estimado de sobrevoo.
12 - RTB — (Return to Base) Retornar à base.
13 - POB — (People on Board) Número total de pessoas embarcadas na aeronave.
14 - DLA — (Delay) Quando ocorre, ou ocorrerá, um atraso de qualquer natureza.
15 - MAINT — (Manutenção) Quando a aeronave ou algo está em manutenção.
16 - H — (Heliponto) Abreviação utilizada como HELIPONTO.
17 - N S E W — (Pontos Cardeais) Norte, Sul, Leste, Oeste.
17.1 - NE NW SE SW — (Pontos Colaterais) Nordeste, Noroeste, Sudeste, Sudoeste.
18 - P/U — (Pick Up) Utilizado com a ideia de embarque ou extração.`
      }
    ]
  },
  {
    id: "instrucao",
    icon: GraduationCap,
    title: "Manual de Instrução Teórica",
    color: "blue",
    docsLink: "https://docs.google.com/document/d/1_E6tyI1OT86_cyI8WtWegOj4khLPlnjA39L3ShswFwA/edit?usp=sharing",
    sections: [
      {
        title: "Introdução ao Helicóptero",
        content: "Helicóptero é um tipo de aeronave de asas giratórias, mais pesada que o ar, propulsada por um ou mais rotores horizontais que, quando girados pelo motor, criam sustentação e propulsão necessárias para o voo. São classificados como aeronave de asa rotativa, o que os distingue das aeronaves de asa-fixa convencional (avião). Permitem decolagem e pouso verticais, pairar, e deslocar-se para frente, para trás e lateralmente — atributos únicos que possibilitam operar em áreas congestionadas ou isoladas."
      },
      {
        title: "Comandos de Voo — Coletivo",
        content: `O comando coletivo é acionado pela mão esquerda do piloto e altera coletivamente os ângulos de passo das pás do rotor principal.

• Quando o piloto puxa o coletivo para cima: aumenta o passo das pás, aumentando o ângulo de ataque e a sustentação. A aeronave ganha altitude.
• Quando o piloto baixa o coletivo: a sustentação diminui. A aeronave perde altitude.

O coletivo é o comando primário de altitude e secundário de RPM.`
      },
      {
        title: "Comandos de Voo — Cíclico",
        content: `O cíclico é usado para alterar a inclinação do disco do rotor principal durante seu giro, controlando a direção de propulsão e permitindo movimentos para frente, para trás e para os lados. É o comando primário de velocidade, com influência secundária na altitude.

• Com o helicóptero em pairagem: mova o cíclico para esquerda/direita para deslocar lateralmente.
• Em velocidade mais alta: o helicóptero executará rolamento e virará na direção aplicada.`
      },
      {
        title: "Comandos de Voo — Pedal (Guinada)",
        content: `Os pedais controlam o passo das pás do rotor de cauda, aumentando ou diminuindo a força anti-torque. Controlam também a direção da proa da aeronave.

• Para virar em baixa velocidade: use o pedal.
• Helicópteros com rotor único usam os pedais para compensar o torque produzido pelo rotor principal.
• Com o aumento da velocidade de deslocamento, os pedais ficam menos eficazes.`
      },
      {
        title: "Efeito Solo",
        content: "Ao pairar o helicóptero próximo ao solo, haverá influência do efeito solo. O efeito solo ocorre devido à interferência da superfície no padrão do fluxo de ar do rotor. Como há mudança na aerodinâmica, o piloto deve executar a compensação. Para auxiliar durante o treinamento inicial, o piloto pode usar o comando de pairagem automática."
      },
      {
        title: "Voo Translacional",
        content: "Ao se mover do estado de pairagem para voo à frente, o helicóptero entra em estado de voo translacional. O fluxo horizontal do ar no lado contrário do rotor principal aumenta sua eficiência, fornecendo mais força de sustentação sem aumento de potência. Em consequência, o helicóptero requer menos potência para se manter no ar. Rebaixe o coletivo se precisar manter a mesma altitude."
      },
      {
        title: "Estol de Vórtice",
        content: `O estol de vórtice é um fenômeno de grande perigo onde o helicóptero basicamente descende em sua própria corrente de ar descendente. O piloto detecta uma queda crescente que não pode ser interrompida pelo coletivo.

• Em helicóptero com rotores em tandem: recuperação por comando no cíclico lateral ou no pedal.
• Em helicóptero com rotor único: mover o controle cíclico para a frente, inclinando o bico da aeronave levemente para baixo e estabilizando o voo frontal.`
      },
      {
        title: "Táticas de Voo Policial — Tipos de Órbita",
        content: `A órbita é o voo circular em torno de um alvo fixo ou em movimento lento.

• Órbita Alta (Vigilância): Realizada acima de 800 pés. Objetivo: manter o visual sem ser notado ou sem interferir no som ambiente do solo. Usada para monitoramento discreto.

• Órbita Baixa (Intimidação/Apoio): Realizada entre 300 e 500 pés. Objetivo: exercer pressão psicológica no suspeito e fornecer iluminação direta com o holofote (Spotlight).`
      },
      {
        title: "Táticas de Voo Policial — Curva de Perseguição",
        content: `Durante perseguições a veículos em alta velocidade, o piloto NÃO deve voar diretamente sobre o alvo.

• Posicionamento: Mantenha a aeronave levemente atrás e deslocada para a lateral (esquerda ou direita) do alvo.
• Motivo: Isso permite que a câmera (operada pelo copiloto ou pelo próprio sistema) tenha um ângulo claro da rua à frente do suspeito, antecipando curvas e obstáculos para as unidades de solo.`
      },
      {
        title: "Táticas de Voo Policial — Holofote e Câmera",
        content: `Uso do Holofote (Nightsun):
• Utilizado para auxiliar as unidades de solo em áreas de baixa luminosidade.
• Regra de Ouro: Evite cegar as unidades aliadas. Mantenha o feixe focado no veículo suspeito ou na área de busca, nunca no para-brisa da viatura policial.

Modos de Visão da Câmera:
• Visão Normal (DTV): Usada durante o dia para identificar cores de veículos, roupas e detalhes específicos.
• Visão Térmica (FLIR/Infravermelho): Essencial para operações noturnas ou busca de suspeitos em áreas de vegetação densa ou na água. O calor corporal se destacará contra o ambiente frio.`
      },
      {
        title: "Procedimento de Emergência — Auto-Rotação",
        content: `A auto-rotação é um estado de voo em que o sistema do rotor principal gira apenas em decorrência do movimento ascendente do ar pelo rotor, sem a atuação do motor. Isso permite que o helicóptero pouse em segurança em caso de falha total do motor, graças ao sistema de roda livre da caixa de transmissão.

Procedimento:
1. Durante perda de potência, rebaixe o coletivo imediatamente.
2. Incline o bico para baixo para ganhar velocidade frontal ou para cima para reduzir velocidade em excesso.
3. Mantenha RPM nominal e faça voo planado até se aproximar do solo.
4. Eleve o coletivo antes da aterrissagem para reduzir a velocidade vertical e pousar com segurança.`
      },
      {
        title: "Procedimento de Emergência — Perda do Rotor de Cauda",
        content: `Helicópteros equipados com rotor de cauda podem sofrer perda de autoridade do anti-torque. Em tais circunstâncias, tente pousar enquanto mantém velocidade suficiente.

ATENÇÃO: A reação instintiva de "puxar" o comando coletivo é incorreta — isso faria cair o RPM, causando estol do rotor principal, perda de potência do rotor de cauda, giro incontrolável da aeronave para a direita e queda em rotação até o impacto com o solo.`
      },
      {
        title: "Instrumentos de Voo — Altímetro",
        content: "O altímetro mostra a altitude da aeronave acima do nível do mar ao medir a diferença entre a pressão nas cápsulas aneróides dentro do instrumento e a pressão atmosférica obtida pelo sistema de pressão estática. A unidade mais comum é o hectopascal (hPa). O altímetro deve ser ajustado para a pressão barométrica local para leituras precisas. À medida que a aeronave sobe, a pressão estática diminui, fazendo com que o altímetro indique maior altitude."
      }
    ]
  }
];

function ManualSection({ section, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-800/50 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-800/20 transition-colors"
      >
        <span className={`font-semibold text-sm ${isOpen ? 'text-amber-400' : 'text-slate-200'}`}>
          {section.title}
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-amber-400 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Manuals() {
  const [activeManual, setActiveManual] = useState("conduta");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (manualId, sectionIndex) => {
    const key = `${manualId}-${sectionIndex}`;
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const colorMap = {
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", activeBg: "bg-amber-500/20" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", activeBg: "bg-blue-500/20" },
  };

  return (
    <div>
      <PageHeader
        badge="Documentação Oficial"
        title="Manuais e Documentos"
        subtitle="Acesse os manuais oficiais da ASD. Leitura obrigatória para todos os membros e candidatos."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          {/* Manual Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {manuals.map((manual) => {
              const colors = colorMap[manual.color];
              const isActive = activeManual === manual.id;
              return (
                <button
                  key={manual.id}
                  onClick={() => setActiveManual(manual.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 flex-1 ${
                    isActive
                      ? `${colors.activeBg} ${colors.border} ${colors.text}`
                      : 'border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  <manual.icon className="w-5 h-5" />
                  <span className="font-semibold text-sm">{manual.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Manual Content */}
          {manuals.map((manual) => {
            if (manual.id !== activeManual) return null;
            const colors = colorMap[manual.color];
            return (
              <motion.div
                key={manual.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-slate-900/40 border ${colors.border} rounded-xl overflow-hidden`}
              >
                {/* Cabeçalho do Manual (Aqui foi adicionado o botão do Google Docs) */}
                <div className="px-6 py-5 border-b border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <manual.icon className={`w-5 h-5 ${colors.text}`} />
                    <h3 className="text-lg font-bold text-white">{manual.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <span className="text-xs text-slate-500 hidden sm:inline-block">
                      {manual.sections.length} seções
                    </span>
                    <a
                      href={manual.docsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors w-full sm:w-auto ${colors.border} ${colors.text} hover:${colors.activeBg}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir no Google Docs
                    </a>
                  </div>
                </div>

                {/* Lista de Seções */}
                {manual.sections.map((section, index) => (
                  <ManualSection
                    key={index}
                    section={section}
                    isOpen={openSections[`${manual.id}-${index}`]}
                    onToggle={() => toggleSection(manual.id, index)}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}