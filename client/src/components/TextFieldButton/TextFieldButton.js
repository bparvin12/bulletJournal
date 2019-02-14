import React from 'react';
import styles from "./TextFieldButton.styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

class TextFieldButton extends React.Component {
  state = {
    positiveCalorieIntake: 'How many calories?',
    negativeCalorieIntake: '',
  };

  handleChange = positiveCalorieIntake => event => {
    this.setState({
      [positiveCalorieIntake]: event.target.value,
    });
  };

  handleChange = negativeCalorieIntake => event => {
    this.setState({
      [negativeCalorieIntake]: event.target.value,
    });
  };


  // handlePositiveIntakeChange = event => {
  //   this.setState({
  //     positiveIntake: event.target.value
  //   })
  // }

  // handleNegativeIntakeChange = event => {
  //   this.setState({
  //     negativeIntake: event.target.value
  //   })
  // }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
      <h4 className={classes.subinput}>{this.props.date}</h4>
        <TextField
          id="outlined-name"
          label="(Positive-Intake)" 
          className={classes.textField}
          value={this.state.positiveCalorieIntake}
          onChange={this.handleChange('positiveCalorieIntake')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="(Negative-Burned)"
          className={classes.textField}
          value={this.state.negativeCalorieIntake}
          onChange={this.handleChange('negativeCalorieIntake')}
          margin="normal"
          variant="outlined"
        />
        <Button 
        variant="contained" 
        size="small" color="secondary" 
        className={classes.button}>
        <SaveIcon 
        className={classNames(classes.leftIcon, 
        classes.iconSmall)} />
        Save
      </Button>
      </form>
    );
  }
}

TextFieldButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldButton);
