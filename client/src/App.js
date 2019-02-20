import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Finance from "./pages/Finance";
import LoginVisual from "./pages/LoginVisual";
// import Goals from "./pages/Goals";
import Health from "./pages/Health";
// import CompleteChat from "./pages/Chat";
// import Login from "./pages/Login";
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

class App extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
    // console.log(name);
    // console.log(event.target.checked)
  };

  render() {
  return (
  <Provider store={createStore(reducers, {
    // keep auth state when signed in
    auth: {
      token: jwtToken,
      isAuthenticated: jwtToken ? true : false
    }
  }, applyMiddleware(reduxThunk))}>

    <MuiThemeProvider theme={theme}>
      <Router>
        <Menu {...this.state} onChange={this.handleChange}>
          <Switch>
            <Route exact path="/" component={LoginVisual} />
            <Route exact path="/home"  render={() => <Home {...this.state} />} />
            {/* <Route exact path="/finance" component={Finance} /> */}
            {/* <Route exact path="/goals" component={Goals} /> */}
            <Route exact path="/health" component={Health} />
            {/* <Route exact path="/chat" component={CompleteChat} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/member" component={Member} />
            <Route component={Error} />
          </Switch>
        </Menu>
      </Router>
    </MuiThemeProvider>
  </Provider>
  )
};
}



export default App;
