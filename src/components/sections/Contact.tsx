// components/sections/Contact.tsx
export default function Contact() {
  const contactInfo = [
    { icon: '📱', label: '+351 912 345 678' },
    { icon: '📧', label: 'geral@bellawellness.pt' },
    { icon: '📍', label: 'Lisboa e Porto' }
  ];

  const schedule = [
    'Segunda a Sexta: 09:00 - 19:00',
    'Sábado: 09:00 - 17:00',
    'Domingo: Encerrado'
  ];

  return (
    <footer id="contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Bella Wellness</h3>
            <p className="mb-4 opacity-90">
              Serviços profissionais de beleza e bem-estar ao domicílio.
            </p>
            <div className="flex gap-4">
              {['F', 'I', 'W'].map((icon, idx) => (
                <div key={idx} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
                  <span className="text-sm font-bold">{icon}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contactos</h4>
            <div className="space-y-3 opacity-90">
              {contactInfo.map((contact, idx) => (
                <p key={idx} className="flex items-center gap-2">
                  <span>{contact.icon}</span> {contact.label}
                </p>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Horário</h4>
            <div className="space-y-2 opacity-90">
              {schedule.map((time, idx) => (
                <p key={idx}>{time}</p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center opacity-90">
          <p>© 2024 Bella Wellness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}