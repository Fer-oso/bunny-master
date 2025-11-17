import { Container } from "../../../../routes/layout/Container";
import { BackgroundDecoration } from "../../../../components/background/BackgroundDecoration";

import { HeroSlider } from "../../../servicios/components/HeroSlider";
import { StatsSection } from "../../../servicios/components/StatsSection";
import { CtaSection } from "../../../servicios/components/CtaSection";
import { services } from "../../../../utils/data/services";
import ServicesGrid from "./ServicesGrid";

import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

const ServicesSection = () => {
  const services1 = [
    {
      id: 1,
      title: "Sistema de Turnos",
      description:
        "Gestión inteligente de turnos y citas con interfaz moderna y funcionalidades avanzadas.",
      image: "/img/servicios/sistematurnos.webp",
      link: "https://sistema-turnos-bunny.netlify.app/",
      category: "Gestión",
    },
    {
      id: 2,
      title: "Sistema CRM",
      description:
        "Plataforma completa para la gestión de tickets de soporte con seguimiento en tiempo real.",
      image: "/img/servicios/sistemacrm.webp",
      link: "https://sistema-crm-bunny.netlify.app/",
      category: "Soporte",
    },
    {
      id: 3,
      title: "Sistema de tickets",
      description: "sistema de tickets para gestion de proyectos",
      image: "/img/servicios/sistematickets.png",
      link: "https://sistema-tickets-bunny.netlify.app/",
      category: "Analytics",
    },
  ];

  return (
    <Container>
      <div id="services">
    

        <HeroSlider />

        <div className="min-h-screen md:mt-17 lg:py-0 py-5 ">
          <ServicesGrid services={services} />
        </div>

        <StatsSection />
        <Testimonials />
       
        <ContactForm/>
      </div>
    </Container>
  );
};

export default ServicesSection;
