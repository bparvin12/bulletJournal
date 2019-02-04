// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Goals from "./pages/Goals";
import Health from "./pages/Health";
import Nav from "./components/Nav";
import Weather from "./pages/Weather";
import Menu from "./components/Menu";


const App = () => (
  <Router>
    <Menu>
      <Route exact path="/" component={Home} />
      <Route exact path="/finance" component={Finance} />
      <Route exact path="/goals" component={Goals} />
      <Route exact path="/health" component={Health} />
      <Route exact path="/weather" component={Weather} />
    </Menu>
  </Router>
);

export default App;
