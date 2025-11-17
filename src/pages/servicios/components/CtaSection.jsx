import { ArrowRight } from "lucide-react";
import { P } from "../../../components/paragraph/P";

export const CtaSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray mb-6">
        ¿Listo para empezar?
      </h2>
      <P className="text-xl  mb-8 max-w-2xl mx-auto">
        Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a
        alcanzar tus objetivos digitales.
      </P>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
          <span>Consulta Gratuita</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <button className="border-2 border-white/20 text-black px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
          Ver Portfolio
        </button>
      </div>
    </div>
  );
};
