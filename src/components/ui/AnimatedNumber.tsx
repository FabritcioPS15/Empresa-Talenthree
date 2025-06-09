import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ value, className }: { value: number; className?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= value) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.span
      key={count}
      initial={{ scale: 0.5, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`inline-block ${className}`}
    >
      {count}+
    </motion.span>
  );
};

export default AnimatedNumber;