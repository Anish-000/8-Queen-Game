import React from 'react';
import '../styles/GlassQueen.css';

const GlassQueen = () => {
  return (
    <div className="glass-queen">
      <div className="cross"></div>
      <div className="crown">
        <div className="crown-points">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="neck"></div>
      <div className="body">
        <div className="body-detail"></div>
        <div className="body-glow"></div>
      </div>
      <div className="base">
        <div className="base-ring"></div>
      </div>
    </div>
  );
};

export default GlassQueen;