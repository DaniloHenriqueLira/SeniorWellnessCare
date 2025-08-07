'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold">B</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Senior Wellness Care</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Início</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Serviços</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Preços</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Contato</a>
        </nav>

        <button className="hidden md:block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
          Agendar
        </button>

        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className="h-0.5 bg-gray-600 mb-1"></span>
            <span className="h-0.5 bg-gray-600 mb-1"></span>
            <span className="h-0.5 bg-gray-600"></span>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-gray-700 py-2">Início</a>
            <a href="#" className="text-gray-700 py-2">Serviços</a>
            <a href="#" className="text-gray-700 py-2">Preços</a>
            <a href="#" className="text-gray-700 py-2">Contato</a>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg mt-4">
              Agendar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}