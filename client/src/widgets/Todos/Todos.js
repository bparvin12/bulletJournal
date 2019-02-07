import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from './Todos.styles';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FillCardHeader from "../../components/FillCardHeader";
import ToDoTask from "../../components/ToDoTask";
import InputDialogue from "../../components/InputDialogue";
import AddTaskItemForm from "../../components/AddTaskItemForm";

const Todos = (props) => {
    const { classes } = props;

    const AddTaskClick = () => {console.log("hallo")};

    return (
        <Card>
            <FillCardHeader title="To Do List:" icon="add">
                <AddTaskItemForm />
            </FillCardHeader>
            <CardContent >
                <ToDoTask />
            </CardContent>
        </Card>
    )
}

 
export default withStyles(styles)(Todos);