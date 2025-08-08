// components/booking/ServiceSelect.tsx
import { PROFESSIONALS } from '@/lib/constants';

interface Props {
  professional: string;
  selected: string;
  onSelect: (service: string) => void;
}

export default function ServiceSelect({ professional, selected, onSelect }: Props) {
  // Busca serviços do profissional selecionado
  const prof = PROFESSIONALS.find(p => p.name === professional);
  const services = prof?.services || [];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Escolha o Serviço</h3>
      
      <div className="grid gap-3">
        {services.map((service) => (
          <button
            key={service.name}
            onClick={() => onSelect(`${service.name} - ${service.price}`)}
            className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all text-left"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">{service.price}</p>
                <p className="text-xs text-gray-500">{service.duration}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}