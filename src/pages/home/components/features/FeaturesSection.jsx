import { Star, Zap, Shield } from "lucide-react";
import { FeaturesCard } from "./FeaturesCard";
import { Separator } from "../../../../components/separator/Separator";
import { P } from "../../../../components/paragraph/P";
import { Container } from "../../../../routes/layout/Container";
import { useState } from "react";
import { FeaturesModalInformation } from "./FeaturesModalInformation";

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
      headerColor:"bg-gradient-to-r from-[#ffb8b8]/50 via-[#ffb8b8]/50 to-[#ffb8b8]/50",
      informativeColor: "bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8]",
    },
    {
      title: "Optimización Avanzada",
      description:
        "Rendimiento superior con tiempos de carga optimizados y una experiencia fluida en todos los dispositivos. La eficiencia técnica al servicio de tus objetivos de negocio.",
      icon: Zap,
      urlImage: "./img/servicios/2.jpg",
      buttonText: "Ver detalles",
      reverse: true,
      headerColor: "bg-gradient-to-br from-[#46d5e7]/70 via-[#46d5e7]/70 to-[#46d5e7]/70",
      informativeColor: "bg-gradient-to-r from-[#46d5e7] via-[#46d5e7] to-[#46d5e7]",
    },
    {
      title: "Confianza Total",
      description:
        "Seguridad robusta con protocolos de vanguardia y sistemas de respaldo confiables. La tranquilidad que necesitas para enfocar tu energía en hacer crecer tu negocio.",
      icon: Shield,
      urlImage: "./img/servicios/3.jpg",
      buttonText: "Conocer más",
      reverse: false,
      headerColor:"bg-gradient-to-r from-[#ffb8b8]/50 via-[#ffb8b8]/50 to-[#ffb8b8]/50",
      informativeColor: "bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8]",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFeature(null), 200);
  };

  return (
    <Container className={"flex-col min-h-screen "}>
      {/* Header de la sección */}
      <div className="lg:mb-0 space-y-1 px-2 md:px-0  ">
        <div className="inline-block">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-tight font-bold">
            <span
              className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] 
                             bg-clip-text text-transparent"
            >
              Nuestras
            </span>
            <br></br>
            <span
              className="bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 
                             bg-clip-text text-transparent"
            >
              Características
            </span>
          </h2>
        </div>

        <P className="mt-6 mx-auto ">
          Descubre las características que distinguen nuestra propuesta y cómo
          pueden potenciar el crecimiento de tu organización
        </P>
      </div>

      {/* Línea decorativa */}
      <Separator className={"p-8"}/>

      {/* Grid de características */}
      <div className=" md:space-y-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="opacity animate-fade-in-up"
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "forwards",
            }}
          >
            <FeaturesCard feature={feature} openModal={openModal} />
          </div>
        ))}
      </div>

    
      <Separator className={"m-auto p-8"} />
      <FeaturesModalInformation feature={selectedFeature} isOpen={isModalOpen} onClose={closeModal}/>
    </Container>
  );
};
