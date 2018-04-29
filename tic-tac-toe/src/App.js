import React, { Component } from 'react';
import './App.css';

import Ending from './Ending';
import ResetButton from './ResetButton';
import Square from './Square';

class App extends Component {

  constructor() {
    super();
    this.state = {
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'x',
      winner: null
    }
  }

  updateBoard(loc, player) {
    if (this.state.board[loc] === 'x' || this.state.board[loc] === 'o' || this.state.winner) {
      // Jugada no válida
      return;
    }

    let currentboard = this.state.board;
    currentboard.splice(loc, 1, this.state.turn);
    this.setState({board: currentboard});

    // Comprobacion de filas
    let topRow = this.state.board[0] + this.state.board[1] + this.state.board[2];
    if (topRow.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    let midRow = this.state.board[3] + this.state.board[4] + this.state.board[5];
    if (midRow.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    let botRow = this.state.board[6] + this.state.board[7] + this.state.board[8];
    if (botRow.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    // Comprobacion de columnas
    let leftCol = this.state.board[0] + this.state.board[3] + this.state.board[6];
    if (leftCol.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    let midCol = this.state.board[1] + this.state.board[4] + this.state.board[7];
    if (midCol.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    let rightCol = this.state.board[2] + this.state.board[5] + this.state.board[8];
    if (rightCol.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    // Comprobacion de diagonales
    let mainDiagonal = this.state.board[0] + this.state.board[4] + this.state.board[8];
    if (mainDiagonal.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    let antiDiagonal = this.state.board[2] + this.state.board[4] + this.state.board[6];
    if (antiDiagonal.match(/xxx|ooo/)) {
      this.setState({winner: this.state.turn});
      return;
    }

    // Partida en tablas
    let moves = this.state.board.join('').replace(/ /g, '');
    if (moves.length === 9) {
      this.setState({winner: 'd'});
    }

    this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x'});
  }

  resetBoard() {
    this.setState({
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'x',
      winner: null
    })
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h2>Turno de jugador {this.state.turn}</h2>
          <Ending winner={this.state.winner}/>
        </div>
        {this.state.board.map(function(value, i) {
          return (
            <Square
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn} />
          )
        }.bind(this))}
        <ResetButton reset={this.resetBoard.bind(this)}/>
      </div>
    );
  }
}

export default App;
