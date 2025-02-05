import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [fullName, setFullName] = useState('');
  const [language, setLanguage] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (fullName && language) {
      navigate('/flashcards');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Welcome
        </h2>
        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 font-medium mb-2">
            Select Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="" disabled>
              Select a language
            </option>
            <option value="French">French</option>
          </select>
        </div>
        <button
          onClick={handleNext}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
