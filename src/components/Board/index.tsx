import React, { Component } from 'react';
import Node from '../Node';
import {generateGrid, updateGridWithWall} from './utils';
import './index.css';

type Grid = {
  row: number;
  col: number;
  isStartNode: boolean;
  isFinishNode: boolean;
  isWall: boolean;
};
interface State {
  grid: Grid[][];
  mouseIsPressed: boolean;
}

export default class Board extends Component<{}, State> {
  state = { grid: [[]], mouseIsPressed: false };

  componentDidMount() {
    const grid = generateGrid();
    this.setState({ grid });
  }

  handleMouseDown(row: number, col: number) {
    const newGrid = updateGridWithWall(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row: number, col: number) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = updateGridWithWall(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <div className='board'>
          {grid.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {row.map((node, nodeIndex) => {
                  const { row, col, isFinishNode, isStartNode, isWall } = node;
                  return (
                    <Node
                      key={nodeIndex}
                      row={row}
                      col={col}
                      isFinishNode={isFinishNode}
                      isStartNode={isStartNode}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row: number, col: number) =>
                        this.handleMouseDown(row, col)
                      }
                      onMouseEnter={(row: number, col: number) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
