import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPanelProps {
    children: ReactNode;
    isActive?: boolean;
    isCompleted?: boolean;
    className?: string;
}

const AnimatedPanel = ({ children, isActive = false, isCompleted = false, className = "" }: AnimatedPanelProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
                opacity: 1,
                scale: 1,
                borderColor: isActive ? "rgba(0, 102, 255, 0.3)" : isCompleted ? "rgba(34, 197, 94, 0.5)" : "rgba(255, 255, 255, 0.1)"
            }}
            transition={{ duration: 0.3 }}
            className={`
        relative rounded-2xl p-6 backdrop-blur-md border transition-all duration-300
        ${isActive ? "bg-white/10 border-primary/30 shadow-lg shadow-primary/20 ring-1 ring-primary/20" : ""}
        ${isCompleted ? "bg-green-500/5 border-green-500/30 shadow-lg shadow-green-500/10" : ""}
        ${!isActive && !isCompleted ? "bg-white/5 border-white/10" : ""}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPanel;
