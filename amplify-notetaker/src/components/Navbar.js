import React from "react";
import { NavLink } from "react-router-dom";
// App Bar Component Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Navigation Component Imports
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = ({ user, handleSignout }) => {
    const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={"static"}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello, {user.username}
        </Typography>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <NavLink to={"/"}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </NavLink>
          <NavLink to={"/profile"}>
            <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
          </NavLink>
          <IconButton aria-label="Signout" onClick={handleSignout}>
            <ExitToAppIcon />
          </IconButton>
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}

export default Navbar;