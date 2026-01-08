interface SolutionCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const SolutionCard = ({ number, title, description, features }: SolutionCardProps) => {
  return (
    <div className="group border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500 bg-background hover:bg-background/80 backdrop-blur-sm">
      <div className="flex items-start gap-6 mb-6">
        <span className="text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">{number}</span>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 group/item">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionCard;
