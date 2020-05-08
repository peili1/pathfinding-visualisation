import React, { Component } from 'react';
import Board from '../Board';
import { generateGridDimension } from '../utils';

import './index.css';

interface State {
  grid: number[][];
}

export default class App extends Component<{}, State> {
  readonly state = { grid: generateGridDimension() };

  render() {
    return (
      <div className='App'>
        <Board grid={this.state.grid} />
      </div>
    );
  }
}
