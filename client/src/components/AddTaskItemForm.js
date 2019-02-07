import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, FormControlInput, Grid, InputBase, InputLabel, MuiThemeProvider, TextField, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import InputTextBox from './InputTextBox';



class AddTaskItemForm extends React.Component {


  render() {

  
    return (
      <div>
      <InputTextBox label="Task" />
      <InputTextBox label="Deadline" />
      </div>
    );
  }
}


export default AddTaskItemForm;