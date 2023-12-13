'use client';
import React, { useEffect } from 'react';
import { useDesserts } from '@/context/DessertContext';
import DessertForm from '@/components/DessertForm';
import DessertCard from '@/components/DessertCard';
import SingleDessertPage from '@/components/SingleDessertPage';

function HomePage() {
  const { desserts, loadDesserts, selectedDessert } = useDesserts();

  useEffect(() => {
    loadDesserts();
  }, []);

  return (
    <>
      <h1 className='text-4xl text-center font-extralight m-6'>
        Sugar Whisk Desserts
      </h1>
      <div>
      {!selectedDessert ? (
          <>
            <DessertForm />
            {desserts.map((dessert) => (
              <DessertCard key={dessert.id} dessert={dessert} />
            ))}
          </>
        ) : (
          <SingleDessertPage />
        )}
      </div>
    </>
  );
}

export default HomePage;
