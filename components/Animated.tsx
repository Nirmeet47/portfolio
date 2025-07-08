'use client';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedProps {
  text: string;
  className?: string;
}

const Animated: React.FC<AnimatedProps> = ({ text, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const letters = ref.current.querySelectorAll('span[data-letter]');
      letters.forEach((letter, i) => {
        setTimeout(() => {
          (letter as HTMLElement).style.opacity = '1';
          (letter as HTMLElement).style.transform = 'translateY(0)';
        }, i * 20);
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <p className="leading-[1.7]">
        {text.split(' ').map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.25em]">
            {word.split('').map((char, ci) => (
              <span
                key={ci}
                data-letter
                className="inline-block opacity-0 translate-y-2 transition duration-300 ease-out"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Animated;
