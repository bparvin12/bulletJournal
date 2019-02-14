import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import LoginVisual from "./pages/LoginVisual";
import Goals from "./pages/Goals";
import Health from "./pages/Health";
import Weather from "./pages/Weather";
import CompleteChat from "./pages/Chat";
import Login from "./pages/Login";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Member from "./components/Member";
import Menu from "./components/Menu";
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import reducers from './reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./App.css";
import Error from "./components/Error";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const jwtToken = localStorage.getItem('JWT_TOKEN');

const App = () => (
  <Provider store={ createStore(reducers, {
    // keep auth state when signed in
    auth: {
      token: jwtToken,
      isAuthenticated: jwtToken ? true : false
    }
  }, applyMiddleware(reduxThunk))}>

      <MuiThemeProvider theme={theme}>
      <Router>
      <Menu>
        <Switch>
        <Route exact path="/" component={LoginVisual} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/finance" component={Finance} />
        <Route exact path="/goals" component={Goals} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/chat" component={CompleteChat} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="" component={SignUp} />
        <Route exact path="/member" component={Member} />
        <Route component={Error} />
        </Switch>
      </Menu>
    </Router>
    </MuiThemeProvider>
</Provider>
);



export default App;
