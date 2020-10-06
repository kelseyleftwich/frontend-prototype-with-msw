import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@material-ui/core';
import { Experience } from '../types/types';
import { useParams } from 'react-router-dom';

const ExperienceDetails: React.FunctionComponent = () => {
  const [experience, setExperience] = useState<undefined | Experience>(
    undefined
  );
  const [hasError, setHasError] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    let canceled = false;
    fetch(`/experience/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!canceled) {
          setExperience(data);
        }
      })
      .catch((err) => {
        if (!canceled) {
          setHasError(true);
        }
      });

    return () => {
      canceled = true;
    };
  }, [id]);

  if (hasError) {
    return (
      <Box component="main" mt={3}>
        <Typography variant="h3">Oops!</Typography>
        <Typography variant="body1">
          We can't retrieve the experience details at this time.
        </Typography>
      </Box>
    );
  }

  if (!experience) {
    return (
      <Box component="main" mt={3} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="main" mt={3}>
      <Typography variant="h3" paragraph>
        {experience.name}
      </Typography>
      <Typography variant="body1">{experience.description}</Typography>
      <dl>
        <dt>Format</dt>
        <dd>{experience.format}</dd>
        <dt>Length</dt>
        <dd>{experience.length} Hours</dd>
        <dt>Host</dt>
        <dd>{experience.guide.name}</dd>
      </dl>
      <footer>
        <Button variant="contained" color="primary" size="large">
          Book Now
        </Button>
      </footer>
    </Box>
  );
};

export default ExperienceDetails;
