// app/page.tsx
'use client'
import { useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BookingSystem from '@/components/BookingSystem'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Hero onBookClick={() => setShowBooking(true)} />
      <Services />
      {showBooking && <BookingSystem />}
      <About />
      <Contact />
    </main>
  )
}