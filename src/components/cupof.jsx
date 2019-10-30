import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Counter from "./counter";
import InputForm from "./inputForm";

class CupOf extends Component {

  state = {
    amountOfCoffee: 0
  }

  handleInputChange = (number) => {
    const value = parseInt(number)
    this.setState({
      amountOfCoffee: !isNaN(value) ? value : 0,
    });
  }

  render() {
    return (
      <div className="input-container">
        <DropdownButton id="dropdown-basic-button" title="Type of coffee">
          <Dropdown.Item  eventKey="flat" active>Flat white</Dropdown.Item>
          <Dropdown.Item eventKey="cortado">Cortado</Dropdown.Item>
          <Dropdown.Item eventKey="capuccino">Capuccino</Dropdown.Item>
        </DropdownButton>
        <InputForm onChange={event => this.handleInputChange(event.target.value)} value = {this.state.amountOfCoffee} />
        <Counter />
      </div>
    );
  }
}

export default CupOf;
