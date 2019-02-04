import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav"
import ToDo from "./components/ToDo"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ToDo />
      </div>
    );
  }
}

export default App;
