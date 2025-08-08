// app/booking/page.tsx
'use client';
import BookingFlow from '@/components/booking/BookingFlow';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Agendamento Online
          </h1>
          <p className="text-xl text-gray-600">
            Reserve seu serviço em poucos passos
          </p>
        </div>
        <BookingFlow />
      </div>
    </div>
  );
}