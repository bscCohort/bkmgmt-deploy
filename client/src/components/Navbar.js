import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import DownloadIcon from '@mui/icons-material/Download';
import QrCodeIcon from '@mui/icons-material/QrCode';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

const notesPages = [
  { title: 'Home', path: '/notes/home' },
  { title: 'Schedule', path: '/notes/schedule' },
];

const Navbar = () => {
  const [notesAnchorEl, setNotesAnchorEl] = useState(null);

  const handleNotesClick = (event) => {
    setNotesAnchorEl(event.currentTarget);
  };

  const handleNotesClose = () => {
    setNotesAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Book Management Project
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            color="primary"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>

          <Button
            color="primary"
            onClick={handleNotesClick}
            startIcon={<MenuBookIcon />} // Added icon here
          >
            Notes
          </Button>

          <Button
            color="primary"
            component={RouterLink}
            to="/export"
            startIcon={<DownloadIcon />}
          >
            Export
          </Button>
          
          <Button
            color="primary"
            component={RouterLink}
            to="/qr-codes"
            startIcon={<QrCodeIcon />}
          >
            QR Codes
          </Button>

          <Menu
            anchorEl={notesAnchorEl}
            open={Boolean(notesAnchorEl)}
            onClose={handleNotesClose}
          >
            {notesPages.map((page) => (
              <MenuItem 
                key={page.path} 
                component={RouterLink} 
                to={page.path}
                onClick={handleNotesClose}
              >
                {page.title}
              </MenuItem>
            ))}
          </Menu>
          <IconButton
            color="primary"
            component="a"
            href="https://github.com/bscCohort/bkmgmt-deploy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;