// components/sections/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Elementos decorativos de fundo - mais sutis */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#EE4E7F]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#EE4E7F]/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Conteúdo Textual */}
            <div className="space-y-8 animate-fadeInUp">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#EE4E7F]/10 to-[#FF6B9D]/10 backdrop-blur-sm rounded-full border border-[#EE4E7F]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE4E7F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE4E7F]"></span>
                </span>
                <span className="text-sm text-gray-300 font-medium">Atendimento Premium</span>
              </div>

              {/* Título Principal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
                <span className="font-extralight">Realce sua</span>
                <span className="block font-bold bg-gradient-to-r from-[#EE4E7F] via-[#FF6B9D] to-[#FFC0CB] bg-clip-text text-transparent animate-gradient pb-2">
                  Beleza Natural
                </span>
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                Tratamentos exclusivos de beleza e bem-estar no conforto da sua casa. 
                Experiência premium com produtos de alta qualidade.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/booking" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#EE4E7F] to-[#FF6B9D] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_10px_40px_rgba(238,78,127,0.3)] hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Agendar Agora
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D] to-[#EE4E7F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <button className="group px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Fale Conosco
                  </span>
                </button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex gap-3">
                  {/* Instagram */}
                  <a href="#" className="w-10 h-10 rounded-full bg-[#EE4E7F]/20 border border-[#EE4E7F]/30 flex items-center justify-center hover:bg-[#EE4E7F]/30 transition-all">
                    <svg className="w-5 h-5 text-[#EE4E7F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="w-10 h-10 rounded-full bg-[#EE4E7F]/20 border border-[#EE4E7F]/30 flex items-center justify-center hover:bg-[#EE4E7F]/30 transition-all">
                    <svg className="w-5 h-5 text-[#EE4E7F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="#" className="w-10 h-10 rounded-full bg-[#EE4E7F]/20 border border-[#EE4E7F]/30 flex items-center justify-center hover:bg-[#EE4E7F]/30 transition-all">
                    <svg className="w-5 h-5 text-[#EE4E7F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Clientes satisfeitas</p>
                </div>
              </div>
            </div>
            
            {/* Imagem Hero */}
            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/Imagem_Hero.png"
                    alt="Andrea - Profissional de Beleza"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay gradient suave */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Badge flutuante */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-[#EE4E7F] to-[#FF6B9D] backdrop-blur-md px-5 py-3 rounded-full shadow-lg">
                    <p className="text-white text-sm font-semibold">40+ anos experiência</p>
                  </div>
                </div>

                {/* Elementos decorativos removidos - deixando clean */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave rosa moderno e elegante */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EE4E7F" />
              <stop offset="50%" stopColor="#FF6B9D" />
              <stop offset="100%" stopColor="#EE4E7F" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M0,100 C320,180 420,20 720,80 C1020,140 1120,60 1440,100 L1440,200 L0,200 Z" 
            fill="url(#pinkGradient)" 
            fillOpacity="0.15"
            filter="url(#glow)"
          />
          <path 
            d="M0,120 C360,200 480,40 720,100 C960,160 1080,80 1440,120 L1440,200 L0,200 Z" 
            fill="url(#pinkGradient)" 
            fillOpacity="0.25"
          />
          <path 
            d="M0,140 C400,180 520,100 720,140 C920,180 1040,120 1440,140 L1440,200 L0,200 Z" 
            fill="url(#pinkGradient)" 
            fillOpacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
}