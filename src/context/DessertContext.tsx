"use client";

import { CreateDessert, UpdateDessert } from '@/interfaces/dessert.interface';
import { Dessert } from '@prisma/client';
import { createContext, useContext, useState } from 'react';

export const DessertContext = createContext<{
  desserts: Dessert[];
  loadDesserts: () => Promise<void>;
  createDessert: (dessert: CreateDessert) => Promise<void>;
  deleteDessert: (id: number) => Promise<void>;
  selectedDessert: Dessert | null;
  setSelectedDessert: (dessert: Dessert | null) => void;
  updateDessert: (id: number, dessert: UpdateDessert) => Promise<void>;
}>({
  desserts: [],
  loadDesserts: async () => {},
  createDessert: async (dessert: CreateDessert) => {},
  deleteDessert: async (id: number) => {},
  selectedDessert: null,
  setSelectedDessert: (dessert: Dessert | null) => {},
  updateDessert: async (id: number, dessert: UpdateDessert) => {},
});

//hook
export const useDesserts = () => {
  const context = useContext(DessertContext);
  if (!context) {
    throw new Error('useDessert error DessertContext');
  }
  return context;
};

export const DessertProvider = ({ children }: { children: React.ReactNode }) => {
  const [desserts, setDesserts] = useState<Dessert[]>([]);
  const [selectedDessert, setSelectedDessert] = useState<Dessert | null>(null);

  async function loadDesserts() {
    const response = await fetch('/api/desserts');
    const data = await response.json();
    setDesserts(data);
  }

  async function createDessert(dessert: CreateDessert) {
    const res = await fetch(`http://localhost:3000/api/desserts/`, {
      method: 'POST',
      body: JSON.stringify(dessert),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newDessert = await res.json();
    setDesserts([...desserts, newDessert]);
  }

  async function deleteDessert(id: number) {
    const res = await fetch(`http://localhost:3000/api/desserts/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    setDesserts(desserts.filter((dessert) => dessert.id !== data.id));
  }

  async function updateDessert(id: number, dessert: UpdateDessert) {
    const res = await fetch(`http://localhost:3000/api/desserts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dessert),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setDesserts(desserts.map((dessert) => (dessert.id === id ? data : dessert)));
  }

  return (
    <DessertContext.Provider
      value={{
        desserts,
        loadDesserts,
        createDessert,
        deleteDessert,
        selectedDessert,
        setSelectedDessert,
        updateDessert,
      }}
    >
      {children}
    </DessertContext.Provider>
  );
};
