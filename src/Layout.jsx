import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: "Início", page: "Home" },
  { label: "Sobre", page: "About" },
  { label: "Hierarquia", page: "Hierarchy" },
  { label: "Manuais", page: "Manuals" },
  { label: "Ingressar", page: "ApplicationForm", highlight: true },
];

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rastreador do movimento do rato para o cursor tático
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans cursor-crosshair">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        :root {
          --font-sans: 'Inter', system-ui, sans-serif;
        }
        body {
          font-family: var(--font-sans);
          background: #020617;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: #334155 transparent;
        }
      `}</style>

      {/* CURSOR TÁTICO CUSTOMIZADO */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.2 }}
      >
        <div className="w-full h-full rounded-full border border-amber-500/50 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-500 rounded-full" />
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo ASD" className="h-16 w-auto object-contain drop-shadow-md" />
              <span className="text-white font-black text-base tracking-wider hidden sm:block">ASD</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 ${
                    item.highlight
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : currentPageName === item.page
                        ? 'text-amber-400 bg-amber-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    item.highlight
                      ? 'bg-amber-500 text-slate-950'
                      : currentPageName === item.page
                        ? 'text-amber-400 bg-amber-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {children}
      </main>
    </div>
  );
}