import React from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import { Carousel } from "./Carousel";
import { Button } from "../../../../components/button/Button";
import { button } from "../../../../style/buttonPrincipal";
import { Separator } from "../../../../components/separator/Separator";
import { BackgroundDecoration } from "../../../../components/background/BackgroundDecoration";
import { Container } from "../../../../routes/layout/Container";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Sistema de Turnos",
      description:
        "Gestión inteligente de turnos y citas con interfaz moderna y funcionalidades avanzadas.",
      image:
      "/img/servicios/sistematurnos.webp",
      link: "https://sistema-turnos-bunny.netlify.app/",
      category: "Gestión",
    },
    {
      id: 2,
      title: "Sistema CRM",
      description:
        "Plataforma completa para la gestión de tickets de soporte con seguimiento en tiempo real.",
      image:
        "/img/servicios/sistemacrm.webp",
      link: "https://sistema-crm-bunny.netlify.app/",
      category: "Soporte",
    },
    {
      id: 3,
      title: "Sistema de tickets",
      description:
        "sistema de tickets para gestion de proyectos",
      image:
      "/img/servicios/sistematickets.png",
      link: "https://sistema-tickets-bunny.netlify.app/",
      category: "Analytics",
    },
 
  ];

  return (
    <Container className="relative">
      {/* Elementos decorativos de fondo */}
      <BackgroundDecoration/>

      <div className=" w-full ">
        {/* Layout principal: texto izquierda, slider derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Contenido de texto - Lado izquierdo */}
          <div className="">
            <div className="space-y-6 ">
              <div className="inline-block ">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-tight font-bold">
              <span
              className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] 
                             bg-clip-text text-transparent"
            >
              Nuestros
            </span>
            <br></br>
            <span
              className="bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/75 to-[#46d5e7]/80 
                             bg-clip-text text-transparent"
            >
              servicios
            </span>
                </h2>
              </div>

              <p className=" text-sm sm:text-base md:text-lg text-primary-color font-medium max-w-2xl leading-relaxed ">
                Descubre las soluciones que distinguen nuestra propuesta y cómo
                pueden potenciar el crecimiento de tu organización con
                tecnología de vanguardia.
              </p>

              {/* Línea decorativa */}
              <Separator className={"p-0 flex justify-center lg:justify-start "}/>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-8 mt-10 ">
              <div className="">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#955c52] to-[#955c52] bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-slate-600 font-medium">
                  Proyectos Completados
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#955c52] to-[#955c52] bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-slate-600 font-medium">
                  Satisfacción del Cliente
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="py-10 text-black">
              <Link className="relative z-10 text-black" to="/servicios">
                <Button className={`${button.generalbutton} 
                        relative overflow-hidden
                        group/btn
                        transform transition-all duration-300 ease-out
                        hover:scale-105 active:scale-95
                        text-sm sm:text-base
                        px-4 sm:px-6 md:px-8
                        py-2 sm:py-3
                        shadow-lg hover:shadow-xl`}>
                  Ver Todos los Servicios
                  <ArrowRight className="w-4 h-4 ransition-transform duration-300 group-hover:translate-x-1" />
                  {/* Efecto de brillo */}
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                               opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* Slider vertical - Lado derecho */}

          <Carousel services={services} />
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
