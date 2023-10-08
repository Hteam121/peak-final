import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PowerIcon from '@mui/icons-material/Power';
import AirplayIcon from '@mui/icons-material/Airplay';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // <-- Import the new icon
import theme from '../theme';
import { Link } from 'react-router-dom';  
import logo from '../img/peak_logo1.png';

function Sidebar() {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        width: '250px',
      }}
    >
      {/* Logo at the top */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: '150%', maxWidth: '100px', marginTop: '-15px', marginBottom: '-25px'}} />
        </Link>
      </Box>

      <Divider />
      
      <List>
        <ListItem button component={Link} to="/" key="Dashboard" sx={{ '&:hover': { background: theme.palette.background.default } }}>
          <ListItemIcon><DashboardIcon color="secondary" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/energy" key="Energy" sx={{ '&:hover': { background: theme.palette.background.default } }}>
          <ListItemIcon><PowerIcon color="secondary" /></ListItemIcon>
          <ListItemText primary="Energy" />
        </ListItem>
        <ListItem button component={Link} to="/quality-control" key="Quality Control" sx={{ '&:hover': { background: theme.palette.background.default } }}>
          <ListItemIcon><AirplayIcon color="secondary" /></ListItemIcon>
          <ListItemText primary="Quality Control" />
        </ListItem>
        <ListItem button component={Link} to="/cost-savings" key="Cost Savings" sx={{ '&:hover': { background: theme.palette.background.default } }}>
          <ListItemIcon><MonetizationOnIcon color="secondary" /></ListItemIcon>  {/* New icon */}
          <ListItemText primary="Cost Savings" />
        </ListItem>
      </List>
      
      <Box flexGrow={1}></Box>
      
      <Divider />
      <List>
        <ListItem button component={Link} to="/settings" key="Settings" sx={{ '&:hover': { background: theme.palette.background.default } }}>
          <ListItemIcon><SettingsIcon color="secondary" /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/profile" key="Profile" sx={{ '&:hover': { background: theme.palette.background.default } }}>
          <ListItemIcon><PersonIcon color="secondary" /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
