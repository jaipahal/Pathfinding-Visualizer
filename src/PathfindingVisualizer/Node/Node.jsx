import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      row,
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      isWeight,
    } = this.props;

    const extraClass = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : isWeight
      ? "node-weight"
      : "";

    return (
      <td
        id={`node-${row}-${col}`}
        className={`node ${extraClass}`}
        onMouseUp={() => onMouseUp()}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
      ></td>
    );
  }
}
