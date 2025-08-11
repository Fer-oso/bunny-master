import { motion } from "framer-motion";

export const VideoSection = () =>{

return (

    <>
      {/* Sección de video */}
<div className="relative w-full bg-black">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[550px] object-cover object-center"
  >
    <source src="/video/video1.mp4" type="video/mp4" />
  </video>

  {/* Overlay degradado para mejorar contraste */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

  {/* Texto superpuesto */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg"
    >
      TU PÁGINA WEB PROFESIONAL
    </motion.h2>

    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 uppercase drop-shadow-lg"
    >
      QUÉ OFRECEMOS
    </motion.h3>
  </div>
</div>
    </>
)


}