// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bgcolor: 'background.paper',
      py: 2,
      width: '100%',
    }}
  >
    <Typography variant="body2" color="text.secondary" align="center">
      Built with ❤️️ By Asutosh Panda For Bsc Cohort | © 2024 Copyright
    </Typography>
  </Box>
);

export default Footer;