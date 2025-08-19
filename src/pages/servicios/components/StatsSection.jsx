import { Shield, Star, TrendingUp, Zap } from "lucide-react";

export const StatsSection = () => (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "150+", label: "Proyectos Completados", icon: TrendingUp },
            { number: "98%", label: "Clientes Satisfechos", icon: Star },
            { number: "5+", label: "Años de Experiencia", icon: Shield },
            { number: "24/7", label: "Soporte Técnico", icon: Zap }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );