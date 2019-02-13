import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from './Todos.styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FillCardHeader from "../../components/Cards/FillCardHeader";
// import InputDialogue from "../../components/inputs/InputDialogue";
import AddTaskItemForm from "./AddTaskItemForm";
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem'
import ListItemPrimary from "./ListItemPrimary";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MenuList from "./MenuList";
import axios from "axios";
import moment from "moment";


class Todos extends React.Component {
    state = {
        tasks: []
      };
    
      
    //   componentDidMount = () => {
    //     const today = moment().format('YYYY-MM-DD');
    //     // axios.get('/tasks/date/' + today).then(response => {
    //     axios.get('/tasks/').then(response => {
    //       console.log(response);
    //       this.setState({
    //         tasks: response.data
    //       });
    //     })
    //   }
    taskList=[
        {
            "_id": ("5c5dc3761c1ac8fcfd8a69ea"),
            "task": "make database",
            "priority": "3",
            "date": "2018-02-08",
            "time": "00:00",
            "status": "completed"
        },
        {
            "_id": ("5c5dc3761c1ac8fcfd8a69ea"),
            "task": "connect database",
            "priority": "3",
            "date": "2018-02-08",
            "time": "00:00",
            "status": "started"
        }
    ];


    AddTaskClick = () => { console.log("hallo") };
      render () {
    return (
        <Card>
            <FillCardHeader title="To Do List:" icon="add">
                <AddTaskItemForm />
            </FillCardHeader>
            <CardContent >
                <List>
                    {this.taskList.map(taskItem => (
                    // {this.state.tasks.map(taskItem => (
                        <ListItem key={taskItem._id}>
                            <ListItemPrimary task={taskItem}/>
                            <ListItemSecondaryAction>
                                <MenuList />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )}
}


export default withStyles(styles)(Todos);

        // import React from "react";
// import {withStyles} from '@material-ui/core/styles';
            // import styles from './Todos.styles';
            // import Button from '@material-ui/core/Button';


// const Todos = (props) => {
//     const { classes } = props;
//     return (
//         <div>
//             <h1 className={classes.input}>TO DO LIST!!</h1>
//             <Button variant="contained" className={classes.button}>
//                 TODOS
//            </Button>
//         </div>
//     )
// }


// export default withStyles(styles)(Todos);