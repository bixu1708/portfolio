import React from 'react';

const ProfileCard = ({ logoUrl, username, profileUrl, siteName, backgroundColor, textColor }) => {
  return (
    <div 
      className="profile-card"
      style={{
        background: backgroundColor,
        color: textColor,
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
      }}
      onClick={() => window.open(profileUrl, '_blank')}
    >
      <div className="logo-container" style={{ marginBottom: '1rem' }}>
        <img 
          src={logoUrl} 
          alt={`${siteName} logo`}
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />
      </div>
      
      <h3 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '700', 
        marginBottom: '0.5rem',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
      }}>
        {siteName}
      </h3>
      
      <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1.5rem',
        opacity: 0.9,
        fontFamily: 'monospace'
      }}>
        @{username}
      </p>
      
      <button 
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          color: textColor,
          border: '2px solid rgba(255, 255, 255, 0.3)',
          padding: '0.75rem 1.5rem',
          borderRadius: '25px',
          fontSize: '0.9rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
