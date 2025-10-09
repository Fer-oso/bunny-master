import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

export const FeaturesModalInformation = ({ feature, isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Maneja la animación de entrada/salida
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setIsClosing(false);
    } else if (visible) {
      setIsClosing(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        setIsClosing(false);
      }, 200); // duración igual a la de las clases de animación
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible || !feature) return null;

  const getDetailedContent = () => {
    if (feature.title === "Diseño Profesional") {
      return {
        subtitle: "Creamos experiencias visuales que convierten",
        benefits: [
          "Diseño responsive adaptado a todos los dispositivos",
          "UX/UI optimizado basado en métricas de conversión",
          "Identidad visual coherente con tu marca",
          "Animaciones sutiles que mejoran la experiencia",
          "Accesibilidad WCAG 2.1 nivel AA garantizada",
        ],
        process: [
          { step: "Investigación", desc: "Análisis de tu marca y competencia" },
          { step: "Wireframes", desc: "Estructura y flujos de usuario" },
          { step: "Diseño UI", desc: "Interfaz visual de alta fidelidad" },
          { step: "Prototipo", desc: "Validación interactiva del diseño" },
        ],
      };
    } else if (feature.title === "Optimización Avanzada") {
      return {
        subtitle: "Velocidad y rendimiento que impulsan tu negocio",
        benefits: [
          "Carga inicial < 2 segundos garantizada",
          "Optimización de imágenes automática (WebP/AVIF)",
          "Lazy loading inteligente de recursos",
          "CDN global para tiempos de respuesta mínimos",
          "Core Web Vitals optimizados para SEO",
        ],
        process: [
          { step: "Auditoría", desc: "Análisis completo de rendimiento" },
          { step: "Optimización", desc: "Mejoras de código y recursos" },
          { step: "Caching", desc: "Estrategias de caché avanzadas" },
          { step: "Monitoreo", desc: "Seguimiento continuo de métricas" },
        ],
      };
    } else {
      return {
        subtitle: "Protección integral para tu tranquilidad",
        benefits: [
          "Certificados SSL/TLS con encriptación de grado A+",
          "Respaldos automáticos diarios en múltiples ubicaciones",
          "Protección DDoS y firewall de aplicaciones web",
          "Autenticación de dos factores disponible",
          "Cumplimiento GDPR y normativas de privacidad",
        ],
        process: [
          { step: "Evaluación", desc: "Análisis de vulnerabilidades" },
          { step: "Implementación", desc: "Protocolos de seguridad" },
          { step: "Respaldo", desc: "Sistema de backup automatizado" },
          { step: "Monitoreo", desc: "Vigilancia 24/7 de amenazas" },
        ],
      };
    }
  };

  const content = getDetailedContent();

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
<div
  className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity  duration-200 ${
    isClosing ? "opacity-0 backdrop-blur-0" : "opacity-100 backdrop-blur-sm"
  }`}
  onClick={handleBackgroundClick}
>
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-200 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${feature.gradientClass} p-8 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm flex items-center justify-center">
              {feature.icon && <feature.icon className="w-10 h-10" />}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
              <p className="text-white text-opacity-90 mt-1">{content.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Beneficios */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué incluye?</h3>
            <div className="grid gap-3">
              {content.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className={`${feature.gradientClass} p-1 rounded-full mt-0.5`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestro proceso</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.process.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`${feature.gradientClass} text-white font-bold px-3 py-1 rounded-full text-sm`}
                    >
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-gray-900">{item.step}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t-2 border-gray-200">
            <button
              className={`w-full ${feature.gradientClass} text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg`}
            >
              Solicitar consulta gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
