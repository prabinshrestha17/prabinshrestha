"use client"
import { useState, useEffect, useCallback } from 'react';

interface TypingAnimationOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export const useTypingAnimation = (phrases: string[], options: TypingAnimationOptions = {}) => {
  const { typingSpeed = 120, deletingSpeed = 80, delay = 1500 } = options;

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);

  const handleTyping = useCallback(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    if (isDeleting) {
      setText(prev => fullText.substring(0, prev.length - 1));
      setSpeed(deletingSpeed);
    } else {
      setText(prev => fullText.substring(0, prev.length + 1));
      setSpeed(typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
    }
  }, [loopNum, phrases, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, speed]);

  return text;
};
