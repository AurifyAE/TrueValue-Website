import React from 'react';
import { Box } from '@mui/material';
import NavigationBar from '../components/website/NavigationBar';
import WebsiteHero from '../components/website/WebsiteHero';
import LiveRatesTicker from '../components/website/LiveRatesTicker';
import ServicesSection from '../components/website/ServicesSection';
import WebsiteFooter from '../components/website/WebsiteFooter';

const MainWebsite = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <WebsiteHero />
        <ServicesSection />
      </Box>

      <WebsiteFooter />
    </Box>
  );
};

export default MainWebsite;
