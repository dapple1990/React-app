import React, { Component } from "react";

class Counter extends Component {
  state = {
    water: 0,
    coffee: 0,
    milk: 0,
    cupOf: 0
  };

  render() {
    const { water, coffee, milk } = this.state;
    return (
      <div className="input-container">
        <span role="img" aria-label="Coffee">
          ☕
        </span>
        <p className="water">Water</p>
        <p>{water}</p>
        <p className="coffee">Coffee</p>
        <p>{coffee}</p>
        <p className="milk">Milk</p>
        <p>{milk}</p>
      </div>
    );
  }
}

export default Counter;
