import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import "./ToDoHeader.css";

import Menu from '@material-ui/core/Menu';

const ToDoHeader = () => (
    <div className="toDoHeader">

        <AppBar position="fixed" color="primary" className="toDoHeader-AppBar">
            <Toolbar>

                <Typography variant="h6" color="inherit" className="toDoHeader-Title">
                    To Do: 
                </Typography>
                <div>
                    <Icon color="inherit" align="right">
                        <i class="material-icons">add</i>
                    </Icon>
                    <Icon color="inherit">
                        <i class="material-icons">more_vert</i>
                    </Icon>
                </div>
            </Toolbar>
        </AppBar>


    </div>
);


ToDoHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ToDoHeader;
