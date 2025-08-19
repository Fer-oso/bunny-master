import { ArrowRight, Check, Star } from "lucide-react";

export const ServiceCard = ({ service, index, isHovered, onHover, onLeave }) => {
    const IconComponent = service.icon;
    
    return (
      <div
        className={`relative group cursor-pointer transform transition-all duration-700 hover:-translate-y-4 ${
          isHovered ? 'scale-105 z-10' : ''
        }`}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={onLeave}
      >
        {/* Popular badge */}
        {service.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg animate-pulse">
              <Star size={16} fill="currentColor" />
              MÁS POPULAR
            </div>
          </div>
        )}
  
        {/* Card */}
        <div className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gray-100 ${
          service.popular ? 'ring-4 ring-yellow-400/20' : ''
        }`}>
          
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
          
          {/* Content */}
          <div className="relative p-8">
            {/* Icon */}
            <div className="relative mb-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110`} />
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            </div>
  
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                {service.title}
              </h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}>
                {service.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
  
            {/* Features */}
            <div className="mb-8">
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <div className={`w-5 h-5 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-gray-800">{service.price}</span>
                {service.price !== "Consultar" && (
                  <span className="text-gray-500 text-sm ml-1">USD</span>
                )}
              </div>
              <button className={`group/btn bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:gap-3`}>
                <span>Consultar</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
  
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin-slow" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000" />
        </div>
      </div>
    );
  };
  