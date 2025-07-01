export default function Features() {
  return (
   <section className="px-6 py-10">
  <div className="border-2 border-fuchsia-700 bg-white rounded-lg flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[520px]">
    
    {/* Columna izquierda más ancha */}
    <div className="lg:w-7/12 p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-2">TU PÁGINA WEB PROFESIONAL</h2>
      <p className="text-md font-semibold text-gray-700 mb-4">
        Impulsá tu marca con una web estratégica, moderna y 100% tuya. Incluye diseño personalizado, dominio, hosting y soporte sin costos mensuales.
      </p>
      <ul className="list-disc text-md ml-5 text-gray-700 space-y-1 mb-4">
        <li>Diseño personalizado y editable</li>
        <li>Pago único, sin cuotas mensuales</li>
        <li>Dominio, hosting y SSL por 1 año incluidos</li>
        <li>Botón de WhatsApp y análisis de visitas (GA4 + Pixel)</li>
        <li>Optimización SEO inicial</li>
        <li>Soporte post-lanzamiento por 15 días</li>
      </ul>
      <p className="text-md font-semibold mt-2">
        50% al iniciar, 50% al entregar. <br />
        ¡Consultanos hoy y empezá a destacar online!
      </p>
      <a
        href="https://wa.me/03512008632"
        className="mt-4 bg-green-600 text-white px-10 py-3 rounded-full text-base hover:bg-green-700 w-fit"
      >
        WhatsApp
      </a>
    </div>

    {/* Card negra más angosta */}
    <div className="lg:w-5/12 bg-black text-white px-6 py-8 flex flex-col justify-center gap-3 rounded-none">
      <h3 className="text-2xl font-bold uppercase mb-2">
        ¿Estás lista/o para destacar online con una web profesional?
      </h3>
      <p className="text-md font-medium">Más que diseño: </p>
      <p className="text-md">Estrategia pensada para atraer, conectar y vender.</p>
      <p className="text-md">Usamos herramientas reales: Google Analytics, Pixel Meta, WhatsApp API, SEO on-page.</p>
      <p className="text-md">Trabajamos con compromiso, transparencia y acompañamiento post-entrega.</p>
      <p className="text-md">Creamos tu sitio como si fuera el nuestro. Porque tu éxito es el nuestro.</p>
    </div>
    
  </div>
</section>

  );
}
