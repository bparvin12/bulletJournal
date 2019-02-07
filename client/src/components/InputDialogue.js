import React from 'react';

import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, IconButton, TextField, Typography
} from '@material-ui/core';

class InputDialogue extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.props.title);
    return (
      <div>
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
            {this.props.children}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default InputDialogue;