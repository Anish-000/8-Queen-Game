import React from 'react';
import '../styles/GlassQueen.css';

const GlassQueen = () => {
  return (
    <div className="glass-queen">
      <div className="crown">
        <div className="crown-top"></div>
        <div className="crown-points">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="crown-ring"></div>
      </div>
      <div className="neck">
        <div className="neck-detail"></div>
      </div>
      <div className="body">
        <div className="body-highlight"></div>
        <div className="body-detail"></div>
        <div className="body-glow"></div>
      </div>
      <div className="base">
        <div className="base-ring"></div>
        <div className="base-glow"></div>
      </div>
    </div>
  );
};

export default GlassQueen;
