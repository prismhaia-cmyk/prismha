interface CategoryBadgeProps {
    category: string;
    variant?: "default" | "primary" | "success" | "warning";
}

const CategoryBadge = ({ category, variant = "default" }: CategoryBadgeProps) => {
    const variants = {
        default: "bg-white/10 text-white/80 border-white/20",
        primary: "bg-primary/20 text-primary border-primary/30",
        success: "bg-green-500/20 text-green-400 border-green-500/30",
        warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };

    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} backdrop-blur-sm`}
        >
            {category}
        </span>
    );
};

export default CategoryBadge;
