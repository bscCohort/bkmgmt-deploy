// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.8,
              cursor: 'pointer'
            }
          }}
        >
          Book Management Project
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;