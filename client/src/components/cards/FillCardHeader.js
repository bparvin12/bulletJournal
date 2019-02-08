import React from "react";
import { Button, ToolTip, IconButton, ClickAwayListener, Card, CardHeader, CardContent, Toolbar, Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import InputDialogue from "../inputs/InputDialogue";


const FillCardHeader = props => {

    console.log(props)

    return (
        <div>
            <Toolbar>
                <Typography variant="h6" color="inherit" className="toDoHeader-Title">
                    {props.title}
                </Typography>
                <div>
                    <InputDialogue icon={props.icon} title = {props.title}>{props.children}</InputDialogue>
                </div>
            </Toolbar>
        </div>

    );
}


// ToDoHeader.propTypes = {
//     classes: PropTypes.object.isRequired,
// };




export default FillCardHeader;