import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel'; // Ensure to install this package

const useStyles = makeStyles((theme) => ({
    hero: {
        textAlign: 'center',
        marginBottom: `${theme.spacing(4)} !important`,
        position: 'relative !important',
        overflow: 'hidden !important',
        borderRadius: '12px !important',
        backgroundColor: '#FFDD00', // Bright yellow background
    },
    carouselItem: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', // Center the content
        alignItems: 'center', // Center vertically
        height: '600px', // Increased height for better visibility
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px !important',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    subImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute', // Full background
        top: 0,
        left: 0,
        zIndex: 0, // Behind the main image
        opacity: 0.5, // Optional: add some transparency
    },
    textOverlay: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center', // Center text
        color: '#FFFFFF', // White text for contrast
        padding: theme.spacing(3),
        backdropFilter: 'blur(5px)', // Adds a blur effect behind the text
        borderRadius: '12px', // Rounded corners for the overlay
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker semi-transparent background for better contrast
    },
    heroTitle: {
        fontSize: '3.5rem !important', // Larger title font
        fontWeight: 'bold !important',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8) !important',
        animation: '$fadeIn 1s ease-out !important',
    },
    heroSubtitle: {
        fontSize: '1.8rem !important', // Larger subtitle font
        marginBottom: `${theme.spacing(2)} !important`,
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7) !important', // Added text shadow
        animation: '$fadeIn 1.5s ease-out !important',
    },
    button: {
        marginTop: `${theme.spacing(3)} !important`,
        backgroundColor: '#2C3E50 !important', // Darker button color
        color: '#FFDD00 !important', // Bright yellow text
        borderRadius: '20px !important', // Rounded button
        padding: `${theme.spacing(1.5, 6)} !important`,
        boxShadow: theme.shadows[5] + ' !important',
        '&:hover': {
            backgroundColor: '#1A242F !important', // Darker shade on hover
        },
        animation: '$fadeIn 2s ease-out !important',
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    // Responsive styles for mobile
    [theme.breakpoints.down('sm')]: {
        heroTitle: {
            fontSize: '2.5rem !important', // Smaller title font for mobile
        },
        heroSubtitle: {
            fontSize: '1.2rem !important', // Smaller subtitle font for mobile
        },
        button: {
            padding: `${theme.spacing(1, 4)} !important`, // Smaller button padding
        },
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    const items = [
        {
            title: 'Welcome to Kinderbots Pre-School!',
            subtitle: 'Where Learning is Fun and Engaging',
            image: 'https://www.littlemillennium.com/assets/img/home-webp/1.webp',
            subImage: 'https://www.littlemillennium.com/assets/img/home-webp/4.webp',
        },
        {
            title: 'Interactive Learning Activities',
            subtitle: 'Hands-on experience for children',
            image: 'https://www.littlemillennium.com/assets/img/home-webp/2.webp',
            subImage: 'https://www.littlemillennium.com/assets/img/home-webp/9.webp',
        },
        {
            title: 'Nurturing Environment',
            subtitle: 'Creating a safe and caring space',
            image: 'https://www.littlemillennium.com/assets/img/home-webp/3.webp',
            subImage: 'https://www.littlemillennium.com/assets/img/home-webp/6.webp',
        },
    ];

    return (
        <Paper className={classes.hero}>
            <Carousel >
                {items.map((item, index) => (
                    <div key={index} className={classes.carouselItem}>
                        {/* Sub image used as full background */}
                        {/* Main image displayed on top */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className={classes.image}
                        />
                        {/* Centered text overlay */}
                        <div className={classes.textOverlay}>
                            <Typography variant="h2" className={classes.heroTitle}>
                                {item.title}
                            </Typography>
                            <Typography variant="h5" className={classes.heroSubtitle}>
                                {item.subtitle}
                            </Typography>
                            <Button variant="contained" href="/enroll" className={classes.button}>
                                Enroll Now
                            </Button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </Paper>
    );
};

export default HeroSection;
