import React from 'react';
import './App.css';
import Chessboard from './components/Chessboard';
import GlassQueen from './components/GlassQueen';

function App() {
  return (
    <div className="App">
      <div className="floating-queens">
        <div className="floating-queen queen1">
          <GlassQueen />
        </div>
        <div className="floating-queen queen2">
          <GlassQueen />
        </div>
        <div className="floating-queen queen3">
          <GlassQueen />
        </div>
        <div className="floating-queen queen4">
          <GlassQueen />
        </div>
        <div className="floating-queen queen5">
          <GlassQueen />
        </div>
        <div className="floating-queen queen6">
          <GlassQueen />
        </div>
        <div className="floating-queen queen7">
          <GlassQueen />
        </div>
        <div className="floating-queen queen8">
          <GlassQueen />
        </div>
        <div className="floating-queen queen9">
          <GlassQueen />
        </div>
        <div className="floating-queen queen10">
          <GlassQueen />
        </div>
      </div>
      <Chessboard />
    </div>
  );
}

export default App;
