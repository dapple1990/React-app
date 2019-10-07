import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import axios from "axios";
import SupportButton from "./supportFlow";



class Giphy extends Component {
  state = {
    giphys: []
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://coffee.alexflipnote.dev/random.json?fbclid=IwAR2FKFn5oty4UzpGvdVVEljHeCdjfPlCgYemKIAu2eYd66HtrPfC2FmX_6M"
      )
      .then(res => {
        console.log(res);
        const giphys = [];
        giphys.push(res.data);
        this.setState({ giphys });
      });
  }

  render() {
    let coffeGiphy = this.state.giphys.map(giphy => {
      return (
        <Image
          className="img-giphy"
          key={giphy}
          src={giphy.file}
          alt=""
          roundedCircle
        />
      );
    });
    return (
      <div className="giphy-box">
        <h2 className="giphy-header">This is a random coffee image!</h2>
        {coffeGiphy}
       <SupportButton/>
      </div>
    );
  }
}

export default Giphy;
