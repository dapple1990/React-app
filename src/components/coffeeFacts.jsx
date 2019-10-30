import React, { Component } from "react";
import Card from "react-bootstrap/Card";


class About extends Component {
  state = {
    facts: [
      {
        fact: "Finland consumes the most coffee in the world."
      },
      {
        fact:
          "Despite the fact that caffeine is a mild diuretic, you do not lose more fluid than you take in by drinking coffee, so it cannot dehydrate you."
      },
      {
        fact:
          "Coffee beans are only called beans because of the resemblance - they’re actually berries."
      },
      {
        fact:
          "Before coffee became widely available, the popular breakfast drink was beer."
      },
      {
        fact:
          "Globally people consume about 2.25 billion cups of coffee every day."
      }
    ]
  };

  render() {
    const coffeeFacts = this.state.facts.map((item, key) => {
      return (
        <Card className="fact-card" style={{ width: "15rem" }} key={key}>
          <Card.Body >
            <Card.Title>Fact</Card.Title>
            {item.fact}
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      );
    });
    return (
      <div className="fact-container">
        {coffeeFacts}
      </div>
    );
  }
}

export default About;
