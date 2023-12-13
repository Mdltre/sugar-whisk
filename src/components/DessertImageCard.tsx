/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Dessert } from '@prisma/client';
// import { useDesserts } from '@/context/DessertContext';

function DessertCard({ dessert }: { dessert: Dessert }) {
//   const { setSelectedDessert } = useDesserts();

//   const handleViewSingleDessert = () => {
//     setSelectedDessert(dessert);
//   };

  return (
    <div
      key={dessert.id}
      className='bg-pink-200 w-1/3 m-auto rounded-md my-3 p-4'
    >
      {/* <img src={dessert.imgSrc} alt={dessert.name} className='w-full h-auto' /> */}
      {/* You can add a click event handler to the image if needed */}
      <img 
      src={dessert.imgSrc} 
      alt={dessert.name} 
      className='w-full h-auto' 
    //   onClick={handleViewSingleDessert}
      style={{ width: '450px', height: '300px'}} 
      />
    </div>
  );
}

export default DessertCard;
