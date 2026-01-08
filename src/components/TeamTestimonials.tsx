import { useState, useEffect, useRef } from "react";
import TeamMember from "./TeamMember";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const TeamTestimonials = () => {
  const teamMembers = [
    {
      name: "Rameshkumar Rajarathanam",
      designation: "CEO | Software/Simulation Specialist",
      description: "Expert in developing Hardware-in-the-Loop (HIL) simulators, with extensive experience in C programming and MATLAB scripting.",
      image: "/team/RameshKumar.png"
    },
    {
      name: "Tiberiu Stanciu",
      designation: "Renewable Energy Specialist",
      description: "A renewable energy consultant assists clients in conducting investigations in order to better understand and direct the installation of renewable energy systems.",
      image: "/team/Tiberiu.png"
    },
    {
      name: "Faouzi AL MOUTAMID",
      designation: "Battery Management Specialist",
      description: "The Energy Specialist is primarily responsible for completing walk through energy efficiency assessments",
      image: "/team/Faouzi.png"
    },
    {
      name: "Fabio Delgado Cabrera",
      designation: "Senior Data Engineer",
      description: "Senior Data Engineer is responsible for creating effective technological solutions for work with big data.",
      image: "/team/Fabio.png"
    },
    {
      name: "Yashar Mohammed",
      designation: "Senior Lead Engineer Connectivity",
      description: "Lead Engineers manage engineering teams, oversee project development, ensure code quality, and collaborate with other departments to meet project goals.",
      image: "/team/Yashar.png"
    },
    {
      name: "Sajendra Prasad Chandran",
      designation: "Human Resource Manager",
      description: "The Human Resources Specialist leads strategic initiatives in talent acquisition, employee engagement, and workforce development to foster a thriving organizational culture.",
      image: "/team/Sajendraprasad.png"
    },
    {
      name: "Prabhakaran Sundaralingam",
      designation: "Hardware Engineer",
      description: "A seasoned Hardware Engineer with over 5 years of experience in electronics product development, focusing on the entire lifecycle from circuit design to design verification testing.",
      image: "/team/Prabhakaran.png"
    },
    {
      name: "Rajavel Rajendiran",
      designation: "SSenior Software Engineer",
      description: "The Senior Software Engineer drives model-based development and testing for Battery Management Systems (BMS).",
      image: "/team/Rajavelu.png"
    },

    {
      name: "Maarimuthu Rajagopal",
      designation: "Embedded Firmware Engineer",
      description: "Experienced in developing and optimizing firmware for microcontrollers with expertise in UART, SPI, CAN, and I2C protocols.",
      image: "/team/Maari.png"
    },
    {
      name: "Akilasekar Kalirajan",
      designation: "System Engineer",
      description: "System Engineer specializing in Model-Based Development (MBD), Battery Management Systems (BMS), and BMS testing chamber design.",
      image: "/team/Akilasekar.png"
    },
    {
      name: "Sabarinathan Mohan",
      designation: "Junior Hardware Engineer",
      description: "Hardware engineer skilled in schematic creation, PCB layout, and design validation. Committed to delivering high-performance and manufacturable board designs.",
      image: "/team/Sabarinathan_Mohan.png"
    },
    {
      name: "Guna Vadivel",
      designation: "Junior Embedded Engineer",
      description: "Embedded engineer building reliable, efficient firmware for next-gen embedded products. Driven by clean code, precision, and continuous learning.",
      image: "/team/Guna_Vadivel.png"
    },
    {
      name: "Guruprasad Haribaskar",
      designation: "Junior Embedded Engineer",
      description: "Embedded Firmware Developer specializing in crafting reliable, high-performance firmware through precise low-level design, development, and debugging.",
      image: "/team/Guruprasad_Haribaskar.png"
    },
    {
      name: "Nallasivam Selvaraj",
      designation: "Software Engineer",
      description: "Experienced Software Engineer with expertise in DevOps, Python, C++ and software development, specializing in application development and user interface design.",
      image: "/team/Nallasivam.png"
    },
        {
      name: "Murali Dharan",
      designation: "Software Tester",
      description: "Drives quality assurance efforts by leveraging cutting-edge tools and methodologies, including Cucumber, to ensure the delivery of robust and reliable software solutions.",
      image: "/team/Muralidharan.png"
    },
    {
      name: "Hari Ramar",
      designation: "Web Developer",
      description: "Specializes in building scalable and efficient web applications using a diverse technology stack, including React, Node.js, Express, PostgreSQL, Django, and Flask.",
      image: "/team/Hari.png"
    },
    {
      name: "Agilan Arulchelvam",
      designation: "Machine Learning Engineer",
      description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. ",
      image: "/team/Agilan.png"
    },
    {
      name: "Indrajeeth Yogeshwararaja",
      designation: "Backend Develper",
      description: "Specializes in Backend techonologies and building efficient backend systems including, FastAPI, Django and in deployments.",
      image: "/team/Indrajeeth_Yogeshwararaja.png"
    },
    {
      name: "Divya Rosy",
      designation: "Software Develper",
      description: "Specializes in React development, crafting dynamic and user-friendly web interfaces that deliver exceptional user experiences.",
      image: "/team/Divya.png"
    },
    {
      name: "Saran Muthumanickam",
      designation: "Research Engineer",
      description: "Specializes in bioinformatics and genetics, driving innovation at the intersection of computational science and biology.",
      image: "/team/Saran.png"
    },
    {
      name: "Giri Velavan Nijalingappan",
      designation: "Junior Embedded Engineer",
      description: "Embedded Software Engineer specializing in developing and optimizing software for microcontrollers and embedded systems.",
      image: "/team/Girivelavan.png"
    },
    {
      name: "Vinay Kumar S Lokare",
      designation: "Senior Software Engineer",
      description: "Embedded Software Engineer with expertise in UART, SPI, CAN, and I2C protocols, specializing in developing and optimizing software for microcontrollers.",
      image: "/team/Vinay.png"
    }
  ];

  // Create infinite loop by duplicating the array
  const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers];
  const startIndex = teamMembers.length; // Start from the middle set

  // Initialize with middle set to allow infinite scrolling in both directions
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isInView, setIsInView] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer to detect if component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Add some margin to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // Reset to beginning of middle set when reaching end
      if (newIndex >= startIndex + teamMembers.length) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setCurrentIndex(startIndex);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 700ms cubic-bezier(0.25,0.1,0.25,1)';
              }
            }, 50);
          }
        }, 700);
      }
      return newIndex;
    });

    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // Reset to end of middle set when reaching beginning
      if (newIndex < startIndex) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setCurrentIndex(startIndex + teamMembers.length - 1);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 700ms cubic-bezier(0.25,0.1,0.25,1)';
              }
            }, 50);
          }
        }, 700);
      }
      return newIndex;
    });

    setTimeout(() => setIsAnimating(false), 700);
  };

  // Get the actual member index for dot indicators
  const getActualIndex = () => {
    return (currentIndex - startIndex + teamMembers.length) % teamMembers.length;
  };

  // Auto-play functionality - only when component is in view
  useEffect(() => {
    if (!isInView || !isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isInView, isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-background relative overflow-hidden" id="team">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Our Team
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance leading-tight">
            Meet Our <span className="text-primary relative">
              Expert Team
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/20 rounded-full"></div>
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-6">
            A diverse, international team of specialists driving innovation in battery technology
          </p>

          {/* Enhanced Team Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-md mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-3 md:p-4 text-center hover:bg-card/80 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-primary mb-1">{teamMembers.length}</div>
              <div className="text-xs text-muted-foreground">Members</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-3 md:p-4 text-center hover:bg-card/80 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-xs text-muted-foreground">Specializations</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-3 md:p-4 text-center hover:bg-card/80 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-4 md:p-6 shadow-lg">
          {/* Carousel Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-xs md:text-sm text-muted-foreground font-medium">Team Gallery</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleAutoPlay}
              className="text-muted-foreground hover:text-foreground h-8 w-8 p-0"
            >
              {isAutoPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            </Button>
          </div>

          {/* Main carousel container */}
          <div className="overflow-hidden rounded-lg relative">
            {/* Gradient fade effects on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-card/30 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-card/30 to-transparent z-10 pointer-events-none"></div>

            <div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {infiniteMembers.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-3 flex items-stretch transition-all duration-300"
                  style={{
                    transform: `translateZ(0)`, // Enable hardware acceleration
                  }}
                >
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex justify-between items-center mt-4 md:mt-6">
            {/* Progress Bar */}
            <div className="flex-1 mx-4 md:mx-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Member {getActualIndex() + 1}</span>
                <span>of {teamMembers.length}</span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-0.5 md:h-1">
                <div
                  className="bg-primary h-0.5 md:h-1 rounded-full transition-all duration-300"
                  style={{ width: `${((getActualIndex() + 1) / teamMembers.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={isAnimating}
                className="rounded-full w-8 h-8 md:w-9 md:h-9 p-0 border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={isAnimating}
                className="rounded-full w-8 h-8 md:w-9 md:h-9 p-0 border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1 mt-4">
            {teamMembers.slice(0, Math.min(teamMembers.length, 10)).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(startIndex + index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-1 rounded-full transition-all duration-300 ${index === getActualIndex()
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-1'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-grid-pattern {
            background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0);
            background-size: 24px 24px;
          }
        `
      }} />
    </section>
  );
};

export default TeamTestimonials;