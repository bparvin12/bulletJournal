import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: purple[500],
        },
    },
    notchedOutline: {},
});

const InputTextBox = props => {
    const { classes } = props;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                }}
            >
                {props.label}
            </InputLabel>
            <Input
                id="custom-css-standard-input"
                className={props.inputClass}
                classes={{
                    underline: classes.cssUnderline,
                }}
            />
        </FormControl>
    );
}


export default withStyles(styles)(InputTextBox);
