import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Goals from "./pages/Goals";
import Health from "./pages/Health";
// import Nav from "./components/Nav";
import Weather from "./pages/Weather";
import Menu from "./components/Menu";
import "./App.css";
// import PrimarySearchAppBar from "./components/Nav"


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
