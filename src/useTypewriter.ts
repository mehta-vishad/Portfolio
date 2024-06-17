import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  avgTypingDelay?: number;
  avgBackspacingDelay?: number;
}

const useTypewriter = ({
  texts,
  avgTypingDelay = 100,
  avgBackspacingDelay = 50,
}: TypewriterProps): [string, boolean] => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];

    
    const updateText = () => {
      if (isDeleting) {
       
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
    };

    
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false); 
      setTextIndex((textIndex + 1) % texts.length); 
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1300); 
    }

    const typingDelay = isDeleting ? avgBackspacingDelay : avgTypingDelay;
    const timeoutId = setTimeout(updateText, typingDelay);

    const cursorInterval = setInterval(() => {
        setCursorVisible(vis => !vis);
      }, 500);

    return () => {clearTimeout(timeoutId);
                clearInterval(cursorInterval);};
  }, [texts, isDeleting, textIndex, charIndex, avgTypingDelay, avgBackspacingDelay]);

  return [`${displayedText}`,cursorVisible]; 
};

export default useTypewriter;
