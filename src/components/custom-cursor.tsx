'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const handleMouseEnter = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, [role="button"], .group')) {
            setCursorVariant('link');
        }
    };

    const handleMouseLeave = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, [role="button"], .group')) {
            setCursorVariant('default');
        }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseover', handleMouseEnter);
        document.removeEventListener('mouseout', handleMouseLeave);
    }

  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#ff0000',
      mixBlendMode: 'difference' as const,
    },
    link: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        height: 32,
        width: 32,
        backgroundColor: '#ffffff',
        mixBlendMode: 'difference' as const,
    },
    click: {
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        height: 24,
        width: 24,
        backgroundColor: '#ff0000',
        mixBlendMode: 'difference' as const,
        transition: { duration: 0.1 },
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};
