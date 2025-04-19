import React from 'react'
import { Navbar } from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'

export default function Starships() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
          {/* Navbar */}
          <Navbar />
    
          <div className="pt-16 pb-8 px-4 sm:px-8 lg:px-16">
            {/* Title Section */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-extrabold text-yellow-400">Starships</h1>
              <p className="text-xl text-gray-300 mt-2">Explore the iconic starships from the Star Wars universe!</p>
            </div>
    
            {/* SearchBar */}
            <div className="max-w-3xl mx-auto mb-16">
              <SearchBar category="starships" />
            </div>
          </div>
        </div>
      );
    }