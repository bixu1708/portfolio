import React, { useState } from 'react';
import resumeImage from '../assets/resume1.jpg';
import './Resume.css';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resumeImage;
      link.download = 'Aditya_Tippanna_Resume.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simulate download delay for better UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        {/* Header Section */}
        <div className="resume-header">
          <h1 className="resume-title">
            <span className="title-text">My Resume</span>
            <span className="title-accent">📄</span>
          </h1>
          <p className="resume-subtitle">
            Professional Experience & Skills Overview
          </p>
        </div>

        {/* Resume Preview Section */}
        <div className="resume-preview-section">
          <div className="resume-card">
            <div className="resume-image-container">
              {!isImageLoaded && (
                <div className="loading-placeholder">
                  <div className="loading-spinner"></div>
                  <p>Loading Resume...</p>
                </div>
              )}
              <img 
                src={resumeImage} 
                alt="Aditya Tippanna Resume"
                className={`resume-image ${isImageLoaded ? 'loaded' : ''}`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            
            {/* Download Button */}
            <div className="download-section">
              <button 
                className={`download-btn ${isDownloading ? 'downloading' : ''}`}
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <svg className="download-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <span className="btn-text">
                  {isDownloading ? 'Downloading...' : 'Download Resume'}
                </span>
                {isDownloading && <div className="download-progress"></div>}
              </button>
              
              
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="skills-preview">
          <h2 className="skills-title">Key Skills Highlighted</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-icon">💻</span>
              <span className="skill-name">Frontend Development</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">⚛️</span>
              <span className="skill-name">React.js</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎨</span>
              <span className="skill-name">UI/UX Design</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🚀</span>
              <span className="skill-name">Problem Solving</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">JS</span>
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">📱</span>
              <span className="skill-name">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 