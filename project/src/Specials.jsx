import React from 'react';

function Specials() {
  const specials = [
    { name: "Green Salad", image: "green-salad.jpg", description: "Lorem ipsum dolor sit amet.", price: "$12.99" },
    { name: "Bruschetta", image: "bruschetta.jpg", description: "Lorem ipsum dolor sit amet.", price: "$5.99" },
    { name: "Lemon Cake", image: "lemon-cake.jpg", description: "Lorem ipsum dolor sit amet.", price: "$5.00" }
  ];

  return (
    <section className="container mx-auto my-12">
      <h3 className="text-3xl font-bold mb-6 text-center">Specials</h3>
      <div className="grid grid-cols-3 gap-6">
        {specials.map((special, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <img src={special.image} alt={special.name} className="mb-4" />
            <h4 className="font-bold mb-2">{special.name} <span className="text-yellow-500">{special.price}</span></h4>
            <p className="text-gray-600">{special.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500">Online Menu</button>
      </div>
    </section>
  );
}

export default Specials;