import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DessertCard from '@/components/DessertCard';

describe('DessertCard', () => {
  const sampleDessert = {
    id: 1,
    name: 'Sample Dessert',
    description: 'Delicious dessert description',
    imgSrc: '/sample-dessert.jpg',
  };

  it('renders DessertCard component with dessert information', () => {
    render(<DessertCard dessert={sampleDessert} />);

    // Check if the dessert name is rendered
    expect(screen.getByText(/Sample Dessert/i)).toBeInTheDocument();

    // Check if the dessert description is rendered
    expect(screen.getByText(/Delicious dessert description/i)).toBeInTheDocument();

    const dessertImage = screen.getByRole('img', { name: "" }) as HTMLImageElement;
    
    // Check if the dessert image is rendered with the correct attributes
    expect(dessertImage).toBeInTheDocument();
    expect(dessertImage.src).toContain('/sample-dessert.jpg');
    expect(dessertImage.className).toBe('Sample Dessert'); // Replace 'Sample Dessert' with the actual class name you want to check
    expect(dessertImage.style.width).toBe("");
    expect(dessertImage.style.height).toBe("");
  });
});
