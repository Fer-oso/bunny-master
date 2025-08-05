export const Carousel = () => {
  return (

  <div className="mt-15"> 
  <h1 className="primary-color font-bold text-center text-4xl">NUESTROS PROYECTOS</h1>
   <div className="flex items-center justify-center mx-auto mt-5 ">
     <div className="flex  justify-center  h-[430px]">
      <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/1.jpg" className="w-[full] h-full object-cover opacity-80 transition duration-200   hover:cursor-crosshair hover:opacity-200 "/></a>
      <a href="https://sistema-tickets-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/2.jpg" className="w-[full]  h-full object-cover opacity-80 transition duration-200 hover:cursor-crosshair  hover:opacity-100 "/></a>
      <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/3.jpg"className="w-[full] h-full object-cover opacity-80 transition duration-200  hover:cursor-crosshair  hover:opacity-100 "/></a>
      <a href="https://sistema-turnos-bunny.netlify.app/" target="_blank">  <img src="./img/servicios/4.jpg"className="w-[full] h-full object-cover opacity-80 transition duration-200   hover:cursor-crosshair  hover:opacity-100 "/></a>
     </div>
   </div>

</div>
  

  )
}