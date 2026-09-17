import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  maxRotation?: number;
  depth?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glareColor = 'rgba(18, 179, 166, 0.16)',
  maxRotation = 10,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxRotation;
    const rotateX = -((y - centerY) / centerY) * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative [perspective:1200px]"
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 24,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-shadow duration-300 ${className} ${
          isHovered ? 'shadow-2xl shadow-cyan-500/10' : ''
        }`}
      >
        {/* Dynamic Holographic Glare Sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent 65%)`,
          }}
          aria-hidden="true"
        />

        {/* Card Content with 3D Depth capability */}
        <div className="relative z-10 w-full h-full [transform-style:preserve-3d]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
