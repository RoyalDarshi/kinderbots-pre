// src/components/Programs.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const programs = [
    {
        title: 'Creative Arts',
        description: 'An engaging program that encourages artistic expression through various mediums.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Early Math Skills',
        description: 'Fun and interactive activities that introduce basic math concepts.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Language Development',
        description: 'Programs designed to enhance vocabulary and communication skills.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Physical Education',
        description: 'Activities that promote physical health and teamwork.',
        image: 'https://via.placeholder.com/150',
    },
];

const Programs = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Our Programs
            </Typography>
            <Grid container spacing={3}>
                {programs.map((program) => (
                    <Grid item xs={12} sm={6} md={3} key={program.title}>
                        <Card>
                            <CardMedia component="img" height="140" image={program.image} alt={program.title} />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {program.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {program.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Programs;
