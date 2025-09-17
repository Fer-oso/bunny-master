import { Code, Globe, Palette, Search, ShoppingCart, Smartphone } from "lucide-react";

export const services = [
    {
      id: 1,
      icon: Globe,
      title: "Desarrollo Web",
      subtitle: "Sitios web profesionales",
      description: "Creamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
      features: ["Diseño Responsivo", "Optimización SEO", "Carga Rápida", "Seguridad SSL"],
      price: "Desde $850",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      hoverGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Apps Móviles",
      subtitle: "iOS y Android",
      description: "Desarrollamos aplicaciones móviles nativas y híbridas para llegar a tu audiencia donde esté.",
      features: ["React Native", "UI/UX Nativo", "Push Notifications", "App Store Deploy"],
      price: "Desde $1,200",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      hoverGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "E-commerce",
      subtitle: "Tiendas online",
      description: "Plataformas de comercio electrónico completas con pasarelas de pago y gestión de inventario.",
      features: ["Carrito de Compras", "Pagos Seguros", "Gestión de Stock", "Panel Admin"],
      price: "Desde $1,500",
      popular: false,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      hoverGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      id: 4,
      icon: Search,
      title: "SEO & Marketing",
      subtitle: "Posicionamiento web",
      description: "Estrategias de marketing digital para aumentar tu visibilidad online y generar más leads.",
      features: ["Google Ads", "SEO Técnico", "Analytics", "Social Media"],
      price: "Desde $600",
      popular: false,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      hoverGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      id: 5,
      icon: Palette,
      title: "Diseño UX/UI",
      subtitle: "Experiencia de usuario",
      description: "Diseños centrados en el usuario que maximizan la conversión y mejoran la experiencia.",
      features: ["Wireframes", "Prototipos", "Design System", "User Testing"],
      price: "Desde $750",
      popular: false,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      hoverGradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      id: 6,
      icon: Code,
      title: "Desarrollo Custom",
      subtitle: "Soluciones a medida",
      description: "Desarrollos personalizados para cubrir necesidades específicas de tu negocio.",
      features: ["API Development", "Integraciones", "Automatización", "Mantenimiento"],
      price: "Consultar",
      popular: false,
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50",
      hoverGradient: "from-teal-500/10 to-blue-500/10"
    }
  ];
  