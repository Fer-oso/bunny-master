import { TeamCard } from "./components/TeamCard";
import { motion } from "framer-motion";

import bunnyImage from '/img/bunnymascota/bunny-mascota-computadora.png';

export default function SobreNosotros() {
  const team = [
    {
      name: "Yazmin Ferreyra",
      role: "Programadora",
      imageSrc: "/img/perfil/yazmin.JPG",
      linkedinUrl: "https://www.linkedin.com/in/yazmin-ferreyra",
    },
    {
      name: "Sofia Pericas",
      role: "Diseñadora UX/UI",
      imageSrc: "/img/perfil/fotoperfilsofi.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sofia-pericas/",
    },
    {
      name: "Fernando Osorio",
      role: "Community Manager",
      imageSrc: "/img/perfil/fotoperfilfer.jpg",
      linkedinUrl: "https://www.linkedin.com/in/osorio-fernando/",
    },
    {
      name: "Arturo Prado",
      role: "Programador",
      imageSrc: "/img/perfil/fotoperfilarturo.jpg",
      linkedinUrl: "https://www.linkedin.com/in/arturpra/",
    },
    {
      name: "Lucas Rivas",
      role: "Diseñador Gráfico",
      imageSrc: "/img/perfil/fotoperfillucas.jpg",
      linkedinUrl: "https://www.linkedin.com/in/lucas-valentin-rivas",
    },
  ];

  return (
   
      <>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none" >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-32 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
      </div>

<div className="flex flex-col lg:flex-row items-center px-2  lg:px-0  lg:py-0 xl:py-10  2xl:py-40">
  <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

          <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary mt-2 lg:mt-0 ">
            <i className="fi fi-rs-display-code"></i>
            <strong className="uppercase tracking-wide font-semibold">
            Bunny creations world
          </strong>
          </div>
     {/* Título principal */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#ff66c4] to-[#46d5e7] 
                             bg-clip-text text-transparent">
                  Sobre nosotros
              </span>
              </h2>

  {/* Descripción */}
              <div className="w-full md:w-5/6 text-left text-lg space-y-4 mb-12">
      <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600  font-medium max-w-2xl leading-relaxed ">
          En <strong>Bunny Creation World</strong> somos un equipo creativo y
          multidisciplinario formado por estudiantes de Ingeniería en Sistemas
          con pasión por la tecnología, el diseño y la comunicación digital.
        </p>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600  font-medium max-w-2xl leading-relaxed ">
          Nos une el entusiasmo por crear, desarrollar y acompañar marcas en el
          mundo digital. Contamos con programadores, diseñadores gráficos y una
          community manager, lo que nos permite ofrecer soluciones completas:
          desde el desarrollo de páginas web hasta la creación de contenido
          visual y estrategias para redes sociales.
        </p>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600  font-medium max-w-2xl leading-relaxed ">
          Creemos en el trabajo colaborativo, el aprendizaje constante y en el
          poder de las ideas bien ejecutadas.
        </p>
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
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </div>
    </>

 

  );

  
}
