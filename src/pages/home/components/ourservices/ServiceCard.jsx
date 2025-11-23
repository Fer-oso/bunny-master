import { ArrowRight } from "lucide-react";
import { P } from "../../../../components/paragraph/P";
import { useScrollReveal } from "../../../../hooks/useScrollRevealOptions";

export default function ServiceCard({ service, index, onLeave, onClick }) {
  const Icon = service.icon;

  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
    triggerOnce: true,
  });

  const delay = `${index * 100}ms`;

  return (
    <button
      ref={elementRef}
      onClick={onClick}
      onMouseLeave={onLeave}
      tabIndex={0}
      className={`group relative text-left h-full p-6 border-2 border-[#ffb8b8]  border-l-[#46d5e7]/50 border-b-[#46d5e7]/50 rounded-2xl  hover:border-[#46d5e7]/70 hover:border-l-[#ffb8b8] hover:border-b-[#ffb8b8]
         hover:border-foreground/20  hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer shadow-sm  active:scale-95  ease-out ${
           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
         }`}
      style={{
        animationDelay: isVisible ? `${delay}` : "0ms",
        animationFillMode: "forwards",
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Icon */}
      <div
        className={`${service.gradient} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <P className="md:text-sm leading-relaxed mb-4 flex-1">
        {service.description}
      </P>

      {/* CTA */}
      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
        <span>Explorar servicio</span>
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </button>
  );
}
