import React from 'react';

interface LogoProps {
  logoSrc: string;
}

const Logo: React.FC<LogoProps> = ({ logoSrc }) => {
  return (
    <div className="flex items-center">
      <img 
        src={logoSrc} 
        alt="Logo DTI" 
        className="h-12 transition-all duration-300" // 3rem, added transition
      />
    </div>
  );
};

export default Logo;
