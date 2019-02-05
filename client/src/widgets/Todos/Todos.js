import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from './Todos.styles';
import Button from '@material-ui/core/Button';
import ToDo from '../../components/ToDo';

const Todos = (props) => {
    const { classes } = props;
    return (
        // <div>
        //     <h1 className={classes.input}>TO DO LIST!!</h1>
        //     <Button variant="contained" className={classes.button}>
        //         TODOS
        //    </Button>
        // </div>

        <ToDo />
    )
}

 
export default withStyles(styles)(Todos);