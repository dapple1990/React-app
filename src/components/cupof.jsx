import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Counter, { RECIPE_CORTADO, RECIPE_ESPRESSO, RECIPE_FLATWHITE } from "./counter";
import InputForm from "./inputForm";

export function CupOf() {

  const [amountOf, setAmount] = useState(1);
  const [type, setType] = useState(RECIPE_CORTADO)

  const handleInputValue = event => {
    const value = parseInt(event.target.value)
    setAmount(!isNaN(value) ? value : 1)
  }

  const dropDownType = event => {
    setType(event)
  }


  return (
    <div className="input-container">
      <DropdownButton id="dropdown-basic-button" title={type} onSelect={dropDownType}>
        <Dropdown.Item eventKey={RECIPE_CORTADO} active>Cortado</Dropdown.Item>
        <Dropdown.Item eventKey={RECIPE_ESPRESSO}>Espresso</Dropdown.Item>
        <Dropdown.Item eventKey={RECIPE_FLATWHITE}>Flat White</Dropdown.Item>
      </DropdownButton>
      <InputForm onChange={handleInputValue} value={amountOf} />
      <Counter type={type} amount={amountOf} />
    </div>
  );
}

export default CupOf;
