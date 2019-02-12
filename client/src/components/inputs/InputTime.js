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

const InputTime = props => {
    const { classes } = props;

    return (
        <TextField
            id="time"
            label={props.label}
            type="time"
            defaultValue="11:59 PM"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
        />
    );
}

InputTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputTime);
