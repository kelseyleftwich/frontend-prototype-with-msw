import React, { useState, useMemo } from 'react';
import { Box, Typography, Chip, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Experience } from '../types/types';

type Props = {
  experiences: Experience[];
};

const ExperienceList: React.FC<Props> = ({ experiences }) => {
  const [searchText, setSearchText] = useState('');

  const filteredExperiences = useMemo(() => {
    return !searchText.length
      ? experiences
      : experiences.filter(
          (e) =>
            e.name.toLowerCase().includes(searchText.toLowerCase()) ||
            e.format.toLowerCase().includes(searchText.toLowerCase())
        );
  }, [searchText, experiences]);

  return (
    <Box component="main">
      <Box
        my={4}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <TextField
          label="Search"
          value={searchText}
          onChange={({ target: { value } }) => setSearchText(value)}
        />
        <Box>
          <Button>Filter</Button>
        </Box>
      </Box>
      <Box
        component="section"
        role="list"
        borderTop="2px solid"
        borderColor="primary.main"
      >
        {filteredExperiences.map((experience, index) => (
          <Box
            key={experience.name}
            role="listitem"
            p={4}
            border="2px solid"
            borderColor="primary.main"
            borderLeft={0}
            borderRight={0}
            borderTop={0}
          >
            <Typography
              component={Link}
              to={`/experience/${experience.id}`}
              variant="h3"
            >
              {experience.name}
            </Typography>
            <Box
              display="grid"
              gridTemplateColumns="min-content min-content"
              gridGap={12}
              mt={3}
            >
              <Chip color="secondary" label={experience.format} />
              <Chip color="primary" label={`${experience.length} hours`} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceList;
