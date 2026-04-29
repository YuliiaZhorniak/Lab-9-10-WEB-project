import React from 'react';

const WagonSelector = ({ wagons, activeWagonIndex, onWagonChange }) => {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      {wagons.map((w, index) => (
        <button
          key={index}
          onClick={() => onWagonChange(index)}
          style={{
            padding: '10px 20px',
            border: '2px solid black',
            backgroundColor: activeWagonIndex === index ? 'black' : 'white',
            color: activeWagonIndex === index ? 'white' : 'black',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase'
          }}
        >
          Вагон {index + 1}
        </button>
      ))}
    </div>
  );
};

export default WagonSelector;