import { Shield, Star, TrendingUp, Zap } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollRevealOptions";
import { P } from "../../../components/paragraph/P";

export const StatsSection = () => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px',
    triggerOnce: true,
  });

  const stats = [
    { number: "150+", label: "Proyectos Completados", icon: TrendingUp },
    { number: "98%", label: "Clientes Satisfechos", icon: Star },
    { number: "5+", label: "Años de Experiencia", icon: Shield },
    { number: "24/7", label: "Soporte Técnico", icon: Zap },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div 
        ref={elementRef}
        className={`
          grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12
          transition-all duration-800 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const animationDelay = `${index * 100}ms`;

          return (
            <div
              key={index}
              style={{
                transitionDelay: isVisible ? animationDelay : '0ms',
              }}
              className={`
                group relative text-center
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              {/* Icon container */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    relative
                    w-16 h-16 
                    bg-foreground/5
                    rounded-xl
                    flex items-center justify-center
                    group-hover:bg-foreground/8
                    transition-all duration-300
                  "
                >
                  <IconComponent 
                    className="w-7 h-7 text-foreground" 
                    strokeWidth={1.5}
                  />
                  
                  {/* Subtle corner accent */}
                  <div 
                    className="
                      absolute -top-1 -right-1 
                      w-3 h-3 
                      bg-foreground 
                      rounded-full 
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />
                </div>
              </div>

              {/* Number */}
              <p 
                className="
                  text-5xl md:text-6xl 
                  font-bold 
                  text-foreground 
                  mb-3
                  tracking-tighter
                  leading-none
                "
              >
                {stat.number}
              </p>

              {/* Label */}
              <P 
                className="
                  transition-colors duration-300
                "
              >
                {stat.label}
              </P>

              {/* Hover indicator line */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-12 h-0.5 
                  bg-foreground 
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300
                  mt-4
                "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
