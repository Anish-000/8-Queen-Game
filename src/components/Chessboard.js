import React, { useState, useEffect } from 'react';
import '../styles/Chessboard.css';
import GlassQueen from './GlassQueen';

const Chessboard = () => {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)));
  const [queens, setQueens] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const checkGameOver = (newQueens) => {
    for (let i = 0; i < newQueens.length; i++) {
      for (let j = i + 1; j < newQueens.length; j++) {
        if (
          newQueens[i].row === newQueens[j].row || 
          newQueens[i].col === newQueens[j].col ||
          Math.abs(newQueens[i].row - newQueens[j].row) === 
          Math.abs(newQueens[i].col - newQueens[j].col)
        ) {
          setGameOver(true);
          setIsActive(false);
          return true;
        }
      }
    }
    return false;
  };

  const handleSquareClick = (row, col) => {
    if (gameOver || queens.length >= 8 || gameWon) return;
    
    if (!isActive) {
      setIsActive(true);
    }

    const newQueens = [...queens, { row, col }];
    setQueens(newQueens);
    
    if (checkGameOver(newQueens)) {
      return;
    }

    if (newQueens.length === 8) {
      setGameWon(true);
      setIsActive(false);
    }
  };

  const startNewGame = () => {
    setQueens([]);
    setGameOver(false);
    setGameWon(false);
    setTime(0);
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderSquare = (row, col) => {
    const isQueen = queens.some(q => q.row === row && q.col === col);
    const isDark = (row + col) % 2 === 1;

    return (
      <div 
        key={`${row}-${col}`}
        className={`square ${isDark ? 'dark' : 'light'}`}
        onClick={() => handleSquareClick(row, col)}
      >
        {isQueen && <GlassQueen />}
      </div>
    );
  };

  return (
    <div className="game-container">
      <div className="game-controls">
        <div className="timer">
          ⏱️ Time: {formatTime(time)}
        </div>
        <button className="new-game-button" onClick={startNewGame}>
          New Game
        </button>
      </div>

      <div className={`chessboard ${gameOver ? 'game-over' : ''} ${gameWon ? 'game-won' : ''}`}>
        {board.map((row, i) => (
          <div key={i} className="board-row">
            {row.map((_, j) => renderSquare(i, j))}
          </div>
        ))}
      </div>

      <div className="game-info">
        <h2>8 Queens Puzzle</h2>
        <p>Queens placed: {queens.length}/8</p>
        {gameOver && (
          <div className="game-over-message">
            Game Over! Queens are threatening each other!
          </div>
        )}
        {gameWon && (
          <div className="game-won-message">
            Congratulations! You solved the puzzle in {formatTime(time)}!
          </div>
        )}
      </div>
    </div>
  );
};

export default Chessboard;