import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

export function SupportButton() {

  const redirectToFlow = () => {
    window.location = 'https://www.facebook.com/flowcoffeeandbistro';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    redirectToFlow();
  };

    return (
      <div>
        <ButtonToolbar>
          <Button
            className="supportButton"
            variant="info"
            type="submit"
            onClick={handleSubmit}
          >
            Good coffee alert!
          </Button>
        </ButtonToolbar>
      </div>
    );
  }

export default SupportButton;