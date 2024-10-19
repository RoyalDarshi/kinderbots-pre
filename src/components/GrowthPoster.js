import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px !important',
        background: 'linear-gradient(to right, #e0f7fa, #b2ebf2)', // Gradient background
        maxWidth: '1200px',
        margin: 'auto',
        color: '#fff', // Light text color for contrast
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '20px', // Rounded corners
        boxShadow: theme.shadows[8], // Subtle shadow for depth
    },
    header: {
        textAlign: 'center',
        padding: '10px',
        marginBottom: '20px !important',
        borderRadius: '16px',
        backgroundColor: '#00796b',
        boxShadow: theme.shadows[5],
        position: 'relative',
        zIndex: 1, // Bring header above background elements
    },
    card: {
        margin: '10px',
        borderRadius: '12px!important',
        transition: 'transform 0.3s, box-shadow 0.3s !important',
        position: 'relative',
        overflow: 'hidden', // Prevent overflow for bubbles
        '&:hover': {
            transform: 'scale(1.05) !important',
            boxShadow: `${theme.shadows[10]} !important`,
            zIndex: 1, // Bring hovered card above others
        },
    },
    bubble: {
        borderRadius: '12px', // Rounded corners for bubbles
        padding: '15px',
        position: 'relative',
        overflow: 'hidden',
        animation: '$bubbleAnimation 2s infinite', // Animation for all bubbles
    },
    greenBubble: {
        backgroundColor: '#2e7d32 !important',
    },
    redBubble: {
        backgroundColor: '#c62828 !important',
    },
    orangeBubble: {
        backgroundColor: '#ff9800 !important',
    },
    pinkBubble: {
        backgroundColor: '#d81b60 !important',
    },
    yellowBubble: {
        backgroundColor: '#fbc02d !important',
    },
    bubbleText: {
        fontSize: '1rem',
        zIndex: 2, // Bring text above background elements
    },
    '@keyframes bubbleAnimation': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
    },
    backgroundBubble: {
        position: 'absolute',
        bottom: '-20%',
        right: '-20%',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0, // Send background bubbles behind content
    },
}));

const GrowthPoster = () => {
    const classes = useStyles(); // Use the defined styles

    return (
        <div className={classes.container}>
            <Typography variant="h4" className={classes.header}>
                FOCUS OF OUR EDUCATION IS HOLISTIC GROWTH OF STUDENTS
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {[
                    {
                        text: "Our preschool curriculum is designed to provide a well-rounded learning experience for children. We focus on enhancing fine motor skills through activities such as drawing, coloring, and using various tools like scissors and building blocks. These activities help develop hand-eye coordination and dexterity in young children.",
                        class: classes.greenBubble,
                    },
                    {
                        text: "For gross motor skills development, we incorporate activities like running, jumping, climbing, and playing outdoor games. These activities help children improve their physical strength, balance, and coordination.",
                        class: classes.redBubble,
                    },
                    {
                        text: "Emotional skills are cultivated through activities that promote self-expression, empathy, and self-regulation. We encourage children to express their emotions in a safe and supportive environment and provide guidance on managing and understanding their feelings.",
                        class: classes.orangeBubble,
                    },
                    {
                        text: "Cognitive skills are developed through various learning experiences such as puzzles, matching games, counting, and sorting. We encourage critical thinking, problem-solving, and memory skills through engaging activities and interactive play.",
                        class: classes.pinkBubble,
                    },
                    {
                        text: "Social skills development is vital, and we foster a sense of community and cooperation through group activities, team-building exercises, and role-playing. Children learn to communicate effectively, share, take turns, and respect others' opinions and boundaries.",
                        class: classes.yellowBubble,
                    },
                ].map((bubble, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className={`${classes.card} ${bubble.class}`}>
                            <div className={classes.bubble}>
                                <CardContent>
                                    <Typography className={classes.bubbleText}>
                                        "{bubble.text}"
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                        {/* Background bubble illustration */}
                        <div className={classes.backgroundBubble}>
                            <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="75" cy="75" r="60" fill="white" />
                            </svg>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GrowthPoster;
