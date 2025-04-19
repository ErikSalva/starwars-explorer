import React, { useState } from 'react'
import { Link } from 'react-router-dom'; // Usamos Link de react-router-dom para navegación

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Botón Home a la izquierda */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-xl shadow-md md:block hidden transition-all duration-300"
          >
            Home
          </Link>
        </div>

        {/* Logo Star Wars en el centro */}
        <div className="flex items-center space-x-4">
          <img 
            src="img/Star_Wars_Logo.svg" 
            alt="Star Wars Logo" 
            className="w-24"
          />
        </div>

        {/* Enlaces de navegación para pantallas grandes */}
        <div className="hidden md:flex space-x-6">
          <Link to="/films" className="hover:text-yellow-500 transition-all duration-300 font-semibold">Films</Link>
          <Link to="/people" className="hover:text-yellow-500 transition-all duration-300 font-semibold">People</Link>
          <Link to="/planets" className="hover:text-yellow-500 transition-all duration-300 font-semibold">Planets</Link>
          <Link to="/species" className="hover:text-yellow-500 transition-all duration-300 font-semibold">Species</Link>
          <Link to="/starships" className="hover:text-yellow-500 transition-all duration-300 font-semibold">Starships</Link>
          <Link to="/vehicles" className="hover:text-yellow-500 transition-all duration-300 font-semibold">Vehicles</Link>

        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/films" className="hover:text-yellow-500">Films</Link>
          <Link to="/people" className="hover:text-yellow-500">People</Link>
          <Link to="/planets" className="hover:text-yellow-500">Planets</Link>
          <Link to="/species" className="hover:text-yellow-500">Species</Link>
          <Link to="/starships" className="hover:text-yellow-500">Starships</Link>
          <Link to="/vehicles" className="hover:text-yellow-500">Vehicles</Link>
        </div>
      )}
    </div>
  )
}
