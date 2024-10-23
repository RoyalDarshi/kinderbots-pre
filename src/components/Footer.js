// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import MUI icons

const Footer = () => {
    return (
        <footer style={{ marginTop: '20px', padding: '40px 20px', backgroundColor: '#ff5e78', color: '#fff', textAlign: 'center' }}>
            <Container>
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} Kinderbots Pre-School. All rights reserved.
                </Typography>
                <Typography variant="body1" align="center" style={{ margin: '10px 0' }}>
                    <Link href="/privacy-policy" color="inherit" style={{ margin: '0 10px' }}>Privacy Policy</Link> |
                    <Link href="/terms-of-service" color="inherit" style={{ margin: '0 10px' }}> Terms of Service</Link>
                </Typography>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit" style={{ margin: '0 10px' }}>
                        <Facebook fontSize="large" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit" style={{ margin: '0 10px' }}>
                        <Twitter fontSize="large" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="inherit" style={{ margin: '0 10px' }}>
                        <Instagram fontSize="large" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit" style={{ margin: '0 10px' }}>
                        <LinkedIn fontSize="large" />
                    </Link>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
