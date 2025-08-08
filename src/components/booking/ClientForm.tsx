// components/booking/ClientForm.tsx
import { ClientInfo } from '@/lib/types';

interface Props {
  clientInfo: ClientInfo;
  booking: {
    professional: string;
    service: string;
    date: string;
    time: string;
  };
  onUpdate: (info: ClientInfo) => void;
  onConfirm: () => void;
}

export default function ClientForm({ clientInfo, booking, onUpdate, onConfirm }: Props) {
  // Atualiza campo específico
  const updateField = (field: keyof ClientInfo, value: string) => {
    onUpdate({ ...clientInfo, [field]: value });
  };

  // Valida formulário
  const isValid = clientInfo.name && clientInfo.phone && clientInfo.email;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-PT');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Confirme seu Agendamento</h3>
      
      {/* Resumo do agendamento */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Resumo:</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Profissional: {booking.professional}</p>
          <p>Serviço: {booking.service}</p>
          <p>Data: {formatDate(booking.date)}</p>
          <p>Hora: {booking.time}</p>
        </div>
      </div>

      {/* Formulário cliente */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome Completo *</label>
          <input
            type="text"
            value={clientInfo.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telemóvel *</label>
          <input
            type="tel"
            value={clientInfo.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
            placeholder="+351 9XX XXX XXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            value={clientInfo.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Observações</label>
          <textarea
            value={clientInfo.notes}
            onChange={(e) => updateField('notes', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none h-24"
            placeholder="Informações adicionais (opcional)"
          />
        </div>
      </div>

      {/* Botão confirmação */}
      <button 
        onClick={onConfirm}
        disabled={!isValid}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Confirmar Agendamento
      </button>
    </div>
  );
}