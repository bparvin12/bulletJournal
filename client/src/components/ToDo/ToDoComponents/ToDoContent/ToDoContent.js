import React from "react";
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import "./ToDoContent.css";
import ToDoTask from "../ToDoTask";



const ToDoContent = props => {
    const { classes } = props;




    return (

        <CardContent>

            <ToDoTask />
        </CardContent>
    );

}



export default ToDoContent;