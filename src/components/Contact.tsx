export default function Contact() {
  return (
    <section className="py-20 bg-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Agende o Seu Serviço
        </h2>
        <p className="text-lg mb-8 text-pink-100">
          Marcações ao domicílio em Portugal. Beleza profissional na sua casa.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="font-bold mb-2">📱 Telemóvel</h3>
            <p>+351 912 345 678</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="font-bold mb-2">📧 Email</h3>
            <p>geral@bellawellness.pt</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="font-bold mb-2">📍 Zona de Actuação</h3>
            <p>Lisboa, Porto e arredores</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold transition-colors">
            Marcar Serviço
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-pink-600 transition-colors">
            WhatsApp Direto
          </button>
        </div>
      </div>
    </section>
  );
}