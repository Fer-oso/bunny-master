import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react';
import { Container } from '../../routes/layout/Container';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: 'servicios' },
  { label: 'Sobre nosotros', href: 'nosotros' },
]

export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-4 lg:px-8 shadow-md top-0 flex flex-col items-center-safe overflow-hidden z-20 w-full  bg-gradient-to-br from-black via-black-800 to-slate-900 backdrop-blur-2xl">
     
      <div className='px-4 lg:px-8 py-12  text-center'>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl" />
      </div>

      <div className=" mx-auto sm:px-0 items-center ">
        
        {/* Sección principal del footer */}
        <div className="w-full py-10 lg:py-20 xl:py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8 ">
            
            {/* Columna 1: Información de la empresa */}
            <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col justify-center items-start text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  <span className="color-primary-color bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] 
                             bg-clip-text text-transparent">
                   Bunny Creations World
                  </span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Creamos soluciones digitales innovadoras que impulsan el crecimiento 
                  de tu negocio con tecnología de vanguardia y diseño excepcional.
                </p>
              </div>
              
              {/* Información de contacto */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  <div className="p-2 bg-slate-800/50 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>equipobunny@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  <div className="p-2 bg-slate-800/50 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>351 200-8632</span>
                </div>
                
                <div className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  <div className="p-2 bg-slate-800/50 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Cordoba, AR</span>
                </div>
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link 
                      to={href}
                      className="text-slate-300 hover:text-teal-400 transition-colors duration-300 
                               hover:translate-x-1 transform inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Servicios</h4>
              <ul className="space-y-3">
                {[
                  'Desarrollo Web', 
                  'Aplicaciones Móviles', 
                  'Diseño UX/UI', 
                  'Consultoría Digital', 
                  'Soporte Técnico'
                ].map((service) => (
                  <li key={service}>
                    <span 
                      className="text-slate-300 hover:text-teal-400 transition-colors duration-300 
                               hover:translate-x-1 transform inline-block cursor-default"
                    >
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-12 border-t border-slate-700/50">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h4 className="text-2xl font-bold text-white">
                Mantente al día con nuestras novedades
              </h4>
              <p className="text-slate-300 text-lg">
                Recibe las últimas actualizaciones sobre nuestros servicios y proyectos
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 
                           rounded-lg text-white placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50
                           transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r
                                 text-white font-semibold rounded-lg
                                 shadow-lg shadow-[#ff66c4]/50 hover:shadow-xl hover:shadow-teal-500/35
                                 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                                 focus:outline-none  ">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="border-t backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-2  py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-slate-400">
                <span>© 2025 Bunny Creations world. Hecho con</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>en Argentina</span>
              </div>

              {/* Redes sociales */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61556509191154', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: 'https://www.instagram.com/bunnycreationsworld/', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                  target="_blank" 
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg
                             text-slate-400 hover:text-teal-400
                             transition-all duration-300 hover:scale-110 hover:-translate-y-1
                             focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Botón volver arriba */}
              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r
                         text-white rounded-lg shadow-lg shadow-[#ff66c4]/50
                         hover:shadow-xl hover:shadow-teal-500/35
                         transition-all duration-300 hover:scale-110 hover:-translate-y-1
                         focus:outline-none "
                aria-label="Volver arriba"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </footer>
  );
};

