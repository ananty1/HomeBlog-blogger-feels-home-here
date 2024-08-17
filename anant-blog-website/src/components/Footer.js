import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';
import { ShareSocial } from 'react-share';
import './footer.css';
const Footer = () => (
  <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#010101', color: 'white' }}>
    <Typography variant="h6" align="center">HomeBlog - The Home of Bloggers</Typography>
    <div className='footer-starter'>
    <h3>Stay Connected with Us!</h3>
    
    <p>Follow us on social media to keep up with the latest blogs and updates from HomeBlog. Join our newsletter for tips, articles, and more!</p>
    </div>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton color="inherit" href="https://www.linkedin.com/in/anant-yadav-441807244/">
        <LinkedIn />
      </IconButton>
      <IconButton color="inherit" href="mailto:y2anant@gmail.com">
        <Email />
      </IconButton>
    </Box>
    <Typography variant="body2" color="inherit" align="center">Anant Yadav | y2anant@gmail.com</Typography>
    <div className='footer-navbar'>
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
      <div>Contact Us</div>
      
      
    <p>Discover your voice with HomeBlog today!</p>
    </div>
  </Box>
);

export default Footer;
