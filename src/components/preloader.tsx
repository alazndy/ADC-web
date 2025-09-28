'use client';

import { motion } from 'framer-motion';

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.3,
            when: "afterChildren",
        }
    }
}

const text = {
    initial: {
        y: 0,
    },
    animate: {
        y: 40,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        }
    }
}

export const Preloader = () => {
  return (
    <motion.div
      className="absolute z-[99999] inset-0 flex items-center justify-center bg-background"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add('no-scroll')}
      onAnimationComplete={() => document.body.classList.remove('no-scroll')}
    >
        <motion.svg 
            variants={textContainer} 
            className='absolute z-50 flex items-center justify-center w-full'
            viewBox='0 0 250 90'
        >
            <motion.text 
                variants={text}
                className='text-3xl font-bold font-headline fill-foreground'
                x="50%" y="50%" 
                textAnchor="middle"
                dominantBaseline="middle"
            >
                ADC TASARIM
            </motion.text>
        </motion.svg>
    </motion.div>
  );
};
