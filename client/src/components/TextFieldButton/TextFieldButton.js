import React from 'react';
import styles from "./TextFieldButton.styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class TextFieldButton extends React.Component {
  state = {
    name: 'How many calories?',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="(Positive-Intake)" 
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error"
          label="(Negative-Burned)" 
          defaultValue="How many calories?"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

      </form>
    );
  }
}

TextFieldButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldButton);
