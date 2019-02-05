import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Health.styles';
import Button from '@material-ui/core/Button';


const Health = (props) => {
    const { classes } = props;
    return (
        <div>
<h1 className={classes.input}>THIS IS HEALTH!!</h1>
            <Button variant="contained" className={classes.button}>
                Health
           </Button>
        </div>
    )
}

 
Health.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
   
  export default withStyles(styles)(Health);