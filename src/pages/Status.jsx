import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Radio, AlertTriangle, CheckCircle, Clock, Megaphone } from 'lucide-react';
import { format } from 'date-fns';
import { Skeleton } from "@/components/ui/skeleton";
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const statusConfig = {
  operacional: { label: "Operacional", icon: CheckCircle, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30", pulse: "bg-green-400" },
  em_treinamento: { label: "Em Treinamento", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", pulse: "bg-amber-400" },
  fora_de_servico: { label: "Fora de Serviço", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30", pulse: "bg-red-400" },
};

export default function Status() {
  const { data: announcements, isLoading } = useQuery({
    queryKey: ['announcements'],
    queryFn: () => base44.entities.Announcement.list('-created_date', 20),
    initialData: [],
  });

  // Get the most recent status from announcements
  const latestStatus = announcements.find(a => a.status_type);
  const currentStatus = latestStatus?.status_type || "operacional";
  const config = statusConfig[currentStatus];
  const StatusIcon = config.icon;

  return (
    <div>
      <PageHeader
        badge="Central de Status"
        title="Status da ASD"
        subtitle="Acompanhe o status operacional da divisão e comunicados oficiais em tempo real."
      />

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${config.bg} border ${config.border} rounded-2xl p-8 mb-12`}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${config.bg} flex items-center justify-center`}>
                  <StatusIcon className={`w-7 h-7 ${config.color}`} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 tracking-[0.2em] uppercase mb-1">Status Atual</p>
                  <h2 className={`text-2xl font-bold ${config.color}`}>{config.label}</h2>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${config.pulse} animate-pulse`} />
                <span className="text-xs text-slate-400">Atualizado em tempo real</span>
              </div>
            </div>
          </motion.div>

          {/* Announcements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Megaphone className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Comunicados Oficiais</h2>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                    <Skeleton className="h-5 w-48 mb-3 bg-slate-800" />
                    <Skeleton className="h-4 w-full mb-2 bg-slate-800" />
                    <Skeleton className="h-4 w-3/4 bg-slate-800" />
                  </div>
                ))}
              </div>
            ) : announcements.length === 0 ? (
              <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-12 text-center">
                <Radio className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">Nenhum comunicado no momento.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {announcements.map((ann, index) => (
                  <motion.div
                    key={ann.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-slate-900/40 border rounded-xl p-6 ${
                      ann.priority === 'urgente' ? 'border-red-500/30' : 'border-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        {ann.priority === 'urgente' && (
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                        )}
                        {ann.title}
                      </h3>
                      <span className="text-xs text-slate-500 flex-shrink-0">
                        {ann.created_date ? format(new Date(ann.created_date), 'dd/MM/yyyy HH:mm') : ''}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{ann.content}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}