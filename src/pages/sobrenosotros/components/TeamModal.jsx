import { X, Linkedin, Mail, Phone, MapPin, Award, Star, Calendar } from 'lucide-react';

export const TeamModal = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-2xl h-[95vh] sm:h-auto max-h-[95vh] sm:max-h-[85vh] overflow-y-auto scroll-smooth animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Header */}
        <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 px-4 sm:px-6 py-6 sm:py-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
              <img
                src={member.imageSrc}
                alt={member.name}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-white/50 shadow-xl"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{member.name}</h2>
              <p className="text-base sm:text-lg text-white/90 font-medium mb-1">{member.role}</p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-white/80">
                <MapPin size={14} />
                <span className="text-xs sm:text-sm">{member.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Ajustado para scroll automático */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            
            {/* Bio */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                Sobre {member.name.split(' ')[0]}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>

            {/* Contact info y Join date en grid responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Contacto
                </h4>
                <div className="space-y-2">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors group">
                    <Mail size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{member.email}</span>
                  </a>
                  <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors group">
                    <Phone size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{member.phone}</span>
                  </a>
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors group">
                    <Linkedin size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs sm:text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                  <Calendar size={14} className="text-indigo-500" />
                  En el equipo desde
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">{member.joinDate}</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Habilidades
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full text-xs font-medium border border-pink-200 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="pb-2">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                <Award size={14} className="text-yellow-500" />
                Logros destacados
              </h4>
              <div className="space-y-2">
                {member.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <Star size={14} className="text-yellow-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Datos de ejemplo para mostrar el modal
const sampleMember = {
  name: "María González",
  role: "Senior Developer",
  location: "Buenos Aires, Argentina",
  imageSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  bio: "Desarrolladora apasionada con más de 5 años de experiencia en tecnologías web modernas. Especializada en React, Node.js y arquitecturas escalables. Le encanta resolver problemas complejos y mentorear a otros desarrolladores.",
  email: "maria.gonzalez@empresa.com",
  phone: "+54 11 1234-5678",
  linkedinUrl: "https://linkedin.com/in/mariagonzalez",
  joinDate: "Marzo 2021",
  skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "GraphQL", "Jest"],
  achievements: [
    "Lideró la migración del sistema legacy aumentando la performance en un 40%",
    "Implementó el nuevo sistema de autenticación utilizado por más de 10,000 usuarios",
    "Mentoreó a 8 desarrolladores junior durante 2023",
    "Certificación AWS Solutions Architect"
  ]
};

// Componente de demostración
export default function TeamModalDemo() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <div className="text-center">
          <img
            src={sampleMember.imageSrc}
            alt={sampleMember.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{sampleMember.name}</h3>
          <p className="text-gray-600 mb-4">{sampleMember.role}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-colors"
          >
            Ver perfil completo
          </button>
        </div>
      </div>
      
      <TeamModal 
        member={sampleMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}