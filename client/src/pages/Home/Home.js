import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FinanceWidget from '../../widgets/Finance';
// import GoalsWidget from '../../widgets/Goals';
// import TodosWidget from '../../widgets/Todos';
// import Weather from "../../widgets/Weather";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
// import PieChart from "../../components/Charts/PieChart";
import PerformanceChart from "../../components/Charts/PerformanceChart";
// import { Card, BottomNavigation } from '@material-ui/core';
// import Chat from "../../widgets/Chat";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CompleteCalc from "../../components/Calculator/CompleteCalc.jsx";
// import WeatherWidget from "../../components/WeatherWidget/WeatherCard"
import WeatherCard from '../../components/WeatherWidget/WeatherCard';
import Stock from "../../components/Stock/CompleteStock";
import CompleteCalendar from "../../components/Calendar/CompleteCalendar";


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
    padding: '26px',
    opacity: 'min',
    height: 'auto',
  },
  paper: {
    height: 370,
    background: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
    // background: 'lightsilver',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    justify: 'bottom',
    text: 'white',
    color: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
  },
  card: {
    height: 300,
    background: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#D3D3D3',
  },
});

class CenteredGrid extends React.Component {

  render() {
    const { classes } = this.props;

    console.log(this.props.checkedG)

    return (
      <div className={classes.root}>

        {/* Top Row With the Notification Cards */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24} >
          {/* <Grid item xs={3}>
          <Card className={classes.card}>News Headlines</Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}><Weather /></Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>Social Media Notification</Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}><Chat /></Card>
        </Grid> */}

          {/* Second Row With the Performance Chart Grid Tile*/}
          {this.props.checkedA &&
            <Grid item xs={12} >
              <Paper className={classes.paper}>
                <Typography className={classes.title} variant="h4" align="left" color='textPrimary' noWrap>
                  <Link className='performance-link' to='../Goals/Goals.js'>Performance:</Link>
                </Typography>
                <PerformanceChart height="360" />
              </Paper>
            </Grid>
          }

          {/* Third Row With the three Grid Tiles: Task Chart, Goals, Budget */}
          {this.props.checkedB &&
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} variant="h4" align="left" color='primary' noWrap>
                  <Link className='todolist-link' to='../Todos/Todos.js'>Task Completion:</Link>
                </Typography>
                <LineChart height="360" />
              </Paper>
            </Grid>
          }
          {this.props.checkedC &&
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} variant="h4" align="left" color='primary' noWrap>
                  <Link className='health-link' to='../Health/Health.js'>Health Stats:</Link>
                </Typography>
                <BarChart height="340" />
              </Paper>
            </Grid>
          }
          {this.props.checkedD &&
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} variant="h4" align="left" color='primary' noWrap>
                  <Link className='finance-link' to='../Finance/Finance.js'>Budget:</Link>
                </Typography>
                <FinanceWidget />
              </Paper>
            </Grid>
          }

          {/* Fourth Row With the two Grid Tiles: To do list, MISC List */}
          {this.props.checkedE &&
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {/* <TodosWidget /> */}
              </Paper>
            </Grid>
          }
          {this.props.checkedF &&
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Stock />
              </Paper>
            </Grid>
          }

          {/* Fifth Row */}
          {this.props.checkedG &&
            <Grid item xs={3}>
              <Paper
                className={classes.paper} >
                <CompleteCalc />
              </Paper>
            </Grid>
          }
          {this.props.checkedH &&
            <Grid item xs={5}>
              <Paper className={classes.paper}>
                <WeatherCard />
              </Paper>
            </Grid>
          }
          {this.props.checkedI &&
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <CompleteCalendar />
              </Paper>
            </Grid>
          }
        </Grid>
      </div>
    );
  }
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
