import React, { useState } from "react";

import ServiceCard  from "./ServiceCard";
import ServiceModal from "./ServiceModal";

export default function ServicesGrid({services}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);


  return (
    <>
      <div >
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
