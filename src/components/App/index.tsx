import React, { Component } from 'react';
import Board from '../Board';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <>
        <div className='app'>
          <Board />
        </div>
      </>
    );
  }
}
