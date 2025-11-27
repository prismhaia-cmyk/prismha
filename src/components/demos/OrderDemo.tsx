import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Package, FileText, Truck, CheckCircle2 } from "lucide-react";
import AnimatedPanel from "./AnimatedPanel";

const OrderDemo = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];

        // Fase 1: Pedido (0-2s)
        timers.push(setTimeout(() => setStep(1), 2000));
        // Fase 2: Inventario (2-4s)
        timers.push(setTimeout(() => setStep(2), 4000));
        // Fase 3: Factura (4-7s)
        timers.push(setTimeout(() => setStep(3), 7000));
        // Fase 4: Logística (7-10s)
        timers.push(setTimeout(() => setStep(4), 9000));

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Panel 1: Pedido */}
            <AnimatedPanel isActive={step === 0} isCompleted={step > 0}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Pedido Cliente</h4>
                        <p className="text-xs text-white/60">Recibido</p>
                    </div>
                </div>

                {step >= 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2"
                    >
                        <div className="flex justify-between text-sm">
                            <span className="text-white/70">Producto A</span>
                            <span className="text-white">x2</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-white/70">Producto B</span>
                            <span className="text-white">x1</span>
                        </div>
                        <div className="border-t border-white/10 pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                                <span className="text-white">Total</span>
                                <span className="text-primary">€127.50</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatedPanel>

            {/* Panel 2: Inventario */}
            <AnimatedPanel isActive={step === 1} isCompleted={step > 1}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Package className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Inventario</h4>
                        <p className="text-xs text-white/60">Actualizado</p>
                    </div>
                </div>

                {step >= 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                    >
                        <div className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Stock actualizado</span>
                        </div>
                        <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                            <div className="text-xs text-yellow-400">⚠️ Producto B: Stock bajo</div>
                        </div>
                    </motion.div>
                )}
            </AnimatedPanel>

            {/* Panel 3: Factura */}
            <AnimatedPanel isActive={step === 2} isCompleted={step > 2}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Factura</h4>
                        <p className="text-xs text-white/60">Generada</p>
                    </div>
                </div>

                {step >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                        <div className="text-xs text-white/60 mb-2">Factura #2024-1127</div>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>PDF generado</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/70 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Enviado al cliente</span>
                        </div>
                    </motion.div>
                )}
            </AnimatedPanel>

            {/* Panel 4: Logística */}
            <AnimatedPanel isActive={step === 3} isCompleted={step > 3}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Truck className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Logística</h4>
                        <p className="text-xs text-white/60">Notificada</p>
                    </div>
                </div>

                {step >= 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2"
                    >
                        <div className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Tarea creada</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Email a almacén</span>
                        </div>
                        <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20 mt-2">
                            <div className="text-xs text-green-400">Preparar envío</div>
                        </div>
                    </motion.div>
                )}
            </AnimatedPanel>
        </div>
    );
};

export default OrderDemo;
