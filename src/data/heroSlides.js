import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Zap, 
} from 'lucide-react';

export const heroSlides = [
    {
      id: 1,
      badge: { icon: Zap, text: "Servicios Premium", color: "from-pink-100 to-purple-100", textColor: "text-[#ff66c4]", borderColor: "border-pink-200" },
      title: { line1: "Nuestros", line2: "Servicios" },
      subtitle: "Soluciones digitales completas para impulsar tu negocio al siguiente nivel. Desde desarrollo web hasta estrategias de marketing digital.",
      background: "from-gray-50 via-white to-indigo-50",
      decorations: [
        { position: "top-20 left-10", gradient: "from-pink-300 to-purple-300", animation: "animate-float" },
        { position: "top-40 right-10", gradient: "from-blue-300 to-cyan-300", animation: "animate-float-delayed" },
        { position: "bottom-20 left-1/2", gradient: "from-indigo-300 to-purple-300", animation: "animate-float-slow" }
      ]
    },
    {
      id: 2,
      badge: { icon: Globe, text: "Desarrollo Web", color: "from-blue-100 to-cyan-100", textColor: "text-blue-700", borderColor: "border-blue-200" },
      title: { line1: "Sitios Web", line2: "Profesionales" },
      subtitle: "Creamos experiencias web únicas que convierten visitantes en clientes. Diseño moderno, tecnología avanzada y optimización completa.",
      background: "from-blue-50 via-white to-cyan-50",
      decorations: [
        { position: "top-16 left-20", gradient: "from-blue-300 to-cyan-300", animation: "animate-float" },
        { position: "top-32 right-16", gradient: "from-cyan-300 to-teal-300", animation: "animate-float-delayed" },
        { position: "bottom-16 left-1/3", gradient: "from-blue-300 to-indigo-300", animation: "animate-float-slow" }
      ]
    },
    {
      id: 3,
      badge: { icon: Smartphone, text: "Apps Móviles", color: "from-purple-100 to-pink-100", textColor: "text-purple-700", borderColor: "border-purple-200" },
      title: { line1: "Apps", line2: "Innovadoras" },
      subtitle: "Desarrollamos aplicaciones móviles que destacan en las tiendas. iOS y Android con la mejor experiencia de usuario y rendimiento.",
      background: "from-purple-50 via-white to-pink-50",
      decorations: [
        { position: "top-24 left-16", gradient: "from-purple-300 to-pink-300", animation: "animate-float" },
        { position: "top-36 right-20", gradient: "from-pink-300 to-rose-300", animation: "animate-float-delayed" },
        { position: "bottom-24 left-2/3", gradient: "from-purple-300 to-violet-300", animation: "animate-float-slow" }
      ]
    },
    {
      id: 4,
      badge: { icon: ShoppingCart, text: "E-commerce", color: "from-green-100 to-emerald-100", textColor: "text-green-700", borderColor: "border-green-200" },
      title: { line1: "Tiendas", line2: "Online" },
      subtitle: "Plataformas de comercio electrónico que generan ventas. Integración completa con pagos, inventario y análisis de resultados.",
      background: "from-green-50 via-white to-emerald-50",
      decorations: [
        { position: "top-20 left-24", gradient: "from-green-300 to-emerald-300", animation: "animate-float" },
        { position: "top-44 right-12", gradient: "from-emerald-300 to-teal-300", animation: "animate-float-delayed" },
        { position: "bottom-20 left-1/4", gradient: "from-green-300 to-lime-300", animation: "animate-float-slow" }
      ]
    }
  ];