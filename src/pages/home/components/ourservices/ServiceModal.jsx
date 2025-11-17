import { X, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ServiceModal({ feature, content, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
        isClosing ? 'opacity-0 backdrop-blur-0' : 'opacity-100'
      }`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con gradiente mejorado */}
        <div className={`${feature.headerColor} p-8 md:p-10 text-black relative overflow-hidden`}>
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2.5 bg-black/10 hover:bg-black/20 rounded-xl transition-all duration-200 hover:rotate-90 hover:scale-110 backdrop-blur-sm group z-10"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 transition-transform group-hover:scale-110" />
          </button>

          <div className="flex items-center gap-5 relative">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 hover:rotate-3 duration-300">
              {feature.icon && <feature.icon className="w-12 h-12" />}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                {feature.title}
              </h2>
              <p className="text-black/80 text-lg font-medium">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Contenido con scroll suave */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] custom-scrollbar">
          <div className="p-6 md:p-10 space-y-10">
            {/* Beneficios con diseño mejorado */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className={`w-1.5 h-8 ${feature.informativeColor} rounded-full`} />
                ¿Qué incluye?
              </h3>
              <div className="grid gap-3">
                {content.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-default"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isClosing ? 'none' : 'slideInLeft 0.4s ease-out'
                    }}
                  >
                    <div className={`${feature.informativeColor} p-2 rounded-lg shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Check className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-700 flex-1 leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso con mejor diseño de tarjetas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className={`w-1.5 h-8 ${feature.informativeColor} rounded-full`} />
                Nuestro proceso
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content.process.map((item, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isClosing ? 'none' : 'fadeInUp 0.5s ease-out'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`${feature.informativeColor} font-bold px-4 py-2 rounded-xl text-base shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {index + 1}
                      </span>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-black transition-colors">
                        {item.step}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA mejorado con efectos profesionales */}
            <div className="pt-8 border-t-2 border-gray-200">
              <button
                className={`group relative w-full ${feature.informativeColor} text-black font-bold py-5 px-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
              >
                {/* Efecto de brillo al hacer hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                <span className="relative flex items-center justify-center gap-2 text-lg">
                  Solicitar consulta gratuita
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
          transition: background 0.2s;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
