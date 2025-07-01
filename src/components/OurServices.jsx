import React from "react";

export const OurServices = () => {
  return (
    <section class="w-full bg-[#23191A] text-white font-montserrat py-20 px-4">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          QUÉ OFRECEMOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         

         {/* Soporte tecnológico */}
         <div className="flex flex-col items-start text-left">
            <img
              src="img/soportetecnologia.png"
              alt="Soporte"
              className="w-full max-w-[320px] rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#D9A5D7]">
              Soporte tecnológico y asesoría
            </h3>
            <ul className="text-xl text-gray-300 mt-2">
              <li>- Mantenimiento web</li>
              <li>- Hosting y dominios</li>
              <li>- Consultoría en digitalización y procesos internos</li>
            </ul>
          </div>

           {/* Diseño web */}
          <div className="flex flex-col items-start text-left">
            <img
              src="img/diseñoweb.png"
              alt="Diseño web"
              className="w-full max-w-[320px] rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#D9A5D7]">
              Diseño y desarrollo web
            </h3>
            <ul className="text-xl text-gray-300 mt-2 text-left">
              <li>- Sitios web institucionales y personales</li>
              <li>- Tiendas online (e-commerce)</li>
              <li>- Landing pages para campañas</li>
              <li>- Blogs y portfolios</li>
              <li>- Integraciones con redes sociales</li>
            </ul>
          </div>

          {/* Branding y diseño gráfico */}
          <div className="flex flex-col items-start text-left">
            <img
              src="img/grafico.png"
              alt="Diseño gráfico"
              className="w-full max-w-[320px] rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#D9A5D7]">
              Branding y diseño gráfico
            </h3>
            <ul className="text-xl text-gray-300 mt-2">
              <li>- Diseño de identidad visual</li>
              <li>- Diseño UX/UI para productos digitales</li>
              <li>- Diseño de material promocional digital</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16">
          

       {/* Automatización de negocios */}
       <div className="flex flex-col items-start text-left">
            <img
              src="img/automatizaciondenegocio.png"
              alt="Automatización"
              className="w-full max-w-[320px] rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#D9A5D7]">
              Automatización de negocios
            </h3>
            <ul className="text-xl text-gray-300 mt-2">
              <li>- Sistemas de reservas, turnos, pagos</li>
              <li>- Automatización de ventas y atención al cliente</li>
              <li>- CRM básicos y personalizados</li>
              <li>- Formularios inteligentes</li>
              <li>- Integración con herramientas externas (Zapier, APIs)</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-start text-left">
            <img
              src="img/redessociales.png"
              alt="Redes sociales"
              className="w-full max-w-[320px] rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#D9A5D7]">
              Gestión de redes sociales (Instagram)
            </h3>
            <ul className="text-xl text-gray-300 mt-2">
              <li>- Creación de contenido visual y textual</li>
              <li>- Calendario de publicaciones</li>
              <li>- Diseño de feed atractivo y coherente con la marca</li>
              <li>- Estrategia de crecimiento y engagement</li>
              <li>- Análisis básico de estadísticas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
