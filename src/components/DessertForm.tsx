"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useDesserts } from '@/context/DessertContext';

function DessertForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  const { createDessert, selectedDessert, setSelectedDessert, updateDessert } = useDesserts();
  useEffect(() => {
    if (selectedDessert) {
      setName(selectedDessert.name);
      setDescription(selectedDessert.description || '');
      setImgSrc(selectedDessert.imgSrc || '');
    }
  }, [selectedDessert]);

  return (
    <form
      className='flex flex-col m-auto w-1/3 bg-zinc-900 p-4 rounded-md'
      onSubmit={async (e) => {
        e.preventDefault();
        if (selectedDessert) {
          await updateDessert(selectedDessert.id, {
            name,
            description,
            imgSrc,
          });
          setSelectedDessert(null);
        } else {
          await createDessert({
            name,
            description,
            imgSrc,
          });
        }
        setName('');
        setDescription('');
        setImgSrc('');
      }}
    >
      <input
        type='text'
        name='name'
        autoFocus
        placeholder='Name'
        className='bg-zinc-800 p-2 rounded-md my-2 w-full'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <textarea
        name='description'
        placeholder='Description'
        rows={3}
        className='bg-zinc-800 p-2 rounded-md my-2 w-full'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <textarea
        name='imgsrc'
        placeholder='ImgSrc'
        rows={3}
        className='bg-zinc-800 p-2 rounded-md my-2 w-full'
        onChange={(e) => setImgSrc(e.target.value)}
        value={imgSrc}
      />

      <div className='flex justify-end gap-x-2'>
        <button
          type='submit'
          className='bg-zinc-800 p-2 mt-4 rounded-md hover:bg-zinc-500 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={!name || !description || !imgSrc}
        >
          {selectedDessert ? 'Edit Dessert' : 'Add Dessert'}
        </button>
        {selectedDessert && (
          <button
            className='bg-zinc-500 p-2 mt-4 rounded-md hover:bg-zinc-700 transition duration-500 ease-in-out'
            type='button'
            onClick={() => {
              setSelectedDessert(null);
              setName('');
              setDescription('');
              setImgSrc('');
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default DessertForm;
