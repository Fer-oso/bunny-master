import bunnyImage from '/img/bunnymascota/bunny-mascota-computadora.png';
import TeamCardSection from "./components/TeamCardSection";
import { useTypingEffect } from '../home/components/hooks/useTypingEffect';
import { P } from '../../components/paragraph/P';

export default function SobreNosotros() {

  const [display1, display2, active1, active2] = useTypingEffect("Sobre", "nosotros");

  return (   
      <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-32 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
      </div>
       <div className="flex flex-col lg:flex-row items-center px-2  lg:px-0  lg:py-3 xl:py-10  2xl:py-40 ">

        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

        <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary mt-2 lg:mt-0 px-1">
          <i className="fi fi-rs-display-code"></i>
          <strong className="uppercase tracking-wide font-semibold">
            Bunny creations world
          </strong>
        </div>
     {/* Título principal */}
     <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
          <span
            className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent pr-1"
            style={{ borderRight: active1 ? "2px solid currentColor" : "none" }}
          >
            {display1}
          </span>{" "}
          <span
            className="bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent pr-1"
            style={{ borderRight: active2 ? "2px solid currentColor" : "none" }}
          >
            {display2}
          </span>
        </h2>

  {/* Descripción */}
              <div className="w-full md:w-5/6 text-left space-y-2 mb-12">

              <P className="mt-6">
              En <strong>Bunny Creation World</strong> somos un equipo creativo y
          multidisciplinario formado por estudiantes de Ingeniería en Sistemas
          con pasión por la tecnología, el diseño y la comunicación digital.
        </P>

        <P>
        Nos une el entusiasmo por crear, desarrollar y acompañar marcas en el
          mundo digital. Contamos con programadores, diseñadores gráficos y una
          community manager, lo que nos permite ofrecer soluciones completas:
          desde el desarrollo de páginas web hasta la creación de contenido
          visual y estrategias para redes sociales.
        </P>

          <P >
          Creemos en el trabajo colaborativo, el aprendizaje constante y en el
          poder de las ideas bien ejecutadas.
        </P>
      </div>
    </div>

    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={bunnyImage} alt="Bunny Mascot" className="lg:w-full object-contain w-72" />
        </div>
      </div>


      {/* Sección equipo */}
 <div className="text-center text-3xl font-bold mb-4 rounded">
 <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#ff66c4] via-[#46d5e7] to-[#ff66c4] 
                             bg-clip-text text-transparent">
                Organigrama
              </span>
              </h2>
      </div>
      <p className="text-center text-xl mb-10 max-w-xl mx-auto xl:text-xl text-slate-600 leading-relaxed font-medium">
        Nuestro equipo está conformado por programadores, diseñadores y una
        community manager, que combinan sus talentos para dar vida a cada
        proyecto.
      </p>

      {/* Tarjetas de equipo */}
  
          <TeamCardSection  />
    </>

 

  );

  
}
