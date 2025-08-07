// components/Services.tsx
export default function Services() {
  const services = {
    cabelo: [
      { name: 'Corte Feminino', price: '30€', duration: '45min', description: 'Corte personalizado com consultoria' },
      { name: 'Coloração', price: '50€', duration: '2h', description: 'Coloração profissional com produtos premium' },
      { name: 'Madeixas/Balayage', price: '80€', duration: '3h', description: 'Técnicas modernas de iluminação' },
      { name: 'Tratamento Capilar', price: '40€', duration: '1h', description: 'Hidratação e nutrição profunda' },
      { name: 'Penteado Evento', price: '60€', duration: '1h30', description: 'Penteados para ocasiões especiais' },
      { name: 'Alisamento/Progressiva', price: '120€', duration: '3h', description: 'Alisamento profissional duradouro' }
    ],
    massagem: [
      { name: 'Massagem Relaxante', price: '45€', duration: '1h', description: 'Técnicas de relaxamento profundo' },
      { name: 'Massagem Terapêutica', price: '55€', duration: '1h', description: 'Alívio de tensões musculares' },
      { name: 'Drenagem Linfática', price: '50€', duration: '1h', description: 'Redução de retenção de líquidos' },
      { name: 'Massagem Desportiva', price: '60€', duration: '1h30', description: 'Recuperação muscular pós-treino' },
      { name: 'Reflexologia', price: '40€', duration: '45min', description: 'Estimulação de pontos reflexos' },
      { name: 'Massagem Pedras Quentes', price: '70€', duration: '1h30', description: 'Relaxamento com pedras vulcânicas' }
    ]
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços Profissionais</h2>
          <p className="text-xl text-gray-600">Qualidade de salão no conforto da sua casa</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Serviços de Cabelo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💇‍♀️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Cabeleireiro</h3>
                <p className="text-gray-600">Por Maria Silva - 40 anos de experiência</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {services.cabelo.map((service, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 hover:bg-purple-50 p-3 rounded-lg transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600">{service.price}</p>
                      <p className="text-xs text-gray-500">{service.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Serviços de Massagem */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💆‍♀️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Massagem Terapêutica</h3>
                <p className="text-gray-600">Por Ana Santos - Terapeuta certificada</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {services.massagem.map((service, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 hover:bg-pink-50 p-3 rounded-lg transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-pink-600">{service.price}</p>
                      <p className="text-xs text-gray-500">{service.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}