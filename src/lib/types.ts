// lib/types.ts
export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  experience: string;
  services: Service[];
}

export interface Booking {
  id: string;
  service: string;
  professional: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes?: string;
  createdAt: string;
}

export interface ClientInfo {
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export interface BookingState {
  step: number;
  selectedProfessional: string;
  selectedService: string;
  selectedDate: string;
  selectedTime: string;
  clientInfo: ClientInfo;
}