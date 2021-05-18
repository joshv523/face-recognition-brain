import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <Tilt className="Tilt">
      <div>
        <img src={brain} alt='logo'></img>
      </div>
    </Tilt>
    
  );
}

export default Logo;