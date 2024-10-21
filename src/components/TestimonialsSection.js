import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#FCE4EC',
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

const Testimonial = styled(Typography)({
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#34495E',
    margin: '20px 0',
    fontStyle: 'italic',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#FFF9C4',
});

const TestimonialsSection = () => {
    return (
        <Section>
            <Title>What Parents Say</Title>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Testimonial>"Kinderbots Pre-School has been a wonderful experience for our child!"</Testimonial>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Testimonial>"The teachers are dedicated and truly care about the children."</Testimonial>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Testimonial>"Our child loves going to school every day!"</Testimonial>
                </Grid>
            </Grid>
        </Section>
    );
};

export default TestimonialsSection;
