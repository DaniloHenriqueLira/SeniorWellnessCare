// components/sections/About.tsx
export default function About() {
  const features = [
    { icon: '✓', title: 'Material Profissional', desc: 'Produtos e equipamentos de alta qualidade' },
    { icon: '✓', title: 'Higiene e Segurança', desc: 'Protocolos rigorosamente seguidos' },
    { icon: '✓', title: 'Atendimento Personalizado', desc: 'Cada cliente recebe atenção especial' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Profissionalismo ao Seu Serviço
            </h2>
            <p className="text-lg text-gray-600">
              Com mais de 40 anos de experiência, nossa equipe traz o melhor 
              dos cuidados profissionais diretamente até você.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">💇‍♀️</div>
                <p className="font-semibold">Cabeleireiro</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 h-48 flex items-center justify-center mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">💆‍♀️</div>
                <p className="font-semibold">Massagens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}