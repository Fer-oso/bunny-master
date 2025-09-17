import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // o cualquier ícono similar
import { Logo } from "../logo/Logo";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-2 xl:px-0 shadow-md top-0 text-xs fixed overflow-hidden z-40 w-full bg-white dark:bg-gray-100/40 backdrop-blur-2xl">
      <div className="flex items-center justify-between m-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl ">
        <Link to={"/"}><Logo height="60px" /></Link>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú (desktop) */}
        <ul className="hidden md:flex gap-6 leading-relaxed font-medium text-xs text-slate-600 ">
          <li>
            <Link to="/" className="bunny-color">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="bunny-color">
              SERVICIOS
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="bunny-color">
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/5493512008632"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full transition bunny-color"
            >
              CONTÁCTANOS
            </a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable (mobile) */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-4 px-2 text-gray-800 font-semibold">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-500"
          >
            INICIO
          </Link>
          <Link
            to="/nosotros"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-500"
          >
            SOBRE NOSOTROS
          </Link>
          <Link
            to="/servicios"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-500"
          >
            SERVICIOS
          </Link>
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
