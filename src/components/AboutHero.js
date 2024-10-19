// src/components/AboutComponents/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSectionContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #FFABAB 30%, #FFC3A0 70%)',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: theme.shadows[5],
    position: 'relative',
    overflow: 'hidden',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#6A0572',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    opacity: 0,
    animation: 'fadeIn 1s ease-in-out forwards',
    animationDelay: '0.2s',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    marginTop: theme.spacing(1),
    color: '#1B5E20',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    opacity: 0,
    animation: 'fadeIn 1s ease-in-out forwards',
    animationDelay: '0.4s',
}));

const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <HeroTitle variant="h1">Kinderbots Pre-School</HeroTitle>
            <HeroSubtitle variant="h4">Nurturing Young Minds for a Brighter Future</HeroSubtitle>
        </HeroSectionContainer>
    );
};

export default HeroSection;
