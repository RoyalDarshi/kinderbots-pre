import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#FFF3E0',
    borderRadius: '15px',
    marginBottom: '40px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
});

const Title = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: '#2C3E50',
});

const Description = styled(Typography)({
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#34495E',
    margin: '20px 0',
});

const WhatWeDoSection = () => {
    return (
        <Section>
            <Title>What We Do</Title>
            <Description>
                We create a safe and engaging environment where children can explore, discover, and grow through interactive learning experiences. Our curriculum focuses on holistic development, including:
            </Description>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <Description>🌼 Play-based learning</Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>📚 Storytelling and language development</Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>🎨 Arts and crafts</Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>🎶 Music and movement</Description>
                </Grid>
            </Grid>
        </Section>
    );
};

export default WhatWeDoSection;
