// components/About.tsx
export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Profissionalismo e Experiência ao Seu Serviço
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com mais de 40 anos de experiência no mercado de beleza e bem-estar, 
              trazemos até si o melhor dos cuidados profissionais. Nossa equipa é 
              formada por especialistas qualificados e apaixonados pelo que fazem.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Material Profissional</h3>
                  <p className="text-gray-600">Utilizamos apenas produtos e equipamentos de alta qualidade</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Higiene e Segurança</h3>
                  <p className="text-gray-600">Todos os protocolos de higiene rigorosamente seguidos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Atendimento Personalizado</h3>
                  <p className="text-gray-600">Cada cliente é único e merece atenção especial</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img src="/api/placeholder/300/400" alt="Serviço 1" className="rounded-2xl shadow-lg" />
            <img src="/api/placeholder/300/400" alt="Serviço 2" className="rounded-2xl shadow-lg mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}