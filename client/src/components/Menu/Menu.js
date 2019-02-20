import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ListAltIcon from '@material-ui/icons/ListAlt'
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol'
import IsoIcon from '@material-ui/icons/Iso'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import Navbar from "../Navbar";
import styles from "./Menu.styles";
// import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import ListIcon from '@material-ui/icons/List';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import SchoolIcon from '@material-ui/icons/School';
// import HomeIcon from '@material-ui/icons/Home';
import Switch from '@material-ui/core/Switch';


class Menu extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    console.log(this.props)

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <NotificationsIcon /> : <ChevronLeftIcon />}
            </IconButton>

          </div>
          <Divider />
          <List>
            {/* performance */}
            <ListItem button key="performance" >
              <ListItemIcon><TrendingUpIcon /></ListItemIcon>
              <ListItemText>Performance</ListItemText>
              <Switch
                checked={this.props.checkedA}
                onChange={this.props.onChange('checkedA')}
                value="checkedA"
              />
            </ListItem>
            {/* task completion */}
            <ListItem button key="taskcompletion">
              <ListItemIcon><CheckBoxIcon /></ListItemIcon>
              <ListItemText>Task Completion</ListItemText>
              <Switch
                checked={this.props.checkedB}
                onChange={this.props.onChange('checkedB')}
                value="checkedB"
              />
            </ListItem>
            {/* Health Stats */}
            <ListItem button key="healthstats">
              <ListItemIcon><AccessibilityNewIcon /></ListItemIcon>
              <ListItemText>Health Stats</ListItemText>
              <Switch
                checked={this.props.checkedC}
                onChange={this.props.onChange('checkedC')}
                value="checkedC"
              />
            </ListItem>
            {/* Budget */}
            <ListItem button key="budget">
              <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
              <ListItemText>Budget</ListItemText>
              <Switch
                checked={this.props.checkedD}
                onChange={this.props.onChange('checkedD')}
                value="checkedD"
              />
            </ListItem>
            {/* Todo's */}
            <ListItem button key="todos">
              <ListItemIcon><ListAltIcon /></ListItemIcon>
              <ListItemText>Todos</ListItemText>
              <Switch
                checked={this.props.checkedE}
                onChange={this.props.onChange('checkedE')}
                value="checkedE"
              />
            </ListItem>
            {/* CryptoCurrency */}
            <ListItem button key="cryptocurrency">
              <ListItemIcon><EuroSymbolIcon /></ListItemIcon>
              <ListItemText>CryptoCurrency</ListItemText>
              <Switch
                checked={this.props.checkedF}
                onChange={this.props.onChange('checkedF')}
                value="checkedF"
              />
            </ListItem>
             {/* Calculator */}
             <ListItem button key="calculator">
              <ListItemIcon><IsoIcon /></ListItemIcon>
              <ListItemText>Calculator</ListItemText>
              <Switch
                checked={this.props.checkedG}
                onChange={this.props.onChange('checkedG')}
                value="checkedG"
              />
            </ListItem>
            {/* Weather */}
            <ListItem button key="weather">
              <ListItemIcon><WbSunnyIcon /></ListItemIcon>
              <ListItemText>Weather</ListItemText>
              <Switch
                checked={this.props.checkedH}
                onChange={this.props.onChange('checkedH')}
                value="checkedH"
              />
            </ListItem>
            {/* Calendar */}
            <ListItem button key="Calendar">
              <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
              <ListItemText>Calendar</ListItemText>
              <Switch
                checked={this.props.checkedI}
                onChange={this.props.onChange('checkedI')}
                value="checkedI"
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);
