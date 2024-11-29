import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <GraduationCap size={32} className="text-white" />
          <h1 className="text-2xl font-bold">English to French Flashcards</h1>
        </div>
        <p className="text-center mt-2 text-indigo-100">
          Learn French vocabulary with interactive flashcards
        </p>
      </div>
    </header>
  );
}