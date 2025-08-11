import { Wrench } from "lucide-react";
import { motion } from "framer-motion";

export const ServicesListSection = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 text-slate-800">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg shadow bg-gray-100 
                     transition-all duration-300
                     hover:scale-105 hover:bg-gradient-to-br hover:from-[#ff66c4] hover:to-[#46d5e7] "
        >
          {/* Cabecera con icono */}
          <div className="flex items-center space-x-2 mb-4 transition-colors duration-300">
            <Wrench className="text-primary-color transition-colors duration-300 group-hover:text-white" />
            <h4 className="font-bold text-2xl">{service.title}</h4>
          </div>

          {/* Lista de servicios */}
          <ul className="ml-5 text-lg space-y-1 list-none list-image-[url(/img/check.svg)]">
            {service.items.map((item, idx) => (
              <li
                key={idx}
                className="transition-colors duration-300 "
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};
