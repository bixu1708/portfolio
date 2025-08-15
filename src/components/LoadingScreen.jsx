import React, { useEffect, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onFinish }) => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const container = containerRef.current;

    if (!logo || !container) return;

    // Get all path elements for stroke animation
    const paths = logo.querySelectorAll('path');
    
    // Set initial stroke properties
    paths.forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.fill = 'none';
      path.style.stroke = '#ffffff';
      path.style.strokeWidth = '2';
    });

    // Start the animation sequence
    const startAnimation = () => {
      // Phase 1: Draw the logo (1.5s)
      paths.forEach((path, index) => {
        setTimeout(() => {
          path.style.strokeDashoffset = '0';
        }, index * 100);
      });

      // Phase 2: Fill the logo (0.8s) - starts after 1.5s
      setTimeout(() => {
        paths.forEach((path, index) => {
          setTimeout(() => {
            path.style.fill = '#ffffff';
          }, index * 50);
        });
      }, 1500);

      // Phase 3: Scale up (0.5s) - starts after 2.3s
      setTimeout(() => {
        logo.style.transform = 'scale(1.1)';
      }, 2300);

      // Phase 4: Fade out and call onFinish (0.7s) - starts after 2.8s
      setTimeout(() => {
        container.style.opacity = '0';
        setTimeout(() => {
          onFinish();
        }, 700);
      }, 2800);
    };

    // Start animation after a small delay
    setTimeout(startAnimation, 100);

  }, [onFinish]);

  return (
    <div className="loading-screen" ref={containerRef}>
      <div className="loading-container">
        <svg 
          ref={logoRef}
          className="loading-logo"
          width="120" 
          height="120" 
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rocket/Logo Paths - SpaceX inspired */}
          <path d="M60 20 L60 100 M40 40 L80 40 M45 60 L75 60 M50 80 L70 80" />
          <path d="M60 20 L40 40 L45 60 L50 80 L60 100" />
          <path d="M60 20 L80 40 L75 60 L70 80 L60 100" />
          <path d="M30 90 L90 90 M35 95 L85 95" />
          <path d="M60 15 L55 25 L65 25 Z" />
          <path d="M60 105 L55 95 L65 95 Z" />
        </svg>
        
        <div className="loading-text">
          <span className="text-char">L</span>
          <span className="text-char">O</span>
          <span className="text-char">A</span>
          <span className="text-char">D</span>
          <span className="text-char">I</span>
          <span className="text-char">N</span>
          <span className="text-char">G</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
