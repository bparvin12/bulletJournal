import React from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import "./ToDoHeader.css";

import Menu from '@material-ui/core/Menu';

class ToDoHeader extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    AddTaskClick = () => {
        console.log("add task clicked");
    };


    render() {
        const { anchorEl } = this.state;
        return (
            <div className="toDoHeader" >

                <div className="toDoHeader-AppBar">
                    <Toolbar>

                        <Typography variant="h6" color="inherit" className="toDoHeader-Title">
                            To Do List:
                </Typography>
                        <div>
                            <IconButton onClick={this.AddTaskClick}>
                                <i className="material-icons">add</i>
                            </IconButton>

                            <IconButton
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <i className="material-icons">more_vert</i>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>start</MenuItem>
                                <MenuItem onClick={this.handleClose}>postpon</MenuItem>
                                <MenuItem onClick={this.handleClose}>complete</MenuItem>
                                <MenuItem onClick={this.handleClose}>cancel</MenuItem>
                            </Menu>


                        </div>
                    </Toolbar>
                </div>


            </div>

        );
    }
}


// ToDoHeader.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default ToDoHeader;
