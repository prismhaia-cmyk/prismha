import { motion } from "framer-motion";

interface InteractiveQuoteProps {
    children: React.ReactNode;
    author?: string;
}

const InteractiveQuote = ({ children, author }: InteractiveQuoteProps) => {
    return (
        <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative my-12 pl-8 pr-6 py-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-2xl"
        >
            <div className="absolute top-4 left-4 text-6xl text-primary/20 font-serif">"</div>
            <div className="relative z-10 text-lg md:text-xl text-white/90 italic leading-relaxed">
                {children}
            </div>
            {author && (
                <div className="mt-4 text-sm text-white/60 font-medium">— {author}</div>
            )}
        </motion.blockquote>
    );
};

export default InteractiveQuote;
