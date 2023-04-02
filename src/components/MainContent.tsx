import React from 'react';
import { Box } from '@mui/material';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
      {children}
    </Box>
  );
};

export default MainContent;
