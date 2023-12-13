// Footer.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>&copy; 2023 Your Company</p>
      <Link href="/about">
        <h3 className="text-blue-500 hover:underline">About Us</h3>
      </Link>
    </footer>
  );
};

export default Footer;
