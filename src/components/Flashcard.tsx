import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Flashcard as FlashcardType } from '../data/flashcards';
import { RotateCw, Lightbulb } from 'lucide-react';
import { getMemoryTip } from '../utils/gemini';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
}

export function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  const [memoryTip, setMemoryTip] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      setIsLoading(true);
      getMemoryTip(card.english, card.french)
        .then((tip) => {
          setMemoryTip(tip);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isFlipped, card]);

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-full h-[400px] cursor-pointer preserve-3d"
        onClick={onFlip}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card (English) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl shadow-lg p-8 backface-hidden
            bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200"
          style={{ transform: "rotateY(0deg)" }}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-4">
            <span className="text-3xl font-bold text-indigo-900">{card.english}</span>
            <span className="text-sm text-indigo-600 font-medium">{card.category}</span>
            <RotateCw className="mt-4 text-indigo-400 animate-pulse" size={24} />
            <span className="text-xs text-indigo-400">Click to see French translation</span>
          </div>
        </div>

        {/* Back of card (French) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl shadow-lg p-8 backface-hidden
            bg-gradient-to-br from-indigo-50 to-purple-100 border border-indigo-200"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-4">
            <span className="text-2xl font-bold text-indigo-900">{card.french}</span>
            <p className="text-indigo-700 text-center italic">"{card.example}"</p>
            
            <div className="mt-6 w-full max-w-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="text-yellow-500" size={20} />
                <span className="text-sm font-medium text-indigo-800">Memory Tip:</span>
              </div>
              <div className="bg-white/50 rounded-lg p-3 min-h-[60px]">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500"></div>
                  </div>
                ) : (
                  <p className="text-sm text-indigo-700">{memoryTip}</p>
                )}
              </div>
            </div>

            <RotateCw className="mt-4 text-indigo-400 animate-pulse" size={24} />
            <span className="text-xs text-indigo-400">Click to see English word</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}