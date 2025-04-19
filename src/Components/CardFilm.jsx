import React from 'react';

export default function CardFilm({film}) {

  // Asegurémonos de que la película tiene los datos necesarios
  const {
    title,
    director,
    producer,
    release_date,
    opening_crawl,
  } = film?.properties || {};
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-900 border-2 border-yellow-500 flex flex-col justify-between">
      <div className="p-6 flex flex-col items-center">
        {/* Fondo de estrella o icono futurista */}
        <div className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center mb-4">
          <span className="text-4xl text-yellow-500 font-extrabold">{title?.[0]}</span> {/* Primera letra del título como icono */}
        </div>
        <h3 className="text-3xl font-semibold text-yellow-400 text-center mb-2">{title}</h3>
        
        {/* Mostrar el opening_crawl o un texto predeterminado */}
        <p className="text-gray-400 text-center mb-2">{opening_crawl || 'No opening crawl available'}</p>

        <div className="text-center text-gray-300">
          <p><strong>Director:</strong> {director}</p>
          <p><strong>Producer(s):</strong> {producer}</p>
          <p><strong>Release Date:</strong> {new Date(release_date).toLocaleDateString()}</p>
        </div>
      </div>
      
      {/* Coloca el texto en la parte inferior */}
      <div className="p-4 bg-gray-800 text-center text-gray-500 text-sm mt-auto">
        <p className="italic">Explore the galaxy</p>
      </div>
    </div>
  );
}
