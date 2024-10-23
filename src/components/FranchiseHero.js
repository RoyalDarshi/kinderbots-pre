import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
    padding: '80px 20px',
    backgroundColor: '#F7F9FB',
    textAlign: 'center',
    color: '#2C3E50',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-150px',
        left: '-150px',
        width: '300px',
        height: '300px',
        background: '#FF4081',
        borderRadius: '50%',
        opacity: 0.2,
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-150px',
        right: '-150px',
        width: '300px',
        height: '300px',
        background: '#FF7043',
        borderRadius: '50%',
        opacity: 0.2,
        zIndex: 0,
    },
}));

const Title = styled(Typography)({
    fontSize: '3.2rem',
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 600px)': {
        fontSize: '2.5rem',
    },
});

const Subtitle = styled(Typography)({
    fontSize: '1.8rem',
    marginBottom: '40px',
    color: '#34495E',
    position: 'relative',
    zIndex: 1,

    '@media (max-width: 600px)': {
        fontSize: '1.3rem',
    },
});

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF4081',
    color: '#fff',
    padding: '14px 32px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    borderRadius: '50px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    position: 'relative',
    zIndex: 1,

    '&:hover': {
        backgroundColor: '#F50057',
        transform: 'scale(1.1)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    },

    '@media (max-width: 600px)': {
        fontSize: '1rem',
        padding: '12px 24px',
    },
}));

const HeroSection = () => (
    <Section>
        <Title>Join Kinderbots Pre-School Franchise</Title>
        <Subtitle>
            Empower young minds while building a successful business with Kinderbots Pre-School.
        </Subtitle>
        <ButtonStyled href="/franchise-form" variant="contained">
            Apply for Franchise
        </ButtonStyled>
    </Section>
);

export default HeroSection;
