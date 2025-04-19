import React from 'react'
import { Navbar } from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'

export default function Planets() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navbar */}
            <Navbar />

            <div className="pt-16 pb-8 px-4 sm:px-8 lg:px-16">
            {/* Title Section */}
            <div className="text-center mb-6">
                <h1 className="text-4xl font-extrabold text-yellow-400">Planets</h1>
                <p className="text-xl text-gray-300 mt-2">Explore the planets in the Star Wars galaxy!</p>
            </div>

            {/* SearchBar */}
            <div className="max-w-3xl mx-auto mb-16">
                <SearchBar category="planets" />
            </div>
            </div>
        </div>
    );
}