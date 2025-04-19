import React from 'react'

export default function Banner() {
  return (
    <div className ="flex justify-center items-center flex-col">
      
      <div className="max-w-xs">
        <img src="img/Star_Wars_Logo.svg" alt="" className='h-auto w-full' />
      </div>
      <p className="2xl:text-4xl md:text-xl sm:text-sm font-bold text-white border-4 border-black px-6 py-3 rounded-xl shadow-md bg-black/20 backdrop-blur-sm">
      Welcome to my Star Wars search engine
      </p>


    </div>
  )
}
