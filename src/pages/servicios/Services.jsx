import React, { useState } from "react";

import { ServiceCard } from "./components/ServiceCard";

import { services } from "../../utils/data/services";
import ContactForm from "../home/components/ourservices/ContactForm";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen mt-20 md:mt-17">
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
              onLeave={() => setHoveredCard(null)}
              selectedService={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>


          <ContactForm/>
    </div>
  );
}
