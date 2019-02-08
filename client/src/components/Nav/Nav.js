import React from "react";
import styles from "./Nav.styles";
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import WeatherWidget from "../WeatherWidget";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountIcon from "../AccountIcon";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const Nav = props => {
    const { classes } = props;
    return <AppBar
    position="fixed"
    className={classNames(classes.appBar, {
    [classes.appBarShift]: props.open,
    })}
    >
    <Toolbar disableGutters={!props.open}>
    <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={this.handleDrawerOpen}
        className={classNames(classes.menuButton, {
        [classes.hide]: props.open,
        })}
    >
        <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" noWrap>
        Queue The Butler
    </Typography>
    
    <div className={classes.search}>
        <div className={classes.searchIcon}>
        <SearchIcon />
        </div>
        <InputBase
        placeholder="Search…"
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        />
    </div>
    <div className={classes.grow} />
    <WeatherWidget />
    <AccountIcon />
    </Toolbar>
    </AppBar>
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);