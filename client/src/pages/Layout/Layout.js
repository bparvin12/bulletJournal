import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FinanceWidget from '../../widgets/Finance';
import GoalsWidget from '../../widgets/Goals';
import TodosWidget from '../../widgets/Todos';
import Weather from "../../widgets/Weather";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import PieChart from "../../components/Charts/PieChart";
import PerformanceChart from "../../components/Charts/PerformanceChart";
import { Card } from '@material-ui/core';


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'black',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:'26px',
    opacity: 'min',
  },
  paper: {
    height: 240,
    background: "#333",
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'theme.palette.text.secondary',
  },
 card: {
    height: 120,
    background: "#333",
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'black',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
     <wrapper>

  {/* Top Row With the Notification Cards */}
        <Grid container spacing={24} >
        <Grid item xs={3}>
          <Card className={classes.card}>New Headlines</Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}><Weather height="200"/></Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>Social Media Notification</Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>Community Chat</Card>
        </Grid>

  {/* Second Row With the Performance Chart Grid Tile*/}      
        <Grid item xs={12} >
          <Paper className={classes.paper}><PerformanceChart height="200"/></Paper>
        </Grid>

  {/* Third Row With the three Grid Tiles: Task Chart, Goals, Budget */}       
        <Grid item xs={4}>
          <Paper className={classes.paper}><LineChart height="200"/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><BarChart height="200"/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PieChart height="200"/></Paper>
        </Grid>

  {/* Fourth Row With the two Grid Tiles: To do list, MISC List */}       
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>

  {/* Fifth Row With the three Grid Tiles: Task Chart, Goals, Budget */}       
  <Grid item xs={4}>
          <Paper className={classes.paper}><FinanceWidget /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><GoalsWidget /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><TodosWidget /></Paper>
        </Grid>
      </wrapper>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
 