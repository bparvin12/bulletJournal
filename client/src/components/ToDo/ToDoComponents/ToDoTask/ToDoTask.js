import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import DeleteIcon from '@material-ui/icons/Delete';


import "./ToDoTask.css";

class ToDoTask extends React.Component {
    state = {
        anchorEl: null,
        dense: true,
        // secondary: false,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    // function generate(element) {
    // return [0, 1, 2].map(value =>
    //     React.cloneElement(element, {
    //         key: value,
    //     }),
    // );


    // class InteractiveList extends React.Component {
    //     state = {
    //         dense: false,
    //         secondary: false,
    //     };

    render() {
        const { classes } = this.props;
        // const { dense, secondary } = this.state;
        const { anchorEl } = this.state;

        return (
            <div>
                <List dense="true">
                    {/* {generate( */}
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
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