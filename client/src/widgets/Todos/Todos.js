import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from './Todos.styles';
import Button from '@material-ui/core/Button';
import ToDo from '../../components/ToDo';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FillCardHeader from "../../components/FillCardHeader/FillCardHeader";

const Todos = (props) => {
    const { classes } = props;

    const AddTaskClick = () => {
        console.log("add task clicked"); 
    };

    return (
        <Card>
            <FillCardHeader title="To Do List:" clickAction={AddTaskClick}>

            </FillCardHeader>
            <CardContent >
                {/* <ToDoContent /> */}
            </CardContent>
        </Card>
        //     <h1 className={classes.input}>TO DO LIST!!</h1>
        //     <Button variant="contained" className={classes.button}>
        //         TODOS
        //    </Button>
        // </div>

        // <ToDo />
    )
}

 
export default withStyles(styles)(Todos);