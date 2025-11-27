import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Calendar, Mail, CheckCircle2 } from "lucide-react";
import AnimatedPanel from "./AnimatedPanel";

const ChatbotDemo = () => {
    const [step, setStep] = useState(0);
    const [messages, setMessages] = useState<Array<{ sender: string; text: string }>>([]);

    const conversation = [
        { sender: "user", text: "Hola, quiero agendar una cita" },
        { sender: "bot", text: "¡Claro! ¿Qué día prefieres?" },
        { sender: "user", text: "Mañana a las 15:00" },
        { sender: "bot", text: "✓ Perfecto, agendado" }
    ];

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];

        // Fase 1: Conversación (0-4s)
        conversation.forEach((msg, index) => {
            timers.push(setTimeout(() => {
                setMessages(prev => [...prev, msg]);
                if (index === conversation.length - 1) {
                    setStep(1); // Activar calendario
                }
            }, index * 1000));
        });

        // Fase 2: Calendario (4-6s)
        timers.push(setTimeout(() => {
            setStep(2); // Activar emails
        }, 5000));

        // Fase 3: Completado (8s)
        timers.push(setTimeout(() => {
            setStep(3);
        }, 8000));

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <div className="grid md:grid-cols-3 gap-6">
            {/* Panel 1: Chatbot */}
            <AnimatedPanel isActive={step === 0} isCompleted={step > 0}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Chatbot</h4>
                        <p className="text-xs text-white/60">Conversación</p>
                    </div>
                </div>

                <div className="space-y-3 min-h-[200px]">
                    <AnimatePresence>
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`flex items-start gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === "bot" ? "bg-primary/20" : "bg-white/10"
                                        }`}>
                                        {msg.sender === "bot" ? (
                                            <Bot className="w-4 h-4 text-primary" />
                                        ) : (
                                            <User className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                    <div className={`px-3 py-2 rounded-lg text-sm ${msg.sender === "bot" ? "bg-white/10 text-white" : "bg-primary text-white"
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </AnimatedPanel>

            {/* Panel 2: Calendario */}
            <AnimatedPanel isActive={step === 1} isCompleted={step > 1}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Calendario</h4>
                        <p className="text-xs text-white/60">Sistema</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: step >= 1 ? 1 : 0, scale: step >= 1 ? 1 : 0.9 }}
                        transition={{ delay: 0.3 }}
                        className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10"
                    >
                        <div className="text-2xl font-bold text-white mb-2">15:00</div>
                        <div className="text-sm text-white/80">Mañana, 27 Nov</div>
                    </motion.div>

                    <div className="space-y-2">
                        {step >= 1 && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-2 text-sm text-white/70"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span>Fecha registrada</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex items-center gap-2 text-sm text-white/70"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span>Cliente asignado</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex items-center gap-2 text-sm text-white/70"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span>Servicio confirmado</span>
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </AnimatedPanel>

            {/* Panel 3: Emails */}
            <AnimatedPanel isActive={step === 2} isCompleted={step > 2}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Emails</h4>
                        <p className="text-xs text-white/60">Automáticos</p>
                    </div>
                </div>

                <div className="space-y-3">
                    {step >= 2 && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                                <div className="flex items-start gap-2 mb-2">
                                    <Mail className="w-4 h-4 text-primary mt-0.5" />
                                    <div className="flex-1">
                                        <div className="text-xs text-white/60">Para: Propietario</div>
                                        <div className="text-sm font-medium text-white">Nueva cita agendada</div>
                                    </div>
                                </div>
                                <div className="text-xs text-white/50">Cliente: María López</div>
                                <div className="text-xs text-white/50">Fecha: 27 Nov, 15:00</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                                <div className="flex items-start gap-2 mb-2">
                                    <Mail className="w-4 h-4 text-green-400 mt-0.5" />
                                    <div className="flex-1">
                                        <div className="text-xs text-white/60">Para: Cliente</div>
                                        <div className="text-sm font-medium text-white">Confirmación de cita</div>
                                    </div>
                                </div>
                                <div className="text-xs text-white/50">Tu cita está confirmada</div>
                                <div className="text-xs text-white/50">27 Nov, 15:00</div>
                            </motion.div>
                        </>
                    )}
                </div>
            </AnimatedPanel>
        </div>
    );
};

export default ChatbotDemo;
