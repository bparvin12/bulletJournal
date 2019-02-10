import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Stock.styles';


const Stock = (props) => {
    const { classes } = props;
    return (
        <div>

        </div>
        
    )
}

Stock.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Stock);
