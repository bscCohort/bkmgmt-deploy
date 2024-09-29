// src/components/Navbar.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Book Management Project
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          {/* <Button color="primary" component={RouterLink} to="/about">
            About
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
