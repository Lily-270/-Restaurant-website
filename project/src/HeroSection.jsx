import React from 'react';
function HeroSection() {
    return (
      <section className="container mx-auto p-8 flex items-center bg-white shadow-md rounded-lg">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Little Lemon Chicago</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500">
            Reserve a Table
          </button>
        </div>
        <div className="w-1/2">
          <img src="food-image-placeholder.jpg" alt="Delicious Food" className="rounded" />
        </div>
      </section>
    );
  }
  
  export default HeroSection;