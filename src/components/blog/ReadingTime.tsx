import { Clock } from "lucide-react";

interface ReadingTimeProps {
    minutes: number;
}

const ReadingTime = ({ minutes }: ReadingTimeProps) => {
    return (
        <div className="inline-flex items-center gap-2 text-white/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>{minutes} min lectura</span>
        </div>
    );
};

export default ReadingTime;
