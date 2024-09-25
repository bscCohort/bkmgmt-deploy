// src/components/ShowBookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid } from '@mui/material';

import BookCard from './BookCard';

function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/books`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList ->');
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg">

      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Books List
      </Typography>

      <Button
        component={Link}
        to="/create-book"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add New Book
      </Button>

      <Grid container spacing={3}>
        {books.length === 0 ? (
          <Typography>No books found!</Typography>
        ) : (
          books.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BookCard book={book} />
            </Grid>
          ))
        )}
      </Grid>
      

    </Container>
  );
}

export default ShowBookList;