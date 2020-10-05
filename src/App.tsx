import React, { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import ExperienceDetails from './components/ExperienceDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExperienceList from './components/ExperienceList';
import * as types from './types/types';

function App() {
  const [experiences, setExperiences] = useState<types.Experience[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let canceled = false;
    fetch(`/experience`)
      .then((response) => response.json())
      .then((data: types.Experience[]) => {
        if (!canceled) {
          setExperiences(data);
        }
      })
      .catch((err) => setHasError(true));
    return () => {
      canceled = true;
    };
  }, []);

  if (hasError) {
    return (
      <Container>
        <Typography variant="body1" color="error">
          Cannot retrieve records.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box component="hgroup" mb={6}>
        <Typography variant="h1">LouTours</Typography>
        <Typography variant="h2">Food and Wine Tours</Typography>
      </Box>
      <BrowserRouter>
        <Switch>
          <Route path="/experience/:id">
            <ExperienceDetails />
          </Route>
          <Route path="/" exact>
            <ExperienceList experiences={experiences} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
