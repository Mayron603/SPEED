import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Atualizada */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
               <img src="/logo.png" alt="Logo SPEED" className="h-10 w-auto object-contain drop-shadow-md" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">SPEED</p>
              <p className="text-slate-500 text-xs">Special Police Emergency Enforcement Division</p>
            </div>
          </div>

          {/* Texto central */}
          <p className="text-slate-500 text-xs text-center italic">
            "A prioridade é o acompanhamento, respeitando a sua vida e a dos civis."
          </p>

          {/* Direita */}
          <div className="text-right">
            <p className="text-slate-600 text-xs">© 2026 SPEED. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}