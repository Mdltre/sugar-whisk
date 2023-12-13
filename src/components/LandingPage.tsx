// Import necessary modules and components
'use client';
import React from 'react';

function LandingPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extralight m-6">Welcome to Sugar Whisk Desserts</h1>
      <p className="text-lg mb-8">
        Explore our delicious desserts and satisfy your sweet cravings!
      </p>

      {/* Buttons to navigate to DessertCard and DessertForm */}
      <div className="flex justify-center space-x-4">
          <a href= "/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Dessert
          </a>
          <a href="/list" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            All Desserts
          </a>
      </div>
    </div>
  );
}

export default LandingPage;
