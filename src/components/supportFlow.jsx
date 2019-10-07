import React, { Component } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class SupportButton extends Component {
  render() {
    return (
      <div >
        <ButtonToolbar>
          <Button className="supportButton" variant="info">Show me!</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default SupportButton;
