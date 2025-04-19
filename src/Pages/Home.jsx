import React from 'react';
import Banner from '../Components/Banner'
import BtnGrid from '../Components/BtnGrid'

export const Home = () => {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="video/mandalorian.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Capa oscura sobre el video */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido sobre el video */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-6 lg:pb-48">
        <Banner />
        <BtnGrid />
      </div>
    </main>
  );
};