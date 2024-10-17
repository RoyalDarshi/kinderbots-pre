// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: '20px', padding: '20px 0', backgroundColor: '#F26A2A', color: '#fff' }}>
            <Container>
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} Kinderbots Pre-School. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
