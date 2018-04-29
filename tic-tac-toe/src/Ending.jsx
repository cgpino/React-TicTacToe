import React, { Component } from 'react';
import './Ending.css';

export default class Ending extends Component {

  render() {

    let winnerMessage = (this.props.winner === 'd') ? "¡Partida en tablas!" : "¡Jugador " + this.props.winner + " gana la partida!";

    return (
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>{winnerMessage}</h2>
      </div>
    )
  }
}
