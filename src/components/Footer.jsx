import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Flashcards App. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-400">
          Practice regularly to improve your French vocabulary!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
