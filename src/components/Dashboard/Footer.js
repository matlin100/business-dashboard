import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        position: 'fixed', // Use 'fixed' instead of 'absolute'
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2023 Your App Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;