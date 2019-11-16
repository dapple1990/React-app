import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Counter from "./counter";
import InputForm from "./inputForm";

export function CupOf() {

  const [amountOf, setAmount] = useState(1);

  const handleInputValue = event => {
    const value = parseInt(event.target.value)
    setAmount(!isNaN(value) ? value : 1 )
  }


  return (
    <div className="input-container">
      <DropdownButton id="dropdown-basic-button" title="Type of coffee">
        <Dropdown.Item eventKey="flat" active>Flat white</Dropdown.Item>
        <Dropdown.Item eventKey="cortado">Cortado</Dropdown.Item>
        <Dropdown.Item eventKey="capuccino">Capuccino</Dropdown.Item>
      </DropdownButton>
      <InputForm onChange={handleInputValue} value={amountOf} />
      <Counter />
    </div>
  );
}

export default CupOf;
