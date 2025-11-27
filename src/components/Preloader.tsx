import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const stages = [
            { delay: 0 },      // Particles - 0.8s
            { delay: 800 },    // PRISMHA text - 2 seconds (más tiempo)
            { delay: 2800 },   // Blob final - 0.7s
        ];

        const timeouts = stages.map(({ delay }, index) =>
            setTimeout(() => setStage(index), delay)
        );

        const finishTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Total: 3.5 segundos

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(finishTimeout);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Stage 1: Neural Network Particles */}
                    {stage === 0 && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Particles */}
                            {[...Array(25)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        top: `${20 + Math.random() * 60}%`,
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: [0, 1.2, 0.8],
                                        opacity: [0, 1, 0.4],
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.025,
                                        ease: "easeOut",
                                    }}
                                />
                            ))}

                            {/* Connection lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                {[...Array(12)].map((_, i) => {
                                    const x1 = 20 + Math.random() * 60;
                                    const y1 = 20 + Math.random() * 60;
                                    const x2 = 20 + Math.random() * 60;
                                    const y2 = 20 + Math.random() * 60;
                                    return (
                                        <motion.line
                                            key={i}
                                            x1={`${x1}%`}
                                            y1={`${y1}%`}
                                            x2={`${x2}%`}
                                            y2={`${y2}%`}
                                            stroke="#0066FF"
                                            strokeWidth="0.5"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.2 }}
                                            transition={{ duration: 0.6, delay: i * 0.04 }}
                                        />
                                    );
                                })}
                            </svg>
                        </motion.div>
                    )}

                    {/* Stage 2: PRISMHA Text - Apple Style */}
                    {stage === 1 && (
                        <div className="flex flex-col items-center justify-center px-4">
                            {/* PRISMHA Text - Apple Style */}
                            <h1
                                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-thin tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em]"
                                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                            >
                                {["P", "R", "I", "S", "M", "H", "A"].map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: i * 0.08,
                                            duration: 0.4,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        className="inline-block"
                                        style={{
                                            background: "linear-gradient(135deg, #0066FF 0%, #00CCFF 50%, #0066FF 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundSize: "200% 100%",
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h1>

                            {/* Elegant underline */}
                            <motion.div
                                className="mt-4 sm:mt-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200px] sm:w-[300px] md:w-[400px]"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                    )}

                    {/* Stage 3: Liquid Blob Final */}
                    {stage === 2 && (
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.3 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Outer blob */}
                            <motion.div
                                className="absolute"
                                animate={{
                                    scale: [1, 1.3, 1.1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    width: "250px",
                                    height: "250px",
                                    background: "radial-gradient(circle, rgba(0,102,255,0.2) 0%, rgba(0,204,255,0.05) 100%)",
                                    filter: "blur(40px)",
                                    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                                }}
                            />

                            {/* Inner glow */}
                            <motion.div
                                className="absolute"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    background: "radial-gradient(circle, #0066FF 0%, transparent 70%)",
                                    filter: "blur(30px)",
                                }}
                                animate={{
                                    scale: [1, 1.4, 1.2],
                                    opacity: [0.6, 1, 0.7],
                                }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                            />

                            {/* Center dot */}
                            <motion.div
                                className="w-3 h-3 bg-primary rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeInOut",
                                    repeat: Infinity
                                }}
                            />
                        </motion.div>
                    )}

                    {/* Progress bar - always visible */}
                    <motion.div
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 h-0.5 bg-white/5 overflow-hidden rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary via-blue-400 to-primary"
                            initial={{ width: "0%", x: "-100%" }}
                            animate={{ width: "100%", x: "0%" }}
                            transition={{ duration: 2.3, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
