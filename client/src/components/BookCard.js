// src/components/BookCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <Card
      sx={{
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h5" component="div" color="primary" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {book.author} {/* Assuming 'author' is a property of the book */}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {book.description} {/* Assuming 'description' is a property of the book */}
        </Typography>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            component={Link}
            to={`/show-book/${book.id}`} // Assuming 'id' is a property of the book
            variant="contained"
            color="primary"
            size="small"
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
