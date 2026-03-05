import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import HighlightCards from '../components/home/HighlightCards';
import QuickLinks from '../components/home/QuickLinks';
import Footer from '../components/shared/Footer';
import { motion } from 'framer-motion';

// Componente Wrapper para fazer a animação de "Surgir" ao rolar a página
const SectionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="bg-slate-950">
      <HeroBanner />
      
      {/* O container adiciona um bom espaçamento entre as secções */}
      <div className="relative z-10 pb-20 space-y-32">
        <SectionWrapper>
          <HighlightCards />
        </SectionWrapper>

        <SectionWrapper>
          <QuickLinks />
        </SectionWrapper>
      </div>

      <Footer />
    </div>
  );
}