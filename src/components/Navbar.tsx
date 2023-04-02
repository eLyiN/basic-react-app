import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Mi App
        </Typography>
        <Button color="inherit" component={Link} to="/iniciar-sesion">Iniciar sesión / Registrarse</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;