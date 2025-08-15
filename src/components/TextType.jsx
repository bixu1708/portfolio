import { useEffect, useState } from "react";

// CLEANUP: Removed unused props (showCursor, cursorCharacter) that were being passed but not used
const TextType = ({ text, typingSpeed = 75, pauseDuration = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timeout;
    const currentText = textArray[currentIndex];

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % textArray.length);
        timeout = setTimeout(() => {}, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 30);
      }
    } else {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else if (textArray.length > 1) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, textArray, typingSpeed, pauseDuration]);

  return (
    <div className="text-type" style={{ 
      position: 'relative',
      transform: 'none',
      animation: 'none',
      transition: 'none'
    }}>
      <span className="text-type__content" style={{
        position: 'relative',
        transform: 'none',
        animation: 'none',
        transition: 'none'
      }}>
        {displayedText}
      </span>
      <span className="text-type__cursor" style={{
        position: 'relative',
        transform: 'none',
        animation: 'blink 1s infinite',
        transition: 'none'
      }}>|</span>
    </div>
  );
};

export default TextType;
