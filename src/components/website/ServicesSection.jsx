import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const services = [
  {
    title: 'Physical Trading',
    description: 'We provide competitive pricing for physical gold and silver bullion, ensuring the best value for our clients throughout the UAE and globally.',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#D4AF37' }} />
  },
  {
    title: 'Secure Vaulting',
    description: 'Our world-class security protocols and fully insured vaults guarantee the maximum safety of your precious metals at all times.',
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#D4AF37' }} />
  },
  {
    title: 'Global Delivery',
    description: 'We offer reliable, insured, and discrete shipping services worldwide, bringing your assets safely to your doorstep.',
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#D4AF37' }} />
  }
];

const ServicesSection = () => {
  return (
    <Box id="products" sx={{ padding: '5rem 2rem', background: '#090a0f' }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <Typography sx={{ fontSize: { xs: '28px', md: '3rem' }, color: '#fff', fontWeight: 600, marginBottom: '1rem' }}>
          Our <span style={{ color: '#D4AF37' }}>Services</span>
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          Discover exactly why TrueValue Jewellers is the preferred bullion partner for institutions and retail investors alike.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr'
            },
            gap: 4
          }}
        >          {services.map((service, index) => (
          <Grid item key={index} sx={{ display: 'flex' }}>
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.1)'
              }
            }}>
              <CardContent sx={{ padding: '2rem', textAlign: 'center', flexGrow: 1 }}>
                <Box sx={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  width: 80, height: 80,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" sx={{ color: '#fff', marginBottom: '1rem', fontWeight: 500 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
