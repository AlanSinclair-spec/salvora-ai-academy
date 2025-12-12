import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "green" | "orange" | "purple";
  href: string;
  lessons: number;
}

const colorStyles = {
  blue: "bg-primary/10 text-primary border-primary/20 hover:border-primary/40",
  green: "bg-salvora-green/10 text-salvora-green border-salvora-green/20 hover:border-salvora-green/40",
  orange: "bg-salvora-orange/10 text-salvora-orange border-salvora-orange/20 hover:border-salvora-orange/40",
  purple: "bg-salvora-purple/10 text-salvora-purple border-salvora-purple/20 hover:border-salvora-purple/40",
};

const iconStyles = {
  blue: "bg-primary text-primary-foreground",
  green: "bg-salvora-green text-primary-foreground",
  orange: "bg-salvora-orange text-primary-foreground",
  purple: "bg-salvora-purple text-primary-foreground",
};

export function CourseCard({ title, description, icon: Icon, color, href, lessons }: CourseCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "block p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        colorStyles[color]
      )}
    >
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", iconStyles[color])}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center text-sm text-muted-foreground">
        <span>{lessons} lecciones</span>
      </div>
    </Link>
  );
}
