export const TeamCard = ({ member, onClick }) => {
  return (
    <div 
      onClick={() => onClick(member)}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-8 flex flex-col items-center text-center h-80">
        {/* Avatar with glow effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff66c4] to-[#46d5e7] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <img
            src={member.imageSrc}
            alt={member.name}
            className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
          />
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-3 border-white rounded-full shadow-lg" />
        </div>
        
        {/* Name and role */}
        <div className="flex-grow">
          <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-[#ff66c4] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-gray-600 font-medium mb-4 group-hover:text-[#46d5e7] transition-colors duration-300">
            {member.role}
          </p>
          
          {/* Skills preview */}
          <div className="flex flex-wrap gap-1 justify-center mb-6">
            {member.skills.slice(0, 2).map((skill, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full group-hover:bg-pink-100 group-hover:text-[#955c52] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full group-hover:bg-pink-100 group-hover:text-[#955c52] transition-colors duration-300">
                +{member.skills.length - 2}
              </span>
            )}
          </div>
        </div>
        
        {/* Action button */}
        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff66c4] to-[#46d5e7]  text-black rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl">
            <span>Ver perfil</span>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-pink-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-spin-slow" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};


