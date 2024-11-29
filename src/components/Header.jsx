import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Flashcards App</h1>
        <nav>
          <Link
            to="/"
            className="mr-4 hover:text-gray-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/flashcards"
            className="hover:text-gray-400 transition duration-200"
          >
            Flashcards
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
