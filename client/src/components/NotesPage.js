import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Container, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Routes, Route, useParams } from 'react-router-dom';

const NoteContent = () => {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { noteId = 'home' } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`/notes/${noteId}.md`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${noteId}.md`);
        }
        return response.text();
      })
      .then(text => {
        setMarkdown(text);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading markdown file:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [noteId]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Typography variant="h4" gutterBottom {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
        h3: ({ node, ...props }) => <Typography variant="h6" gutterBottom {...props} />,
        h4: ({ node, ...props }) => <Typography variant="subtitle1" gutterBottom {...props} />,
        h5: ({ node, ...props }) => <Typography variant="subtitle2" gutterBottom {...props} />,
        h6: ({ node, ...props }) => <Typography variant="subtitle2" gutterBottom {...props} />,
        p: ({ node, ...props }) => <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }} {...props} />,
        ul: ({ node, ...props }) => <Box component="ul" sx={{ pl: 2 }} {...props} />,
        ol: ({ node, ...props }) => <Box component="ol" sx={{ pl: 2 }} {...props} />,
        li: ({ node, ...props }) => <Typography component="li" variant="body1" sx={{ mb: 1 }} {...props} />,
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return inline ? (
            <Typography 
              component="code" 
              sx={{ 
                bgcolor: 'background.paper', 
                p: 0.5, 
                borderRadius: 1,
                fontFamily: 'monospace'
              }} 
              {...props}
            >
              {children}
            </Typography>
          ) : (
            <SyntaxHighlighter 
              style={solarizedlight} 
              language={match ? match[1] : ''} 
              PreTag="div"
              customStyle={{
                margin: '16px 0'
              }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        blockquote: ({ node, ...props }) => (
          <Box
            component="blockquote"
            sx={{
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              pl: 2,
              py: 1,
              my: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="body1" {...props} />
          </Box>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

const NotesPage = () => {
  return (
    <Container maxWidth="lg">
      <Box py={3}>
        <Routes>
          <Route path="/" element={<NoteContent />} />
          <Route path=":noteId" element={<NoteContent />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default NotesPage;