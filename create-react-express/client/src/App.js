import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/Nav"
// import WeatherContainer from "./components/Weather";
// import Nav from "./components/Nav"
import ToDo from "./components/ToDo"

class App extends Component {
  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        {/* <Nav /> */}
        {/* <ToDo /> */}
      </div>
    );
  }
}

export default App;
