import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, MenuItem } from '@material-ui/core';

const MobileMenu = ({ anchorEl, closeMobileMenu }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={closeMobileMenu}
    >
      <MenuItem component={Link} onClick={closeMobileMenu} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} onClick={closeMobileMenu} to="/login">
        Login
      </MenuItem>
      <MenuItem component={Link} onClick={closeMobileMenu} to="/register">
        Register
      </MenuItem>
      <MenuItem component={Link} onClick={closeMobileMenu} to="/customer">
        Customer
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
