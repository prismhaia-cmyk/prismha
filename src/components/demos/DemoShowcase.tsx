import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import ChatbotDemo from "./ChatbotDemo";
import LeadDemo from "./LeadDemo";
import OrderDemo from "./OrderDemo";

const DemoShowcase = () => {
    const [activeDemo, setActiveDemo] = useState(0);
    const [progress, setProgress] = useState(0);

    const demos = [
        { id: 0, name: "Agenda de Citas", component: ChatbotDemo },
        { id: 1, name: "Lead a Venta", component: LeadDemo },
        { id: 2, name: "Procesamiento de Pedidos", component: OrderDemo }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    // Cambiar a siguiente demo
                    setActiveDemo(current => (current + 1) % demos.length);
                    return 0;
                }
                return prev + 2; // Incrementar de 2 en 2 para reducir renders (50 pasos = 10 segundos)
            });
        }, 200); // Actualizar cada 200ms en lugar de 100ms

        return () => clearInterval(interval);
    }, []);

    const ActiveDemoComponent = demos[activeDemo].component;

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-black">
            {/* Textura de ruido sutil */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                        Mira cómo funciona en <span className="text-primary">tiempo real</span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
                        Automatización en acción. Sin intervención humana. Completado en segundos.
                    </p>
                </motion.div>

                {/* Indicadores de demo */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {demos.map((demo, index) => (
                        <button
                            key={demo.id}
                            onClick={() => {
                                setActiveDemo(index);
                                setProgress(0);
                            }}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeDemo === index
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                                }`}
                        >
                            {demo.name}
                        </button>
                    ))}
                </div>

                {/* Barra de progreso */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-green-400 transition-transform duration-200 ease-linear origin-left"
                            style={{ transform: `scaleX(${progress / 100})` }}
                        />
                    </div>
                </div>
                {/* Contenedor de demo con glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDemo}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ActiveDemoComponent />
                        </motion.div>
                    </AnimatePresence>

                    {/* Tiempo completado */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: progress > 80 ? 1 : 0 }}
                        className="flex items-center justify-center gap-2 mt-8 text-green-400"
                    >
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">✓ Completado en 2.3 segundos</span>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                        ¿Quieres esto para tu negocio?
                    </h3>
                    <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                        Implementamos estas automatizaciones en 1-2 semanas. Empieza con una auditoría gratuita.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Agendar consulta gratuita
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoShowcase;
