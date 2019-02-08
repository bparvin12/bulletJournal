import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});


const InputCalendarDate = props => {
    const { classes } = props;

    


    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label={props.label}
                type="Date"
                defaultValue= ""
                className={classes.textField}
                InputLabelProps={{ 
                    shrink: true,
                }}
            />
        </form>
    );
}



export default withStyles(styles)(InputCalendarDate);
