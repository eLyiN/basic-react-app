import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
  <BrowserRouter>
    <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
      <Navbar />
      <Container sx={{ flexGrow: 1 }}>
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </MainContent>
      </Container>
      <Footer />
    </Box>
  </BrowserRouter>
  );
}

export default App;
