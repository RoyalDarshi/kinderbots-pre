// src/components/AboutComponents/MissionSection.js
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
    missionSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(4)} !important`,
        background: 'linear-gradient(135deg, #D1FFD6 30%, #A0E4A6 100%) !important',  // Bright green gradient
        borderRadius: '12px !important', // Increased border radius for softer edges
        boxShadow: `${theme.shadows[5]} !important`, // Deeper shadow for a joyful 3D effect
        animation: `${fadeIn} 1s ease-in-out`, // Smooth fade-in effect
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)', // Slight lift effect on hover
            boxShadow: `${theme.shadows[8]} !important`,
        },
    },
    title: {
        fontFamily: "'Fredoka One', cursive !important", // Playful, rounded font for the title
        textAlign: 'center !important',
        marginBottom: `${theme.spacing(3)} !important`,
        fontWeight: 'bold !important',
        color: '#6A0572 !important', // Strong purple color for the title
        fontSize: '2.5rem !important', // Large and bold for emphasis
    },
    text: {
        fontFamily: "'Poppins', sans-serif !important",
        textAlign: 'center !important',
        color: '#333 !important', // Neutral but readable color for body text
        fontSize: '1.2rem !important', // Slightly larger text for better readability
        lineHeight: '1.6 !important',
    },
}));

const MissionSection = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.missionSection}>
            <Typography variant="h4" className={classes.title}>Our Mission</Typography>
            <Typography variant="body1" className={classes.text}>
                Our mission is to provide a safe, loving, and engaging environment that fosters creativity, curiosity, and a lifelong love for learning. We aim to cultivate each child's unique talents and abilities, preparing them for future academic success.
            </Typography>
        </Paper>
    );
};

export default MissionSection;
