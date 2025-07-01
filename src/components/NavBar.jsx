import React, { useState } from "react";
import { createBrowserRouter, Link } from "react-router-dom";



export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between bg-[#ededed] px-4 py-2 items-center p-4 bg-white shadow">

      <div className="flex items-center m-5 gap-2">
        <img src="/img/bunnylogo1.png" alt="Bunny Logo" className="h-20" />

      </div>
      <ul className="flex gap-4 font-semibold text-md">
        <li><Link to="/" className="hover:text-pink-500">INICIO</Link></li>
        <li><Link to="/nosotros" className="hover:text-pink-500">SOBRE NOSOTROS</Link></li>
        <li><Link to="/servicios" className="hover:text-pink-500">SERVICIOS</Link></li>
        <li><a href="https://wa.me/5493512008632" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-white px-4 py-3 rounded-full hover:bg-pink-500">CANTÁCTANOS AHORA</a></li>
      </ul>

    </nav>
  );
};
