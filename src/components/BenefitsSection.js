import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
    padding: '80px 20px',
    backgroundColor: '#F7F9FB',
    textAlign: 'center',
    color: '#2C3E50',
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-120px',
        left: '-120px',
        width: '240px',
        height: '240px',
        background: '#FF7043',
        borderRadius: '50%',
        opacity: 0.15,
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-120px',
        right: '-120px',
        width: '240px',
        height: '240px',
        background: '#FFEB3B',
        borderRadius: '50%',
        opacity: 0.2,
        zIndex: 0,
    },
}));

const Title = styled(Typography)({
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: '40px',
    position: 'relative',
    zIndex: 1,
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 600px)': {
        fontSize: '2rem',
    },
});

const FranchiseBenefitsCard = styled(Card)(({ theme }) => ({
    marginBottom: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFF8E1',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    borderRadius: '15px',
    padding: '20px',

    '&:hover': {
        transform: 'translateY(-12px) scale(1.05)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
    },
    position: 'relative',
    zIndex: 1,
}));

const CardTitle = styled(Typography)({
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: '15px',
    textAlign: 'center',
});

const CardContentText = styled(Typography)({
    fontSize: '1rem',
    color: '#34495E',
    textAlign: 'center',
});

const BenefitsSection = () => (
    <Section>
        <Title>Why Partner with Kinderbots?</Title>
        <Grid container spacing={4}>
            {[
                { title: 'Proven Business Model', content: 'With a well-established and successful business model, Kinderbots ensures consistent returns and growth.' },
                { title: 'Comprehensive Training', content: 'Receive extensive training on curriculum delivery, operational management, and marketing strategies.' },
                { title: 'Brand Support', content: 'Benefit from continuous support in marketing, brand-building, and operational guidance.' },
            ].map((benefit, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <FranchiseBenefitsCard>
                        <CardContent>
                            <CardTitle>{benefit.title}</CardTitle>
                            <CardContentText>{benefit.content}</CardContentText>
                        </CardContent>
                    </FranchiseBenefitsCard>
                </Grid>
            ))}
        </Grid>
    </Section>
);

export default BenefitsSection;
