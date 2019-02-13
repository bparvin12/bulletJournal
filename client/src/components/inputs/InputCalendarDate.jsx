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
    <TextField
      id="date"
      label={props.label}
      type="Date"
      defaultValue=""
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

InputCalendarDate.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(InputCalendarDate);
