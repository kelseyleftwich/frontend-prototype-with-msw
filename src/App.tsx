import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import ExperienceDetails from './components/ExperienceDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExperienceList from './components/ExperienceList';
import experiences from './__mocks__/experiences.json';
import * as types from './types/types';

function App() {
  return (
    <Container>
      <Box component="hgroup" mb={6}>
        <Typography variant="h1">LouTours</Typography>
        <Typography variant="h2">Food and Wine Tours</Typography>
      </Box>
      <BrowserRouter>
        <Switch>
          <Route path="/experience/:id">
            <ExperienceDetails
              experience={experiences[0] as types.Experience}
            />
          </Route>
          <Route path="/" exact>
            <ExperienceList experiences={experiences as types.Experience[]} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
