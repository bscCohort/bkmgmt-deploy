// src/components/About.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    const [about, setAbout] = useState('');

    useEffect(() => {
        // Fetch the Markdown file from the public folder
        axios.get('/About.md')
            .then(response => {
                setAbout(response.data);
            })
            .catch(error => {
                console.error('Error fetching About content:', error);
                setAbout('# Error\nFailed to load About content. Please try again later.');
            });
    }, []);

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                    About
                </Typography>
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <Typography variant="h3" gutterBottom {...props} />,
                        h2: ({ node, ...props }) => <Typography variant="h4" gutterBottom {...props} />,
                        h3: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
                        p: ({ node, ...props }) => <Typography paragraph {...props} />,
                        a: ({ node, ...props }) => <Typography component="a" color="primary" {...props} />,
                    }}
                >
                    {about}
                </ReactMarkdown>
            </Box>
        </Container>
    );
};

export default About;