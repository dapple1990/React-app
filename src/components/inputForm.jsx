import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class InputForm extends Component {

  state = {
    amountOfCoffee: '',
    errorMessage: ''
  };

  handleSubmit = (event) => {
    const { amountOfCoffee } = this.state;
    event.preventDefault();
    if(amountOfCoffee.length === 0) {
      this.setState({
        errorMessage: 'Please enter how many coffee you would like to drink/serve 😉'
      });
    }
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  render() {
    const { errorMessage } = this.state
    return (
      <div className="input-container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Cup of Coffee</Form.Label>
            <Form.Control type="water" />
          </Form.Group>
          <p>{errorMessage}</p>
          <Button id="submit-button" variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default InputForm;
