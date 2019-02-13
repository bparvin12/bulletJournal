
import 'date-fns';
import React from 'react';
import InputTextBox from "../../components/Inputs/InputTextBox";
import InputCalendarDate from '../../components/Inputs/InputCalendarDate';
import InputTime from "../../components/Inputs/InputTime";
import InputSwitch from "../../components/Inputs/InputSwitch";



class AddTaskItemForm extends React.Component {
  addTask = () => {
    // this.props.setState({ open: false });
    console.log("HALLO");
  }

  render() {

    return (
      <div>
        <InputTextBox name="task" label="Task" inputClass="taskToAdd" />
        <InputCalendarDate name="date" />
        <br></br>
        <InputSwitch activate={this.moreInfo} color="default" />
        {/* want to be able to toggle away following inputs */}
        <InputTime name="time" label="Deadline" />
        <br></br>
        <InputTextBox name="description" label="Task Description" />
        
      </div>
    );
  }
}


export default AddTaskItemForm;