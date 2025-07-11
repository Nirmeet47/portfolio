'use client';
import type { SpringOptions } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface TiltedCardProps {
  imageSrc: string;
  imageHeight?: string;
  imageWidth?: string;
}

export default function TiltedCard({
  imageSrc,
  imageHeight = '280px',
  imageWidth = '280px',
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 3;
    const offsetY = e.clientY - rect.top - rect.height / 3;

    const rotationX = (offsetY / (rect.height / 1.5)) * -12;
    const rotationY = (offsetX / (rect.width / 1.5)) * 12;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.1);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative [perspective:800px] flex items-center justify-center"
      style={{
        height: imageHeight,
        width: imageWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt="Tilted Profile"
          className="absolute top-0 left-0 object-cover rounded-2xl border border-[#2d313d]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
      </motion.div>
    </figure>
  );
}
