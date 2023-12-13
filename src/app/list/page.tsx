'use client';
import React, { useEffect } from 'react';
import { useDesserts } from '@/context/DessertContext';
import DessertCard from '@/components/DessertCard';
import SingleDessertPage from '@/components/SingleDessertPage';

function DessertsListPage() {
  const { desserts, loadDesserts, selectedDessert } = useDesserts();

  useEffect(() => {
    loadDesserts();
  }, []);

  return (
    <>
      <h1 className='text-4xl text-center font-extralight m-6'>
        Sugar Whisk Desserts List
      </h1>
      <div>
      {!selectedDessert ? (
          <>
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

export default DessertsListPage;