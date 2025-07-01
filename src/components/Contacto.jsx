import React from 'react'

export const Contacto = () => {
  return (
    <div>
     <section className=" font-montserrat  ">
     <footer className="bg-gray-100 text-center text-xs py-6 mt-16">
      <div className="flex gap-10 mb-4">
        <img src="/img/bunnylogo1.png" alt="Bunny Logo" className="h-6" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div>
          <strong>CORREO</strong>
          <p>bunnyproducciones24@gmail.com</p>
        </div>
        <div>
          <strong>TELÉFONO</strong>
          <p>(55) 1234 5678</p>
        </div>
        <div>
          <strong>REDES SOCIALES</strong>
          <p>📷</p>
        </div>
      </div>
    </footer>
    </section>
  </div>
  );
};

