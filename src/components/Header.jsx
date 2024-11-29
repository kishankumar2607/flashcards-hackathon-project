import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Flashcards App</h1>
        <nav>
          <Link to="/" className="mr-4 hover:text-cyan-400 transition">
            Home
          </Link>
          <Link to="/about" className="mr-4 hover:text-cyan-400 transition">
            About Us
          </Link>
          <Link to="/contact" className="mr-4 hover:text-cyan-400 transition">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
