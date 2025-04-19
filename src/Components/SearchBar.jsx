import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardFilm from './CardFilm';
import Card from './card';

export default function SearchBar({ category }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [allResults, setAllResults] = useState([]); // Todos los resultados
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  // Slice para obtener los resultados actuales
  // Slice corta un array desde la posicion del vector x,y sendo y el hasta

  const currentResults = allResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const totalPages = Math.ceil(allResults.length / resultsPerPage);

  const fetchData = async () => {
    let url = '';
    switch (category) {
      case 'people':
        url = `https://www.swapi.tech/api/people/?name=${searchTerm}`;
        break;
      case 'vehicles':
        url = `https://www.swapi.tech/api/vehicles/?name=${searchTerm}`;
        break;
      case 'starships':
        url = `https://www.swapi.tech/api/starships/?name=${searchTerm}`;
        break;
      case 'planets':
        url = `https://www.swapi.tech/api/planets/?name=${searchTerm}`;
        break;
      case 'species':
        url = `https://www.swapi.tech/api/species/?name=${searchTerm}`;
        break;
      case 'films':
        url = `https://www.swapi.tech/api/films/?title=${searchTerm}`;
        break;
      default:
        break;
    }

    try {
      const response = await axios.get(url);
      const results = response.data.result || [];
      setAllResults(results);
      setCurrentPage(1); // Resetea a la primera página cada búsqueda
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4">
      {/* Buscador */}
      <div className="flex items-center space-x-4 max-w-4xl w-full">
        <input
          type="text"
          placeholder={`Search ${category}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Search
        </button>
      </div>

      {/* Resultados */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentResults.length > 0 ? (
          currentResults.map((result, index) =>
            category === 'films' ? (
              <CardFilm key={index} film={result} />
            ) : (
              <Card
                key={index}
                name={result.properties?.name || 'Nombre no disponible'}
                description={result.description || 'Descripción no disponible'}
              />
            )
          )
        ) : (
          <p className="text-gray-500 text-center col-span-full">No results found</p>
        )}
      </div>

      {/* Paginación */}
      {/* tambien se pueede usar el terminario "{allResults.length > resultsPerPage? ()"" */}
      {allResults.length > resultsPerPage && (
        <div className="flex justify-center mt-4 space-x-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-white">
            Página {currentPage} de {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
