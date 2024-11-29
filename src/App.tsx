import React from 'react';
import { Header } from './components/Header';
import { FlashcardDeck } from './components/FlashcardDeck';
import { flashcards } from './data/flashcards';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto py-12 px-4">
        <FlashcardDeck cards={flashcards} />
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Practice regularly to improve your French vocabulary!</p>
        </footer>
      </main>
    </div>
  );
}

export default App;