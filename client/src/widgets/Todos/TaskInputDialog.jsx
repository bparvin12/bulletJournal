import React from 'react';
import InputTextBox from '../../components/Inputs/InputTextBox';
import InputCalendarDate from '../../components/Inputs/InputCalendarDate';
import InputSwitch from '../../components/Inputs/InputSwitch';
import InputTime from '../../components/Inputs/InputTime';

import {
  Button, Dialog, DialogContent, 
  DialogTitle, IconButton, Typography
} from '@material-ui/core';

class InputDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddClose = () => {

    this.setState({ open: false });
  };


  render() {
    console.log(this.props.title);
    return (
      <div>
        {/* this  is the part that will trigger the dialog */}
        <IconButton variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {/* in case we want a different icon */}
          <i className="material-icons">{this.props.icon}</i>
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography>
              Add to {this.props.title}
              <IconButton onClick={this.handleClose} color="primary">
                <i className="material-icons">close</i>
              </IconButton>
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form action="/task/submit" method="post" noValidate>
              <InputTextBox name="task" label="Task" inputClass="taskToAdd" />
              <InputCalendarDate name="date" />
              <br></br>
              <InputSwitch activate={this.moreInfo} color="default" />
              {/* want to be able to toggle away following inputs */}
              <InputTime name="time" label="Deadline" />
              <br></br>
              <InputTextBox name="description" label="Task Description" />
              <Button onClick={this.handleAddClose} variant="outlined" >
                ADD
              </Button>
            </form>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.handleAddClose} color="primary">
              ADD
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}


export default InputDialog;