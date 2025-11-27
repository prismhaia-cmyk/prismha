import { motion } from "framer-motion";

interface ConnectorLineProps {
    direction?: "horizontal" | "vertical";
    isActive?: boolean;
    className?: string;
}

const ConnectorLine = ({ direction = "horizontal", isActive = false, className = "" }: ConnectorLineProps) => {
    return (
        <div className={`relative ${direction === "horizontal" ? "w-full h-0.5" : "h-full w-0.5"} ${className}`}>
            <svg
                className="w-full h-full"
                viewBox={direction === "horizontal" ? "0 0 100 2" : "0 0 2 100"}
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(0, 102, 255)" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                <motion.line
                    x1="0"
                    y1="1"
                    x2={direction === "horizontal" ? "100" : "1"}
                    y2={direction === "horizontal" ? "1" : "100"}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray={isActive ? "100" : "0"}
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: isActive ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
};

export default ConnectorLine;
