import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Crosshair, Eye, LifeBuoy } from 'lucide-react';

const highlights = [
  {
    icon: Radar,
    title: "Patrulhamento Aéreo",
    description: "Vigilância constante dos céus, garantindo segurança e resposta imediata a qualquer ameaça identificada."
  },
  {
    icon: Crosshair,
    title: "Apoio Tático",
    description: "Suporte direto às unidades terrestres em operações de alto risco, perseguições e abordagens estratégicas."
  },
  {
    icon: Eye,
    title: "Monitoramento e Reconhecimento",
    description: "Reconhecimento aéreo avançado para mapeamento de áreas, identificação de suspeitos e análise de terreno."
  },
  {
    icon: LifeBuoy,
    title: "Resgates e Interceptações",
    description: "Operações de resgate em situações críticas e interceptação de veículos e aeronaves hostis."
  }
];

export default function HighlightCards() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Nossas Competências</h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4" />
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
              <div className="relative bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 rounded-xl p-8 h-full transition-all duration-500 hover:bg-slate-900/80">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-400" />
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