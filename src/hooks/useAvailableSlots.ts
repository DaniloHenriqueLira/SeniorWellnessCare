// hooks/useAvailableSlots.ts
import { useMemo } from 'react';
import { TimeSlot, Booking } from '@/lib/types';
import { WORK_HOURS } from '@/lib/constants';

export const useAvailableSlots = (
  date: string, 
  professional: string, 
  bookings: Booking[]
) => {
  return useMemo(() => {
    if (!date || !professional) return [];

    const slots: TimeSlot[] = [];
    
    for (let hour = WORK_HOURS.START; hour < WORK_HOURS.END; hour++) {
      for (let min = 0; min < 60; min += WORK_HOURS.SLOT_DURATION) {
        const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
        const isBooked = bookings.some(b => 
          b.date === date && 
          b.time === time && 
          b.professional === professional
        );
        
        slots.push({ time, available: !isBooked });
      }
    }
    
    return slots;
  }, [date, professional, bookings]);
};