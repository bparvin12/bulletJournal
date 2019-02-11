// import React from "react";
// import { withStyles } from '@material-ui/core/styles';
// import styles from './Todos.styles';
// import Button from '@material-ui/core/Button';
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import FillCardHeader from "../../components/Cards/FillCardHeader";
// import ToDoTask from "./ToDoTask";
// // import InputDialogue from "../../components/inputs/InputDialogue";
// import AddTaskItemForm from "./AddTaskItemForm";

// const Todos = (props) => {
//     const { classes } = props;

//     const AddTaskClick = () => {console.log("hallo")};

//     return (
//         <Card>
//             <FillCardHeader title="To Do List:" icon="add">
//                 <AddTaskItemForm />
//             </FillCardHeader>
//             <CardContent >
//                 <ToDoTask task = "eat lunch" status="completed" />
//                 <ToDoTask task = "say hi to bijan today" status = "canceled" />
//                 <ToDoTask task = "make to do list" status = "started" />
//                 <ToDoTask task = "connect database" status = ""/>
//                 <ToDoTask task = "present project" status="postponed"/>

//             </CardContent>
//         </Card>
//     )
// }

 
// export default withStyles(styles)(Todos);

import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from './Todos.styles';
import Button from '@material-ui/core/Button';


const Todos = (props) => {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.input}>TO DO LIST!!</h1>
            <Button variant="contained" className={classes.button}>
                TODOS
           </Button>
        </div>
    )
}

 
export default withStyles(styles)(Todos);