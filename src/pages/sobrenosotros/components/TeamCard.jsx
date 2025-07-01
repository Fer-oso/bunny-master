export const TeamCard = ( name, role, imageSrc, linkedinUrl ) =>{
    return (
        <div className="flex flex-col justify-between items-center border-2 border-pink-400 rounded-xl p-4 w-54 h-72">
        <div className="flex flex-col items-center">
          <img
            src={imageSrc}
            alt="Yazmin Ferreyra"
            className="w-28 h-28 rounded-full mb-2 object-cover"
          />
          <h3 className="font-semibold text-xl text-center">{name}</h3>
          <p className="italic text-lg text-center">{role}</p>
        </div>
      
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <i className="fi fi-brands-linkedin text-3xl"></i>
        </a>
      </div>
    )
}