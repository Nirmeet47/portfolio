'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  text: string;
  delayBetweenWords?: number;
  pauseAfterFinish?: number;
  fadeDuration?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delayBetweenWords = 300,
  pauseAfterFinish = 2000,
  fadeDuration = 800,
  className = ''
}) => {
  const words = text.split(' ');
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible && currentWordIndex < words.length) {
      timer = setTimeout(() => {
        setDisplayedWords((prev) => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex((prev) => prev + 1);
      }, delayBetweenWords);
    }

    if (isVisible && currentWordIndex === words.length) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, pauseAfterFinish);
    }

    if (!isVisible) {
      timer = setTimeout(() => {
        setDisplayedWords([]);
        setCurrentWordIndex(0);
        setIsVisible(true);
      }, fadeDuration);
    }

    return () => clearTimeout(timer);
  }, [currentWordIndex, isVisible]);

  return (
    <div className="min-h-[3rem]">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.p
            key="typewriter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration / 1000 }}
            className={`text-base sm:text-lg font-mono text-[#aaa] italic ${className}`}
          >
            {displayedWords.join(' ')}
            <span className="animate-blink text-[#aaa] font-bold">|</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;
