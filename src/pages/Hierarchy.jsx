import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, GraduationCap, Star, Plane, Users, Target, Shield, Crosshair } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const pilotRanks = [
  {
    tier: "Alto Comando",
    tierColor: "text-amber-400",
    tierIcon: Crown,
    ranks: [
      {
        title: "Comando de Unidade",
        description: "Responsável pela administração geral e diretrizes da divisão.",
        responsibilities: [
          "Administração geral da ASD",
          "Definição de diretrizes operacionais e estratégicas",
          "Representação da divisão perante as demais unidades",
          "Decisões finais sobre promoções e disciplina"
        ]
      },
      {
        title: "Sub Comando",
        description: "Auxilia o comando na gestão e supervisiona as operações diárias.",
        responsibilities: [
          "Apoio direto ao Comando de Unidade",
          "Supervisão das operações diárias",
          "Coordenação de escalas e patrulhamentos",
          "Gestão interna da divisão na ausência do Comando"
        ]
      }
    ]
  },
  {
    tier: "Instrução e Treinamento",
    tierColor: "text-blue-400",
    tierIcon: GraduationCap,
    ranks: [
      {
        title: "Instrutor Chefe",
        description: "Coordena o corpo de instrutores e o padrão de treinamento.",
        responsibilities: [
          "Coordenação de todos os instrutores",
          "Definição e manutenção do padrão de treinamento",
          "Avaliação e aprovação de novos membros",
          "Atualização dos manuais e procedimentos"
        ]
      },
      {
        title: "Instrutor",
        description: "Responsável por aplicar os treinamentos teóricos e práticos aos novos membros.",
        responsibilities: [
          "Aplicação de treinamentos teóricos e práticos",
          "Acompanhamento do desenvolvimento dos estagiários",
          "Elaboração de relatórios de desempenho",
          "Suporte ao Instrutor Chefe nas avaliações"
        ]
      }
    ]
  },
  {
    tier: "Oficiais de Voo",
    tierColor: "text-green-400",
    tierIcon: Star,
    ranks: [
      {
        title: "Comandante Sênior",
        description: "Piloto experiente com domínio total da aeronave e táticas.",
        responsibilities: [
          "Liderança em operações de alta complexidade",
          "Mentoria de Comandantes e copilotos",
          "Tomada de decisão em campo",
          "Execução de todas as modalidades de voo e táticas"
        ]
      },
      {
        title: "Comandante",
        description: "Piloto qualificado para operações padrão.",
        responsibilities: [
          "Condução de patrulhamentos e operações padrão",
          "Apoio tático às unidades terrestres",
          "Comunicação operacional via rádio",
          "Cumprimento dos procedimentos e manuais"
        ]
      }
    ]
  },
  {
    tier: "Membros Operacionais",
    tierColor: "text-slate-400",
    tierIcon: Plane,
    ranks: [
      {
        title: "Co-Piloto",
        description: "Auxilia na navegação, operação de câmera e comunicação.",
        responsibilities: [
          "Apoio ao piloto durante operações",
          "Operação de câmera (FLIR/DTV) e holofote",
          "Comunicação e monitoramento de rádio",
          "Acúmulo de horas de voo supervisionadas"
        ]
      },
      {
        title: "Estagiário",
        description: "Membro em fase de aprendizado e adaptação à unidade.",
        responsibilities: [
          "Participação em todos os treinamentos programados",
          "Estudo e memorização dos manuais da ASD",
          "Seguir ordens de todos os superiores hierárquicos",
          "Demonstrar disciplina e comprometimento contínuo"
        ]
      }
    ]
  }
];

const shooterRanks = [
  {
    tier: "Comando Tático de Atiradores",
    tierColor: "text-red-400",
    tierIcon: Target,
    ranks: [
      {
        title: "Atirador Chefe",
        description: "Responsável pela coordenação dos atiradores, definição de posicionamento e estratégia de engajamento.",
        responsibilities: [
          "Coordenação geral dos atiradores em operações",
          "Definição de posicionamento e estratégia de engajamento",
          "Comunicação direta com o piloto durante missões",
          "Decisão de abertura de fogo em situações críticas"
        ]
      }
    ]
  },
  {
    tier: "Operadores",
    tierColor: "text-orange-400",
    tierIcon: Crosshair,
    ranks: [
      {
        title: "Atirador Sênior",
        description: "Operador experiente com autonomia em decisões de disparo e cobertura.",
        responsibilities: [
          "Operações de cobertura aérea com alto nível de autonomia",
          "Apoio ao Atirador Chefe em decisões táticas",
          "Execução de engajamentos em situações de alto risco",
          "Mentoria de atiradores em formação"
        ]
      },
      {
        title: "Atirador",
        description: "Responsável pelo suporte armado e cobertura aérea durante as operações.",
        responsibilities: [
          "Suporte armado durante operações aéreas",
          "Cobertura e proteção das unidades terrestres",
          "Seguimento das diretrizes do Atirador Chefe",
          "Comunicação constante sobre condições de engajamento"
        ]
      }
    ]
  },
  {
    tier: "Formação",
    tierColor: "text-slate-400",
    tierIcon: Shield,
    ranks: [
      {
        title: "Atirador em Treinamento",
        description: "Membro em fase de capacitação técnica e adaptação às diretrizes da ASD.",
        responsibilities: [
          "Participação em todos os treinamentos da cadeia de atiradores",
          "Aprendizado dos protocolos de engajamento",
          "Obediência à hierarquia de atiradores e pilotos",
          "Desenvolvimento de habilidades técnicas e táticas"
        ]
      }
    ]
  }
];

function RankCard({ rank, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all duration-300"
    >
      <h4 className="text-white font-bold text-lg mb-2">{rank.title}</h4>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{rank.description}</p>
      <ul className="space-y-1.5">
        {rank.responsibilities.map((r, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            {r}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function TierSection({ tier, index }) {
  const TierIcon = tier.tierIcon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
          <TierIcon className={`w-5 h-5 ${tier.tierColor}`} />
        </div>
        <h3 className={`text-sm font-bold tracking-[0.2em] uppercase ${tier.tierColor}`}>{tier.tier}</h3>
        <div className="flex-1 h-px bg-slate-800" />
      </div>
      <div className={`grid grid-cols-1 ${tier.ranks.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
        {tier.ranks.map((rank, i) => (
          <RankCard key={rank.title} rank={rank} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Hierarchy() {
  const [activeTab, setActiveTab] = useState('pilotos');

  return (
    <div>
      <PageHeader
        badge="Cadeia de Comando"
        title="Estrutura Hierárquica"
        subtitle="A hierarquia interna da ASD deve ser respeitada a todo momento, independentemente da patente policial externa."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex gap-3 mb-12">
            <button
              onClick={() => setActiveTab('pilotos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-all ${
                activeTab === 'pilotos'
                  ? 'bg-amber-500/20 border-amber-500/30 text-amber-400'
                  : 'border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <Plane className="w-4 h-4" /> Pilotos
            </button>
            <button
              onClick={() => setActiveTab('atiradores')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-all ${
                activeTab === 'atiradores'
                  ? 'bg-red-500/20 border-red-500/30 text-red-400'
                  : 'border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <Crosshair className="w-4 h-4" /> Atiradores
            </button>
          </div>

          {activeTab === 'pilotos' && (
            <div>
              <p className="text-slate-500 text-xs tracking-wider uppercase mb-8">Hierarquia de Pilotos — ASD</p>
              {pilotRanks.map((tier, index) => (
                <TierSection key={tier.tier} tier={tier} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'atiradores' && (
            <div>
              <p className="text-slate-500 text-xs tracking-wider uppercase mb-8">Hierarquia de Atiradores — ASD</p>
              <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-4 mb-8 text-sm text-slate-400">
                A hierarquia dos Atiradores Aéreos é <span className="text-white font-semibold">independente</span> da cadeia de pilotos, devendo ser respeitada dentro das operações táticas da aeronave.
              </div>
              {shooterRanks.map((tier, index) => (
                <TierSection key={tier.tier} tier={tier} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}