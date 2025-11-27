import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    className?: string;
    showCursor?: boolean;
}

const TypewriterText = ({
    text,
    speed = 50,
    onComplete,
    className = "",
    showCursor = true
}: TypewriterTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, speed, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 bg-primary ml-1"
                />
            )}
        </span>
    );
};

export default TypewriterText;
