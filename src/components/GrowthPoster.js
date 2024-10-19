import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import growthBg from "../assets/growth-bg.webp"

// Define styles using makeStyles with !important
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '30px !important',
        background: 'linear-gradient(135deg, #fce4ec, #e0f7fa) !important', // Soft gradient
        maxWidth: '1200px !important',
        margin: 'auto !important',
        borderRadius: '20px !important',
        boxShadow: `0 8px 30px rgba(0,0,0,0.1) !important`, // Subtle shadow for depth
        position: 'relative !important',
        overflow: 'hidden !important',
        backgroundImage: `url(${growthBg}) !important`, // Background graphics
        backgroundSize: 'cover !important',
        backgroundPosition: 'center !important',
    },
    header: {
        textAlign: 'center !important',
        padding: '15px !important',
        marginBottom: '20px !important',
        borderRadius: '20px !important',
        backgroundColor: '#00796b !important', // Dark green background
        color: '#fff !important',
        boxShadow: `${theme.shadows[6]} !important`,
        fontSize: '2.2rem !important',
        letterSpacing: '1px !important',
        zIndex: '1 !important',
    },
    card: {
        margin: '15px !important',
        borderRadius: '16px !important',
        transition: 'transform 0.4s, box-shadow 0.4s !important',
        overflow: 'hidden !important',
        '&:hover': {
            transform: 'scale(1.1) !important',
            boxShadow: `0 12px 30px rgba(0,0,0,0.2) !important`,
            border: '2px solid #ff9800 !important',  // Add border glow on hover
        },
    },
    bubble: {
        padding: '20px !important',
        animation: '$bubbleAnimation 2.5s infinite !important', // Slightly slower animation
    },
    greenBubble: { backgroundColor: '#2e7d32 !important' },
    redBubble: { backgroundColor: '#c62828 !important' },
    orangeBubble: { backgroundColor: '#ff9800 !important' },
    pinkBubble: { backgroundColor: '#d81b60 !important' },
    yellowBubble: { backgroundColor: '#fbc02d !important' },

    bubbleText: {
        fontSize: '1.1rem !important',
        fontWeight: '600 !important',
        zIndex: '2 !important',
        color: '#fff !important',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2) !important',  // Text shadow for better contrast
    },
    '@keyframes bubbleAnimation': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.08)' },
        '100%': { transform: 'scale(1)' },
    },
    backgroundBubble: {
        position: 'absolute !important',
        bottom: '-25% !important',
        right: '-25% !important',
        opacity: '0.05 !important',
        pointerEvents: 'none !important',
        zIndex: '0 !important',
    },
}));

const GrowthPoster = () => {
    const classes = useStyles();

    // Data for the growth areas
    const growthAreas = [
        {
            text: "Fine Motor Skills: Enhance hand-eye coordination with activities like drawing, cutting, and building.",
            class: classes.greenBubble,
        },
        {
            text: "Gross Motor Skills: Improve strength and balance with running, climbing, and outdoor play.",
            class: classes.redBubble,
        },
        {
            text: "Emotional Skills: Promote self-expression and empathy in a supportive environment.",
            class: classes.orangeBubble,
        },
        {
            text: "Cognitive Skills: Boost problem-solving and critical thinking with interactive learning.",
            class: classes.pinkBubble,
        },
        {
            text: "Social Skills: Foster cooperation, communication, and respect through group activities.",
            class: classes.yellowBubble,
        },
    ];

    return (
        <div className={classes.container}>
            <Typography variant="h4" className={classes.header}>
                FOCUS OF OUR EDUCATION IS HOLISTIC GROWTH OF STUDENTS
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {growthAreas.map((area, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className={`${classes.card} ${area.class}`}>
                            <div className={classes.bubble}>
                                <CardContent>
                                    <Typography className={classes.bubbleText}>
                                        {area.text}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                        {/* Background bubble illustration */}
                        <div className={classes.backgroundBubble}>
                            <svg width="180" height="180" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="75" cy="75" r="70" fill="white" />
                            </svg>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GrowthPoster;
