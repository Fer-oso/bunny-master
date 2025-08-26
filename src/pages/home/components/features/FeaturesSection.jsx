import { Star, Zap, Shield } from "lucide-react";
import { FeaturesCard } from "./FeaturesCard";
import { Separator } from "../../../../components/separator/Separator";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Diseño Profesional",
      description:
        "Interfaces elegantes y funcionales que reflejan la calidad de tu marca. Cada detalle está cuidadosamente pensado para ofrecer una experiencia excepcional a tus usuarios.",
      icon: Star,
      urlImage: "./img/servicios/1.jpg",
      buttonText: "Explorar más",
      reverse: false,
      gradientClass:
        "bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700",
    },
    {
      title: "Optimización Avanzada",
      description:
        "Rendimiento superior con tiempos de carga optimizados y una experiencia fluida en todos los dispositivos. La eficiencia técnica al servicio de tus objetivos de negocio.",
      icon: Zap,
      urlImage: "./img/servicios/2.jpg",
      buttonText: "Ver detalles",
      reverse: true,
      gradientClass: "bg-gradient-to-br from-pink-500 via-rose-600 to-red-700",
    },
    {
      title: "Confianza Total",
      description:
        "Seguridad robusta con protocolos de vanguardia y sistemas de respaldo confiables. La tranquilidad que necesitas para enfocar tu energía en hacer crecer tu negocio.",
      icon: Shield,
      urlImage: "./img/servicios/3.jpg",
      buttonText: "Conocer más",
      reverse: false,
      gradientClass: "bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Header de la sección */}
      <div className="text-center  lg:mb-0 space-y-1 px-2 md:px-0  ">
        <div className="inline-block">
          <h2 className="text-4xl sm:text-5xl  lg:text-6xl font-bold leading-tight tracking-tight">
            <span
              className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] 
                             bg-clip-text text-transparent"
            >
              Nuestras
            </span>
            <br></br>
            <span
              className="bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/75 to-[#46d5e7]/80 
                             bg-clip-text text-transparent"
            >
              Características
            </span>
          </h2>
        </div>

        <p className="mt-6 text-sm sm:text-base md:text-lg m-auto  text-primary-color font-medium max-w-2xl leading-relaxed ">
          Descubre las características que distinguen nuestra propuesta y cómo
          pueden potenciar el crecimiento de tu organización
        </p>
      </div>

      {/* Línea decorativa */}
      <Separator />

      {/* Grid de características */}
      <div className="space-y-20 lg:space-y-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="opacity translate-y-8 animate-fade-in-up"
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "forwards",
            }}
          >
            <FeaturesCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};
