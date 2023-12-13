'use client';
import React from 'react';
import { useDesserts } from '@/context/DessertContext';
import styles from './SingleDessertPage.module.css'; // Import a CSS module for styling

const SingleDessertPage: React.FC = () => {
  const { selectedDessert, setSelectedDessert } = useDesserts();

  const goBack = () => {
    setSelectedDessert(null);
  };

  return (
    <div className={styles.singleDessertContainer}>
      {selectedDessert && (
        <div className={styles.dessertDetails}>
          <button onClick={goBack}>Back</button>
          <h1 style={{fontSize: '2rem', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>{selectedDessert.name}</h1>
          <img 
            src={selectedDessert.imgSrc} 
            alt={selectedDessert.name} 
            style={{ width: '100%', maxWidth: 'auto', height: 'auto', maxHeight: '600px' }}
            />
          <p>{selectedDessert.description}</p>
        </div>
      )}
    </div>
  );
};

export default SingleDessertPage;
