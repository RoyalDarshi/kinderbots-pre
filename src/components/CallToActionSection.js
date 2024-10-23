import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
    padding: '80px 30px',
    backgroundColor: '#F1F8E9',
    textAlign: 'center',
    color: '#2C3E50',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '40px',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '250px',
        height: '250px',
        background: '#FF7043',
        borderRadius: '50%',
        opacity: 0.2,
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '250px',
        height: '250px',
        background: '#FFEB3B',
        borderRadius: '50%',
        opacity: 0.3,
        zIndex: 0,
    },
}));

const Title = styled(Typography)({
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 1,
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
        fontSize: '2.2rem',
    },
});

const Subtitle = styled(Typography)({
    fontSize: '1.6rem',
    color: '#34495E',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 600px)': {
        fontSize: '1.2rem',
        marginBottom: '40px',
    },
});

const ButtonStyled = styled(Button)({
    backgroundColor: '#FF4081',
    color: '#fff',
    padding: '16px 32px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    borderRadius: '50px',
    position: 'relative',
    zIndex: 1,
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
        backgroundColor: '#F50057',
        transform: 'translateY(-5px)',
    },
    '@media (max-width: 600px)': {
        padding: '12px 24px',
        fontSize: '1rem',
    },
});

const CallToActionSection = () => (
    <Section>
        <Title>Ready to Join Us?</Title>
        <Subtitle>Begin your journey with Kinderbots Pre-School today!</Subtitle>
        <ButtonStyled href="/franchise-form" variant="contained">
            Become a Franchise Partner
        </ButtonStyled>
    </Section>
);

export default CallToActionSection;
