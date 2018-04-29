import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {

  squareClick(props) {
    props.updateBoard(props.loc, props.turn);
  }

  render() {
    return (
      <div className={"square " + this.props.loc} onClick={() => this.squareClick(this.props)}>
        <p>{this.props.value}</p>
      </div>
    )
  }
}
