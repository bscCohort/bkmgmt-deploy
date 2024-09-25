// src/components/Navbar.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Book Management Project
        </Typography>
        <Box>
          <Button
            color="primary"
            component="a"
            href="https://github.com/bscCohort/bkmgmt-deploy"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button color="primary" component={RouterLink} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;