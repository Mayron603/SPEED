import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Crosshair, Map, ShieldAlert } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Interceptação de veículos de atributos elevados com viaturas especializadas e prioridade total na rede de comunicação."
  },
  {
    icon: Crosshair,
    title: "Acompanhamento Tático",
    description: "Atuação precisa como viatura primária, secundária ou terciária, mantendo o visual e repassando modulação limpa."
  },
  {
    icon: Map,
    title: "Domínio de Terreno",
    description: "Autoconhecimento profundo da cidade, prevendo rotas, becos e vielas para interceptar e encurralar suspeitos em fuga."
  },
  {
    icon: ShieldAlert,
    title: "Cercos e Roadblocks",
    description: "Estratégias avançadas de bloqueio e obstrução de vias com segurança, respeitando sempre a vida dos civis e oficiais."
  }
];

export default function HighlightCards() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-500 text-xs font-bold tracking-[0.3em] uppercase">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Nossas Competências</h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 rounded-xl p-8 h-full transition-all duration-500 hover:bg-slate-900/80">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}