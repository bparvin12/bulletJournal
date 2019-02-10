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
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import MoreIcon from '@material-ui/icons/MoreVert';
>>>>>>> 8ce885fe35149249ae46efac51d13d2be21a843a

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
        onClick={props.handleDrawerOpen}
        className={classNames(classes.menuButton, {
        [classes.hide]: props.open,
        })}
    >
        <MenuIcon />
    </IconButton>
<<<<<<< HEAD
    <Typography variant="h2" color="inherit" noWrap>
    <Link className='nav-link' to='/'>Q The Butler</Link>
=======
    <Typography className={classes.title} variant="h2" color="inherit" align="left" noWrap>
        <Link className='nav-link' to='/'>Queue The Butler</Link>
>>>>>>> 8ce885fe35149249ae46efac51d13d2be21a843a
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
    <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={props.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
    </Toolbar>
    </AppBar>
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);