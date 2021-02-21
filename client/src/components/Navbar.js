import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  IconButton,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MobileMenu from './MobileMenu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    textDecoration: 'none',
    letterSpacing: '2px',
  },

  navItems: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const openMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Container disableGutters>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            color="inherit"
            to="/"
          >
            Mern
          </Typography>
          <div className={classes.navItems}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/customer">
              Customer
            </Button>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileMenu anchorEl={anchorEl} closeMobileMenu={closeMobileMenu} />
    </Container>
  );
};

export default Navbar;
