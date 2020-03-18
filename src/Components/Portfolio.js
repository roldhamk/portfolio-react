import React, { Component } from "react";
import PCard from "./Cards";

import "./Portfolio.css";

export class Portfolio extends Component {
  render() {
    return (
      <div className="pwrap">
        <PCard />
      </div>
    );
  }
}

export default Portfolio;
