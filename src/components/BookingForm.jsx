import React from 'react';

const BookingForm = ({ onConfirm }) => {
  return (
    <form onSubmit={onConfirm} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <input 
        required 
        name="name" 
        placeholder="Ім'я та Прізвище" 
        minLength="3"
        style={{
          padding: '15px', border: '2px solid black', fontWeight: 'bold', 
          textAlign: 'center', outline: 'none'
        }} 
      />
      <input 
        required 
        name="email" 
        type="email" 
        placeholder="email" 
        style={{ 
          padding: '15px', border: '2px solid black', fontWeight: 'bold', 
          textAlign: 'center', outline: 'none'
        }} 
      />
      <input 
        required 
        name="phone" 
        type="tel" 
        placeholder="Номер телефону" 
        pattern="[0-9]{10,13}"
        title="Введіть від 10 до 13 цифр"
        style={{ 
          padding: '15px', border: '2px solid black', fontWeight: 'bold', 
          textAlign: 'center', outline: 'none'
        }} 
      />
      <button 
        type="submit" 
        style={{
          backgroundColor: 'darkgreen', color: 'white', padding: '20px',
          border: 'none', fontWeight: '900', textTransform: 'uppercase',
          cursor: 'pointer', fontSize: '16px'
        }}
      >
        Підтвердити бронювання
      </button>
    </form>
  );
};

export default BookingForm;