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
  role: "", 
  previous_special_unit: "",
  radio_experience: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
};

const roleQuestions = {
  piloto: [
    { field: 'q1', label: '1. Qual a função principal da Unidade SPEED?' },
    { field: 'q2', label: '2. Como a Viatura Primária deve agir nas curvas e cruzamentos para não perder o suspeito?' },
    { field: 'q3', label: '3. Qual é a regra estabelecida no manual sobre a utilização da manobra PIT?' },
    { field: 'q4', label: '4. Durante um acompanhamento, o que deve ser priorizado acima de tudo?' },
    { field: 'q5', label: '5. Se uma viatura comum pedir apoio (secundária), quando a SPEED pode assumir a primária?' },
  ],
  p2: [
    { field: 'q1', label: '1. Qual é a modulação exata para assumir a viatura primária?' },
    { field: 'q2', label: '2. Qual é a restrição mais importante em relação à troca de lugares entre o P2 e o Motorista?' },
    { field: 'q3', label: '3. Como deve ser o comportamento da Viatura Secundária ao chegar em becos e vielas?' },
    { field: 'q4', label: '4. Qual é a modulação correta para a "Finalização de Acompanhamento"?' },
    { field: 'q5', label: '5. Quando é permitido realizar a obstrução de 100% (roadblock) na saída de um beco?' },
  ]
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState(initialForm);
  const [confirmations, setConfirmations] = useState({ manuals: false, hierarchy: false, rules: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    if (field === 'role') {
      setFormData(prev => ({ ...prev, role: value, q1: "", q2: "", q3: "", q4: "", q5: "" }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirmations.manuals || !confirmations.hierarchy || !confirmations.rules || !formData.role) return;
    setIsSubmitting(true);

    const webhookUrl = "https://discord.com/api/webhooks/1478402690508914872/Tc5x3A8oAtPv9qctyoX1Q-wBIiw_sxkMNs1lkEPBzda-zwK2NBmo9O6fm2UfdAGkfdqL";

    const questionsUsed = roleQuestions[formData.role];
    const embedColor = 2829617; // Cor #2B2D31 (Fundo exato do Discord para ficar invisível)

    const payload = {
      username: "Central de Recrutamento SPEED",
      // COLE O LINK DA SUA LOGO DO DISCORD AQUI ABAIXO:
      avatar_url: "https://cdn.discordapp.com/attachments/1110324893750403072/1478398654426382396/logo.png?ex=69a8418a&is=69a6f00a&hm=5b7e73ed52d7bca432043dfbe296093cb2fa4a5f4c775bd4fad10368270fa478&", 
      embeds: [
        {
          title: `NOVA CANDIDATURA RECEBIDA - ${formData.role.toUpperCase()}`,
          description: `O candidato **${formData.qra}** submeteu o formulário para atuar como **${formData.role.toUpperCase()}**.`,
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
          title: `AVALIAÇÃO TEÓRICA (${formData.role.toUpperCase()})`,
          color: embedColor,
          fields: questionsUsed.map(q => ({
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
        alert("Ocorreu um erro ao enviar para o Discord. Verifique sua conexão.");
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
              as suas respostas. Aguarde o contato da unidade.
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
        subtitle="Preencha os seus dados e selecione a especialidade desejada. O questionário teórico exigirá conhecimento profundo do Manual de Conduta SPEED."
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
                  <Label className={labelClass}>Vaga Pretendida *</Label>
                  <Select required value={formData.role} onValueChange={(v) => handleChange('role', v)}>
                    <SelectTrigger className="bg-slate-900/80 border-emerald-500/50 text-white h-14 font-semibold text-lg">
                      <SelectValue placeholder="Selecione o seu foco de atuação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piloto">Piloto de Interceptação (Motorista)</SelectItem>
                      <SelectItem value="p2">Passageiro P2 (Modulação / Apoio)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
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
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-sm">3</div>
                <h2 className="text-xl font-bold text-white">Questionário Técnico</h2>
              </div>
              
              {!formData.role ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl mt-6 text-center">
                  <p className="text-emerald-400 font-medium">Selecione a sua Vaga Pretendida na Seção 1 para carregar a prova teórica correta.</p>
                </div>
              ) : (
                <>
                  <p className="text-slate-500 text-xs mb-8 ml-11">Responda com base no Manual de Conduta SPEED.</p>
                  <div className="space-y-6">
                    {roleQuestions[formData.role].map((q) => (
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
                </>
              )}
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
                disabled={isSubmitting || !confirmations.manuals || !confirmations.hierarchy || !confirmations.rules || !formData.role}
                className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-widest uppercase disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> A Enviar...</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" /> Enviar Candidatura</>
                )}
              </Button>
              <p className="text-center text-slate-600 text-xs mt-4">
                Ao enviar, você concorda em ser submetido a uma avaliação teórica e prática (se aprovado pelo Comando da SPEED).
              </p>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}