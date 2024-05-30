import { useState, useEffect } from 'react';
import './EntryPage.css';

const EntryPage = ({ onEntryConfirmed }: { onEntryConfirmed: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shiftPressed, setShiftPressed] = useState(false);
  const [dotPressed, setDotPressed] = useState(false);

  useEffect(() => {
    const blinkCursor = setInterval(() => {
      setIsVisible(vis => !vis);
    }, 530);

    return () => clearInterval(blinkCursor);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        setShiftPressed(true);
      } else if (event.key === '.') {
        setDotPressed(true);
      } else if (event.key === '>') {
        // This checks if ">" was input directly, catering for keyboards where ">" is a single key press.
        onEntryConfirmed();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        setShiftPressed(false);
      } else if (event.key === '.') {
        setDotPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onEntryConfirmed]);

  return (
    <div className="entry-container">
      <div className="left-section">
        <div className="top-left-section">
          <div className="entry-text">
            <span>&lt;vishad<span className={shiftPressed || dotPressed ? 'io-color' : ''}>.io</span></span>
            <span className={`cursor ${isVisible ? 'visible' : ''}`}>|</span>
            <div className="entry-subtext">complete to enter</div>
          </div>
        </div>
        <div className="bottom-left-section">
          <div className="hint">
            <span className="exclamation-icon">!</span> Hint: press
            <img 
              src={shiftPressed ? "shift_pressed.png" : "shift.png"} 
              alt="Shift key" 
              className={`shift-image ${shiftPressed ? 'pressed' : ''}`} 
            />
            +
            <img 
              src={dotPressed ? "dot_pressed.png" : "dott.png"} 
              alt="Dot key" 
              className={`dot-image ${dotPressed ? 'pressed' : ''}`} 
            />
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src="entry_gif.gif" alt="Animated graphic" className="gif-image" />
      </div>
    </div>
  );
};

export default EntryPage;
