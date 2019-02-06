import React from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import "./ToDoHeader.css";


const ToDoHeader = () => {
    const AddTaskClick = () => {
        console.log("add task clicked");
    };

    return (
        <div className="toDoHeader" >
            <div className="toDoHeader-AppBar">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className="toDoHeader-Title">
                        To Do List:
                    </Typography>
                    <div>
                        <IconButton onClick={AddTaskClick}>
                            <i className="material-icons">add</i>
                        </IconButton>
                    </div>
                </Toolbar>
            </div>
        </div>
    ); 
}


// ToDoHeader.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default ToDoHeader;
