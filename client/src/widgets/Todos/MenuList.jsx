import React from "react";

import { IconButton, Menu, MenuItem } from '@material-ui/core';


class ToDoTask extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
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
                    <MenuItem onClick={this.handleClose}>edit</MenuItem>
                    <MenuItem onClick={this.handleClose}>start</MenuItem>
                    <MenuItem onClick={this.handleClose}>postpone</MenuItem>
                    <MenuItem onClick={this.handleClose}>complete</MenuItem>
                    <MenuItem onClick={this.handleClose}>cancel</MenuItem>
                </Menu>
            </div>
        );
    }
};


export default ToDoTask;