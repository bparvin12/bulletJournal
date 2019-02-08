// const users = require("../../routes/users");

//         function login(email, password) 
//         {
//             return console.log('<h1> Login Page </h1>');
          
//         };

import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Login.styles';
import Button from '@material-ui/core/Button';


const Login = (props) => {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.input}>THIS IS Login Page!!</h1>
            <Button variant="contained" className={classes.button}>
                Login
           </Button>
        </div>
    )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

 
export default withStyles(styles)(Login);
       