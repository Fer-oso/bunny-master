
import { P } from "../../../../components/paragraph/P";
import { useScrollReveal } from "../../../../hooks/useScrollRevealOptions";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "La consultoría estratégica transformó completamente nuestros procesos operativos. Logramos reducir costos en un 30% mientras mejorábamos la eficiencia.",
    author: "María González",
    position: "Directora de Operaciones",
    company: "TechCorp International",
  },
  {
    quote:
      "El proceso de certificación ISO fue impecable gracias a su guía experta. Obtuvimos la certificación en tiempo récord sin comprometer la calidad.",
    author: "Carlos Mendoza",
    position: "CEO",
    company: "Industrias del Norte",
  },
  {
    quote:
      "Su enfoque en transformación digital nos permitió modernizar sistemas críticos sin interrumpir operaciones. Un trabajo excepcional.",
    author: "Ana Ruiz",
    position: "CTO",
    company: "FinanceGroup",
  },
];

export default function Testimonials() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}>
      <div className="container  md:pt-20">
        {/* Section Header */}
        <div
          className={` mb-10 mx-auto text-center transition-all duration-800 ease-out ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4  bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent animate-in slide-in-from-left-8 duration-700">
            Lo que dicen 
       </h2>
       <span> </span>
       <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4 bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent animate-in slide-in-from-right-8 duration-700 delay-200">
       nuestros clientes
          </h2>
          
          <P className="text-muted-foreground leading-relaxed m-auto py-3 ">
            La confianza de nuestros clientes es nuestro mayor logro. Conozca
            sus experiencias trabajando con nosotros.
          </P>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


