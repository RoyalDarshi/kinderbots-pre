import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';
import activityImage from '../assets/activities.png'; // Image representing activities

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#F0F4C3',
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

const Image = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
});

const ActivitiesSection = () => {
    return (
        <Section>
            <Title>Fun Activities at Kinderbots</Title>
            <Description>
                We believe in learning through play! Here are some of the exciting activities our children participate in:
            </Description>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" align="center">🌈 Arts & Crafts</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" align="center">🎉 Science Experiments</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" align="center">🤸‍♂️ Outdoor Games</Typography>
                </Grid>
            </Grid>
            <Image src={activityImage} alt="Activities at Kinderbots" />
        </Section>
    );
};

export default ActivitiesSection;
