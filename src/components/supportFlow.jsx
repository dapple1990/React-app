import React, { Component } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";


class SupportButton extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.redirectToFlow();
  };

  redirectToFlow = () => {
   window.location = 'https://www.facebook.com/flowcoffeeandbistro';
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button
            className="supportButton"
            variant="info"
            type="submit"
            onClick={this.handleSubmit}
          >
            Show me!
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default SupportButton;
