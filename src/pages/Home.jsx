import React, { useState } from 'react';
import { trains } from '../data/trains';
import TrainList from '../components/TrainList'; 

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredTrains = trains.filter(train => 
    train.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     
      <div style={{ marginBottom: '3rem', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontWeight: '900', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>
            Пошук рейсу
        </h2>
        <input 
          type="text"
          placeholder="Введіть номер потяга або маршрут!"
          style={{
            width: '100%',
            padding: '16px',
            border: '4px solid black',
            textAlign: 'center',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)'
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TrainList trains={filteredTrains} />

    </div>
  );
};

export default Home;