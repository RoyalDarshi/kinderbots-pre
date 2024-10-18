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

// Define your styles using makeStyles
const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        padding: theme.spacing(4),
        backgroundColor: '#f5f5f5',
    },
    logo: {
        marginBottom: theme.spacing(2),
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        marginBottom: theme.spacing(1),
        fontWeight: '600',
        color: '#F26A2A',
    },
    body: {
        marginBottom: theme.spacing(1),
        color: '#666',
    },
    card: {
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    cardImage: {
        borderRadius: '8px 8px 0 0',
        height: '200px',
    },
}));

function Features() {
    const classes = useStyles(); // Use the defined styles

    return (
        <Box className={classes.container}>
            <img src={KinderbotsLogo} alt="Kinderbots Logo" width="200" className={classes.logo} />
            <Typography variant="h2" className={classes.title}>
                Features That Makes Us the Future Play School
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
                    </Grid>
                ))}
            </Grid>

            {/*<Typography variant="h6" style={{ marginTop: '32px', color: '#F26A2A' }}>*/}
            {/*    NO Royalty*/}
            {/*</Typography>*/}
        </Box>
    );
}

export default Features;
