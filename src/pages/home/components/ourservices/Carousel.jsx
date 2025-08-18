import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation'
import { ExternalLink } from 'lucide-react';

export const Carousel = ({services}) => {

  

  return (
<>{/* Slider vertical - Lado derecho */}
          <div className="relative">
            <div className="bg-[gray]/10 backdrop-blur-xl rounded-3xl p-3  border border-slate-200/20 
                           shadow-xl shadow-teal-100/20 overflow-hidden">
              
              {/* Header del slider */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black-900 mb-2">Proyectos Destacados</h3>
                <p className="text-lg sm:text-xl lg:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed ">Explora nuestras soluciones en acción</p>
              </div>

              {/* Swiper con dirección vertical */}
              <div className="h-[600px] relative">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  direction="vertical"
                  navigation={true}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={20}
                  slidesPerView={2}
                  centeredSlides={true}
                  className="h-full services-swiper"
                >
                  {services.map((service) => (
                    <SwiperSlide key={service.id}>
                      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg 
                                     hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        
                        {/* Imagen */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 
                                     group-hover:scale-110"
                          />
                          
                          {/* Overlay con gradiente */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Categoría */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 
                                           text-sm font-medium rounded-full">
                              {service.category}
                            </span>
                          </div>

                          {/* Link externo */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                                         transition-opacity duration-300">
                            <a 
                              href={service.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 bg-white/90 backdrop-blur-sm rounded-full 
                                       hover:bg-white transition-colors duration-200"
                            >
                              <ExternalLink className="w-4 h-4 text-slate-700" />
                            </a>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-[#ff66c4]/60 mb-2 group-hover:text-[#ff66c4]
                                       transition-colors duration-300">
                            {service.title}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

            {/* Estilos personalizados para el swiper */}
    <style jsx>{`
      .services-swiper .swiper-button-next,
      .services-swiper .swiper-button-prev {
        color: #0d9488;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      
      .services-swiper .swiper-button-next:hover,
      .services-swiper .swiper-button-prev:hover {
        background: rgba(255, 255, 255, 1);
        transform: scale(1.1);
      }
      
      .services-swiper .swiper-button-next::after,
      .services-swiper .swiper-button-prev::after {
        font-size: 16px;
        font-weight: bold;
      }
      
      .services-swiper .swiper-button-next {
        right: 10px;
      }
      
      .services-swiper .swiper-button-prev {
        left: 10px;
      }
    `}</style>
</>
        
  )}


  
