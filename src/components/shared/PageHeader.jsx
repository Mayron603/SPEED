import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ badge, title, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 bg-slate-950 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">{badge}</span>
          )}
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}