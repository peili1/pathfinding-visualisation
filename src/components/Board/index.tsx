import React from 'react';
import Node from '../Node';
import './index.css';

type BoardProps = {
  grid: number[][];
};

const Board = ({ grid }: BoardProps) => {
  return (
    <div className='Board'>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((_, nodeIndex) => (
              <Node key={nodeIndex} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
