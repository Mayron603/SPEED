import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronRight, ExternalLink, Zap } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const manuals = [
  {
    id: "conduta_speed",
    icon: Shield,
    title: "Manual de Conduta SPEED",
    color: "emerald",
    docsLink: "https://docs.google.com/document/d/16ATNZOWuQmj9V-dr_njMyKTaujTtnczNKh1IkzyHiEA/edit?usp=sharing",
    sections: [
      {
        title: "Função da Unidade",
        content: "A Unidade SPEED tem como principal fundamento ter uma performance elevada em relação às outras unidades de 4 rodas para interceptação de veículos de atributos de performance elevada.\n\nPilotos devem ser proficientes, conhecendo a Unidade Speed (Veículo) e tendo autoconhecimento na Cidade."
      },
      {
        title: "Regras Gerais",
        content: `• Apenas policiais seniores+ poderão adentrar na unidade.
• Não possuir nenhuma advertência na corporação.
• A unidade SPEED tem TOTAL PRIORIDADE em acompanhamentos de alta velocidade a veículos de 4 rodas.
• Qualquer situação desrespeitosa, falta de conduta, ou ação contra as regras, será avaliada e a pessoa será advertida ou expulsa.
• Em caso de ser solicitada uma secundária em um acompanhamento, a SPEED, obtendo visual do veículo, poderá assumir a primária e continuar as atualizações na rádio.
• O motorista integrante da unidade poderá chamar algum oficial para auxiliá-lo como passageiro (P2) na comunicação. De forma alguma o P2 trocará de lugar com o motorista.
• Os membros da US usarão uniformes exclusivos da Unidade.
• Sempre antes de assumir ocorrência como primária, deve-se solicitar na rádio.
• A prioridade na perseguição é o acompanhamento, lembrando de assegurar sua vida e a dos civis, mantendo distanciamento seguro para evitar colisões.`
      },
      {
        title: "Comunicação Operacional (Modulação)",
        content: `A modulação da unidade Speed é de extrema responsabilidade, pois as outras unidades estarão prestando apoio de acordo com as informações passadas.

Exemplos de Modulação Básica:

• INÍCIO DE PATRULHAMENTO:
"QAP Central, SPEED 01 iniciando Código 0, qualquer QRR ou QRU, é só jogar na rede, QSL?"

• INÍCIO DE ACOMPANHAMENTO:
"QAP Central, SPEED 01 iniciando acompanhamento a um (modelo e cor do veículo), em frente ao QTH (Local), a QTI Do(a) (QTH Futuro), solicito uma secundária. QSL?"

• ASSUMINDO A PRIMÁRIA:
"QAP Central, SPEED 01 com visual do (modelo e cor do veículo), assumindo primária, QSL?"
(OBS: A SPEED sempre assume a primária de viaturas comuns. Se for outra Speed na primária, pode apenas auxiliar).

• FINALIZAÇÃO DE ACOMPANHAMENTO:
"QAP Central, indivíduo do (veículo acompanhado) está em mãos, TKS pelo apoio."`
      },
      {
        title: "Conduta de Perseguição",
        content: `Durante uma perseguição, deve-se sempre lembrar que antecipações devem ser evitadas por parte da primária. O trabalho é unicamente manter o visual e estar atento a freadas bruscas do veículo.

• Deve haver respeito com as demais viaturas e com as posições que as mesmas tomarem.
• O PIT é uma manobra extremamente proibida, deve-se utilizar o bom senso e a cautela.
• Em situações em que a patente mais alta permitir exceder o número de viaturas da perseguição (ex: código 5 ou resgate), lembre-se que as viaturas que devem ficar nas primárias são as que têm prioridade (SPEED).`
      },
      {
        title: "Atribuições: Viatura Primária",
        content: "A viatura primária deve apenas manter o visual e atentar-se a freadas bruscas em cruzamentos e curvas para evitar colisão com o veículo perseguido.\n\nÉ a única responsável pela modulação enquanto estiver no visual."
      },
      {
        title: "Atribuições: Viatura Secundária",
        content: `Durante um acompanhamento é a viatura de maior importância.

• Deve-se conhecer e atentar a todos os becos e vielas para prever onde o suspeito irá sair, assumindo a primária caso a P1 se enrosque.
• Modulação apenas se a primária perder o visual.
• A ultrapassagem da primária só é permitida se ela solicitar.
• Não se deve seguir a primária dentro dos becos. A secundária deverá dar a volta (Corredor/Cerco) para evitar a perda do visual caso a primária sofra alguma colisão.`
      },
      {
        title: "Atribuições: Viatura Terciária",
        content: "Deve-se atentar a formação de um roadblock na saída mais óbvia que o veículo poderá tomar.\n\nImportante: A obstrução de beco (100%) só pode ser realizada após 15 minutos de perseguição ou se a maior patente no acompanhamento autorizar."
      }
    ]
  }
];

function ManualSection({ section, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-800/50 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-800/20 transition-colors"
      >
        <span className={`font-semibold text-sm ${isOpen ? 'text-emerald-400' : 'text-slate-200'}`}>
          {section.title}
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Manuals() {
  const [activeManual, setActiveManual] = useState("conduta_speed");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (manualId, sectionIndex) => {
    const key = `${manualId}-${sectionIndex}`;
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const colorMap = {
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", activeBg: "bg-emerald-500/20" }
  };

  return (
    <div>
      <PageHeader
        badge="Documentação Oficial"
        title="Manuais SPEED"
        subtitle="Consulte os protocolos de atuação, regras e atribuições de viatura. Leitura obrigatória para Operadores e Recrutas."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          {/* Manual Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {manuals.map((manual) => {
              const colors = colorMap[manual.color];
              const isActive = activeManual === manual.id;
              return (
                <button
                  key={manual.id}
                  onClick={() => setActiveManual(manual.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 flex-1 ${
                    isActive
                      ? `${colors.activeBg} ${colors.border} ${colors.text}`
                      : 'border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  <manual.icon className="w-5 h-5" />
                  <span className="font-semibold text-sm">{manual.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Manual Content */}
          {manuals.map((manual) => {
            if (manual.id !== activeManual) return null;
            const colors = colorMap[manual.color];
            return (
              <motion.div
                key={manual.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-slate-900/40 border ${colors.border} rounded-xl overflow-hidden`}
              >
                {/* Cabeçalho do Manual com o link fornecido */}
                <div className="px-6 py-5 border-b border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className={`w-5 h-5 ${colors.text}`} />
                    <h3 className="text-lg font-bold text-white">{manual.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <span className="text-xs text-slate-500 hidden sm:inline-block">
                      {manual.sections.length} seções
                    </span>
                    <a
                      href={manual.docsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors w-full sm:w-auto ${colors.border} ${colors.text} hover:${colors.activeBg}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir no Google Docs
                    </a>
                  </div>
                </div>

                {/* Lista de Seções */}
                {manual.sections.map((section, index) => (
                  <ManualSection
                    key={index}
                    section={section}
                    isOpen={openSections[`${manual.id}-${index}`]}
                    onToggle={() => toggleSection(manual.id, index)}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}