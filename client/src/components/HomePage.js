// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Welcome to the Book Management System
      </Typography>
      <Typography variant="h5" gutterBottom>
        Manage your books efficiently and effectively.
      </Typography>
      <Box mt={4}>
        <Button 
          component={Link} 
          to="/books" // Updated to link to the ShowBookList component
          color="primary" 
          variant="contained"
        >
          View Books
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
