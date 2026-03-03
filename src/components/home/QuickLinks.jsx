import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { Users, BookOpen, FileText, ChevronRight } from 'lucide-react';

const links = [
  {
    icon: Users,
    title: "Estrutura Hierárquica",
    description: "Conheça os cargos, responsabilidades e a cadeia de comando da ASD.",
    page: "Hierarchy"
  },
  {
    icon: BookOpen,
    title: "Manuais e Documentos",
    description: "Acesse os manuais de conduta, instrução e recrutamento da divisão.",
    page: "Manuals"
  },
  {
    icon: FileText,
    title: "Formulário de Ingresso",
    description: "Preencha o formulário e inicie seu processo seletivo para a ASD.",
    page: "ApplicationForm"
  }
];

export default function QuickLinks() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-4">
          {links.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={createPageUrl(item.page)}
                className="group flex items-center gap-6 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}