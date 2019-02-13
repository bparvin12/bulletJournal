import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './LoginVisual.styles';
import Button from '@material-ui/core/Button';
import "./styles.css"
import dog from "./Images/BG1.jpg"

const LoginVisual = (props) => {
    const { classes } = props;
    return (
        // <div className="container">
        <div className="container">
            {/* <h1>Q</h1> */}
            {/* <h1 className="flip-horizontal-fwd">Q</h1> */}
            <h1 className="bounce-in-top">Q</h1>
            {/* <img src={dog}className="logo flip-horizontal-fwd"></img> */}
            {/* <h2>the Butler</h2> */}
            <h2 className="tracking-in-expand">the Butler</h2>
            {/* <input placeholder="e-mail" className="style-input"></input>
            <input placeholder="Password" className="style-input"></input> */}
            <p>
            <button className="style-button">
            <Link className='nav-link' to='/signIn'>Sign In</Link>
           </button>
           </p>

           <p>
            <button className="style-button">
            <Link className='nav-link' to='/signUp'>Register</Link>
           </button>
           </p>

        </div>
    )
}

LoginVisual.propTypes = {
  classes: PropTypes.object.isRequired,
};

 
export default withStyles(styles)(LoginVisual);