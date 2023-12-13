import React from 'react';
import { useDesserts } from '@/context/DessertContext';

const SingleDessertPage: React.FC = () => {
  const { selectedDessert, setSelectedDessert } = useDesserts();

  const goBack = () => {
    setSelectedDessert(null);
  };

  return (
    <div>
      {selectedDessert && (
        <div>
          <button onClick={goBack}>Go Back</button>
          <h2>{selectedDessert.name}</h2>
          <p>{selectedDessert.description}</p>
          <img src={selectedDessert.imgSrc} alt={selectedDessert.name} />
        </div>
      )}
    </div>
  );
};

export default SingleDessertPage;