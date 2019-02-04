import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/Nav"
// import WeatherContainer from "./components/Weather";

class App extends Component {
  render() {
    return (
      <div>
        <PrimarySearchAppBar />
      </div>
    );
  }
}

export default App;
