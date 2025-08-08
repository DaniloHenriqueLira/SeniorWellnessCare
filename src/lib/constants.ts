// lib/constants.ts
import { Professional } from './types';

export const PROFESSIONALS: Professional[] = [
  {
    id: 'maria-silva',
    name: 'Maria Silva',
    title: 'Cabeleireira',
    experience: '40+ anos de experiência',
    services: [
      { name: 'Corte Feminino', price: '30€', duration: '45min', description: 'Corte personalizado com consultoria' },
      { name: 'Coloração', price: '50€', duration: '2h', description: 'Coloração profissional com produtos premium' },
      { name: 'Madeixas/Balayage', price: '80€', duration: '3h', description: 'Técnicas modernas de iluminação' },
      { name: 'Tratamento Capilar', price: '40€', duration: '1h', description: 'Hidratação e nutrição profunda' },
      { name: 'Penteado Evento', price: '60€', duration: '1h30', description: 'Penteados para ocasiões especiais' },
      { name: 'Alisamento/Progressiva', price: '120€', duration: '3h', description: 'Alisamento profissional duradouro' }
    ]
  },
  {
    id: 'ana-santos',
    name: 'Ana Santos',
    title: 'Massagista',
    experience: 'Terapeuta certificada',
    services: [
      { name: 'Massagem Relaxante', price: '45€', duration: '1h', description: 'Técnicas de relaxamento profundo' },
      { name: 'Massagem Terapêutica', price: '55€', duration: '1h', description: 'Alívio de tensões musculares' },
      { name: 'Drenagem Linfática', price: '50€', duration: '1h', description: 'Redução de retenção de líquidos' },
      { name: 'Massagem Desportiva', price: '60€', duration: '1h30', description: 'Recuperação muscular pós-treino' },
      { name: 'Reflexologia', price: '40€', duration: '45min', description: 'Estimulação de pontos reflexos' },
      { name: 'Massagem Pedras Quentes', price: '70€', duration: '1h30', description: 'Relaxamento com pedras vulcânicas' }
    ]
  }
];

export const WORK_HOURS = {
  START: 9,
  END: 19,
  SLOT_DURATION: 30 // minutos
};

export const DAYS_AHEAD = 30;

export const STORAGE_KEYS = {
  BOOKINGS: 'bookings'
} as const;