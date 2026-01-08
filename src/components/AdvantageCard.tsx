import { LucideIcon } from "lucide-react";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const AdvantageCard = ({ title, description, icon: Icon, index }: AdvantageCardProps) => {
  return (
    <div className="group relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-border/50 bg-card/30 
                    hover:bg-card/60 hover:border-border transition-all duration-500 hover:shadow-lg">
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 
                      bg-primary/5 rounded-lg md:rounded-xl mb-4 md:mb-6 group-hover:bg-primary/10 
                      transition-colors duration-300">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
      </div>

      {/* Number Badge */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 w-6 h-6 md:w-8 md:h-8 bg-muted rounded-full 
                      flex items-center justify-center">
        <span className="text-xs md:text-sm font-semibold text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight group-hover:text-primary 
                       transition-colors duration-300 pr-8">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Subtle decoration */}
      <div className="absolute bottom-0 left-4 md:left-6 right-4 md:right-6 h-px bg-gradient-to-r 
                      from-transparent via-border/30 to-transparent 
                      group-hover:via-primary/20 transition-colors duration-500" />
    </div>
  );
};

export default AdvantageCard;
