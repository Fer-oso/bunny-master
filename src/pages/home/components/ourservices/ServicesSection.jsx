import React from 'react';

import { ArrowRight } from 'lucide-react';

import { Carousel } from './Carousel';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Sistema de Turnos",
      description: "Gestión inteligente de turnos y citas con interfaz moderna y funcionalidades avanzadas.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://sistema-turnos-bunny.netlify.app/",
      category: "Gestión"
    },
    {
      id: 2,
      title: "Sistema de Tickets",
      description: "Plataforma completa para la gestión de tickets de soporte con seguimiento en tiempo real.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://sistema-tickets-bunny.netlify.app/",
      category: "Soporte"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Panel de control con métricas avanzadas y visualización de datos en tiempo real.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://sistema-turnos-bunny.netlify.app/",
      category: "Analytics"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Solución completa de comercio electrónico con gestión de inventario y pagos.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://sistema-turnos-bunny.netlify.app/",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "CRM Avanzado",
      description: "Sistema de gestión de relaciones con clientes con automatización inteligente.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://sistema-turnos-bunny.netlify.app/",
      category: "CRM"
    }
  ];

  return (
    <section className="relative min-h-screen py-10  ">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Layout principal: texto izquierda, slider derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          
          {/* Contenido de texto - Lado izquierdo */}
          <div className="px-2 lg:px-0">
            <div className="space-y-6 ">
              <div className="inline-block ">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#ff66c4] via-[#46d5e7] to-[#ff66c4] 
                             bg-clip-text text-transparent">
                Nuestros servicios
              </span>
              </h2>
              </div>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Descubre las soluciones que distinguen nuestra propuesta y cómo pueden 
                potenciar el crecimiento de tu organización con tecnología de vanguardia.
              </p>
              
              {/* Línea decorativa */}
              <div className="flex justify-start ">
                <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-amber-700 rounded-full" />
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-8 mt-10 ">
              <div className="">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#955c52] to-[#955c52] bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-slate-600 font-medium">Proyectos Completados</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#955c52] to-[#955c52] bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-slate-600 font-medium">Satisfacción del Cliente</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="">
              <button className=" mt-10 group/btn relative inline-flex items-center gap-3 
                         bg-gradient-to-r from-[#ff66c4] to-[#46d5e7] 
                         hover:from-[#46d5e7] hover:to-[#ff66c4]
                         text-black/90 font-semibold px-8 py-4 rounded-xl
                               shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35
                               transition-all duration-300 ease-out
                               hover:scale-[1.02] active:scale-[0.98]
                               focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2">
                <Link className="relative z-10 text-white" to='/servicios'>Ver Todos los Servicios</Link>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                               opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
              </button>
            </div>
          </div>

                {/* Slider vertical - Lado derecho */}

                <Carousel services={services}/>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;