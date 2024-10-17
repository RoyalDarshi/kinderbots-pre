// src/components/Header.js
import React from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Container>
                    <Typography variant="h1" align="center" sx={{ flexGrow: 1 }}>
                        Kinderbots Pre-School
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
