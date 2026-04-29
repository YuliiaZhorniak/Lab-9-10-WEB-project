import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    /* BookingProvider має бути зовні, щоб дані були доступні скрізь */
    <BookingProvider>
      <BrowserRouter>
        <div className="w-full flex flex-col items-center">
          <nav className="w-full bg-black text-white p-6 mb-10 shadow-xl">
            <h1 className="text-2xl font-black uppercase tracking-widest text-center">
              Укрзалізниця
            </h1>
          </nav>
          
          <main className="w-full max-w-4xl px-4 flex flex-col items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking/:trainId" element={<Booking />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;