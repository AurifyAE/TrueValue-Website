import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Home', 'Products', 'Contact'];

  const handleScrollToSection = (item) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? 'rgba(5, 5, 26, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 0.3s ease',
        padding: { xs: '0.5rem', md: '0.5rem 2rem' }
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            src="/images/logo.svg"
            alt="TrueValue Jewellers"
            sx={{
              width: { xs: '120px', md: '180px' },
              height: 'auto',
              objectFit: 'contain',
              cursor: 'pointer'
            }}
            onClick={() => {
              window.location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/');
            }}
          />
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{ color: 'rgba(255, 255, 255, 0.8)', '&:hover': { color: '#D4AF37' } }}
              onClick={() => handleScrollToSection(item)}
            >
              {item}
            </Button>
          ))}
          <Button
            variant="outlined"
            onClick={() => navigate('/liverates')}
            sx={{
              borderColor: '#D4AF37',
              color: '#D4AF37',
              borderRadius: '20px',
              padding: '6px 20px',
              '&:hover': { background: 'rgba(212,175,55,0.1)', borderColor: '#D4AF37' }
            }}
          >
            Live Rates TV
          </Button>
        </Box>

        {/* Mobile Hamburger Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton sx={{ color: '#D4AF37' }} onClick={handleDrawerToggle}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '280px',
            background: '#05051a',
            borderLeft: '1px solid rgba(212,175,55,0.2)'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 1rem' }}>

          <IconButton onClick={handleDrawerToggle} sx={{ ml: 'auto', color: '#D4AF37' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(212,175,55,0.1)' }} />
        <List sx={{ paddingTop: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {navItems.map((item) => (
            <ListItem
              button="true"
              key={item}
              onClick={() => {
                handleDrawerToggle();
                handleScrollToSection(item);
              }}
              sx={{
                padding: '1rem 2rem',
                color: '#fff',
                borderRadius: '8px',
                mx: 1,
                width: 'auto',
                transition: 'background 0.3s',
                '&:hover': { background: 'rgba(212,175,55,0.15)', color: '#D4AF37' }
              }}
            >
              <ListItemText primary={item} primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.05em' }} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ padding: '2rem 1rem', marginTop: 'auto', textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={() => {
              handleDrawerToggle();
              navigate('/liverates');
            }}
            sx={{
              background: 'linear-gradient(135deg, #FFD700, #B8860B)',
              color: '#000',
              fontWeight: 600,
              padding: '8px 24px', // Matches mobile hero button size
              fontSize: '0.85rem', // Matches mobile hero button size
              borderRadius: '40px',
              boxShadow: '0 4px 15px rgba(212,175,55,0.3)',
            }}
          >
            Live Rates TV
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavigationBar;
