// components/Hero.tsx
export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <nav className="relative z-10 flex justify-between items-center px-6 lg:px-20 py-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Bella Wellness
        </h1>
        <button onClick={onBookClick} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all">
          Marcar Agora
        </button>
      </nav>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="animate-pulse">●</span> Disponível em Lisboa e Porto
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Beleza e <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Bem-estar</span> ao Domicílio
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Mais de 40 anos de experiência em cabeleireiro e massagens terapêuticas. 
              Levamos o salão até si com todo o conforto e profissionalismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onBookClick} className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Agendar Serviço
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
                Ver Preçário
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">40+</p>
                <p className="text-sm text-gray-600">Anos Experiência</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5.0</p>
                <p className="text-sm text-gray-600">Avaliação Média</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30"></div>
            <img src="/api/placeholder/600/700" alt="Profissional" className="relative rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
