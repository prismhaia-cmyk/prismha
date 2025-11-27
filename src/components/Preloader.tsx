import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("Initializing System...");

    useEffect(() => {
        const sequence = [
            { text: "Initializing System...", delay: 0 },
            { text: "Loading Neural Networks...", delay: 800 },
            { text: "Connecting to Prismha Core...", delay: 1600 },
            { text: "System Ready", delay: 2400 },
        ];

        let timeouts: ReturnType<typeof setTimeout>[] = [];

        sequence.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => setText(text), delay);
            timeouts.push(timeout);
        });

        const finishTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        timeouts.push(finishTimeout);

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="font-mono text-sm md:text-base tracking-wider">
                        <span className="text-primary mr-2">●</span>
                        {text}
                        <span className="animate-pulse ml-1">_</span>
                    </div>

                    {/* Loading bar */}
                    <div className="mt-8 w-48 h-[1px] bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
