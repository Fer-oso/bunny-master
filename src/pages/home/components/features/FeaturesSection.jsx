import React from 'react';
import { Star, Zap, Shield } from 'lucide-react';
import { FeaturesCard } from './FeaturesCard';

export const FeaturesSection = () => {
    
  const features = [
    {
      title: "Diseño Profesional",
      description: "Interfaces elegantes y funcionales que reflejan la calidad de tu marca. Cada detalle está cuidadosamente pensado para ofrecer una experiencia excepcional a tus usuarios.",
      icon: Star,
      urlImage:"./img/servicios/1.jpg",
      buttonText: "Explorar más",
      reverse: false,
      gradientClass: "bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700"
    },
    {
      title: "Optimización Avanzada",
      description: "Rendimiento superior con tiempos de carga optimizados y una experiencia fluida en todos los dispositivos. La eficiencia técnica al servicio de tus objetivos de negocio.",
      icon: Zap,
      urlImage:"./img/servicios/2.jpg",
      buttonText: "Ver detalles",
      reverse: true,
      gradientClass: "bg-gradient-to-br from-pink-500 via-rose-600 to-red-700"
    },
    {
      title: "Confianza Total",
      description: "Seguridad robusta con protocolos de vanguardia y sistemas de respaldo confiables. La tranquilidad que necesitas para enfocar tu energía en hacer crecer tu negocio.",
      icon: Shield,
      urlImage:"./img/servicios/3.jpg",
      buttonText: "Conocer más",
      reverse: false,
      gradientClass: "bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700"
    }
  ];

  return (
    <section className="relative min-h-screen lg:py-0 lg:-mt-5 ">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header de la sección */}
        <div className="text-center  lg:mb-0 space-y-6">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#46d5e7] via-[#46d5e7] to-[#955c52] 
                             bg-clip-text text-transparent">
                Nuestras Características
              </span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Descubre las características que distinguen nuestra propuesta y cómo pueden 
            potenciar el crecimiento de tu organización
          </p>
          
          {/* Línea decorativa */}
          <div className="flex justify-center pt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-amber-700 rounded-full" />
          </div>
        </div>

        {/* Grid de características */}
        <div className="space-y-20 lg:space-y-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity translate-y-8 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
            <FeaturesCard {...feature}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

