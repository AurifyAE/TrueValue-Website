import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const LiveRatesPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100vw', height: '100vh', background: '#000', position: 'relative' }}>
      <IconButton
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          right: 20,
          top: 20,
          color: '#D4AF37',
          zIndex: 10,
          background: 'rgba(5,5,26,0.8)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          '&:hover': { background: 'rgba(212, 175, 55, 0.2)' }
        }}
      >
        <CloseIcon />
      </IconButton>
      
      <iframe
        src="https://truevalue.aurify.ae/"
        title="TrueValue Gold Rate TV"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </Box>
  );
};

export default LiveRatesPage;
