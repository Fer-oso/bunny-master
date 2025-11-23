import { Quote } from "lucide-react";
import { useScrollReveal } from "../../../../hooks/useScrollRevealOptions";
import { P } from "../../../../components/paragraph/P";

export default function TestimonialCard({ testimonial, index }) {
    const { elementRef, isVisible } = useScrollReveal({
      threshold: 0.2,
    });
  
    return (
      <article
        ref={elementRef}
        className={`group relative  border  border-[#ffb8b8]/70 border-l-[#46d5e7]/50 border-b-[#46d5e7]/50 rounded-xl p-8
                   hover:border-foreground/20 hover:shadow-lg 
                   transition-all duration-300 ease-out 
                   ${
                     isVisible
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-8"
                   }`}
        style={{
          transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
        }}
      >
        {/* Quote Icon */}
        <div className="">
          <div className="inline-flex  bg-foreground/5 rounded-lg">
            <Quote className="w-5 h-5 text-foreground/60" strokeWidth={2} />
          </div>
        </div>
  
        {/* Testimonial Quote */}
        <blockquote className="mb-5">
          <P className="text-foreground/80 leading-relaxed md:text-sm">
            "{testimonial.quote}"
          </P>
        </blockquote>
  
        {/* Author Info */}
        <footer className="relative border-t border-border pt-6">
          <div className="space-y-1">
            <div className="font-semibold text-foreground tracking-tight">
              {testimonial.author}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.position}
            </div>
            <div className="text-sm text-muted-foreground/70">
              {testimonial.company}
            </div>
          </div>
  
          {/* Hover Accent Line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 mt-2 h-[2px] bg-black
                       w-0 group-hover:w-15 transition-all duration-300 ease-out"
          />
        </footer>
  
        {/* Corner Accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-[#ffb8b8]/50 via-[#ffb8b8]/30 to-[#46d5e7]/50 rounded-tr-lg rounded-bl-full
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </article>
    );
  }