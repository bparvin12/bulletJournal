import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, FormControlInput, Grid, InputBase, InputLabel, MuiThemeProvider, TextField, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import InputTextBox from "../../components/Inputs/InputTextBox";
import InputCalendarDate from '../../components/Inputs/InputCalendarDate';



class AddTaskItemForm extends React.Component {

  state = {
    
  };

  render() {


    return (
      <div>
        <InputTextBox label="Task" inputClass="taskToAdd" />
        <InputCalendarDate />
      </div>
    );
  }
}


export default AddTaskItemForm;