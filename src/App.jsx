import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import Flashcard from './components/Flashcard'; // Import About
import { GoogleGenerativeAI } from '@google/generative-ai';

const FlashcardGenerator = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const generateFlashcards = async (language, difficulty, count) => {
    const genAI = new GoogleGenerativeAI("AIzaSyCrXbKEfXrbv8QsouwuK4GBhihrjSwbjE4");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate ${count} flashcards for learning ${language} at a ${difficulty} difficulty level. Each flashcard should be a JSON object with the following properties:
    - "id": A unique numeric identifier for the flashcard.
    - "english": The English translation of the word or phrase.
    - "french": The ${language} word or phrase.
    - "example": A sentence using the word or phrase in ${language}.
    - "category": The category of the word (e.g., Home, Food, Work).
    
  Only provide the JSON array. Don't include anything extra.`;

    try {
      const response = await model.generateContent(prompt);

      const cleanedText = response.response
        .text()
        .replace(/```/g, "") // Remove code block delimiters
        .replace(/json/g, "") // Remove unwanted formatting
        .replace(/^\s*[\[\{]/, "[") // Ensure the JSON array starts cleanly
        .replace(/[\}\]]\s*$/, "]")
.trim();

        console.log(cleanedText);

      return JSON.parse(cleanedText);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
      throw new Error("Failed to generate flashcards.");
    }
  };

  useEffect(() => {
    const fetchFlashcards = async () => {
      const language = "French";
      const difficulty = "intermediate";
      const count = 20;

      try {
        const data = await generateFlashcards(language, difficulty, count);
        setFlashcards(data);
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading flashcards...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error: {error}. Please try again.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-white mb-4">Generated Flashcards</h1>
      {flashcards.map(card => {
return       <Flashcard key={card.id} card={card} />
      })}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header /> {/* Always displayed */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<FlashcardGenerator />} />
          </Routes>
        </main>
        <Footer /> {/* Always displayed */}
      </div>
    </Router>
  );
}

export default App;
