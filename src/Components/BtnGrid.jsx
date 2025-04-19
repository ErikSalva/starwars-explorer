import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function BtnGrid() {
  
  const navigate = useNavigate();


  const categories = [
    'Films',
    'People',
    'Planets',
    'Species',
    'Starships',
    'Vehicles'
  ]
  
  const handleCategoryClick = (category) => {
    // Navega a la ruta correspondiente según la categoría
    navigate(`/${category.toLowerCase()}`);
  };
  
  return (

    <div className='flex items-center justify-center mt-10 w-screen'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4  w-1/2">
      {categories.map((category) => (
        <button
          key={category}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-xl shadow w-full transition-all duration-300 hover:shadow-sm hover:shadow-black"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}

    </div>
    </div>  

  )
}
