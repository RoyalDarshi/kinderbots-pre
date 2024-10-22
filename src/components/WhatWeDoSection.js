import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#FFFAF0',
    borderRadius: '15px',
    marginBottom: '40px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
});

const Title = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: '#D81B60',
    marginBottom: '20px',
});

const Description = styled(Typography)({
    fontSize: '1.2rem',
    color: '#4A4A4A',
    margin: '20px 0',
    lineHeight: '1.5',
});

const FunIcon = styled(Typography)({
    fontSize: '1.5rem',
    display: 'inline-block',
    marginRight: '10px',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.2)',
    },
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
                    <Description>
                        <FunIcon>🌼</FunIcon> Play-based learning
                    </Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>
                        <FunIcon>📚</FunIcon> Storytelling and language development
                    </Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>
                        <FunIcon>🎨</FunIcon> Arts and crafts
                    </Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>
                        <FunIcon>🎶</FunIcon> Music and movement
                    </Description>
                </Grid>
            </Grid>
        </Section>
    );
};

export default WhatWeDoSection;
