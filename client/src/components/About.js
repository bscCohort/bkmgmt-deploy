import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const About = () => {
    const [about, setAbout] = useState('');

    useEffect(() => {
        // Replace with the path to your Markdown file
        axios.get('./About.md')
            .then(response => {
                setAbout(response.data);
            })
            .catch(error => {
                console.error('Error fetching syllabus:', error);
            });
    }, []);

    return (
        <div>
            <ReactMarkdown children={about} />
        </div>
    );
};

export default About;
