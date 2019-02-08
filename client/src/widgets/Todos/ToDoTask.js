import React from "react";

import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, IconButton, Menu, MenuItem } from '@material-ui/core';


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
    // make a function that checks the status from database
    statusBullet = () => {
        
        switch (this.props.status) {
            case "started":
                return (<i className="material-icons">radio_button_checked</i>);
            case "postponed":
                return (<i className="material-icons">play_circle_outline</i>);
            case "completed":
                return (<i className="material-icons">check_circle_outline</i>);
            case "canceled":
                return (<i className="material-icons">cancel</i>);
            default:
                return (<i className="material-icons">radio_button_unchecked</i>);
        }
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemIcon dense="true">
                            {/* should technically call statusBullet() and return the material-icon with the corresponding status */}
                            {this.statusBullet()}
                        </ListItemIcon>
                        <ListItemText
                            primary={this.props.task}
                        />
                        <ListItemSecondaryAction>
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
                                <MenuItem onClick={this.handleClose}>Edit</MenuItem>
                                <MenuItem onClick={this.handleClose}>start</MenuItem>
                                <MenuItem onClick={this.handleClose}>postpone</MenuItem>
                                <MenuItem onClick={this.handleClose}>complete</MenuItem>
                                <MenuItem onClick={this.handleClose}>cancel</MenuItem>
                            </Menu>
                        </ListItemSecondaryAction>
                    </ListItem>
                    {/* )} */}
                </List>
            </div>

        );
    }
};


export default ToDoTask;