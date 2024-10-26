// src/components/AboutComponents/IntroductionSection.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { keyframes } from '@emotion/react'; // For animations

// Animation for a slight fade-in effect
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const useStyles = makeStyles((theme) => ({
    introductionSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        background: 'linear-gradient(120deg, #FFD1DC 30%, #FFABAB 100%) !important',  // Light pink tones
        borderRadius: '12px !important', // Softer edges for a playful look
        boxShadow: `${theme.shadows[4]} !important`,
        animation: `${fadeIn} 1s ease-in-out`, // Smooth fade-in animation
        textAlign: 'center', // Center content alignment
    },
    title: {
        fontFamily: "'Fredoka One', cursive !important", // Playful, child-friendly font
        textAlign: 'center !important',
        marginBottom: `${theme.spacing(2)} !important`,
        fontWeight: 'bold !important',
        color: '#6A0572 !important', // Purple color for title
        fontSize: '2.5rem !important', // Larger font size for emphasis
    },
    text: {
        fontFamily: "'Poppins', sans-serif !important",
        textAlign: 'center !important',
        color: '#555 !important', // Softer gray for readability on pink
        fontSize: '1.2rem !important',
        lineHeight: '1.6 !important',
    },
}));

const IntroductionSection = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.introductionSection}>
            <Typography variant="h4" className={classes.title}>
                About Kinderbots Pre-School
            </Typography>
            <Typography variant="body1" className={classes.text}>
                At Kinderbots Pre-School, we believe in creating a nurturing and inspiring environment where young children can explore, learn, and grow. Our dedicated staff and innovative curriculum ensure that every child develops a love for learning and reaches their full potential.
            </Typography>
        </Paper>
    );
};

export default IntroductionSection;
