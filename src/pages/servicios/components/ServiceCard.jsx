import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "../../../components/button/Button";

export const ServiceCard = ({
  service,
  selectedService,
  index,
  isHovered,
  onHover,
  onLeave,
}) => {
  const IconComponent = service.icon;

  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-700 hover:-translate-y-4 ${
        isHovered ? "scale-105 z-10" : ""
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* Card */}
      <div
        className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
      />

      {/* Icon */}
      <div className="relative">
        <div
          className={`inline-flex p-4 ${service.accentColor} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}
        >
          <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{service.description}</p>

        {/* Features list */}
        <div className="space-y-2 pt-2">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <div
                className={`w-1.5 h-1.5 ${service.accentColor} rounded-full`}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-4 transition-all">
          <span>Ver más detalles</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>

        {/* Corner decoration */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${service.gradient} opacity-10 rounded-bl-full rounded-tr-2xl group-hover:opacity-20 transition-opacity duration-500`} />
    </div>
  );
};
