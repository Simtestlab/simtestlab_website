const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group transition-transform hover:scale-105">
          <img
            src="/logo.png"
            alt="Simtestlab logo"
            className="h-8 w-8 object-contain transition-transform group-hover:rotate-12"
            aria-hidden={false}
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Simtestlab
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#solutions" 
            className="text-sm font-medium hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
          >
            Solutions
          </a>
          <a 
            href="#advantages" 
            className="text-sm font-medium hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
          >
            Why Us
          </a>
          <a 
            href="#team" 
            className="text-sm font-medium hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
          >
            Team
          </a>
          <a 
            href="#contact" 
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;