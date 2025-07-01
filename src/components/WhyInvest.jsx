import React from "react";
import { CheckCircle } from "lucide-react"; // opcional, ícono decorativo
import MiComponenteSpline from '../pages/sobrenosotros/SobreNosotros'; // Ajusta la ruta si es necesario


export default function WhyInvest() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto bg-pink-200 rounded-3xl shadow-xl p-10 md:p-16 text-gray-800">
     
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-800">
          ¿Por qué invertir en el diseño de tu página?
        </h2>
        <ul className="space-y-6 text-lg md:text-xl font-medium">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-pink-600 w-6 h-6 mt-1" />
            Una web bien diseñada transmite confianza y profesionalismo desde el primer segundo.
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-pink-600 w-6 h-6 mt-1" />
            Te destacás de la competencia y generás una mejor experiencia para tus potenciales clientes.
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-pink-600 w-6 h-6 mt-1" />
            Es un espacio 100% tuyo, sin algoritmos ni límites como en redes sociales.
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-pink-600 w-6 h-6 mt-1" />
            Convertís visitas en ventas y automatizás consultas desde el botón de WhatsApp.
          </li>
        </ul>
      </div>
    </section>
  );
}
