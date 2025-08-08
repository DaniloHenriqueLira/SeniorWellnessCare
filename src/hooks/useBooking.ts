// hooks/useBooking.ts
import { useState } from 'react';
import { Booking, BookingState, ClientInfo } from '@/lib/types';
import { useLocalStorage } from './useLocalStorage';

const initialClientInfo: ClientInfo = {
  name: '',
  phone: '',
  email: '',
  notes: ''
};

const initialState: BookingState = {
  step: 1,
  selectedProfessional: '',
  selectedService: '',
  selectedDate: '',
  selectedTime: '',
  clientInfo: initialClientInfo
};

export const useBooking = () => {
  const [state, setState] = useState<BookingState>(initialState);
  const [bookings, setBookings] = useLocalStorage<Booking[]>('bookings', []);

  const updateState = (updates: Partial<BookingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => updateState({ step: state.step + 1 });
  const prevStep = () => updateState({ step: state.step - 1 });

  const createBooking = () => {
    const booking: Booking = {
      id: Date.now().toString(),
      service: state.selectedService,
      professional: state.selectedProfessional,
      date: state.selectedDate,
      time: state.selectedTime,
      clientName: state.clientInfo.name,
      clientPhone: state.clientInfo.phone,
      clientEmail: state.clientInfo.email,
      notes: state.clientInfo.notes,
      createdAt: new Date().toISOString()
    };

    setBookings([...bookings, booking]);
    return booking;
  };

  const resetBooking = () => setState(initialState);

  const isSlotBooked = (date: string, time: string, professional: string) => {
    return bookings.some(b => 
      b.date === date && 
      b.time === time && 
      b.professional === professional
    );
  };

  return {
    state,
    updateState,
    nextStep,
    prevStep,
    createBooking,
    resetBooking,
    isSlotBooked,
    bookings
  };
};