// src/components/AboutComponents/HistorySection.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { keyframes } from '@emotion/react'; // For animations

// Animation for fade-in effect
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const useStyles = makeStyles((theme) => ({
    historySection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(4)} !important`,
        background: 'linear-gradient(135deg, #FFE0B2 30%, #FFCC80 100%) !important',  // Soft orange gradient
        borderRadius: '12px !important', // Softer, rounded edges
        boxShadow: `${theme.shadows[4]} !important`, // Enhanced shadow for depth
        animation: `${fadeIn} 1s ease-in-out`, // Smooth fade-in effect
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)', // Slight lift effect on hover
            boxShadow: `${theme.shadows[8]} !important`,
        },
        textAlign: 'center', // Center-align content for uniformity
    },
    title: {
        fontFamily: "'Fredoka One', cursive !important", // Fun and bold font for title
        textAlign: 'center !important',
        marginBottom: `${theme.spacing(3)} !important`,
        fontWeight: 'bold !important',
        color: '#6A0572 !important', // Keeping the purple theme for the title
        fontSize: '2.5rem !important', // Larger size for emphasis
    },
    text: {
        fontFamily: "'Poppins', sans-serif !important",
        textAlign: 'center !important',
        color: '#333 !important', // Softer text color for readability
        fontSize: '1.2rem !important', // Slightly larger for better readability
        lineHeight: '1.6 !important',
    },
}));

const HistorySection = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.historySection}>
            <Typography variant="h4" className={classes.title}>Our History</Typography>
            <Typography variant="body1" className={classes.text}>
                Established in 2020, Kinderbots Pre-School has quickly become a trusted name in early childhood education. Our founders envisioned a place where children could thrive academically and socially, and we have worked tirelessly to bring that vision to life.
            </Typography>
        </Paper>
    );
};

export default HistorySection;
