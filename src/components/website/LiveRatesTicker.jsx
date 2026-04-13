import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const MOCK_RATES = [
  { symbol: 'GOLD (OZ)', bid: 2345.60, ask: 2346.10, change: 12.5, up: true },
  { symbol: 'SILVER (OZ)', bid: 28.45, ask: 28.55, change: 0.15, up: true },
  { symbol: 'PLATINUM', bid: 995.20, ask: 998.00, change: -5.4, up: false },
  { symbol: 'PALLADIUM', bid: 1040.50, ask: 1045.00, change: -12.0, up: false },
];

const LiveRatesTicker = () => {
  const [rates, setRates] = useState(MOCK_RATES);

  // Simulate live fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prev => prev.map(rate => {
        const fluctuation = (Math.random() * 0.5 - 0.25);
        return {
          ...rate,
          bid: rate.bid + fluctuation,
          ask: rate.ask + fluctuation,
          up: fluctuation > 0
        };
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', padding: '2rem 1rem', background: 'rgba(5, 5, 26, 0.8)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
      <Typography variant="h5" sx={{ color: '#D4AF37', textAlign: 'center', marginBottom: '2rem', fontWeight: 600 }}>
        LIVE MARKET RATES
      </Typography>
      
      <Grid container spacing={2} justifyContent="center" maxWidth="1200px" margin="0 auto">
        {rates.map((rate) => (
          <Grid item xs={12} sm={6} md={3} key={rate.symbol}>
            <Card sx={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '12px'
            }}>
              <CardContent>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 1 }}>
                  {rate.symbol}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>
                      ${rate.bid.toFixed(2)}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                      BID
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>
                      ${rate.ask.toFixed(2)}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                      ASK
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, marginTop: 1.5, color: rate.up ? '#4CAF50' : '#F44336' }}>
                  {rate.up ? <TrendingUpIcon fontSize="small" /> : <TrendingDownIcon fontSize="small" />}
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                    {rate.up ? '+' : '-'}{Math.abs(rate.change).toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LiveRatesTicker;
