import AdvantageCard from "./AdvantageCard";
import { 
  Layers3, 
  Shield, 
  Zap, 
  Recycle 
} from "lucide-react";
import { useViewportSection, useFitToViewport } from "@/hooks/useViewportSection";

const Advantages = () => {
  // Use package-based viewport management
  const { ref: viewportRef } = useViewportSection({
    threshold: 0.3,
    rootMargin: '0px 0px -10% 0px'
  });
  const { ref: containerRef, adjustedHeight } = useFitToViewport(500);

  // Combine refs
  const setCombinedRefs = (element: HTMLElement | null) => {
    viewportRef(element);
    containerRef(element);
  };

  const advantages = [
    {
      title: "End-to-End Expertise",
      description: "From the semiconductor in the BMS to the grid-scale BESS and its end-of-life recycling, we manage the entire technology stack. This holistic view reduces complexity and creates unparalleled value.",
      icon: Layers3
    },
    {
      title: "Uncompromising Safety & Reliability",
      description: "Safety is at the center of our design philosophy. Our systems are built on a foundation of rigorous testing and certified compliance, giving you and your customers total peace of mind.",
      icon: Shield
    },
    {
      title: "Bankable, Future-Proof Technology",
      description: "We invest heavily in R&D to stay ahead of the curve. Our modular, scalable platforms are designed to adapt to the next generation of battery chemistries and energy demands.",
      icon: Zap
    },
    {
      title: "A Commitment to Sustainability",
      description: "We believe the energy transition must be sustainable. Our focus on second-life applications and materials recycling ensures we are not just solving today's energy problems, but also protecting tomorrow's resources.",
      icon: Recycle
    }
  ];

  return (
    <section 
      ref={setCombinedRefs}
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-background flex flex-col justify-center"
      style={{ minHeight: adjustedHeight }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-muted rounded-full text-xs md:text-sm font-medium mb-3">
            Why Choose Us
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 text-balance leading-tight">
            The <span className="text-primary">Simtestlab</span> Advantage
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We deliver comprehensive battery technology solutions that power the energy transition with unmatched expertise and reliability.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index} 
              {...advantage}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
