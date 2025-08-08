// components/booking/ProfessionalSelect.tsx
import { PROFESSIONALS } from '@/lib/constants';

interface Props {
  selected: string;
  onSelect: (professional: string) => void;
}

export default function ProfessionalSelect({ selected, onSelect }: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Escolha o Profissional</h3>
      
      <div className="grid gap-4">
        {PROFESSIONALS.map((prof) => (
          <button
            key={prof.id}
            onClick={() => onSelect(prof.name)}
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all text-left"
          >
            <h4 className="font-bold text-lg mb-2">{prof.name}</h4>
            <p className="text-gray-600">{prof.title}</p>
            <p className="text-sm text-gray-500">{prof.experience}</p>
          </button>
        ))}
      </div>
    </div>
  );
}