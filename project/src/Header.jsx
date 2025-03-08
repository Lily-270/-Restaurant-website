import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Little Lemon</h1>
        <nav>
          <ul className="flex gap-8">
            {["Home", "About", "Menu", "Reservations", "Order Online", "Login"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-800 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
  