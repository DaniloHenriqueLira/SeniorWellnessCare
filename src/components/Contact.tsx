// components/Contact.tsx
export default function Contact() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bella Wellness</h3>
            <p className="mb-4 opacity-90">
              Serviços profissionais de beleza e bem-estar ao domicílio em Lisboa e Porto.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span>i</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span>w</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contactos</h4>
            <div className="space-y-3 opacity-90">
              <p className="flex items-center gap-2">
                <span>📱</span> +351 912 345 678
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span> geral@bellawellness.pt
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Lisboa e Porto
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Horário</h4>
            <div className="space-y-2 opacity-90">
              <p>Segunda a Sexta: 09:00 - 19:00</p>
              <p>Sábado: 09:00 - 17:00</p>
              <p>Domingo: Encerrado</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center opacity-90">
          <p>© 2024 Bella Wellness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}