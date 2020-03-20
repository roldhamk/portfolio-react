import React, { Component } from "react";
import code from "../images/code.jpeg";
import PCard from "./PCard";

class PortC extends Component {
  state = {
    cards: [
      {
        image: code,
        title: "Hello",
        text: "lorem ipsum I am placeholder text"
      },
      { image: code, title: "Hiya", text: "lorem ipsum I am placeholder text" }
    ]
  };
  render() {
    const eachCard = this.state.cards.map((cards, index) => {
      return (
        <PCard
          image={cards.image}
          title={cards.title}
          text={cards.text}
          key={index}
        />
      );
    });
    return <div>{eachCard}</div>;
  }
}

export default PortC;
