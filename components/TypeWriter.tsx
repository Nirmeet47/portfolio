'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  text: string;
  delayBetweenChars?: number;
  pauseAfterFinish?: number;
  fadeDuration?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delayBetweenChars = 60, // faster since it's per character
  pauseAfterFinish = 1000,
  fadeDuration = 600,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible && currentCharIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, delayBetweenChars);
    }

    if (isVisible && currentCharIndex === text.length) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, pauseAfterFinish);
    }

    if (!isVisible) {
      timer = setTimeout(() => {
        setDisplayedText('');
        setCurrentCharIndex(0);
        setIsVisible(true);
      }, fadeDuration);
    }

    return () => clearTimeout(timer);
  }, [currentCharIndex, isVisible]);

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
            {displayedText}
            <span className="animate-blink text-[#aaa] font-bold">|</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;
