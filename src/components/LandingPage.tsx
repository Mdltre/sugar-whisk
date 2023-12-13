// Import necessary modules and components
'use strict';
import React from 'react';
import Image from 'next/image';

function LandingPage() {
  return (
    <div className="text-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extralight m-6">Welcome to Sugar Whisk Desserts</h1>
      {/* Centered Image */}
      <div className="mb-8">
        <Image src="/swd_withDesserts.png" alt="Sugar Whisk Desserts" width={500} height={300} />
      </div>
      <p className="text-lg mb-8">
        Explore our delicious desserts and satisfy your sweet cravings!
      </p>

      {/* Buttons to navigate to DessertCard and DessertForm */}
      <div className="flex justify-center space-x-4">
        <a href="/crud" className="bg-pink-200 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded">
          All Desserts
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
