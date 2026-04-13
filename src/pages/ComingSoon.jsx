import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const ComingSoon = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const uaeTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dubai',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(`${uaeTime} (GST)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background:
            'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '20%',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(212,175,55,0.08), transparent)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
      </Box>

      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <DiamondIcon sx={{ color: '#fff' }} />
        </Box>

        <Box
          component="img"
          src="/images/logo.svg"
          alt="logo"
          sx={{
            width: { xs: 180, md: 400 },
          }}
        />
      </Box>

      {/* Main */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        {/* Hero */}
        <Typography
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 700,
            background:
              'linear-gradient(to right, #BF953F, #FCF6BA, #B38728)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Coming Soon
        </Typography>

        <Typography
          sx={{
            color: '#ccc',
            mt: 2,
            mb: 3,
            textAlign: 'center',
          }}
        >
          We are launching soon. Stay tuned.
        </Typography>

        <Box
          sx={{
            px: 2,
            py: 1,
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '50px',
            mb: 4,
          }}
        >
          <Typography sx={{ color: '#D4AF37', fontFamily: 'monospace' }}>
            {time}
          </Typography>
        </Box>

        {/* Info Card */}
        <Card
          sx={{
            maxWidth: 400,
            width: '100%',
            background: 'rgba(10,15,30,0.6)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <LocationOnIcon sx={{ color: '#D4AF37', mb: 1 }} />
            <Typography sx={{ color: '#fff', mb: 3 }}>
              OFFICE NO 103, 1ST FLOOR<br />
              ALDALLAL BUILDING,<br />
              30B Street, Al Daghaya - Al Sabkha, Dubai
            </Typography>

            <PhoneIcon sx={{ color: '#D4AF37', mb: 1 }} />
            <Typography sx={{ color: '#fff' }}>
              0552231986
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Divider
          sx={{
            width: 200,
            mx: 'auto',
            mb: 2,
            borderColor: 'rgba(212,175,55,0.2)',
          }}
        />
        <Typography sx={{ color: '#888', fontSize: 12 }}>
          Powered by{' '}
          <span style={{ color: '#D4AF37' }}>Aurify</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ComingSoon;
