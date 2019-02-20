import React from 'react';
import styles from "./Navbar.styles";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import WeatherWidget from "../WeatherWidget";
// import { Link as RouterLink } from 'react-router-dom'
// import { Modal } from '@material-ui/core';
// import Link from '@material-ui/core/Link';
import SimpleModalWrapped from "../Modal";
// import { connect } from 'react-redux';
// import { signOut } from '../../actions';
// import * as actions from '../../actions';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  signOut() {
    console.log('sign out initiated')
    this.props.signOut()
  };

  goHome() {
    window.location.href = "/home"
  }

  goToSignIn() {
    window.location.href = "/signin"
  }

  goToSignUp() {
    window.location.href = "/signup"
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose} onClick={this.goHome}>Home</MenuItem>
        { !this.props.isAuth ?
          [<MenuItem onClick={this.goToSignIn}>Sign In</MenuItem>,
          <MenuItem onClick={this.goToSignOut}>Register</MenuItem>]
        : null
        }

        { this.props.isAuth ?
          <MenuItem><Link className='nav-link' to='/signout' onClick={this.signOut} >Sign Out</Link></MenuItem>
          : null
        }

      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <div className={classes.grow} />

        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <AppBar className={classNames(classes.appBar, {
        [classes.appBarShift]: this.props.open,
      })} position="fixed">

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: this.props.open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h2" color="inherit" noWrap onClick={this.goHome}>
            {/* <Link className='nav-link' to='/'>"Q" the Butler</Link> */}
            Q the Butler
          </Typography>
          <div className={classes.grow} />
          <div className={classes.weatherWidget}>
            <WeatherWidget />
          </div>
          <div className={classes.grow} />
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
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">  
              <HomeIcon className={classes.iconHover} color="inherit" onClick={this.goHome} />
            </IconButton>
            <SimpleModalWrapped />
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        {renderMenu}
        {renderMobileMenu}
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export class Auth extends React.Component {
  render() {
    return (
      function mapStateToProps(state) {
        return (
    
          state = {isAuth: state.auth.isAuthenticated}
          
        )
      }
    )}
};

export default withStyles(styles)(Navbar);

// export default compose(
//   connect(mapStateToProps, actions),
//   reduxForm({ form: 'signin' })
//   )(SignIn)