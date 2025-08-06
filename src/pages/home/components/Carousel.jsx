import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation'

export const Carousel = () => {
  return (

       <div className="text-center mb-20 lg:mb-0 space-y-6">
       <div className="inline-block">
         <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
           <span className="bg-gradient-to-r from-[#46d5e7] via-[#46d5e7] to-[#955c52] 
                          bg-clip-text text-transparent">
             Nuestros servicios
           </span>
         </h2>
       </div>
       
       <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
         Descubre las características que distinguen nuestra propuesta y cómo pueden 
         potenciar el crecimiento de tu organización
       </p>
       
       {/* Línea decorativa */}
       <div className="flex justify-center pt-8">
         <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-amber-700 rounded-full" />
       </div>


       <Swiper 
  modules={[Navigation,Autoplay]}
  navigation={true}
  centeredSlides={true}
  autoHeight={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320:{ slidesPerView: 1},
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }}
 
  onSlideChange={() => console.log('slide change')} 
  onSwiper={(swiper) => console.log(swiper)}>

<SwiperSlide> <img src="./img/servicios/1.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/2.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/3.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/4.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/4.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>

  </Swiper>
     </div>
  
  

  )
}
<div className="flex items-center justify-center mx-auto mt-5 ">
<div className="flex  justify-center  h-[430px]">
 <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/1.jpg" className="w-[full] h-full object-cover opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></a>
 <a href="https://sistema-tickets-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/2.jpg" className="w-[full]  h-full object-cover opacity-80 transition duration-200 hover:cursor-crosshair  hover:opacity-100 "/></a>
 <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/3.jpg"className="w-[full] h-full object-cover opacity-80 transition duration-200  hover:cursor-crosshair  hover:opacity-100 "/></a>
 <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/4.jpg"className="w-[full] h-full object-cover opacity-80 transition duration-200   hover:cursor-crosshair  hover:opacity-100 "/></a>
</div>
</div>
/*

 <div className="flex items-center justify-center mx-auto mt-5 ">
     <div className="flex  justify-center  h-[430px]">
      <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/1.jpg" className="w-[full] h-full object-cover opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></a>
      <a href="https://sistema-tickets-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/2.jpg" className="w-[full]  h-full object-cover opacity-80 transition duration-200 hover:cursor-crosshair  hover:opacity-100 "/></a>
      <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/3.jpg"className="w-[full] h-full object-cover opacity-80 transition duration-200  hover:cursor-crosshair  hover:opacity-100 "/></a>
      <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/4.jpg"className="w-[full] h-full object-cover opacity-80 transition duration-200   hover:cursor-crosshair  hover:opacity-100 "/></a>
     </div>
   </div>





    <Swiper 
  modules={[Navigation,Autoplay]}
  navigation={true}
  spaceBetween={20} 
  slidesPerView={2} 
  centeredSlides={true}
  autoHeight={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320:{ slidesPerView: 1},
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }}
 
  onSlideChange={() => console.log('slide change')} 
  onSwiper={(swiper) => console.log(swiper)}>

<SwiperSlide> <img src="./img/servicios/1.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/2.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/3.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/4.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>
<SwiperSlide> <img src="./img/servicios/4.jpg" className="w-full h-96 object-contain opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></SwiperSlide>

  </Swiper>
*/