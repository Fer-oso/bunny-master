import { Button } from "../../../../components/button/Button";
import { P } from "../../../../components/paragraph/P";
import { button } from "../../../../style/buttonPrincipal";

export const FeaturesCard = ({
  title,
  description,
  urlImage,
  buttonText,
  reverse = false,
  gradientClass,
}) => {
  return (
    <div
      className={`group relative overflow-hidden 
                    backdrop-blur-xl 
                    rounded-2xl sm:rounded-3xl
                    shadow-lg hover:shadow-2xl
                    transition-all duration-700 ease-out 
                    hover:-translate-y-3 hover:scale-[1.02]
                    grid grid-cols-1 lg:grid-cols-2 
                    gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16
                    p-2  lg:p-10 xl:p-12
                    items-center
                   from-[#f5f9fc] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#f5f9fc] dark:via-[#f1f5f9] dark:to-[#e2e8f0]
                    ${
                      reverse
                        ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                        : ""
                    }`}
    >
      {/* Efecto de gradiente animado en el fondo */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-br bg-white dark:bg-white " />
      </div>

      {/* Efecto de brillo deslizante */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                       translate-x-[-100%] group-hover:translate-x-[200%] 
                       transition-transform duration-1500 ease-out delay-200"
        />
      </div>

      {/* Borde animado */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl  animate-pulse" />
      </div>

      {/* Contenido de texto */}
      <div className="relative space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 z-10">
        {/* Título responsive */}
        <h3
          className="text-xl sm:text-2xl md:text-3xl 
                       font-bold text-black dark:text-black 
                       leading-tight tracking-tight
                       group-hover:text-black dark:group-hover:text-black/80
                       transition-colors duration-500"
        >
          {title}
        </h3>

        {/* Descripción responsive */}
        <P>
          {description}
        </P>

        {/* Botón mejorado */}
        <div className="pt-2 sm:pt-4">
          <Button
            className={`${button.generalbutton} 
                        relative overflow-hidden
                        group/btn
                        transform transition-all duration-300 ease-out
                        hover:scale-105 active:scale-95
                        text-sm sm:text-base
                        px-4 sm:px-6 md:px-8
                        py-2 sm:py-3
                        shadow-lg hover:shadow-xl`}
          >
            {/* Fondo animado del botón */}
            <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 " />

            <span className="relative z-10 font-semibold text-gray-600 dark:text-gray-600">{buttonText}</span>

            {/* Flecha con animación mejorada */}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 
                         transition-all duration-300 ease-out
                         group-hover/btn:translate-x-1 group-hover/btn:scale-110
                         relative z-10 text-gray-600 dark:text-gray-600 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>

            {/* Efecto de ondas en el botón */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping" />
            </div>
          </Button>
        </div>
      </div>

      {/* Imagen/Icono mejorada */}
      <div className="relative z-10 order-first lg:order-none">
        <div
          className={`relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] 
                        rounded-xl sm:rounded-2xl overflow-hidden ${gradientClass}
                        shadow-xl group-hover:shadow-2xl
                        transform transition-all duration-700 ease-out
                        group-hover:scale-105 group-hover:-rotate-1
                        border border-white/20`}
        >
          {/* Imagen principal */}
          <img
            src={urlImage}
            className="w-full h-full object-cover 
                       transition-all duration-700 ease-out
                       group-hover:scale-110 group-hover:brightness-110"
            alt={title}
            loading="lazy"
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 group-hover:from-white/20 group-hover:to-black/10 transition-all duration-500" />

          {/* Efecto de brillo en la imagen */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-out" />
          </div>

          {/* Elementos decorativos animados */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1 h-1 bg-white/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
          <div className="absolute top-1/3 left-3 sm:left-4 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500" />

          {/* Indicador de interactividad */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Sombra dinámica */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-slate-900/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Efectos de partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-delay" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-400/20 rounded-full animate-float-slow" />
      </div>
    </div>
  );
};
