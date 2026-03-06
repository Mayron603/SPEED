import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const initialForm = {
  qra: "",
  badge: "",
  age: "",
  availability: "",
  previous_special_unit: "",
  radio_experience: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: "",
  q11: "",
};

const questions = [
  { field: 'q1', label: '1. Qual a principal função e o fundamento da Unidade SPEED?' },
  { field: 'q2', label: '2. Como a Viatura Secundária deve agir em relação aos becos e vielas durante uma perseguição?' },
  { field: 'q3', label: '3. Qual é a regra estabelecida no manual sobre a utilização da manobra PIT?' },
  { field: 'q4', label: '4. Explique o que é permitido e o que é expressamente proibido em relação ao passageiro (P2).' },
  { field: 'q5', label: '5. Quando é permitido realizar a obstrução de 100% (roadblock) na saída de um beco?' },
  { field: 'q6', label: '6. Em uma perseguição de alta velocidade, o que você considera mais importante?' },
  { field: 'q7', label: '7. Em quais situações, a primária deve abrir código 3?' },
  { field: 'q8', label: '8. O que um piloto deve evitar fazer durante uma perseguição em alta velocidade?' },
  { field: 'q9', label: '9. Se outra viatura estiver melhor posicionada para continuar a perseguição, qual deve ser sua atitude?' },
  { field: 'q10', label: '10. O que é a técnica de contenção por viaturas e em que situação ela deve ser utilizada?' },
  { field: 'q11', label: '11. Explique como um piloto deve abordar curvas em alta velocidade durante uma perseguição para manter controle do veículo.' },
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState(initialForm);
  const [confirmations, setConfirmations] = useState({ manuals: false, hierarchy: false, rules: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirmations.manuals || !confirmations.hierarchy || !confirmations.rules) return;
    setIsSubmitting(true);

    const webhookUrl = "https://discord.com/api/webhooks/1479288481262997656/T_n2n9PL3qfx616YVgT6WRuTnzr4UW6IQwP24y1BYMxHGeBhLMO0Gd2g2x6BzyTNdJoB";
    const embedColor = 1047124; // Verde Esmeralda escuro

    const payload = {
      username: "Central de Recrutamento SPEED",
      // COLE O LINK DA SUA LOGO DO DISCORD AQUI ABAIXO:
      avatar_url: "https://media.discordapp.net/attachments/1468245788768468992/1471594951040172073/unnamed__2_-removebg-preview.png?ex=69ab3099&is=69a9df19&hm=f8b6ed1713d0f3ca9ae84e4d1ec4e415e24b4363e1ffda093cc0f2589b9486e5&=&format=webp&quality=lossless", 
      embeds: [
        {
          title: `NOVA CANDIDATURA RECEBIDA - SPEED`,
          description: `O candidato **${formData.qra}** submeteu o formulário para ingressar na unidade.`,
          color: embedColor,
          fields: [
            { name: "QRA", value: formData.qra || "N/A", inline: true },
            { name: "Badge", value: formData.badge || "N/A", inline: true },
            { name: "Idade", value: formData.age || "N/A", inline: true },
            { name: "Disponibilidade", value: formData.availability || "N/A", inline: true },
            { name: "Unidade Especial Anterior", value: formData.previous_special_unit || "Não informada", inline: true },
            { name: "Experiência com Modulação", value: formData.radio_experience || "Não informada", inline: true }
          ]
        },
        {
          title: `AVALIAÇÃO TEÓRICA`,
          color: embedColor,
          fields: questions.map(q => ({
            name: q.label,
            value: formData[q.field] || "Não respondeu",
            inline: false
          })),
          footer: {
            text: "Sistema Automático de Recrutamento SPEED"
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Ocorreu um erro ao enviar para o Discord. Verifique a sua conexão.");
      }
    } catch (error) {
      console.error("Erro no Webhook:", error);
      alert("Falha na conexão com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <PageHeader badge="Candidatura" title="Formulário de Ingresso" />
        <section className="py-32 bg-slate-950">
          <div className="max-w-lg mx-auto px-6 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }}>
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-3">Candidatura Enviada</h2>
            <p className="text-slate-400 leading-relaxed">
              A sua candidatura foi recebida com sucesso. O Comando e a Instrução da SPEED analisarão
              as suas respostas. Aguarde o contacto da unidade.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const inputClass = "bg-slate-900/50 border-slate-700 text-white focus:border-emerald-500 h-12";
  const textareaClass = "bg-slate-900/50 border-slate-700 text-white focus:border-emerald-500 min-h-[100px]";
  const labelClass = "text-slate-300 text-xs tracking-wider uppercase mb-2 block";

  return (
    <div>
      <PageHeader
        badge="Processo Seletivo"
        title="Formulário de Ingresso"
        subtitle="Preencha os seus dados. O questionário teórico exigirá conhecimento profundo do Manual de Conduta SPEED."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-14">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">1</div>
                <h2 className="text-xl font-bold text-white">Dados Operacionais</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Label className={labelClass}>QRA *</Label>
                  <Input required value={formData.qra} onChange={(e) => handleChange('qra', e.target.value)}
                    className={inputClass} placeholder="Ex: Seu Nome / QRA" />
                </div>
                <div>
                  <Label className={labelClass}>Badge</Label>
                  <Input value={formData.badge} onChange={(e) => handleChange('badge', e.target.value)}
                    className={inputClass} placeholder="Ex: 1234" />
                </div>
                <div>
                  <Label className={labelClass}>Idade</Label>
                  <Input value={formData.age} onChange={(e) => handleChange('age', e.target.value)}
                    className={inputClass} placeholder="Sua idade" type="number" />
                </div>
                <div className="md:col-span-2">
                  <Label className={labelClass}>Disponibilidade de Horário *</Label>
                  <Select required value={formData.availability} onValueChange={(v) => handleChange('availability', v)}>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Qual turno costuma patrulhar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã (06h - 12h)</SelectItem>
                      <SelectItem value="tarde">Tarde (12h - 18h)</SelectItem>
                      <SelectItem value="noite">Noite (18h - 00h)</SelectItem>
                      <SelectItem value="madrugada">Madrugada (00h - 06h)</SelectItem>
                      <SelectItem value="integral">Integral / Horários Variados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">2</div>
                <h2 className="text-xl font-bold text-white">Experiência</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <Label className={labelClass}>Já fez parte de alguma unidade tática/especial?</Label>
                  <Select value={formData.previous_special_unit} onValueChange={(v) => handleChange('previous_special_unit', v)}>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim</SelectItem>
                      <SelectItem value="nao">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className={labelClass}>Possui experiência com modulação de perseguição?</Label>
                  <Select value={formData.radio_experience} onValueChange={(v) => handleChange('radio_experience', v)}>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim</SelectItem>
                      <SelectItem value="nao">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-sm">3</div>
                <h2 className="text-xl font-bold text-white">Questionário Técnico</h2>
              </div>
              
              <p className="text-slate-500 text-xs mb-8">Responda com base no Manual de Conduta SPEED.</p>
              <div className="space-y-6">
                {questions.map((q) => (
                  <div key={q.field}>
                    <Label className={labelClass}>{q.label}</Label>
                    <Textarea 
                      required 
                      value={formData[q.field]} 
                      onChange={(e) => handleChange(q.field, e.target.value)}
                      className={textareaClass} 
                      placeholder="Desenvolva a sua resposta..." 
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-sm">4</div>
                <h2 className="text-xl font-bold text-white">Confirmações</h2>
              </div>
              <div className="space-y-4 bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                {[
                  { id: 'manuals', key: 'manuals', text: 'Confirmo que li e compreendi o Manual de Conduta SPEED, incluindo todas as regras operacionais e de modulação.' },
                  { id: 'hierarchy', key: 'hierarchy', text: 'Confirmo o meu compromisso com a hierarquia da unidade e a disciplina durante os acompanhamentos.' },
                  { id: 'rules', key: 'rules', text: 'Declaro ciência de que qualquer situação desrespeitosa ou falta de conduta resultará em advertência ou expulsão da Unidade.' },
                ].map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <Checkbox
                      id={item.id}
                      checked={confirmations[item.key]}
                      onCheckedChange={(checked) => setConfirmations(prev => ({ ...prev, [item.key]: checked }))}
                      className="mt-0.5 border-slate-600 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                    />
                    <label htmlFor={item.id} className="text-sm text-slate-300 leading-relaxed cursor-pointer">{item.text}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting || !confirmations.manuals || !confirmations.hierarchy || !confirmations.rules}
                className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-widest uppercase disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> A Enviar...</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" /> Enviar Candidatura</>
                )}
              </Button>
              <p className="text-center text-slate-600 text-xs mt-4">
                Ao enviar, concorda em ser submetido a uma avaliação teórica e prática (se aprovado pelo Comando da SPEED).
              </p>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}