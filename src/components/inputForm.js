import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from 'prop-types';

const InputForm = ({onChange, value}) =>(
  <div className="input-container">
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label >Cup of Coffee</Form.Label>
        <Form.Control type="number" onChange={ onChange } value = { value } />
      </Form.Group>
    </Form>
  </div>
);

InputForm.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.number
}

export default InputForm;
