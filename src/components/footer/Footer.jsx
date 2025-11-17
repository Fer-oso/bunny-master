import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollRevealOptions";
import { Separator } from "../separator/Separator";


const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre nosotros", href: "/nosotros" },
];

const services = [
  "Desarrollo Web",
  "Aplicaciones Móviles",
  "Diseño UX/UI",
  "Consultoría Digital",
  "Soporte Técnico",
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61556509191154",
    label: "Facebook",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/bunnycreationsworld/",
    label: "Instagram",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const contactInfo = [
  { icon: Mail, text: "equipobunny@gmail.com" },
  { icon: Phone, text: "351 200-8632" },
  { icon: MapPin, text: "Cordoba, AR" },
];

export const Footer = () => {
  const { elementRef: footerRef, isVisible: isFooterVisible } =
    useScrollReveal({
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
      triggerOnce: true,
    });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className={`
        bg-foreground text-background
        transition-all duration-800 ease-out
        ${
          isFooterVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
      `}
    >
    
      <div className="max-w-7xl mx-auto px-4 lg:px-0 m-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl ">
        <Separator/>
        {/* Main footer content */}
        <div className="py-16 lg:py-10 xl:flex  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Column 1: Company info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
                  Bunny Creations World
                </h3>
                <p className="text-background/70 leading-relaxed max-w-md">
                  Creamos soluciones digitales innovadoras que impulsan el
                  crecimiento de tu negocio con tecnología de vanguardia y
                  diseño excepcional.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, text }, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 text-background/70 
                             hover:text-background transition-colors duration-300"
                  >
                    <div
                      className="p-2 bg-background/5 rounded-lg 
                                  group-hover:bg-background/10 
                                  transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Quick links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-background/70 hover:text-background 
                               transition-all duration-300
                               inline-flex items-center gap-2
                               group"
                    >
                      <span
                        className="w-0 h-px bg-black
                                   group-hover:w-4 
                                   transition-all duration-300"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-background/70 block">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          
          <div className="">
          <Separator className={"py-20 lg:hidden"}/>
            <div className="max-w-2xl mx-auto text-center space-y-6">
            
              <h4 className="text-2xl font-bold">
                Mantente al día con nuestras novedades
              </h4>
              <p className="text-background/70">
                Recibe las últimas actualizaciones sobre nuestros servicios y
                proyectos
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 
                           bg-background/5 border border-background/10
                           rounded-lg text-background placeholder-background/40
                           focus:outline-none focus:ring-2 focus:ring-background/20 
                           focus:border-background/20
                           transition-all duration-300"
                />
                <button
                  className="px-6 py-3 
                           bg-background text-foreground font-semibold rounded-lg
                           hover:bg-background/90
                           transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                           focus:outline-none focus:ring-2 focus:ring-background/50"
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <Separator/>
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>© 2025 Bunny Creations World. Hecho con</span>
              <Heart className="w-4 h-4 text-background fill-background animate-pulse" />
              <span>en Argentina</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-background/5 hover:bg-background/10 rounded-lg
                           text-background/70 hover:text-background
                           transition-all duration-300 hover:scale-110 hover:-translate-y-1
                           focus:outline-none focus:ring-2 focus:ring-background/20"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-background text-foreground rounded-lg
                       hover:bg-background/90
                       transition-all duration-300 hover:scale-110 hover:-translate-y-1
                       focus:outline-none focus:ring-2 focus:ring-background/50"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
