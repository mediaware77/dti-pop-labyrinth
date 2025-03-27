import React from 'react';

const Logo = () => {
  return (
    <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          .dti-text { 
            font: bold 20px sans-serif; 
            fill: hsl(221.2 83.2% 53.3%);
          }
          .pop-text { 
            font: medium 20px sans-serif; 
            fill: hsl(215 20.2% 65.1%);
          }
        `}
      </style>
      <text x="0" y="22" className="dti-text">DTI</text>
      <text x="38" y="22" className="pop-text">/POP</text>
    </svg>
  );
};

export default Logo;
