// src/components/About.js
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const About = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (noteText) => {
        const newNote = {
            id: Date.now(),
            text: noteText,
            timestamp: new Date().toLocaleString()
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Notes for Teaching CRUD App in MERN
                </Typography>

                {/* Note input area */}
                <Box mb={2}>
                    <TextField
                        multiline
                        rows={4}
                        label="Enter your notes"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => addNote(e.target.value)}
                    />
                </Box>

                {/* Display notes */}
                {notes.map((note) => (
                    <Box key={note.id} mb={2} p={2} border={1} borderRadius={4}>
                        <Typography variant="body1">{note.text}</Typography>
                        <Typography variant="caption" color="textSecondary">
                            Added: {note.timestamp}
                        </Typography>
                        <Button size="small" onClick={() => deleteNote(note.id)} color="error">Delete</Button>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default About;
