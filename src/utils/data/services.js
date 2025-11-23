import { Code, Code2, Globe, Palette, Rocket, Search, ShoppingCart, Smartphone, Zap } from "lucide-react";

export const services = [
  {
    id: 'web-dev',
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables con las últimas tecnologías y mejores prácticas.',
    features: [
      'React, Vue, Next.js',
      'APIs REST y GraphQL',
      'Arquitectura escalable',
      'Testing automatizado'
    ],
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    accentColor: 'bg-blue-500',
    modalContent: {
      subtitle: 'Soluciones web robustas y modernas',
      benefits: [
        'Aplicaciones SPA con React o Vue para máxima interactividad',
        'Server-Side Rendering con Next.js para mejor SEO',
        'Integración con APIs REST, GraphQL y bases de datos',
        'Arquitectura modular y escalable para crecimiento futuro',
        'Testing automatizado con Jest y Cypress',
        'Documentación técnica completa y código limpio'
      ],
      process: [
        {
          step: 'Planificación',
          desc: 'Definimos la arquitectura, stack tecnológico y roadmap del proyecto.'
        },
        {
          step: 'Desarrollo',
          desc: 'Implementamos features en sprints con revisiones continuas de código.'
        },
        {
          step: 'Testing',
          desc: 'Pruebas unitarias, integración y end-to-end para garantizar calidad.'
        },
        {
          step: 'Deploy',
          desc: 'Despliegue en producción con CI/CD y monitoreo continuo.'
        }
      ]
    }
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas que mejoran la experiencia de usuario y aumentan conversiones.',
    features: [
      'Prototipado en Figma',
      'Design Systems',
      'Responsive Design',
      'User Research'
    ],
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    accentColor: 'bg-purple-500',
    modalContent: {
      subtitle: 'Diseños que conectan con tus usuarios',
      benefits: [
        'Investigación de usuarios y análisis de competencia',
        'Wireframes y prototipos interactivos en Figma',
        'Design System personalizado para consistencia',
        'Diseño responsive para todos los dispositivos',
        'Pruebas de usabilidad y optimización iterativa',
        'Guías de estilo y documentación de componentes'
      ],
      process: [
        {
          step: 'Research',
          desc: 'Investigamos a tus usuarios, competencia y objetivos de negocio.'
        },
        {
          step: 'Wireframes',
          desc: 'Creamos esquemas de la estructura y flujos de navegación.'
        },
        {
          step: 'Diseño',
          desc: 'Desarrollamos el diseño visual con tu identidad de marca.'
        },
        {
          step: 'Prototipo',
          desc: 'Construimos prototipos interactivos para validar la experiencia.'
        }
      ]
    }
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Optimización',
    description: 'Mejoramos el rendimiento y velocidad de tu sitio para mejor experiencia y posicionamiento.',
    features: [
      'Core Web Vitals',
      'Optimización SEO',
      'Compresión de assets',
      'Lazy Loading'
    ],
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    accentColor: 'bg-yellow-500',
    modalContent: {
      subtitle: 'Velocidad y rendimiento excepcionales',
      benefits: [
        'Auditoría completa de rendimiento con Lighthouse',
        'Optimización de Core Web Vitals (LCP, FID, CLS)',
        'Compresión y optimización de imágenes y assets',
        'Implementación de lazy loading y code splitting',
        'Mejoras de SEO técnico y meta tags',
        'Monitoreo continuo de métricas de rendimiento'
      ],
      process: [
        {
          step: 'Auditoría',
          desc: 'Analizamos el estado actual y identificamos cuellos de botella.'
        },
        {
          step: 'Optimización',
          desc: 'Implementamos mejoras técnicas para acelerar la carga.'
        },
        {
          step: 'SEO',
          desc: 'Optimizamos para buscadores y mejoramos la indexación.'
        },
        {
          step: 'Monitoreo',
          desc: 'Configuramos herramientas para medir el rendimiento continuo.'
        }
      ]
    }
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online completas con pasarelas de pago, gestión de inventario y analytics.',
    features: [
      'Catálogo de productos',
      'Carrito y checkout',
      'Pagos seguros',
      'Panel de admin'
    ],
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-700',
    accentColor: 'bg-green-500',
    modalContent: {
      subtitle: 'Tu tienda online lista para vender',
      benefits: [
        'Catálogo de productos con categorías y filtros avanzados',
        'Carrito de compras y checkout optimizado para conversión',
        'Integración con pasarelas de pago seguras (Stripe, PayPal)',
        'Panel de administración para gestión de pedidos e inventario',
        'Sistema de envíos con cálculo automático de costos',
        'Analytics e informes de ventas en tiempo real'
      ],
      process: [
        {
          step: 'Setup',
          desc: 'Configuramos la plataforma, productos y métodos de pago.'
        },
        {
          step: 'Personalización',
          desc: 'Diseñamos tu tienda con tu identidad de marca.'
        },
        {
          step: 'Integración',
          desc: 'Conectamos sistemas de pago, envío y contabilidad.'
        },
        {
          step: 'Lanzamiento',
          desc: 'Probamos todo el flujo de compra y lanzamos tu tienda.'
        }
      ]
    }
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles nativas o híbridas para iOS y Android con experiencia fluida.',
    features: [
      'React Native',
      'Push notifications',
      'Offline-first',
      'App Store deploy'
    ],
    gradient: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    accentColor: 'bg-indigo-500',
    modalContent: {
      subtitle: 'Apps móviles para iOS y Android',
      benefits: [
        'Desarrollo con React Native para iOS y Android',
        'Experiencia nativa con rendimiento optimizado',
        'Notificaciones push para engagement de usuarios',
        'Funcionalidad offline-first con sincronización',
        'Integración con servicios de mapas y geolocalización',
        'Publicación en App Store y Google Play'
      ],
      process: [
        {
          step: 'Diseño',
          desc: 'Creamos la UI/UX específica para plataformas móviles.'
        },
        {
          step: 'Desarrollo',
          desc: 'Construimos la app con React Native o nativo.'
        },
        {
          step: 'Testing',
          desc: 'Probamos en múltiples dispositivos y versiones de OS.'
        },
        {
          step: 'Publicación',
          desc: 'Te ayudamos con el proceso de publicación en las stores.'
        }
      ]
    }
  },
  {
    id: 'consulting',
    icon: Rocket,
    title: 'Consultoría',
    description: 'Asesoría técnica y estratégica para optimizar tus procesos y proyectos digitales.',
    features: [
      'Code review',
      'Arquitectura',
      'Tech stack',
      'Mejores prácticas'
    ],
    gradient: 'bg-gradient-to-br from-red-500 to-pink-500',
    accentColor: 'bg-red-500',
    modalContent: {
      subtitle: 'Experiencia técnica a tu servicio',
      benefits: [
        'Code review y auditoría de calidad de código',
        'Diseño de arquitectura escalable y mantenible',
        'Selección de stack tecnológico adecuado',
        'Implementación de mejores prácticas y patrones',
        'Mentoría y capacitación de equipos de desarrollo',
        'Estrategia de testing y automatización'
      ],
      process: [
        {
          step: 'Diagnóstico',
          desc: 'Evaluamos tu código, procesos y stack tecnológico actual.'
        },
        {
          step: 'Propuesta',
          desc: 'Diseñamos un plan de mejora con prioridades claras.'
        },
        {
          step: 'Implementación',
          desc: 'Te acompañamos en la ejecución de las mejoras.'
        },
        {
          step: 'Seguimiento',
          desc: 'Monitoreamos resultados y ajustamos la estrategia.'
        }
      ]
    }
  }
  ];
  