import { Wrench } from "lucide-react";

export default function Services() {
    return (
<section className="mt-5">
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      {/* Texto */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">TU PÁGINA WEB PROFESIONAL</h2>
        <h3 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 primary-color uppercase">QUÉ OFRECEMOS</h3>
      </div>

      {/* Imagen como fondo */}
      <img src="/img/computer.png" alt="Computadora" className="w-full h-96 object-contain" />
    </div>

    {/* Servicios */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-gray-800">

    <div>
    <div className="flex items-center space-x-2">
        <Wrench color="oklch(65.6% 0.241 354.308)"/><h4 className="font-bold text-2xl mb-2"> Sitios y diseño web</h4>
        </div>

        <ul className="list-disc ml-5 text-lg space-y-1">
          <li>Webs institucionales y personales</li>
          <li>E-commerce y tiendas online</li>
          <li>Landing pages para campañas</li>
          <li>Integración con redes sociales</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center space-x-2">
        <Wrench color="oklch(65.6% 0.241 354.308)"/><h4 className="font-bold text-2xl mb-2"> Automatizaciónes</h4>
        </div>
      
        <ul className="list-disc ml-5 text-lg space-y-1">
          <li>Formularios inteligentes</li>
          <li>CRM personalizados</li>
          <li>Reservas, turnos y pagos</li>
          <li>Conexión con APIs externas (Zapier, etc.)</li>
        </ul>
      </div>

      <div>
      <div className="flex items-center space-x-2">
      <Wrench color="oklch(65.6% 0.241 354.308)"/><h4 className="font-bold text-2xl mb-2"> Marketing y contenidos</h4>
        </div>
        <ul className="list-disc ml-5 text-lg space-y-1">
          <li>Diseño de identidad visual</li>
          <li>Calendario de publicaciones</li>
          <li>Feed visual coherente</li>
          <li>Material promocional digital</li>
          <li>Análisis y estrategia de crecimiento</li>
        </ul>
      </div>


    </div>
  </>
</section>
    );
  }

  