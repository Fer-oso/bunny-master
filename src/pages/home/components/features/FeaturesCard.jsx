export const FeaturesCard = ({
  title,
  description,
  urlImage,
  buttonText,
  reverse = false,
  gradientClass
}) => {
  return (
    <div className={`group relative overflow-hidden bg-[#ff66c4]/10 backdrop-blur-xl rounded-3xl p-3 xl:p-20 
                    border border-slate-200/20 shadow-xl shadow-teal-100/20 
                    transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-200/30
                    grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center hover:bg-[#ff66c4]/40
                    ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
      
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent 
                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      </div>

      {/* Contenido de texto */}
      <div className="relative space-y-8">
        <h3 className="text-3xl xl:text-4xl font-bold text-black/80 leading-tight tracking-tight">
          {title}
        </h3>
        
        <p className="text-lg xl:text-xl text-slate-600 leading-relaxed font-medium">
          {description}
        </p>
        
        <button className="group/btn relative inline-flex items-center gap-3 
                         bg-gradient-to-r from-[#ff66c4] to-[#46d5e7] 
                         hover:from-[#46d5e7] hover:to-[#ff66c4]
                         text-black/90 font-semibold px-8 py-4 rounded-xl
                         shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35
                         transition-all duration-300 ease-out
                         hover:scale-[1.02] active:scale-[0.98]
                         focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2">
          <span className="relative z-10">{buttonText}</span>
          
          {/* Flecha con animación */}
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          
          {/* Efecto de brillo en el botón */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                         opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300" />
        </button>
      </div>

      {/* Imagen/Icono */}
      <div className="relative">
        <div className={`aspect-[4/3] rounded-2xl overflow-hidden ${gradientClass}
                        flex items-center justify-center text-white
                        shadow-2xl shadow-slate-900/10
                        transform transition-all duration-500 ease-out
                        group-hover:scale-105 group-hover:rotate-1
                        relative`}>
          
          {/* Icono principal */}
          <img src={urlImage} className="w-full h-full object-cover"/>
          
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          
          {/* Partículas decorativas */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
          <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" 
               style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};

