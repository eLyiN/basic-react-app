import React from 'react';
import { Box, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to my App
      </Typography>
      <Typography variant="body1" align="center">
        This is a model app created with React, TypeScript, react-router-dom and Material-UI.
      </Typography>
    </Box>
  );
};

export default Home;