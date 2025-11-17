import { ArrowRight } from "lucide-react";
import { P } from "../../../../components/paragraph/P";
import { useScrollReveal } from "../../../../hooks/useScrollRevealOptions";

export default function ServiceCard({service, index, onLeave, onClick}) {

  const IconComponent = service.icon;

  const { elementRef, isVisible } = useScrollReveal({threshold: 0.1, rootMargin: '0px 0px -80px 0px', triggerOnce: true,});

  const animationDelay = `${index * 100}ms`;

  return (
    <article
    ref={elementRef}
    style={{
 
      
      transitionDelay: isVisible ? animationDelay : '0ms',
    }}
      className={`group relative  rounded-xl lg:p-8 shadow-sm
                   hover:border-foreground/20 hover:shadow-lg 
                   transition-all duration-500 ease-out cursor-pointer
       ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
    `}
      onMouseLeave={onLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
 
      {/* Content container */}
      <div className="relative p-8 flex flex-col h-full">
        {/* Icon section */}
        <div className="mb-0">
          <div
            className={`inline-flex p-4 ${service.accentColor} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}
          >
            <IconComponent
              className="w-7 h-7 text-foreground text-white"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-gray-700 mb-3 
                   tracking-tight leading-tight"
        >
          {service.title}
        </h3>

        {/* Description */}
        <P className="mb-6">{service.description}</P>

        {/* Features list */}
        <ul className="space-y-2 mb-8 flex-grow">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 ${service.accentColor} rounded-full`}
              />
              <span className="text-sm text-foreground/70 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-medium text-foreground
                   transition-all duration-300 mt-auto"
        >
          <span>Ver más detalles</span>
          <ArrowRight
            className="w-4 h-4 
                   
                     "
            strokeWidth={2}
          />
        </div>
      </div>
    </article>
  );
}
