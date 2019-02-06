import React from "react";
import { Button, ToolTip, IconButton, ClickAwayListener, Card, CardHeader, CardContent, Toolbar, Typography } from "@material-ui/core";
import PropTypes from 'prop-types';


const FillCardHeader =  props => {

    console.log(props)
    
    return (
        <div>
            <div>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className="toDoHeader-Title">
                        {props.title}
                    </Typography>
                    <div>
                        <IconButton onClick={props.clickAction}>
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













export default FillCardHeader;