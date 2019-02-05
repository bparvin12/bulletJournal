import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Weather.styles';
import Button from '@material-ui/core/Button';


const Weather = (props) => {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.input}>THIS IS WEATHER!!</h1>
            <Button variant="contained" className={classes.button}>
                Weather
           </Button>
        </div>
    )
}

 
Weather.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
   
  export default withStyles(styles)(Weather);