import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedStatProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label: string;
}

const AnimatedStat = ({ value, suffix = "", prefix = "", duration = 2, label }: AnimatedStatProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {prefix}{count}{suffix}
            </div>
            <div className="text-white/70 text-sm md:text-base">{label}</div>
        </motion.div>
    );
};

export default AnimatedStat;
