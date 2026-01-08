interface TeamMemberProps {
  name: string;
  designation: string;
  description: string;
  image: string;
}

const TeamMember = ({ name, designation, description, image }: TeamMemberProps) => {
  return (
    <div className="group flex flex-col items-center justify-center text-center p-4 bg-background rounded-lg border border-border w-full h-[380px] md:h-[400px] mx-auto relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] shadow-md hover:shadow-xl">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content wrapper with subtle animation */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-[-2px]">
        <div className="mb-3 flex-shrink-0 relative">
          {/* Image with enhanced styling and animation */}
          <div className="relative">
            <img
              src={image}
              alt={`${name} - ${designation}`}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-3 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110"
            />
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
          
          {/* Animated ring around image */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out"></div>
        </div>
        
        <h3 className="text-base font-bold mb-1 flex-shrink-0 line-clamp-2 min-h-[2.5rem] flex items-center transition-colors duration-300 group-hover:text-primary">{name}</h3>
        
        <p className="text-primary font-medium mb-2 flex-shrink-0 text-xs line-clamp-2 min-h-[2rem] flex items-center transition-all duration-300 group-hover:text-primary/80">{designation}</p>
        
        <p className="text-muted-foreground leading-tight text-xs overflow-hidden line-clamp-4 max-h-[3.5rem] transition-colors duration-300 group-hover:text-foreground/80">
          {description}
        </p>
      </div>
      
      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Professional corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 transform rotate-45 translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </div>
  );
};

export default TeamMember;