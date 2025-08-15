import React from 'react';
import ProfileCard from '../components/ProfileCard';
import './CPProfiles.css';

const CPProfiles = () => {
  const profiles = [
    {
      siteName: 'CodeChef',
      username: 'coderaditya_17',
      profileUrl: 'https://www.codechef.com/users/coderaditya_17',
      logoUrl: 'https://cdn.codechef.com/images/cc-logo.svg',
      backgroundColor: 'linear-gradient(135deg, #5B4B8A 0%, #8B7EC8 100%)',
      textColor: '#FFFFFF'
    },
    {
      siteName: 'LeetCode',
      username: 'coderaditya_17',
      profileUrl: 'https://leetcode.com/u/coderaditya_17/',
      logoUrl: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
      backgroundColor: 'linear-gradient(135deg, #FFA116 0%, #FF8C00 100%)',
      textColor: '#FFFFFF'
    },
    {
      siteName: 'Codeforces',
      username: 'coderaditya_1708',
      profileUrl: 'https://codeforces.com/profile/coderaditya_1708',
      logoUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029921.png',
      backgroundColor: 'linear-gradient(135deg, #3B5998 0%, #4C70B3 100%)',
      textColor: '#FFFFFF'
    }
  ];

  return (
    <div className="cp-profiles">
      <div className="container">
        <h1 
          className="page-title animate-title"
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '4rem',
            color: '#F5F5F5',
            textShadow: '0 0 20px rgba(245, 245, 245, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3)',
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          My Coding Profiles
        </h1>
        
        <div 
          className="profiles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {profiles.map((profile, index) => (
            <div 
              key={profile.siteName}
              className="profile-card-wrapper"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CPProfiles;
