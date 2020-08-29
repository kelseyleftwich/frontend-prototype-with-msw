import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Experience from './components/Experience';

function App() {
  return (
    <Container>
      <Box component="hgroup">
        <Typography variant="h1">LouTours</Typography>
        <Typography variant="h2">Food and Wine Tours</Typography>
      </Box>
      <Experience />
    </Container>
  );
}

export default App;
