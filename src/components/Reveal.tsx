import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MaskedLettersProps {
  text: string;
  className?: string;
  letterClassName?: string;
  delayOffset?: number;
}

export const MaskedLetters: React.FC<MaskedLettersProps> = ({
  text,
  className = '',
  letterClassName = '',
  delayOffset = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.045,
        delayChildren: delayOffset,
      },
    },
  };

  const letterVariants = {
    hidden: { y: shouldReduceMotion ? 0 : '110%', opacity: shouldReduceMotion ? 0 : 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <span key={`${char}-${index}`} className="inline-block overflow-hidden pb-1">
          <motion.span
            variants={letterVariants}
            className={`inline-block select-none ${letterClassName}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

interface MaskedWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}

export const MaskedWords: React.FC<MaskedWordsProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: shouldReduceMotion ? 0 : '100%',
      opacity: shouldReduceMotion ? 0 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden py-0.5">
          <motion.span variants={child} className={`inline-block ${wordClassName}`}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
