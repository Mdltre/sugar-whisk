/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Dessert } from '@prisma/client';
import { useDesserts } from '@/context/DessertContext';
import { MdEditNote } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function DessertCard({ dessert }: { dessert: Dessert }) {
  const { deleteDessert, setSelectedDessert } = useDesserts();

  const handleViewSingleDessert = () => {
    setSelectedDessert(dessert);
  };

  return (
    <div
      key={dessert.id}
      className='bg-zinc-700 w-1/3 flex justify-between m-auto rounded-md my-3 p-4'
    >
      <div className=''>
        <img src={dessert.imgSrc}></img>
        <h2 className='text-xl font-bold uppercase'>{dessert.name}</h2>
        <p className='text-lg'>{dessert.description}</p>
        <p className='text-xs'>
          Created: {new Date(dessert.createdAt).toLocaleString()}
        </p>
        <p className='text-xs'>
          Updated: {new Date(dessert.updatedAt).toLocaleString()}
        </p>
      </div>
      <div className='flex gap-x-3'>
        <button
          onClick={() => {
            setSelectedDessert(dessert);
          }}
        >
          <MdEditNote className='text-blue-500 text-xl' />
        </button>
        <button
          onClick={async () => {
            if (confirm('Are you sure you want to delete this dessert?')) {
              await deleteDessert(Number(dessert.id));
            }
          }}
        >
          <RiDeleteBin6Fill className='text-red-500 hover:text-red-800' />
        </button>
        <button onClick={handleViewSingleDessert}>View</button>
      </div>
    </div>
  );
}

export default DessertCard;
