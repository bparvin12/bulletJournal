import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Renderer } from 'jss';

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
        <div className={classes.root}>
            <FormControl className={classes.margin}>
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
                    className = {props.inputClass}
                    classes={{
                        underline: classes.cssUnderline,
                    }}
                />
            </FormControl>
        </div>  
    );
}


export default withStyles(styles)(InputTextBox);
