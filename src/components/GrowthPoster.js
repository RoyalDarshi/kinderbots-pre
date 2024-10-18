import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles with dark theme colors
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px !important',
        backgroundColor: '#e0f7fa', // Dark background color
        maxWidth: '1200px',
        margin: 'auto',
        color: '#fff ', // Light text color for contrast
    },
    header: {
        textAlign: 'center',
        padding: '10px',
        marginBottom: '20px !important',
        borderRadius: '16px',
        backgroundColor: '#00796b', // Light color for the header
    },
    card: {
        margin: '10px',
        borderRadius: '8px!important',
        transition: 'transform 0.2s !important',
        '&:hover': {
            transform: 'scale(1.05) !important',
        },
    },
    greenBubble: {
        backgroundColor: '#2e7d32 !important', // Darker green
        color: '#ffffff !important', // Light text color
    },
    redBubble: {
        backgroundColor: '#c62828 !important', // Darker red
        color: '#ffffff !important', // Light text color
    },
    orangeBubble: {
        backgroundColor: '#ff9800 !important', // Dark orange
        color: '#ffffff !important', // Light text color
    },
    pinkBubble: {
        backgroundColor: '#d81b60 !important', // Darker pink
        color: '#ffffff !important', // Light text color
    },
    yellowBubble: {
        backgroundColor: '#fbc02d !important', // Darker yellow
        color: '#ffffff !important', // Light text color
    },
    bubbleText: {
        fontSize: '1rem', // Text size
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={`${classes.card} ${classes.greenBubble}`}>
                        <CardContent>
                            <Typography className={classes.bubbleText}>
                                "Our preschool curriculum is designed to provide a well-rounded learning experience for children. We focus on enhancing fine motor skills through activities such as drawing, coloring, and using various tools like scissors and building blocks. These activities help develop hand-eye coordination and dexterity in young children."
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={`${classes.card} ${classes.redBubble}`}>
                        <CardContent>
                            <Typography className={classes.bubbleText}>
                                "For gross motor skills development, we incorporate activities like running, jumping, climbing, and playing outdoor games. These activities help children improve their physical strength, balance, and coordination."
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={`${classes.card} ${classes.orangeBubble}`}>
                        <CardContent>
                            <Typography className={classes.bubbleText}>
                                "Emotional skills are cultivated through activities that promote self-expression, empathy, and self-regulation. We encourage children to express their emotions in a safe and supportive environment and provide guidance on managing and understanding their feelings."
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={`${classes.card} ${classes.pinkBubble}`}>
                        <CardContent>
                            <Typography className={classes.bubbleText}>
                                "Cognitive skills are developed through various learning experiences such as puzzles, matching games, counting, and sorting. We encourage critical thinking, problem-solving, and memory skills through engaging activities and interactive play."
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={`${classes.card} ${classes.yellowBubble}`}>
                        <CardContent>
                            <Typography className={classes.bubbleText}>
                                "Social skills development is vital, and we foster a sense of community and cooperation through group activities, team-building exercises, and role-playing. Children learn to communicate effectively, share, take turns, and respect others' opinions and boundaries."
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default GrowthPoster;
