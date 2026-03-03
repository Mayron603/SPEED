import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-400/10 blur-2xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">Divisão de Suporte Aéreo</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6">
            <span className="block">ASD</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-slate-400 mt-3 tracking-[0.2em]">
              AIR SUPPORT DIVISION
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-amber-400/90 font-medium tracking-wide mb-4 italic">
            "Dominando os céus. Protegendo o solo."
          </p>
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            A ASD é a divisão aérea de elite responsável pelo patrulhamento, apoio tático, 
            monitoramento estratégico e operações de resgate. Somos a linha de defesa que 
            opera acima de tudo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={createPageUrl('ApplicationForm')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Ingressar na ASD
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl('Manuals')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Acessar Manuais
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}