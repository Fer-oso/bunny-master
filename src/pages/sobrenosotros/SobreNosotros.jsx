import { TeamCard } from "./components/TeamCard";

export default function MiComponenteSpline() {
  return (
    <main>
    <div className="py-12  mx-auto">
      <h2 className="text-5xl font-bold secund-color mb-6 uppercase">
        Sobre Nosotros:
      </h2>

    <div className="w-5/6  text-left text-xl">
           {/* Párrafos descriptivos */}
           <p className="text-lg mb-4">
        En <strong>Bunny Creation World</strong> somos un equipo creativo y multidisciplinario formado por estudiantes de Ingeniería en Sistemas con pasión por la tecnología, el diseño y la comunicación digital.
      </p>
      <p className="text-lg mb-4">
        Nos une el entusiasmo por crear, desarrollar y acompañar marcas en el mundo digital. Contamos con programadores, diseñadores gráficos y una community manager, lo que nos permite ofrecer soluciones completas: desde el desarrollo de páginas web hasta la creación de contenido visual y estrategias para redes sociales.
      </p>
      <p className="text-lg mb-8">
        Creemos en el trabajo colaborativo, el aprendizaje constante y en el poder de las ideas bien ejecutadas.
      </p>
    </div>

      {/* Título equipo */}
      <div className="bg-primary-color text-white py-3 text-center text-3xl font-bold mb-4 rounded">
        Organigrama
      </div>
      <p className="text-center text-xl mb-10 max-w-xl mx-auto">
        Nuestro equipo está conformado por programadores, diseñadores y una community manager, que combinan sus talentos para dar vida a cada proyecto.
      </p>

      {/* 🔽 Estructura piramidal del equipo */}
      <div className="space-y-12">
       
        {/* Fila 1: 1 tarjeta centrada */}
        <div className="flex justify-center gap-10">

          <TeamCard name="Yazmin Ferreyra" role="Programadora" imageSrc={"/img/yazmin.JPG"} linkedinUrl={"https://www.linkedin.com/in/yazmin-ferreyra"} />
          <TeamCard name="Sofia Pericas" role="Diseñadora UX/UI" imageSrc={"/img/fotoperfilsofi.jpg"} linkedinUrl={"https://www.linkedin.com/in/sofia-pericas/"} />
        </div>

        {/* Fila 2: 2 tarjetas centradas */}
        <div className="flex justify-center gap-10 flex-wrap">
          <TeamCard name="Fernando Osorio" role="Community Manager" imageSrc={"/img/fotoperfilfer.jpg"}  linkedinUrl={"https://www.linkedin.com/in/osorio-fernando/"}/>
          <TeamCard name="Arturo Prado" role="Programador" />
          <TeamCard name="Lucas Rivas" role="Diseñador Gráfico" imageSrc={"/img/fotoperfillucas.jpg"} />
        </div>

        {/* Fila 3: 3 tarjetas centradas 
        
          <div className="flex justify-center gap-10 flex-wrap">
        </div>
        */}
    
      </div>
    </div>
  </main>
);
}

