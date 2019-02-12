import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, FormControlInput, Grid, InputBase, InputLabel, MuiThemeProvider, TextField, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import InputTextBox from "../../components/Inputs/InputTextBox";
import InputCalendarDate from '../../components/Inputs/InputCalendarDate';
import InputTime from "../../components/Inputs/InputTime";
import InputSwitch from "../../components/Inputs/InputSwitch";



class AddTaskItemForm extends React.Component {
  addTask = () => {
    this.props.setState({ open: false });
    console.log("HALLO");
  }

  render() {

    return (
      <form action="/task/submit" className={this.container} noValidate>
        <InputTextBox name="task" label="Task" inputClass="taskToAdd" />
        <InputCalendarDate name="date" />
        <br></br>
        <InputSwitch activate={this.moreInfo} color="default" />
        {/* want to be able to toggle away following inputs */}
        <InputTime name="time" label="Deadline" />
        <br></br>
        <InputTextBox name="description" label="Task Description" />
        <Button onClick={this.addTask} variant="outlined" >
          ADD
        </Button>
      </form>
    );
  }
}


export default AddTaskItemForm;