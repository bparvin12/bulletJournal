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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
import Navbar from "../Navbar";
import styles from "./Menu.styles";
import Switch from '@material-ui/core/Switch';


class Menu extends React.Component {
  state = {
    open: false,
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes, theme } = this.props;

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
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>

          </div>
          <Divider />
          <List>
            {/* performance */}
            <ListItem button >
              <ListItemIcon><TrendingUpIcon /></ListItemIcon>
              <ListItemText>Performance</ListItemText>
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
            </ListItem>
            {/* task completion */}
            <ListItem button >
              <ListItemIcon><CheckBoxIcon /></ListItemIcon>
              <ListItemText>Task Completion</ListItemText>
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
              />
            </ListItem>
            {/* Health Stats */}
            <ListItem button >
              <ListItemIcon><AccessibilityNewIcon /></ListItemIcon>
              <ListItemText>Health Stats</ListItemText>
              <Switch
                checked={this.state.checkedC}
                onChange={this.handleChange('checkedC')}
                value="checkedC"
              />
            </ListItem>
            {/* Budget */}
            <ListItem button >
              <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
              <ListItemText>Budget</ListItemText>
              <Switch
                checked={this.state.checkedD}
                onChange={this.handleChange('checkedD')}
                value="checkedD"
              />
            </ListItem>
            {/* Todo's */}
            <ListItem button >
              <ListItemIcon><ListAltIcon /></ListItemIcon>
              <ListItemText>Todos</ListItemText>
              <Switch
                checked={this.state.checkedE}
                onChange={this.handleChange('checkedE')}
                value="checkedE"
              />
            </ListItem>
            {/* CryptoCurrency */}
            <ListItem button >
              <ListItemIcon><EuroSymbolIcon /></ListItemIcon>
              <ListItemText>CryptoCurrency</ListItemText>
              <Switch
                checked={this.state.checkedF}
                onChange={this.handleChange('checkedF')}
                value="checkedF"
              />
            </ListItem>
             {/* Calculator */}
             <ListItem button >
              <ListItemIcon><IsoIcon /></ListItemIcon>
              <ListItemText>Calculator</ListItemText>
              <Switch
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value="checkedG"
              />
            </ListItem>
            {/* Weather */}
            <ListItem button >
              <ListItemIcon><WbSunnyIcon /></ListItemIcon>
              <ListItemText>Weather</ListItemText>
              <Switch
                checked={this.state.checkedH}
                onChange={this.handleChange('checkedH')}
                value="checkedH"
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
