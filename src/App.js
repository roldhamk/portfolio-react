import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}
