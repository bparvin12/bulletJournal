import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FinanceWidget from '../../widgets/Finance';
import GoalsWidget from '../../widgets/Goals';
import TodosWidget from '../../widgets/Todos';


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:'26px',
    opacity: 'min',
  },
  paper: {
    height: 240,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'theme.palette.text.secondary',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
     <wrapper>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12 "Performance (Graph)"</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><TodosWidget /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><GoalsWidget /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><FinanceWidget /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      </wrapper>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
 