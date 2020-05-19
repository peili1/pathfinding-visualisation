const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
const GRID_ROW_NUM = 20;
const GRID_COL_NUM = 50;

type Grid = {
  row: number;
  col: number;
  isStartNode: boolean;
  isFinishNode: boolean;
  isWall: boolean;
};

const createNode = (row: number, col: number) => {
  return {
    col,
    row,
    isStartNode: row === START_NODE_ROW && col === START_NODE_COL,
    isFinishNode: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    isWall: false,
  };
};

const generateGrid = () => {
  const grid = [];
  for (let row = 0; row < GRID_ROW_NUM; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL_NUM; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
};

const updateGridWithWall = (
  grid: Grid[][],
  row: number,
  col: number
) => {
  const node = grid[row][col];
  const newGrid = grid;
  newGrid[row][col] = {
    ...node,
    isWall: !node.isWall
  }

  return newGrid;
};

export {generateGrid, updateGridWithWall}
