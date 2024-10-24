import React from 'react';
import { Box, Typography, Card, Grid, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the root container
const RootContainer = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(4)} !important`,
    marginBottom: `${theme.spacing(4)} !important`,
    backgroundColor: '#E0F7FA !important', // Light cyan background
    borderRadius: '20px !important', // Rounded corners for the container
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1) !important', // Subtle shadow for depth
}));

// Styled component for the title
const Title = styled(Typography)(({ theme }) => ({
    marginBottom: `${theme.spacing(4)} !important`,
    textAlign: 'center !important',
    fontWeight: 'bold !important',
    color: '#FF6347 !important', // Bright red-orange color for the title
    textShadow: '2px 2px 4px rgba(0,0,0,0.3) !important',
    fontSize: '2rem !important', // Adjusted font size for mobile responsiveness
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem !important', // Increase font size for larger screens
    },
}));

// Styled component for the cards
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#FFF3E0 !important', // Soft warm background
    borderRadius: '15px !important',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2) !important',
    padding: `${theme.spacing(3)} !important`,
    textAlign: 'left !important', // Align text to the left for better readability
    transition: 'transform 0.3s, box-shadow 0.3s !important', // Transition for hover effects
    minHeight: '250px !important', // Minimum height for cards
    '&:hover': {
        boxShadow: '0 8px 20px rgba(0,0,0,0.3) !important',
        transform: 'translateY(-5px) !important', // Lift effect on hover
    },
}));

// Styled component for the card text
const CardText = styled(Typography)(({ theme }) => ({
    marginBottom: `${theme.spacing(1.5)} !important`,
    color: '#4E342E !important', // Dark brown text for better readability
    fontSize: '1rem !important', // Adjusted font size for mobile responsiveness
    lineHeight: '1.6 !important', // Improved line height for readability
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.1rem !important', // Increase font size for larger screens
    },
}));

// Component for Timely Delivery
const TimelyDelivery = () => {
    return (
        <RootContainer>
            <Title variant="h4">Timely Delivery</Title>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={12} md={8}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6" style={{ color: '#FF4500', fontWeight: 'bold' }}>
                                Seamless Setup Experience
                            </Typography>
                            <CardText>
                                We aim to provide a seamless setup experience, and our school setup will be dispatched within
                                <span style={{ fontWeight: 'bold', color: '#FF4500' }}> 3-4 weeks</span>, ensuring minimal disruptions to your plans.
                            </CardText>
                            <CardText>
                                Our team is committed to delivering everything on time so that you can focus on what truly matters—nurturing young minds.
                            </CardText>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>
        </RootContainer>
    );
};

export default TimelyDelivery;
