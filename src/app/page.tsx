'use client';
import React, { useEffect } from 'react';
import { useDesserts } from '@/context/DessertContext';
import Layout from '@/components/Layout';
import DessertImageCard from '@/components/DessertImageCard';
import SingleDessertPage from '@/components/SingleDessertPage';
import LandingPage from '@/components/LandingPage';

function HomePage() {
  const { desserts, loadDesserts, selectedDessert } = useDesserts();

  useEffect(() => {
    loadDesserts();
  }, []);

    // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  const randomDesserts = shuffleArray(desserts).slice(0, 3);

  return (
    <>
    <Layout>
      <LandingPage />
      <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!selectedDessert ? (
          <>
            {randomDesserts.map((dessert) => (
          <DessertImageCard key={dessert.id} dessert={dessert} style={{ flex: '1' }} />
        ))}
          </>
        ) : (
          <SingleDessertPage />
        )}
      </div>
    </div>
    </Layout>
    </>
  );
}

export default HomePage;
