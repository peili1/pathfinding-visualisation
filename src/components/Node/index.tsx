import React from 'react';
import './index.css';

type NodeProps = {
  row: number;
  col: number;
  isStartNode: boolean;
  isFinishNode: boolean;
  isWall: boolean;
  mouseIsPressed?: boolean;
  onMouseDown?: (row: number, col: number) => void;
  onMouseEnter?: (row: number, col: number) => void;
  onMouseUp?: () => void;
};

const Node = (props: NodeProps) => {
  const {
    row,
    col,
    isFinishNode,
    isStartNode,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
  } = props;
  const className = isFinishNode
    ? 'node node-finish'
    : isStartNode
    ? 'node node-start'
    : isWall
    ? 'node node-wall'
    : 'node';

  return (
    <div
      className={className}
      onMouseDown={() => onMouseDown!(row, col)}
      onMouseEnter={() => onMouseEnter!(row, col)}
      onMouseUp={() => onMouseUp!()}
    ></div>
  );
};

export default Node;
