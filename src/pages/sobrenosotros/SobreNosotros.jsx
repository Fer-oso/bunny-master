import {
  Building2,
  Award,
  TrendingUp,
  Users,
  Target,
  Mail,
  Linkedin,
} from "lucide-react";

import { useScrollReveal } from "../../hooks/useScrollRevealOptions";
import { P } from "../../components/paragraph/P";
import { Separator } from "../../components/separator/Separator";
import { Section } from "../../components/section/Section";
import { useState } from "react";
import { TeamModal } from "./components/TeamModal";
import { team } from "../../utils/data/team";

const timelineEvents = [
  {
    year: "2020",
    title: "Fundación",
    description:
      "Bunny Creations World nace con la visión de transformar la manera en que las empresas abordan sus desafíos digitales y estratégicos.",
  },
  {
    year: "2021",
    title: "Expansión de Servicios",
    description:
      "Incorporación de servicios de auditoría y compliance, consolidando nuestra oferta integral para el sector corporativo.",
  },
  {
    year: "2022",
    title: "Certificación ISO",
    description:
      "Obtención de certificaciones internacionales que validan nuestros estándares de calidad y procesos operativos.",
  },
  {
    year: "2023",
    title: "150+ Proyectos",
    description:
      "Alcanzamos el hito de 150 proyectos completados exitosamente, consolidando nuestra presencia en el mercado regional.",
  },
  {
    year: "2024",
    title: "Innovación Continua",
    description:
      "Inversión en tecnologías emergentes y metodologías ágiles para ofrecer soluciones de vanguardia a nuestros clientes.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excelencia",
    description:
      "Compromiso inquebrantable con la calidad y la superación de expectativas en cada proyecto.",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    accentColor: "bg-blue-500",
  },

  {
    icon: Building2,
    title: "Integridad",
    description:
      "Transparencia y ética profesional como pilares fundamentales de todas nuestras operaciones.",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    accentColor: "bg-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Innovación",
    description:
      "Búsqueda constante de soluciones vanguardistas que generen valor tangible y sostenible.",
    gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    accentColor: "bg-yellow-500",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Trabajo en equipo y asociación estratégica con nuestros clientes para alcanzar objetivos comunes.",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-700",
    accentColor: "bg-green-500",
  },
];

const ValueCard = ({ value, index }) => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true,
  });

  const IconComponent = value.icon;

  return (
    <div
      ref={elementRef}
      className={`border-2 rounded-lg p-8  border-[#ffb8b8] border-l-[#46d5e7]/50 border-b-[#46d5e7]/50
                 hover:shadow-lg transition-all duration-700 ease-out
                 group relative overflow-hidden
                 ${
                   isVisible
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-8"
                 }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 border-t-2 border-r-2 border-t-[#46d5e7] border-r-[#46d5e7] w-full h-full" />
      </div>

      <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 border-l-3 border-b-3 border-l-[#ffb8b8] border-b-[#ffb8b8] w-full h-full" />
      </div>

      <div
        className={`${value.gradient} p-2 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
        {value.title}
      </h3>
      <P className="md:text-sm">{value.description}</P>
    </div>
  );
};

const TimelineItem = ({ event, index }) => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.3,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={elementRef}
      className={`relative transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : isEven
          ? "opacity-0 -translate-x-8"
          : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-8">
        {/* Year badge */}
        <div
          className={`${
            isEven ? "order-1" : "order-2"
          } flex-shrink-0 w-24 text-center`}
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 
                       bg-foreground text-background rounded-full 
                       text-xl font-bold tracking-tight"
          >
            {event.year}
          </div>
        </div>

        {/* Timeline line (visible on desktop) */}
        <div className="hidden md:block order-2 relative">
          <div className="w-px h-full bg-border absolute left-1/2 -translate-x-1/2" />
          <div
            className="w-3 h-3 bg-foreground rounded-full 
                       border-4 border-background
                       relative z-10"
          />
        </div>

        {/* Content card */}
        <div
          className={`${
            isEven ? "order-3 md:text-left" : "order-1 md:text-right"
          } flex-1`}
        >
          <div
            className="bg-card border border-border rounded-lg p-6 
                       hover:shadow-lg transition-shadow duration-300
                       group relative overflow-hidden"
          >
            {/* Corner accent */}
            <div
              className={`absolute ${
                isEven ? "top-0 right-0" : "top-0 left-0"
              } w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              <div
                className={`absolute ${
                  isEven
                    ? "top-0 right-0 border-t-2 border-r-2"
                    : "top-0 left-0 border-t-2 border-l-2"
                } border-foreground w-full h-full`}
              />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              {event.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ member, index, onClick }) => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      onClick={() => onClick(member)}
      ref={elementRef}
      className={`bg-card border border-border rounded-lg p-8 
                 hover:shadow-lg transition-all duration-700 ease-out
                 group relative overflow-hidden
                 ${
                   isVisible
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-8"
                 }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 border-t-2 border-r-2 border-foreground w-full h-full" />
      </div>

      {/* Avatar placeholder */}
      <div className="mb-6 flex items-center justify-center">
        <img
          src={member.imageSrc}
          alt={member.name}
          className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-1 tracking-tight">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">
        {member.role}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {member.description}
      </p>

      {/* Contact links */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <a
          href={`mailto:${member.email}`}
          className="p-2 bg-foreground/5 rounded-lg 
                   hover:bg-foreground/10 text-foreground/70 hover:text-foreground
                   transition-all duration-300"
          aria-label={`Email ${member.name}`}
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-foreground/5 rounded-lg 
                   hover:bg-foreground/10 text-foreground/70 hover:text-foreground
                   transition-all duration-300"
          aria-label={`LinkedIn de ${member.name}`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const { elementRef: heroRef, isVisible: isHeroVisible } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <div className="min-h-screen mt-20 ">
      {/* Hero Section */}
      <Section
        ref={heroRef}
        className={`transition-all duration-800 ease-out
                     ${
                       isHeroVisible
                         ? "opacity-100 translate-y-0"
                         : "opacity-0 translate-y-8"
                     }`}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl text-foreground tracking-tight mb-6 md:text-7xl lg:text-8xl  font-extrabold leading-tight -ml-0.5 ">
            <span className=" text-[#ffb8b8]">Sobre </span>
            <span className="text-[#46d5e7]/80">Nosotros</span>
          </h1>
          <P className="">
            Somos un equipo de profesionales dedicados a ofrecer soluciones
            estratégicas que transforman organizaciones y generan valor
            sostenible a largo plazo.
          </P>
        </div>
      </Section>

      <Separator />

      <Section>
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-foreground/5 rounded-xl mb-6">
              <Target className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
              Nuestra Misión
            </h2>
            <P className="">
              Proporcionar servicios profesionales de excelencia que permitan a
              nuestros clientes alcanzar sus objetivos estratégicos mediante
              soluciones innovadoras, metodologías probadas y un compromiso
              inquebrantable con la calidad.
            </P>
          </div>

          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-foreground/5 rounded-xl mb-6">
              <Award className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
              Nuestra Visión
            </h2>
            <P>
              Ser el socio estratégico de referencia para organizaciones que
              buscan transformación sostenible, reconocidos por nuestra
              integridad, experiencia técnica y capacidad de generar resultados
              medibles.
            </P>
          </div>
        </div>
      </Section>

      <Separator />

      <Section>
        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
            Nuestros Valores
          </h2>
          <P className="max-w-2xl">
            Los principios fundamentales que guían cada decisión y acción en
            nuestra organización.
          </P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </Section>

      <Separator />

      <Section>
        {/* Timeline Section */}
        <div className="py-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold ">
            <span className=" text-[#ffb8b8]">Nuestra </span>
            <span className=" text-[#46d5e7]/80"> historia </span>
          </h2>
          <P className="mx-auto py-3">
            Un recorrido de crecimiento continuo y compromiso con la excelencia
            desde nuestra fundación.
          </P>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </Section>

      <Separator />

      <Section>
        {/* Team Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold ">
            <span className=" text-[#ffb8b8]">Nuestro </span>
            <span className=" text-[#46d5e7]/80"> equipo </span>
          </h2>
          <P className="py-3">
            Profesionales experimentados comprometidos con su éxito y el
            crecimiento de su organización.
          </P>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              index={index}
              onClick={handleMemberClick}
            />
          ))}
        </div>
      </Section>

      <Separator />

      <Section>
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Conozca cómo podemos ayudar a su organización a alcanzar sus
            objetivos estratégicos.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center
                         px-8 py-4 
                         text-base font-medium
                         bg-foreground text-background
                         rounded-lg
                         hover:bg-foreground/90
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          >
            Contáctenos
          </a>
        </div>
      </Section>

      {/* Modal
       */}
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
