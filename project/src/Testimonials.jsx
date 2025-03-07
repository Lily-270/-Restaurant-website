import React from 'react';
function Testimonials() {
    const testimonials = Array(4).fill("Lorem ipsum dolor sit amet.");
  
    return (
      <section className="container mx-auto my-12 bg-gray-50 p-8 shadow-md rounded">
        <h3 className="text-2xl font-bold mb-6 text-center">Testimonials</h3>
        <div className="grid grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow rounded p-4 text-center">
              <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
              <p className="text-gray-600">{testimonial}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  