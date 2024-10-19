// src/components/Footer.js
import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: `${theme.spacing(4)} !important`,
        padding: `${theme.spacing(3)} !important`,
        textAlign: 'center !important',
        background: 'linear-gradient(135deg, #2DB8B0, #FFDD00) !important', // Gradient background
        color: 'white !important',
        borderRadius: '12px !important',
        position: 'relative', // For positioning pseudo-elements
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2) !important', // Added shadow
    },
    button: {
        marginTop: `${theme.spacing(2)} !important`,
        backgroundColor: '#F26A2A !important',
        color: 'white !important',
        '&:hover': {
            backgroundColor: '#d45700 !important',
            transform: 'scale(1.05) !important', // Scale effect on hover
        },
        borderRadius: '20px !important',
        padding: `${theme.spacing(1, 5)} !important`,
        boxShadow: theme.shadows[5],
        transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition
    },
    waveEffect: {
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '150px',
        height: '150px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light effect
        borderRadius: '50%',
        filter: 'blur(50px)',
        zIndex: 0, // Place behind other content
        animation: `$wave 15s linear infinite` // Continuous animation
    },
    '@keyframes wave': {
        '0%': {
            transform: 'scale(1)',
        },
        '100%': {
            transform: 'scale(1.5)', // Increase size over time
            opacity: 0, // Fade out
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.footer}>
            <div className={classes.waveEffect} />
            <Typography variant="h5">Join Us Today!</Typography>
            <Button variant="contained" href="/enroll" className={classes.button}>
                Enroll Now
            </Button>
        </Paper>
    );
};

export default Footer;
