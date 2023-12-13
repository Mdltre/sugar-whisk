'use client';
import React, { useEffect } from 'react';
import { useDesserts } from '@/context/DessertContext';
import DessertForm from '@/components/DessertForm';
import Layout from '@/components/Layout';

function HomePage() {
  const { loadDesserts } = useDesserts();

  useEffect(() => {
    loadDesserts();
  }, []);

  return (
    <>
    <Layout>
      <h1 className='text-4xl text-center font-extralight m-6'>
        Sugar Whisk Desserts
      </h1>
      <div>
            <DessertForm />
      </div>
      </Layout>
    </>
  );
}

export default HomePage;