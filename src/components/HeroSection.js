import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import heroBackground from '../assets/hero.png';  // Adjust the path as needed

const useStyles = makeStyles((theme) => ({
    hero: {
        textAlign: 'center',
        marginBottom: `${theme.spacing(4)} !important`,
        backgroundImage: `linear-gradient(to bottom, rgba(255, 182, 193, 0.9), rgba(173, 216, 230, 0.9)), url(${heroBackground}) !important`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white !important',
        padding: `${theme.spacing(8)} !important`,
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        position: 'relative',
        overflow: 'hidden',
    },
    heroTitle: {
        fontSize: '3rem !important',
        fontWeight: 'bold !important',
        textShadow: '3px 3px 5px rgba(0, 0, 0, 0.8) !important',
        animation: '$fadeIn 1s ease-out',
    },
    heroSubtitle: {
        fontSize: '1.5rem !important',
        marginBottom: `${theme.spacing(3)} !important`,
        animation: '$fadeIn 1.5s ease-out',
    },
    button: {
        marginTop: `${theme.spacing(3)} !important`,
        backgroundColor: '#FFD700 !important',  // Gold color
        color: 'white !important',
        '&:hover': {
            backgroundColor: '#FFA500 !important',  // Orange color
            transform: 'scale(1.05) !important',
            transition: 'transform 0.3s',
        },
        borderRadius: '20px !important',
        padding: `${theme.spacing(1, 5)} !important`,
        boxShadow: theme.shadows[5],
        animation: '$fadeIn 2s ease-out',
    },
    balloon: {
        position: 'absolute',
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(255, 200, 50, 0.6) !important',
        borderRadius: '50%',
        boxShadow: `0 0 15px rgba(255, 200, 50, 0.8)`,
        top: '20%',
        left: '10%',
        animation: '$float 3s ease-in-out infinite',
    },
    balloon2: {
        position: 'absolute',
        width: '120px',
        height: '120px',
        backgroundColor: 'rgba(255, 105, 180, 0.6) !important',
        borderRadius: '50%',
        boxShadow: `0 0 15px rgba(255, 105, 180, 0.8)`,
        top: '30%',
        right: '15%',
        animation: '$float 3s ease-in-out infinite',
    },
    balloon3: {
        position: 'absolute',
        width: '90px',
        height: '90px',
        backgroundColor: 'rgba(50, 205, 50, 0.6) !important',  // LimeGreen color
        borderRadius: '50%',
        boxShadow: `0 0 15px rgba(50, 205, 50, 0.8)`,
        top: '10%',
        right: '5%',
        animation: '$float 4s ease-in-out infinite',
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    '@keyframes float': {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0)' },
    },
}));

const HeroSection = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.hero}>
            <div className={`${classes.balloon}`}></div>
            <div className={`${classes.balloon2}`}></div>
            <div className={`${classes.balloon3}`}></div>
            <Typography variant="h2" className={classes.heroTitle} gutterBottom>
                Welcome to Kinderbots Pre-School!
            </Typography>
            <Typography variant="h5" className={classes.heroSubtitle}>
                Where Learning is Fun and Engaging
            </Typography>
            <Button variant="contained" href="/enroll" className={classes.button}>
                Enroll Now
            </Button>
        </Paper>
    );
};

export default HeroSection;
