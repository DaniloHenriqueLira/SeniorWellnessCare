interface Service {
  title: string;
  description: string;
  icon: string;
  price: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Cabelo",
      description: "Corte, coloração, tratamentos e penteados ao domicílio",
      icon: "💇‍♀️",
      price: "Desde 25€"
    },
    {
      title: "Unhas",
      description: "Manicure, pedicure e nail art no conforto da sua casa",
      icon: "💅",
      price: "Desde 15€"
    },
    {
      title: "Massagem Terapêutica",
      description: "Relaxante, descontracturante e drenagem linfática",
      icon: "💆‍♀️",
      price: "Desde 35€"
    },
    {
      title: "Sobrancelhas",
      description: "Design, limpeza e microblading de sobrancelhas",
      icon: "👁️",
      price: "Desde 20€"
    },
    {
      title: "Pacotes Completos",
      description: "Combinações especiais com desconto",
      icon: "🎁",
      price: "Consulte valores"
    },
    {
      title: "Eventos Especiais",
      description: "Noivas, festas e ocasiões especiais",
      icon: "💒",
      price: "Desde 80€"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Os Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Beleza e bem-estar no conforto da sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-pink-600 font-semibold">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}