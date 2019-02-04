import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import "./ToDoWrapper.css"
import ToDo from "../../Todo";

const ToDoWrapper = props => {
    const { classes } = props;
    
    return <Card className={classes.card} >{props.children}</Card>;

};


ToDoWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDoWrapper);