import React, { useState } from "react";

import ServiceCard  from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { P } from "../../../../components/paragraph/P";

export default function ServicesGrid({services}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);


  return (
    <>
      <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-sm text-blue-600 font-semibold">SERVICIOS DE SISTEMAS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffb8b8]">
              Soluciones backend e infraestructura
              <span className="block mt-2 text-[#46d5e7]/80">
                de clase empresarial
              </span>
            </h2>
            <P className="m-auto">
              Arquitecturas robustas, APIs escalables e infraestructura automatizada para sistemas de alto rendimiento
            </P>
          </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
              onLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>
          {/* Modal */}
      {selectedService && (
        <ServiceModal
          feature={{
            title: selectedService.title,
            icon: selectedService.icon,
            headerColor: selectedService.gradient,
            informativeColor: selectedService.accentColor
          }}
          content={selectedService.modalContent}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
