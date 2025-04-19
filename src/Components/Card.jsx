import React from 'react';

const Card = ({ name, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-900 border-2 border-yellow-500 flex flex-col justify-between">
      <div className="p-6 flex flex-col items-center">
        {/* Fondo de estrella o icono futurista */}
        <div className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center mb-4">
          <span className="text-4xl text-yellow-500 font-extrabold">{name?.[0]}</span> {/* Primera letra del nombre como icono */}
        </div>
        <h3 className="text-3xl font-semibold text-yellow-400 text-center mb-2">{name}</h3>
        <p className="text-gray-400 text-center">{description || 'No description available'}</p>
      </div>
      
      {/* Coloca el texto en la parte inferior */}
      <div className="p-4 bg-gray-800 text-center text-gray-500 text-sm mt-auto">
        <p className="italic">Explore the galaxy</p>
      </div>
    </div>
  );
};

export default Card;