// src/components/AboutComponents/Features.js
import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Import makeStyles
import KinderbotsLogo from '../assets/KinderbotsLogo.jpeg';
import Feature1Image from '../assets/feature1.png';
import Feature2Image from '../assets/feature2.png';
import Feature3Image from '../assets/feature3.png';
import Feature4Image from '../assets/feature4.png';
import Feature5Image from '../assets/feature5.png';
import Feature6Image from '../assets/feature6.webp';
import Feature7Image from '../assets/feature7.webp';
import Feature8Image from '../assets/feature8.webp';
import FeatureBgGraphic from '../assets/featue-bg.webp';  // Example graphic for visual background

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        textAlign: 'center',
        padding: '80px 20px',  // Extra padding for spacing
        background: 'linear-gradient(135deg, #f7fbfc, #fdeff4)', // Light gradient for a vibrant feel
        overflow: 'hidden',
    },
    backgroundGraphic: {
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        opacity: 0.1,  // Faint graphic in the background
        zIndex: 0,
    },
    logo: {
        marginBottom: '30px',
        animation: 'spin 4s linear infinite',
        zIndex: 2,  // Ensure it sits above the background graphic
    },
    title: {
        marginBottom: '16px',
        fontWeight: 'bold',
        fontSize: '2.8rem',
        color: '#6A0572',  // Deep purple for a modern look
        textShadow: '1px 3px 5px rgba(0,0,0,0.3)',
        zIndex: 2,
    },
    subtitle: {
        marginBottom: '20px',
        fontWeight: '600',
        fontSize: '2.2rem',
        color: '#F26A2A',
        textTransform: 'uppercase',
        zIndex: 2,
    },
    body: {
        marginBottom: '10px',
        fontSize: '1.3rem',
        color: '#666',
        fontStyle: 'italic',
        zIndex: 2,
    },
    card: {
        position: 'relative',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',  // Deeper shadow for depth
        overflow: 'hidden',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
            transform: 'translateY(-10px) scale(1.02)',  // Slight zoom and elevation on hover
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
        },
        zIndex: 2,
    },
    cardImage: {
        borderRadius: '16px 16px 0 0',
        height: '200px',
        objectFit: 'cover',
        zIndex: 2,
    },
    featureGraphic: {
        position: 'absolute',
        bottom: '-20px',
        left: '-20px',
        width: '150px',
        zIndex: 1,  // Ensure the graphic is behind the content
        opacity: 0.15,  // Faint, non-intrusive visual
    },
    "@keyframes spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
    },
}));

function Features() {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {/* Background Visual Graphics */}
            <img src={FeatureBgGraphic} alt="Background Graphic" className={classes.backgroundGraphic} />

            <img src={KinderbotsLogo} alt="Kinderbots Logo" width="150" className={classes.logo} />
            <Typography variant="h2" className={classes.title}>
                Features That Make Us the Future Play School
            </Typography>
            <Typography variant="h4" className={classes.subtitle}>
                Kinderbots
            </Typography>
            <Typography variant="body1" className={classes.body}>
                ESTD 2018
            </Typography>
            <Typography variant="h5" className={classes.body}>
                The Future Playschool
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {[
                    { image: Feature1Image, title: 'Robust Module for Owner/Teacher\'s Training' },
                    { image: Feature2Image, title: 'Robotic Play Tools' },
                    { image: Feature3Image, title: 'Play-Based Learning' },
                    { image: Feature4Image, title: 'Marketing Support' },
                    { image: Feature5Image, title: 'Curriculum Support' },
                    { image: Feature6Image, title: 'Affordable Student Kits' },
                    { image: Feature7Image, title: 'Flexible Team Support' },
                    { image: Feature8Image, title: 'No Royalty' },
                ].map((feature, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="img"
                                alt={feature.title}
                                image={feature.image}
                                className={classes.cardImage}
                            />
                            <CardContent>
                                <Typography variant="h6" style={{ fontWeight: '500', color: '#333' }}>
                                    {feature.title}
                                </Typography>
                            </CardContent>
                        </Card>
                        {/* Decorative graphic for each feature */}
                        <img src={FeatureBgGraphic} alt="Feature Background Graphic" className={classes.featureGraphic} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Features;
