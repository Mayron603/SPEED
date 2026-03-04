import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Elemento de Vídeo de Fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        O seu navegador não suporta a reprodução de vídeos.
      </video>

      {/* Camada de sobreposição (Overlay) para garantir a leitura do texto */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sistema de Segurança Ativo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Proteção de Elite para o seu <span className="text-primary">Património</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Soluções avançadas em segurança privada, vigilância 24/7 e tecnologia de ponta para garantir a sua tranquilidade e dos seus bens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl('ApplicationForm')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group"
              >
                Candidatar-se Agora
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to={createPageUrl('About')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition-all border border-white/10"
              >
                Saiba Mais
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decoração Visual Inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}