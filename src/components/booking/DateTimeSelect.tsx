// components/booking/DateTimeSelect.tsx
import { useBooking } from '@/hooks/useBooking';
import { useAvailableSlots } from '@/hooks/useAvailableSlots';
import { DAYS_AHEAD } from '@/lib/constants';

interface Props {
  professional: string;
  date: string;
  time: string;
  onSelect: (date: string, time: string) => void;
}

export default function DateTimeSelect({ professional, date, time, onSelect }: Props) {
  const { bookings } = useBooking();
  const slots = useAvailableSlots(date, professional, bookings);

  // Gera próximos 30 dias úteis (sem domingo)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= DAYS_AHEAD; i++) {
      const current = new Date(today);
      current.setDate(today.getDate() + i);
      
      if (current.getDay() !== 0) { // Skip domingo
        dates.push(current.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const weekday = d.toLocaleDateString('pt-PT', { weekday: 'long' });
    const formatted = d.toLocaleDateString('pt-PT');
    return `${formatted} - ${weekday}`;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Escolha Data e Hora</h3>
      
      {/* Seleção de Data */}
      <div>
        <label className="block text-sm font-medium mb-2">Data</label>
        <select 
          value={date}
          onChange={(e) => onSelect(e.target.value, '')}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 outline-none"
        >
          <option value="">Selecione uma data</option>
          {getAvailableDates().map(dateOption => (
            <option key={dateOption} value={dateOption}>
              {formatDate(dateOption)}
            </option>
          ))}
        </select>
      </div>

      {/* Seleção de Hora */}
      {date && (
        <div>
          <label className="block text-sm font-medium mb-2">Horário</label>
          <div className="grid grid-cols-4 gap-2">
            {slots.map(slot => (
              <button
                key={slot.time}
                onClick={() => slot.available && onSelect(date, slot.time)}
                disabled={!slot.available}
                className={`p-2 rounded-lg text-sm font-medium transition-all ${
                  slot.available
                    ? time === slot.time
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
    </div>
  );
}