import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

const Experience = () => {
  return (
    <Box component="main" mt={3}>
      <Typography variant="h3" paragraph>
        Oyster Grilling in Historic Mid-City
      </Typography>
      <Typography variant="body1">
        We'll meet at Jazz after Dark. After introductions and a complementary
        cocktail, we'll move to the courtyard for a hands-on oyster preparation
        and cooking demo.
      </Typography>
      <dl>
        <dt>Format</dt>
        <dd>Cooking class</dd>
        <dt>Length</dt>
        <dd>2 Hours</dd>
        <dt>Host</dt>
        <dd>Louie</dd>
      </dl>
      <footer>
        <Button variant="contained" color="primary" size="large">
          Book Now
        </Button>
      </footer>
    </Box>
  );
};

export default Experience;
