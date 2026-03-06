import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      
      {/* Ticker de Status Tático (Abaixo da navbar) */}
      <div className="absolute top-16 left-0 w-full bg-emerald-500/10 border-b border-emerald-500/20 py-1.5 overflow-hidden z-30 pointer-events-none">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex justify-around w-1/2 text-[10px] text-emerald-500/80 font-mono tracking-[0.2em] whitespace-nowrap">
            <span>● SISTEMAS SPEED ONLINE</span>
            <span>● INTERCEPTAÇÃO RÁPIDA 24/7</span>
            <span>● PRIORIDADE EM ACOMPANHAMENTOS</span>
            <span>● DOMÍNIO TOTAL DA CIDADE</span>
            <span>● SUPORTE TÁTICO PRONTO</span>
          </div>
          <div className="flex justify-around w-1/2 text-[10px] text-emerald-500/80 font-mono tracking-[0.2em] whitespace-nowrap">
            <span>● SISTEMAS SPEED ONLINE</span>
            <span>● INTERCEPTAÇÃO RÁPIDA 24/7</span>
            <span>● PRIORIDADE EM ACOMPANHAMENTOS</span>
            <span>● DOMÍNIO TOTAL DA CIDADE</span>
            <span>● SUPORTE TÁTICO PRONTO</span>
          </div>
        </div>
      </div>

      {/* VÍDEO DE FUNDO */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 scale-105 pointer-events-none"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS CINEMATOGRÁFICOS */}
      <div className="absolute inset-0 bg-slate-950/50 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] z-10 pointer-events-none" />

      {/* EFEITO DE SCANLINE TÁTICO (TEXTURA DE CÂMERA) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-[0.15]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(0, 255, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', 
          backgroundSize: '100% 4px, 3px 100%' 
        }} 
      />

      <div className="relative z-40 max-w-5xl mx-auto px-6 text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge com Efeito Glassmorphism */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/30 bg-black/20 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:bg-black/40 transition-colors">
            <Shield className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="text-emerald-400 text-xs font-bold tracking-[0.4em] uppercase">
              Unidade de Interceptação Rápida
            </span>
          </div>

          {/* Título Moderno */}
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4 drop-shadow-2xl">
            SPEED
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-light text-slate-400 tracking-[0.4em] uppercase mb-12 drop-shadow-md">
            Special Police Emergency Enforcement Division
          </p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-emerald-400/90 font-medium tracking-wide mb-12 italic drop-shadow-lg"
          >
            "Alta Performance. Interceptação Implacável."
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to={createPageUrl('ApplicationForm')}
              className="group relative px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-sm transition-all duration-300 uppercase tracking-widest overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ingressar na SPEED
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to={createPageUrl('Manuals')}
              className="px-10 py-4 border border-white/20 bg-black/20 backdrop-blur-md text-white font-bold rounded-sm hover:bg-white/10 transition-all duration-300 uppercase tracking-widest hover:border-white/40"
            >
              Acessar Manuais
            </Link>
          </div>
        </motion.div>
      </div>

      {/* INDICADOR DE SCROLL */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-40 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-white tracking-[0.3em] uppercase rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
}