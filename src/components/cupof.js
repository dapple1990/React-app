import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputForm from "../components/inputForm";

const CupOf = () => (
  <div>
    <DropdownButton id="dropdown-basic-button" title="Type of coffee">
      <Dropdown.Item>Flat white</Dropdown.Item>
      <Dropdown.Item>Cortado</Dropdown.Item>
      <Dropdown.Item>Capuccino</Dropdown.Item>
    </DropdownButton>
    <InputForm />
  </div>
);

export default CupOf;
