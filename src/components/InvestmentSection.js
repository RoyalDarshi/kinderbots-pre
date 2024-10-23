import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
    padding: '80px 20px',
    backgroundColor: '#E8F5E9', // Lighter green background for a cheerful look
    textAlign: 'center',
    color: '#2E7D32', // Dark green text for better contrast
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '200px',
        height: '200px',
        background: '#FFC107', // Yellow circle
        borderRadius: '50%',
        opacity: 0.3,
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-80px',
        right: '-80px',
        width: '200px',
        height: '200px',
        background: '#FF7043', // Orange circle
        borderRadius: '50%',
        opacity: 0.4,
        zIndex: 0,
    },
}));

const Title = styled(Typography)({
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#D32F2F', // Bright red for the title
    marginBottom: '40px',
    position: 'relative',
    zIndex: 1,
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 600px)': {
        fontSize: '2.5rem',
    },
});

const InvestmentText = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    color: '#455A64', // Darker grey for better readability
    lineHeight: '1.8',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '700px',
    padding: '0 20px',

    '@media (max-width: 600px)': {
        fontSize: '1rem',
    },
}));

const InvestmentSection = () => (
    <Section>
        <Title>Franchise Investment Details</Title>
        <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
                <InvestmentText>
                    At Kinderbots, we provide a low-risk investment opportunity with high returns.
                    The required investment starts at ₹10 Lakhs, with options to scale based on your location
                    and needs. Partner with us and make a difference in early childhood education.
                </InvestmentText>
            </Grid>
        </Grid>
    </Section>
);

export default InvestmentSection;
