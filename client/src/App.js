import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Goals from "./pages/Goals";
import Health from "./pages/Health";
import Weather from "./pages/Weather";
import CompleteChat from "./pages/Chat"
import Menu from "./components/Menu";

import "./App.css";


const App = () => (
  <Router>
    <Menu>
      <Route exact path="/" component={Home} />
      <Route exact path="/finance" component={Finance} />
      <Route exact path="/goals" component={Goals} />
      <Route exact path="/health" component={Health} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/chat" component={CompleteChat} />
    </Menu>
  </Router>
);





export default App;
