// components/booking/BookingFlow.tsx
'use client';
import { useBooking } from '@/hooks/useBooking';
import ProgressBar from '@/components/ui/ProgressBar';
import ProfessionalSelect from './ProfessionalSelect';
import ServiceSelect from './ServiceSelect';
import DateTimeSelect from './DateTimeSelect';
import ClientForm from './ClientForm';

export default function BookingFlow() {
  const { state, updateState, nextStep, prevStep, createBooking, resetBooking } = useBooking();

  const handleConfirm = () => {
    const booking = createBooking();
    alert(`Agendamento confirmado!\n\nServiço: ${booking.service}\nData: ${booking.date}\nHora: ${booking.time}`);
    resetBooking();
  };

  const steps = [
    { component: ProfessionalSelect, props: { selected: state.selectedProfessional, onSelect: (prof: string) => { updateState({ selectedProfessional: prof }); nextStep(); }} },
    { component: ServiceSelect, props: { professional: state.selectedProfessional, selected: state.selectedService, onSelect: (service: string) => { updateState({ selectedService: service }); nextStep(); }} },
    { component: DateTimeSelect, props: { professional: state.selectedProfessional, date: state.selectedDate, time: state.selectedTime, onSelect: (date: string, time: string) => { updateState({ selectedDate: date, selectedTime: time }); nextStep(); }} },
    { component: ClientForm, props: { clientInfo: state.clientInfo, booking: { professional: state.selectedProfessional, service: state.selectedService, date: state.selectedDate, time: state.selectedTime }, onUpdate: (info: any) => updateState({ clientInfo: info }), onConfirm: handleConfirm }}
  ];

  const CurrentStep = steps[state.step - 1]?.component;
  const stepProps = steps[state.step - 1]?.props;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <ProgressBar current={state.step} total={4} />
      
      {CurrentStep && <CurrentStep {...stepProps} />}
      
      {state.step > 1 && state.step < 4 && (
        <button 
          onClick={prevStep}
          className="mt-6 text-purple-600 hover:underline"
        >
          ← Voltar
        </button>
      )}
    </div>
  );
}