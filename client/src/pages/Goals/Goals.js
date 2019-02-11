import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Goals.styles';
import Button from '@material-ui/core/Button';


const Goals = (props) => {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.input}>THESE ARE THE GOALS!!</h1>
            <Button variant="contained" className={classes.button}>
                GOALS
           </Button>
        </div>
    )
}

Goals.propTypes = {
  classes: PropTypes.object.isRequired,
};

 
export default withStyles(styles)(Goals);
