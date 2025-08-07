// components/BookingSystem.tsx
'use client'
import { useState, useEffect } from 'react'

interface TimeSlot {
  time: string
  available: boolean
}

interface Booking {
  id: string
  service: string
  professional: string
  date: string
  time: string
  clientName: string
  clientPhone: string
  clientEmail: string
  notes?: string
  createdAt: string
}

export default function BookingSystem() {
  const [step, setStep] = useState(1)
  const [selectedProfessional, setSelectedProfessional] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  })
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])

  // Carregar agendamentos do localStorage
  useEffect(() => {
    const stored = localStorage.getItem('bookings')
    if (stored) {
      setBookings(JSON.parse(stored))
    }
  }, [])

  // Gerar horários disponíveis
  useEffect(() => {
    if (selectedDate && selectedProfessional) {
      const slots: TimeSlot[] = []
      const startHour = 9
      const endHour = 19
      
      for (let hour = startHour; hour < endHour; hour++) {
        for (let min = 0; min < 60; min += 30) {
          const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
          const isBooked = bookings.some(
            b => b.date === selectedDate && 
                 b.time === time && 
                 b.professional === selectedProfessional
          )
          slots.push({ time, available: !isBooked })
        }
      }
      setAvailableSlots(slots)
    }
  }, [selectedDate, selectedProfessional, bookings])

  const handleBooking = () => {
    const newBooking: Booking = {
      id: Date.now().toString(),
      service: selectedService,
      professional: selectedProfessional,
      date: selectedDate,
      time: selectedTime,
      clientName: clientInfo.name,
      clientPhone: clientInfo.phone,
      clientEmail: clientInfo.email,
      notes: clientInfo.notes,
      createdAt: new Date().toISOString()
    }

    const updatedBookings = [...bookings, newBooking]
    setBookings(updatedBookings)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
    
    // Enviar notificação (simulado)
    alert(`Agendamento confirmado!\n\nServiço: ${selectedService}\nData: ${selectedDate}\nHora: ${selectedTime}\n\nReceberá um email de confirmação em breve.`)
    
    // Reset form
    setStep(1)
    setSelectedProfessional('')
    setSelectedService('')
    setSelectedDate('')
    setSelectedTime('')
    setClientInfo({ name: '', phone: '', email: '', notes: '' })
  }

  const services = {
    'Maria Silva - Cabeleireira': [
      'Corte Feminino - 30€',
      'Coloração - 50€',
      'Madeixas/Balayage - 80€',
      'Tratamento Capilar - 40€',
      'Penteado Evento - 60€',
      'Alisamento/Progressiva - 120€'
    ],
    'Ana Santos - Massagista': [
      'Massagem Relaxante - 45€',
      'Massagem Terapêutica - 55€',
      'Drenagem Linfática - 50€',
      'Massagem Desportiva - 60€',
      'Reflexologia - 40€',
      'Massagem Pedras Quentes - 70€'
    ]
  }

  // Obter próximos 30 dias
  const getNextDays = () => {
    const days = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays
      if (date.getDay() !== 0) {
        days.push(date.toISOString().split('T')[0])
      }
    }
    return days
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Sistema de Agendamento Online</h2>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {s}
              </div>
              {s < 4 && <div className={`w-20 h-1 ${step > s ? 'bg-purple-600' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>

        {/* Step 1: Escolher Profissional */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Escolha o Profissional</h3>
            <div className="grid gap-4">
              {Object.keys(services).map((prof) => (
                <button
                  key={prof}
                  onClick={() => {
                    setSelectedProfessional(prof)
                    setStep(2)
                  }}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all text-left"
                >
                  <h4 className="font-bold text-lg mb-2">{prof}</h4>
                  <p className="text-gray-600">
                    {prof.includes('Cabeleireira') ? '40+ anos de experiência' : 'Terapeuta certificada'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Escolher Serviço */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Escolha o Serviço</h3>
            <div className="grid gap-3">
              {services[selectedProfessional as keyof typeof services]?.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    setSelectedService(service)
                    setStep(3)
                  }}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all text-left"
                >
                  {service}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="text-purple-600 hover:underline">
              ← Voltar
            </button>
          </div>
        )}

        {/* Step 3: Escolher Data e Hora */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Escolha a Data e Hora</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Data</label>
              <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
              >
                <option value="">Selecione uma data</option>
                {getNextDays().map(date => {
                  const d = new Date(date)
                  const weekday = d.toLocaleDateString('pt-PT', { weekday: 'long' })
                  const formatted = d.toLocaleDateString('pt-PT')
                  return (
                    <option key={date} value={date}>
                      {formatted} - {weekday}
                    </option>
                  )
                })}
              </select>
            </div>

            {selectedDate && (
              <div>
                <label className="block text-sm font-medium mb-2">Horário Disponível</label>
                <div className="grid grid-cols-4 gap-2">
                  {availableSlots.map(slot => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`p-2 rounded-lg text-sm font-medium transition-all ${
                        slot.available
                          ? selectedTime === slot.time
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-purple-100'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="text-purple-600 hover:underline">
                ← Voltar
              </button>
              {selectedTime && (
                <button 
                  onClick={() => setStep(4)}
                  className="ml-auto bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                >
                  Continuar
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Informações do Cliente */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Suas Informações</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Resumo do Agendamento:</h4>
              <p className="text-sm text-gray-600">Profissional: {selectedProfessional}</p>
              <p className="text-sm text-gray-600">Serviço: {selectedService}</p>
              <p className="text-sm text-gray-600">Data: {new Date(selectedDate).toLocaleDateString('pt-PT')}</p>
              <p className="text-sm text-gray-600">Hora: {selectedTime}</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo *</label>
              <input
                type="text"
                value={clientInfo.name}
                onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telemóvel *</label>
              <input
                type="tel"
                value={clientInfo.phone}
                onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
                placeholder="+351 9XX XXX XXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                value={clientInfo.email}
                onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Observações (opcional)</label>
              <textarea
                value={clientInfo.notes}
                onChange={(e) => setClientInfo({...clientInfo, notes: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none h-24"
                placeholder="Alguma informação adicional..."
              />
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(3)} className="text-purple-600 hover:underline">
                ← Voltar
              </button>
              <button 
                onClick={handleBooking}
                disabled={!clientInfo.name || !clientInfo.phone || !clientInfo.email}
                className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Agendamento
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}