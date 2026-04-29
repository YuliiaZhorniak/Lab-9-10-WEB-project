import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';
import { useBooking } from '../context/BookingContext';
import WagonSelector from '../components/WagonSelector'; // ПІДКЛЮЧЕНО
import BookingForm from '../components/BookingForm'; // ПІДКЛЮЧЕНО

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  
  const { bookings, addBooking } = useBooking(); 
  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [activeWagonIndex, setActiveWagonIndex] = useState(0);

  const train = trains.find(t => t.id === trainId);
  const wagon = train?.wagons[activeWagonIndex];

  const isSeatOccupied = (seatNumber) => {
    const inInitialData = wagon.occupied.includes(seatNumber);
    const inSavedBookings = bookings.some(b => 
      b.trainId === trainId && 
      b.wagonIndex === activeWagonIndex && 
      b.seats.includes(seatNumber)
    );
    return inInitialData || inSavedBookings;
  };

  const handleSeatClick = (seat) => {
    if (isSeatOccupied(seat)) return; 
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleWagonChange = (index) => {
    setActiveWagonIndex(index);
    setSelectedSeats([]);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) return alert("Будь ласка, оберіть місце!");

    addBooking({
      trainId,
      wagonIndex: activeWagonIndex,
      seats: selectedSeats,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    });

    alert("Квитки заброньовано успішно!");
    navigate('/');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      paddingBottom: '60px',
      width: '100%'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: '900', 
        textTransform: 'uppercase', 
        marginBottom: '30px' 
      }}>
        {train?.route.from} — {train?.route.to}
      </h2>

      {/* ВИКОРИСТОВУЄМО КОМПОНЕНТ ВАГОНІВ */}
      <WagonSelector 
        wagons={train?.wagons || []} 
        activeWagonIndex={activeWagonIndex} 
        onWagonChange={handleWagonChange} 
      />
      
      <div style={{
        backgroundColor: '#0a44474c', 
        border: '4px dotted black',
        padding: '40px',
        width: '100%',
        maxWidth: '550px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        
        <h3 style={{ fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase' }}>
          Оберіть вільні місця (Вагон {activeWagonIndex + 1})
        </h3>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '12px', 
          marginBottom: '40px' 
        }}>
          {wagon?.seats.map(seat => {
            const occupied = isSeatOccupied(seat); 
            const isSelected = selectedSeats.includes(seat);
            
            let bgColor = '#2ecc71'; 
            if (occupied) bgColor = '#e74c3c'; 
            if (isSelected) bgColor = '#3498db'; 

            return (
              <button 
                key={seat} 
                onClick={() => handleSeatClick(seat)}
                disabled={occupied}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: bgColor,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  cursor: occupied ? 'not-allowed' : 'pointer',
                  transform: isSelected ? 'translate(2px, 2px)' : 'none',
                  transition: '0.1s'
                }}
              >
                {seat}
              </button>
            );
          })}
        </div>

        {/* ВИКОРИСТОВУЄМО КОМПОНЕНТ ФОРМИ */}
        <BookingForm onConfirm={handleConfirm} />
        
      </div>
    </div>
  );
};

export default Booking;