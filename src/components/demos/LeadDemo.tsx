import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Database, Mail, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedPanel from "./AnimatedPanel";

const LeadDemo = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];

        // Fase 1: Formulario (0-2s)
        timers.push(setTimeout(() => setStep(1), 2000));
        // Fase 2: CRM (2-5s)
        timers.push(setTimeout(() => setStep(2), 5000));
        // Fase 3: Email (5-7s)
        timers.push(setTimeout(() => setStep(3), 7000));
        // Fase 4: WhatsApp (7-10s)
        timers.push(setTimeout(() => setStep(4), 9000));

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <div className="grid md:grid-cols-4 gap-4">
            {/* Paso 1: Formulario */}
            <AnimatedPanel isActive={step === 0} isCompleted={step > 0}>
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                        <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Formulario Web</h4>

                    {step >= 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full space-y-2 mt-2"
                        >
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5 }}
                                    className="h-full bg-blue-400"
                                />
                            </div>
                            <div className="text-xs text-white/60">Datos completados</div>
                        </motion.div>
                    )}
                </div>
                {step > 0 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                )}
            </AnimatedPanel>

            {/* Paso 2: CRM */}
            <AnimatedPanel isActive={step === 1} isCompleted={step > 1}>
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                        <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">CRM</h4>

                    {step >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full space-y-2 mt-2"
                        >
                            <div className="flex items-center gap-2 text-xs text-white/70">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                                <span>Contacto creado</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/70">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                                <span>Lead calificado</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/70">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                                <span>Asignado a vendedor</span>
                            </div>
                        </motion.div>
                    )}
                </div>
                {step > 1 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                )}
            </AnimatedPanel>

            {/* Paso 3: Email */}
            <AnimatedPanel isActive={step === 2} isCompleted={step > 2}>
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                        <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>

                    {step >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full mt-2 p-2 bg-white/5 rounded-lg border border-white/10"
                        >
                            <div className="text-xs text-white/60 mb-1">Bienvenida</div>
                            <div className="text-xs text-white">Enviado ✓</div>
                        </motion.div>
                    )}
                </div>
                {step > 2 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                )}
            </AnimatedPanel>

            {/* Paso 4: WhatsApp */}
            <AnimatedPanel isActive={step === 3} isCompleted={step > 3}>
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                        <MessageSquare className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">WhatsApp</h4>

                    {step >= 3 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full mt-2 p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                        >
                            <div className="text-xs text-white/80">Nuevo lead:</div>
                            <div className="text-xs font-medium text-white">María López</div>
                        </motion.div>
                    )}
                </div>
            </AnimatedPanel>
        </div>
    );
};

export default LeadDemo;
