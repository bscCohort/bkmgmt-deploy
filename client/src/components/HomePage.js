// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  Fade,
  CircularProgress,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCodeIcon from '@mui/icons-material/QrCode';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotesIcon from '@mui/icons-material/Notes';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    uniqueAuthors: 0,
    recentBook: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/books')
      .then(res => {
        const books = res.data;
        const uniqueAuthors = new Set(books.map(book => book.author)).size;
        const recentBook = books.sort((a, b) => 
          new Date(b.published_date) - new Date(a.published_date)
        )[0];

        setStats({
          totalBooks: books.length,
          uniqueAuthors,
          recentBook
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Welcome to Book Management System
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Organize and manage your books efficiently
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <MenuBookIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalBooks}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Books
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <PersonIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.uniqueAuthors}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Unique Authors
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Latest Book
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.recentBook?.title || 'No books yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Available Features
          </Typography>
        </Box>
        
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/book-list"
              variant="contained"
              size="large"
              startIcon={<LibraryBooksIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              View Books
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/create-book"
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Add New Book
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/export"
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Export Data
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/qr-codes"
              variant="contained"
              size="large"
              startIcon={<QrCodeIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              QR Codes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/notes/home"
              variant="contained"
              size="large"
              startIcon={<NotesIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Notes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="a"
              href="https://github.com/bscCohort/bkmgmt-deploy"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              GitHub
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default HomePage;