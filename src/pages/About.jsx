import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Plane, Users, Radio } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const values = [
  { icon: Target, title: "Missão", text: "Prover suporte aéreo de excelência às forças policiais, garantindo segurança, eficiência operacional e resposta imediata em qualquer cenário." },
  { icon: Eye, title: "Visão", text: "Ser reconhecida como a divisão aérea mais preparada, disciplinada e confiável, referência em operações aéreas de segurança pública." },
  { icon: Heart, title: "Valores", text: "Disciplina, Hierarquia, Comprometimento, Lealdade, Excelência Operacional e Respeito à cadeia de comando." },
];

const responsibilities = [
  { icon: Plane, title: "Aviação no Suporte Policial", text: "A aviação desempenha papel crucial no suporte às operações policiais, oferecendo vantagem tática incomparável. Do alto, é possível monitorar grandes áreas, coordenar perseguições e garantir a segurança de operações complexas." },
  { icon: Users, title: "Integração com Unidades Terrestres", text: "A ASD opera em total sincronia com as unidades terrestres. Nossos pilotos e copilotos são treinados para comunicação constante via rádio, fornecendo posições, rotas de fuga e apoio visual em tempo real." },
  { icon: Radio, title: "Responsabilidades da Divisão", text: "Patrulhamento aéreo preventivo, apoio em perseguições, monitoramento de áreas de risco, resgate de agentes em perigo, interceptação de veículos e aeronaves, e reconhecimento de terreno para operações especiais." },
];

export default function About() {
  return (
    <div>
      <PageHeader
        badge="Institucional"
        title="Sobre a ASD"
        subtitle="Conheça a história, missão e valores da divisão aérea mais preparada para proteger os céus."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          {/* History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Nossa História</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-6">A Origem da ASD</h2>
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                A Air Support Division foi fundada com a necessidade crescente de uma unidade aérea 
                especializada que pudesse atuar de forma autônoma e integrada com as forças terrestres. 
                Desde sua criação, a ASD se consolidou como uma divisão de elite, composta por pilotos 
                altamente treinados e comprometidos com a excelência operacional.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Com o passar do tempo, a divisão expandiu suas capacidades, incorporando novos procedimentos 
                de voo, protocolos de comunicação avançados e técnicas de patrulhamento que a tornaram 
                referência em suporte aéreo policial. Hoje, a ASD é sinônimo de disciplina, competência 
                e dedicação.
              </p>
            </div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 hover:border-amber-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Responsibilities */}
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Atuação</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-8">Responsabilidades e Integração</h2>
            <div className="space-y-6">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-slate-900/30 border border-slate-800 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}