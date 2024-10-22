import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';

const Section = styled(Box)({
    padding: '40px 20px !important',
    backgroundColor: '#FFFAF0 !important',
    borderRadius: '15px !important',
    marginBottom: '40px !important',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2) !important',
    position: 'relative !important',
    overflow: 'hidden !important',
    textAlign: 'center !important',
});

const Title = styled(Typography)({
    fontWeight: 'bold !important',
    fontSize: '2.5rem !important',
    color: '#C2185B !important', // Bright pink color for the title
    marginBottom: '20px !important',
});

const Description = styled(Typography)({
    fontSize: '1.2rem !important',
    color: '#4A4A4A !important', // Darker gray for better readability
    margin: '20px 0 !important',
    lineHeight: '1.5 !important', // Improved line height for readability
    '& strong': {
        color: '#1976D2 !important', // Blue color for bold text
    },
});

const FunBubble = styled(Box)({
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundColor: 'rgba(76, 175, 80, 0.4) !important', // Soft green bubble
    borderRadius: '50% !important',
    top: '10% !important',
    left: '10% !important',
    zIndex: 0,
    animation: 'float 3s ease-in-out infinite',
    '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
    },
});

const VisionMissionSection = () => {
    return (
        <Section>
            <FunBubble />
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
