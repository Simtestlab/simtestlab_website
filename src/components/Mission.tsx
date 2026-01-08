import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useViewportSection, useFitToViewport } from "@/hooks/useViewportSection";

const Mission = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: sectionRef, isFullyVisible } = useViewportSection({
    threshold: 0.3,
    rootMargin: '0px 0px -10% 0px'
  });
  const { ref: containerRef, adjustedHeight } = useFitToViewport(600);

  // Combine refs for the main section
  const setSectionRefs = (element: HTMLElement | null) => {
    sectionRef(element);
    containerRef(element);
  };

  return (
  <section 
    ref={setSectionRefs} 
    className="py-12 md:py-16 px-6 bg-gradient-to-b from-background to-muted/30 scroll-mt-20 md:scroll-mt-24 flex flex-col justify-center" 
    id="mission"
    style={{ minHeight: adjustedHeight }}
  >
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 mb-8 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
            Redefining Energy for a 
            <span className="text-primary"> Sustainable Future</span>
          </h2>
        </div>
        
        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The world is transitioning to a cleaner, electrified future. At <span className="text-foreground font-semibold">Simtestlab</span>, our mission is to accelerate this shift.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We provide the critical technologies, advanced systems, and life-cycle services that make battery energy safer, more reliable, and more sustainable.
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-3 text-sm text-primary font-medium">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Engineers, scientists & strategists
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl p-6 flex items-center justify-center transition-all duration-500 group relative overflow-hidden">
              {/* Battery image background */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: "url('images/LFP_Battery.png')",
                }}
              ></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/50 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="text-center space-y-3 relative z-10">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">100%</div>
                <div className="text-sm md:text-base text-white/90 font-medium drop-shadow-lg">Dedicated to unlocking battery potential</div>
              </div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/30 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
