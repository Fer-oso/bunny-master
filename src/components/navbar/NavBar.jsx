import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "../logo/Logo";

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2 xl:px-0 overflow-hidden w-full ${
        isScrolled ? "bg-white backdrop-blur-md shadow-md text-xs" : "bg-transparent"
      }`}
    >
      <div
        className="flex items-center justify-between m-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl "
      >
        <Link to={"/"}>
          <Logo height={ isScrolled ? "60px" : "75px"}/>
        </Link>
          {/* Mobile menu button */}
          <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-black hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

        {/* Menú (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className={` font-medium text-gray-700 transition-colors hover:scale-105 transform duration-200 ${
              isScrolled ? " hover:text-[#46d5e7]" : "bunny-color "
            }`}
          >
            Servicios
          </button>
          <Link
            onClick={() => scrollToSection("home")}
            className={` font-medium transition-colors text-gray-700 hover:scale-105 transform duration-200 ${
              isScrolled ? " hover:text-[#46d5e7]" : "bunny-color"
            }`}
          >
            Portafolio
          </Link>
          <Link
            onClick={() => scrollToSection("services")}
            className={`font-medium transition-colors text-gray-700 hover:scale-105 transform duration-200 ${
              isScrolled ? " hover:text-[#46d5e7]" : "bunny-color"
            }`}
            to={"/nosotros"}
          >
            Nosotros
          </Link>
          <Link
            className={` font-medium transition-colors text-gray-700 duration-300 hover:scale-105  ${
              isScrolled
                ? "bg-gradient-to-r from-[#46d5e7] to-[#46d5e7]  hover:shadow-blue-500/50 px-6 py-2.5 rounded-xl"
                : "bunny-color"
            }`}
            to={"https://wa.me/5493512008632"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar
          </Link>
        </div>
      </div>

 
 
    </nav>

 {/* Menú desplegable (mobile) */}
         <div
         className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
           isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
         }`}
       >
         {/* Backdrop */}
         <div
           className="absolute inset-0 bg-black/50 backdrop-blur-sm"
           onClick={() => setIsMobileMenuOpen(false)}
         />
 
         {/* Menu panel */}
         <div
           className={`absolute top-20 right-4 left-4 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
             isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
           }`}
         >
           <div className="p-6 space-y-4">
             <button
               onClick={() => scrollToSection('services')}
               className="w-full text-left px-4 py-3 text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors"
             >
               Servicios
             </button>
             <button
               onClick={() => scrollToSection('services')}
               className="w-full text-left px-4 py-3 text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors"
             >
               Portafolio
             </button>
             <button
               onClick={() => scrollToSection('services')}
               className="w-full text-left px-4 py-3 text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors"
             >
               Acerca de
             </button>
             <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
               Contactar
             </button>
           </div>
         </div>
       </div>
    
    </>
   
  );
}
