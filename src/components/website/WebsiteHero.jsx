import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WebsiteHero = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: { xs: '80px 1rem 0', md: '80px 2rem 0' },
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -3,
        }}
      >
        <source src="/videos/bannervideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Readability & Gradient Bleed */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(5,5,26,0.5) 0%, #05051a 100%)',
          zIndex: -2,
        }}
      />
      {/* Abstract floating shapes for background depth */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(186,138,84,0.1) 0%, transparent 70%)', 
        filter: 'blur(30px)', zIndex: -1,
        animation: 'float 12s infinite'
      }} />

      <Box sx={{ maxWidth: '800px', zIndex: 1, padding: { xs: '0 10px', md: 0 } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            animation: 'fadeIn 1s ease-out',
            lineHeight: 1.2
          }}
        >
          PREMIUM GOLD BULLION PARTNER
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 300,
            marginBottom: '3rem',
            lineHeight: 1.6,
            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
            animation: 'fadeIn 1.5s ease-out'
          }}
        >
          Secure your wealth with TrueValue Jewellers. We offer the finest selection of gold and silver bullion with real-time pricing and uncompromised security.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 3 },
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeIn 2s ease-out'
          }}
        >
          {/* Primary Button */}
          <Button
            variant="contained"
            className="gold-btn"
            onClick={() => navigate('/liverates')}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #FFD700, #B8860B)',
              color: '#000',
              fontWeight: 600,
              padding: { xs: '8px 24px', md: '12px 36px' },
              fontSize: { xs: '0.85rem', md: '1rem' },
              borderRadius: '40px',
              letterSpacing: '0.08em',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(212,175,55,0.3)',

              '&:hover': {
                transform: 'translateY(-3px) scale(1.03)',
                boxShadow: '0 10px 30px rgba(212,175,55,0.6)',
              },

              /* Shine effect */
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-75%',
                width: '50%',
                height: '100%',
                background:
                  'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
                transform: 'skewX(-25deg)',
              },
              '&:hover::before': {
                animation: 'shine 0.8s forwards',
              },
            }}
          >
            Live Rates TV
          </Button>

          {/* Secondary Button */}
          <Button
            variant="outlined"
            onClick={() => {
              const element = document.getElementById('products');
              if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderColor: 'rgba(212,175,55,0.5)',
              color: '#D4AF37',
              fontWeight: 600,
              padding: { xs: '8px 24px', md: '12px 36px' },
              fontSize: { xs: '0.85rem', md: '1rem' },
              borderRadius: '40px',
              letterSpacing: '0.08em',
              backdropFilter: 'blur(6px)',
              transition: 'all 0.3s ease',

              '&:hover': {
                background: 'rgba(212,175,55,0.1)',
                borderColor: '#D4AF37',
                color: '#FFF',
                transform: 'translateY(-3px)',
                boxShadow: '0 0 20px rgba(212,175,55,0.3)',
              },
            }}
          >
            View Products
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default WebsiteHero;
