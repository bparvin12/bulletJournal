import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Finance.styles';
import Button from '@material-ui/core/Button';


const Finance = (props) => {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.input}>THIS IS FINANCE!!</h1>
            <Button variant="contained" className={classes.button}>
                FINANCE
           </Button>
        </div>
    )
}

Finance.propTypes = {
  classes: PropTypes.object.isRequired,
};

 
export default withStyles(styles)(Finance);
