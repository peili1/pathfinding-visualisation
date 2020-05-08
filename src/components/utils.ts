const GRID_ROW_NUM = 15; 
const GRID_COL_NUM = 45; 

export const generateGridDimension = (): number[][] => {
  return Array(GRID_ROW_NUM).fill(Array(GRID_COL_NUM).fill(0)); 
}
