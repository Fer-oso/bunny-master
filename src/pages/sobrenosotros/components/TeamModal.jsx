import { X, Linkedin, Mail, Phone, MapPin, Award, Star, Calendar } from 'lucide-react';

export const TeamModal = ({ member, isOpen, onClose }) => {
    if (!isOpen || !member) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[100vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 px-8 py-12 text-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="relative w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                <p className="text-xl text-white/90 font-medium">{member.role}</p>
                <div className="flex items-center gap-2 mt-3 text-white/80">
                  <MapPin size={16} />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 h-[300px]  overflow-y-auto">
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                Sobre {member.name.split(' ')[0]}
              </h3>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
            
            {/* Contact info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Contacto
                </h4>
                <div className="space-y-3">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-gray-600 hover:text-pink-600 transition-colors group">
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                    <span>{member.email}</span>
                  </a>
                  <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-pink-600 transition-colors group">
                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                    <span>{member.phone}</span>
                  </a>
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-pink-600 transition-colors group">
                    <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Calendar size={16} className="text-indigo-500" />
                  En el equipo desde
                </h4>
                <p className="text-gray-600">{member.joinDate}</p>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                Habilidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium border border-pink-200 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Award size={16} className="text-yellow-500" />
                Logros destacados
              </h4>
              <div className="space-y-3">
                {member.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <Star size={16} className="text-yellow-500 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};