import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  return (
    /* Контейнер, який вишиковує картки в рядок (як ми робили раніше) */
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
      width: '100%',
      padding: '0 20px'
    }}>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
      
      {/* Якщо список порожній (наприклад, нічого не знайдено через пошук) */}
      {trains.length === 0 && (
        <div style={{ 
          padding: '40px', 
          border: '4px dashed #ccc', 
          color: '#999', 
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          Потягів не знайдено
        </div>
      )}
    </div>
  );
};

export default TrainList;