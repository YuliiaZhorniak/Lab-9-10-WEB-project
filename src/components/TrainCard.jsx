import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div className="train-box" style={{
      backgroundColor: '#80ae96',
      border: '1px solid black',
      padding: '2rem',
      marginBottom: '2rem',
      width: '320px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     
    }}>
      
      {/* Номер потяга */}
      <div style={{
    
        color: 'black',
        padding: '4px 16px',
        fontWeight: 'bold',
       
        marginBottom: '1rem',
        textTransform: 'uppercase'
      }}>
        № {train.number}
      </div>
      
      {/* Маршрут */}
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        lineHeight: '1.2'
      }}>
        {train.route.from} <br/> — <br/> {train.route.to}
      </h2>
      
      {/* Час */}
      <div style={{ marginBottom: '1.5rem', fontWeight: '500' }}>
        <p>Відправлення: <br/> <span style={{ color: '#030304', fontWeight: 'bold' }}>{train.departure}</span></p>
        <p>Час у дорозі: <br/> <span style={{ color: '#040405', fontWeight: 'bold' }}>{train.duration}</span></p>
      </div>

      
      <Link 
        to={`/booking/${train.id}`}
        style={{
          width: '100%',
          backgroundColor: '#133525fb',
          color: 'white',
          padding: '12px 0',
          fontWeight: '900',
          textTransform: 'uppercase',
          textDecoration: 'none',
          textAlign: 'center',
          display: 'block',
          transition: '0.2s'
        }}
      >
        Вибрати квитки
      </Link>
    </div>
  );
};

export default TrainCard;