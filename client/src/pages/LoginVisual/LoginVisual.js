import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './LoginVisual.styles';
import Button from '@material-ui/core/Button';
import "./styles.css"
import dog from "./Images/BG1.jpg"

const LoginVisual = (props) => {
    const { classes } = props;
    return (
        <div>
            <h1>Q</h1>
            {/* <h1 className="flip-horizontal-fwd">Q</h1> */}
            {/* <img src={dog}className="logo flip-horizontal-fwd"></img> */}
            <input placeholder="e-mail" className="style-input"></input>
            <input placeholder="Password" className="style-input"></input>
            <p><button className="style-button">
                Ready to be served!
           </button>
           </p>
        </div>
    )
}

LoginVisual.propTypes = {
  classes: PropTypes.object.isRequired,
};

 
export default withStyles(styles)(LoginVisual);
