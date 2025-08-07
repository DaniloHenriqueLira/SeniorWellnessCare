export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serviços de Beleza <span className="text-pink-600">ao Domicílio</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Cabelo, unhas e massagens terapêuticas no conforto da sua casa. Serviços profissionais em Portugal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Conhecer Serviços
              </button>
            </div>
          </div>
          <div className="bg-blue-200 rounded-2xl h-96 flex items-center justify-center">
            <span className="text-blue-800 text-lg font-medium">Cuidados Profissionais</span>
          </div>
        </div>
      </div>
    </section>
  );
}