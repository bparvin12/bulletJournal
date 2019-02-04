import React from "react";
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import "./ToDoWrapper.css"

const ToDoWrapper = props => {
    // const { classes } = props;
    
    return <Card className="toDoWrapper" >{props.children}</Card>;

};



export default ToDoWrapper;