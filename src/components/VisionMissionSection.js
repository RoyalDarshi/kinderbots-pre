import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#FFFAF0',
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

const VisionMissionSection = () => {
    return (
        <Section>
            <Title>Our Vision & Mission</Title>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <Description>
                        <strong>Vision:</strong> To empower every child with the skills and confidence to succeed in a changing world.
                    </Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description>
                        <strong>Mission:</strong> To nurture, inspire, and cultivate young minds through a creative, play-based curriculum that stimulates their imagination and love for learning.
                    </Description>
                </Grid>
            </Grid>
        </Section>
    );
};

export default VisionMissionSection;
