import React from 'react';
import { motion } from 'framer-motion';
import { Crown, GraduationCap, Star, Shield, Zap } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const speedRanks = [
  {
    tier: "Alto Comando",
    tierColor: "text-amber-400",
    tierIcon: Crown,
    ranks: [
      {
        title: "Comando de Unidade",
        description: "Responsável pela administração geral, diretrizes operacionais e decisões finais da SPEED.",
        responsibilities: [
          "Administração geral e representação da divisão perante outras unidades",
          "Definição de diretrizes operacionais e estratégicas",
          "Decisões finais sobre promoções, advertências ou expulsões",
          "Comandante Atual: Victor Sete"
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
        title: "Instrutor SPEED",
        description: "Responsável por treinar, avaliar e garantir que todos os pilotos sejam proficientes e tenham autoconhecimento na cidade.",
        responsibilities: [
          "Aplicação de treinamentos teóricos e práticos de direção e tática",
          "Avaliação contínua do desempenho, postura e disciplina de Recrutas e Operadores",
          "Manutenção do padrão de alta performance nas interceptações",
          "Aprovação e recomendação de promoções"
        ]
      }
    ]
  },
  {
    tier: "Supervisão",
    tierColor: "text-purple-400",
    tierIcon: Star,
    ranks: [
      {
        title: "Supervisor SPEED",
        description: "Supervisiona as operações diárias e garante o cumprimento irrestrito do Manual de Conduta em campo.",
        responsibilities: [
          "Organização tática durante patrulhamentos e acompanhamentos",
          "Liderança operacional e tomada de decisões rápidas via rádio",
          "Autorização de táticas específicas, como obstruções totais de via (após 15 min)",
          "Garantir a modulação correta e o respeito entre as viaturas na perseguição"
        ]
      }
    ]
  },
  {
    tier: "Operacional",
    tierColor: "text-emerald-400",
    tierIcon: Zap,
    ranks: [
      {
        title: "Operador SPEED",
        description: "Membro oficial e proficiente, atua diretamente nas interceptações de veículos de alta performance.",
        responsibilities: [
          "Atuar como viatura primária, secundária ou terciária com total domínio técnico",
          "Manter o visual do veículo sem antecipações e realizar modulação precisa",
          "Conhecimento profundo de becos, vielas e rotas de fuga comuns",
          "Priorizar a própria vida, dos civis e evitar colisões (distanciamento seguro)"
        ]
      },
      {
        title: "Recruta SPEED",
        description: "Policial Sênior+ recém-admitido na unidade, em fase de avaliação de conduta e habilidade.",
        responsibilities: [
          "Participar de acompanhamentos seguindo estritamente as ordens superiores",
          "Aprender e aplicar conceitos de posicionamento (Corredor, Cerco e Roadblock)",
          "Demonstrar capacidade operacional, disciplina e respeito à hierarquia",
          "Auxiliar como P2 de um motorista oficial da unidade quando necessário"
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
            <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
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
  return (
    <div>
      <PageHeader
        badge="Cadeia de Comando"
        title="Estrutura Hierárquica"
        subtitle="A SPEED possui uma hierarquia interna que deve ser respeitada a todo momento durante patrulhamentos, acompanhamentos e perseguições."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-5 mb-12 flex items-start gap-4">
            <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold mb-1">Critérios de Promoção</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Não há tempo mínimo ou máximo para promoção na unidade. A progressão de patente é baseada exclusivamente no desempenho, postura, disciplina, capacidade operacional e comprometimento do policial com as diretrizes da SPEED.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {speedRanks.map((tier, index) => (
              <TierSection key={tier.tier} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}