import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // o cualquier ícono similar
import { Logo } from "../logo/Logo";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className=" mx-auto flex items-center justify-between w-full md:w-7xl md:mx-auto">
      <Logo fontSize="8px"/>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú (desktop) */}
        <ul className="hidden md:flex gap-6 font-semibold text-md text-gray-800">
          <li><Link to="/" className="hover:text-pink-500">INICIO</Link></li>
          <li><Link to="/nosotros" className="hover:text-pink-500">SOBRE NOSOTROS</Link></li>
          <li><Link to="/servicios" className="hover:text-pink-500">SERVICIOS</Link></li>
          <li>
            <a
              href="https://wa.me/5493512008632"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
            >
              CONTÁCTANOS
            </a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable (mobile) */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-4 px-2 text-gray-800 font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">INICIO</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">SOBRE NOSOTROS</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">SERVICIOS</Link>
          <a
            href="https://wa.me/5493512008632"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
          >
            CONTÁCTANOS
          </a>
        </div>
      )}
    </nav>
  );
}