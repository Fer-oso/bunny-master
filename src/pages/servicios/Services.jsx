import { motion } from "framer-motion";
import { VideoSection } from "./VideoSection";
import { ServicesListSection } from "./ServicesListSection";

const services = [
  {
    title: "Sitios y diseño web",
    items: [
      "Webs institucionales y personales",
      "E-commerce y tiendas online",
      "Landing pages para campañas",
      "Integración con redes sociales",
    ],
  },
  {
    title: "Automatizaciones",
    items: [
      "Formularios inteligentes",
      "CRM personalizados",
      "Reservas, turnos y pagos",
      "Conexión con APIs externas (Zapier, etc.)",
    ],
  },
  {
    title: "Marketing y contenidos",
    items: [
      "Diseño de identidad visual",
      "Calendario de publicaciones",
      "Feed visual coherente",
      "Material promocional digital",
      "Análisis y estrategia de crecimiento",
    ],
  },
];

export const Services =()=> {
  return (
    <section className="relative">
{/* Sección de video */}
        <VideoSection/>

      {/* Lista de servicios */}
      <ServicesListSection services={services} />

      {/* Galería de trabajos */}
      <div className="bg-gray-100 py-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Galería de nuestros trabajos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            "/img/servicios/1.jpg",
            "/img/servicios/2.jpg",
            "/img/servicios/3.jpg",
            "/img/servicios/4.jpg",
            "/img/servicios/1.jpg",
            "/img/servicios/3.jpg",
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={src}
                alt={`Servicio ${idx + 1}`}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
