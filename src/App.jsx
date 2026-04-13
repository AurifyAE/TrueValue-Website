import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import MainWebsite from './pages/MainWebsite';
import LiveRatesPage from './pages/LiveRatesPage';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Gold
    },
    background: {
      default: '#05051a',
      paper: 'rgba(10, 15, 30, 0.6)',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#05051a',
        },
      },
    },
  },
});

function App() {
  // Set to false to work on the main website
  const showComingSoon = false;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={showComingSoon ? <ComingSoon /> : <MainWebsite />} />
          <Route path="/liverates" element={<LiveRatesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
