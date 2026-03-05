import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap, Map, ShieldAlert } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const values = [
  { icon: Target, title: "Missão", text: "Garantir a ordem nas vias através da interceptação implacável de veículos de alta performance, assegurando prioritariamente a vida dos civis e oficiais através de uma condução tática e segura." },
  { icon: Eye, title: "Visão", text: "Ser a unidade terrestre de elite mais respeitada da cidade, reconhecida pelo domínio técnico impecável de seus operadores e pela eficácia absoluta em acompanhamentos e cercos." },
  { icon: ShieldCheck, title: "Valores", text: "Disciplina rigorosa, Cautela extrema, Proficiência no volante, Autoconhecimento da cidade, Respeito à hierarquia e Foco absoluto na modulação e no acompanhamento." },
];

const responsibilities = [
  { icon: Zap, title: "Acompanhamento de Alta Performance", text: "Nossa especialidade é a viatura primária. Focamos em manter o visual de veículos altamente modificados sem recorrer a antecipações ou manobras proibidas como o PIT, garantindo uma perseguição limpa e a atualização constante na rádio." },
  { icon: Map, title: "Antecipação, Becos e Vielas", text: "O verdadeiro diferencial da SPEED é o autoconhecimento da cidade. A viatura secundária mapeia rotas de fuga, cobre becos e vielas (Corredor e Cerco) e está sempre pronta para assumir a primária caso haja algum imprevisto." },
  { icon: ShieldAlert, title: "Roadblocks e Obstruções", text: "Quando a perseguição se estende, a viatura terciária entra em ação coordenando roadblocks em saídas óbvias. A obstrução 100% dos becos é calculada e feita de forma estratégica e autorizada, visando encurralar os suspeitos com segurança." },
];

export default function About() {
  return (
    <div>
      <PageHeader
        badge="Institucional"
        title="Sobre a SPEED"
        subtitle="Conheça a história, missão e valores da Special Police Emergency Enforcement Division."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          {/* History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-emerald-500 text-xs font-bold tracking-[0.3em] uppercase">Nossa História</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-6">A Origem da SPEED</h2>
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                A Special Police Emergency Enforcement Division (SPEED) foi fundada diante da necessidade crescente de combater suspeitos que utilizam veículos com atributos de performance elevadíssima. Com as viaturas convencionais encontrando dificuldades para acompanhar esses alvos nas vias urbanas e rodovias, tornou-se imperativa a criação de uma força terrestre de interceptação rápida.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Selecionando apenas os policiais mais experientes e com zero advertências na corporação, a SPEED formou uma unidade onde a pilotagem proficiente se une ao profundo conhecimento geográfico da cidade. Hoje, nossos operadores são os mestres dos becos e vielas, garantindo prioridade absoluta em acompanhamentos de 4 rodas e mantendo o lema de que a vida está sempre em primeiro lugar.
              </p>
            </div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Responsibilities */}
          <div>
            <span className="text-emerald-500 text-xs font-bold tracking-[0.3em] uppercase">Atuação Tática</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-8">Responsabilidades e Integração</h2>
            <div className="space-y-6">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-slate-900/30 border border-slate-800 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}