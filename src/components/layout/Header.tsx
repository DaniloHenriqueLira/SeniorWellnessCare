// components/layout/Header.tsx
'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#', label: 'Início' },
    { href: '#services', label: 'Serviços' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-lg shadow-xl' 
        : 'bg-black/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo com animação */}
          <div className="flex items-center">
            <img 
              src="/Andrea.svg" 
              alt="Andrea Beauty" 
              className="h-14 sm:h-16 lg:h-20 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm lg:text-base text-gray-200 hover:text-white transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#EE4E7F] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            
            <a
              href="/booking"
              className="ml-4 relative overflow-hidden bg-gradient-to-r from-[#EE4E7F] to-[#FF6B9D] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(238,78,127,0.5)] hover:scale-105 group"
            >
              <span className="relative z-10">Agendar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D] to-[#EE4E7F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 my-1 ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 border-t border-white/10">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/booking"
              className="block mt-4 text-center bg-gradient-to-r from-[#EE4E7F] to-[#FF6B9D] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Agendar Agora
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}