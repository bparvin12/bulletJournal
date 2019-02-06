import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "./ToDoTask.css";

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
                <List dense="true">
                    <ListItem>
                        <ListItemAvatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Single-line item"
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
                                <MenuItem onClick={this.handleClose}>start</MenuItem>
                                <MenuItem onClick={this.handleClose}>postpon</MenuItem>
                                <MenuItem onClick={this.handleClose}>complete</MenuItem>
                                <MenuItem onClick={this.handleClose}>cancel</MenuItem>
                            </Menu>
                        </ListItemSecondaryAction>
                    </ListItem>,
                    {/* )} */}
                </List>
            </div>

        );
    }
};


export default ToDoTask;