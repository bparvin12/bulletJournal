import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import TaskInputDialog from '../../widgets/Todos/TaskInputDialog';


const FillCardHeader = props => {

    console.log(props)

    return (
        <div>
            <Toolbar>
                <Typography variant="h6" color="inherit" className="toDoHeader-Title">
                    {props.title}
                </Typography>
                <div>
                    <TaskInputDialog icon={props.icon} dbCollection="" title = {props.title}>{props.children}</TaskInputDialog>
                </div>
            </Toolbar>
        </div>

    );
}


// ToDoHeader.propTypes = {
//     classes: PropTypes.object.isRequired,
// };




export default FillCardHeader;