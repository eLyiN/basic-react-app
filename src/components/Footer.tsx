import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ marginTop: 2, padding: 2, backgroundColor: 'primary.main', color: 'white' }}>
      <Typography variant="body1" align="center">
        © 2023 - Mi App - Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
