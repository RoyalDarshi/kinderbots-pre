// src/components/FeaturesSection.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { EmojiEvents, School, Support, People, Build, GroupAdd, Lightbulb } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    featuresSection: {
        padding: `${theme.spacing(4)} !important`, // Reduced padding for mobile
        background: 'linear-gradient(135deg, #2DB8B0, #FFDD00) !important',
        borderRadius: '20px !important',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15) !important',
        textAlign: 'center !important',
        color: '#fff !important',
        marginTop: `${theme.spacing(4)} !important`, // Reduced margin for mobile
        position: 'relative',
        overflow: 'hidden',
    },
    featureTitle: {
        marginBottom: `${theme.spacing(4)} !important`, // Reduced spacing
        color: '#fff !important',
        fontWeight: 'bold !important',
        fontSize: '2rem !important', // Responsive font size
        textShadow: '3px 3px 6px rgba(0,0,0,0.2) !important',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.8rem !important', // Larger size for medium screens
        },
    },
    featureCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
        padding: `${theme.spacing(2)} !important`, // Reduced padding for mobile
        borderRadius: '20px !important',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1) !important',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important',
        position: 'relative !important',
        overflow: 'hidden !important',
        '&:hover': {
            transform: 'scale(1.05) !important',
            boxShadow: '0px 8px 24px rgba(0,0,0,0.3) !important',
        },
        '&:before': {
            content: '""',
            position: 'absolute !important',
            top: 0,
            left: 0,
            width: '100% !important',
            height: '5px !important',
            background: 'linear-gradient(135deg, #F26A2A, #FFDD00) !important',
        },
        '&:after': {
            content: '""',
            position: 'absolute !important',
            bottom: 0,
            left: 0,
            width: '100% !important',
            height: '5px !important',
            background: 'linear-gradient(135deg, #2DB8B0, #FFDD00) !important',
        },
    },
    featureNumber: {
        fontSize: '2.5rem !important', // Responsive font size
        fontWeight: 'bold !important',
        color: '#FFDD00 !important',
        background: '-webkit-linear-gradient(135deg, #2DB8B0, #F26A2A) !important',
        WebkitBackgroundClip: 'text !important',
        WebkitTextFillColor: 'transparent !important',
        marginBottom: `${theme.spacing(1)} !important`, // Reduced spacing
        position: 'relative',
        zIndex: 2,
    },
    featureText: {
        marginTop: `${theme.spacing(1)} !important`, // Reduced spacing
        fontSize: '16px !important', // Responsive font size
        fontWeight: '500 !important',
        color: '#333 !important',
        textShadow: '1px 1px 4px rgba(0,0,0,0.1) !important',
    },
    featureIcon: {
        fontSize: '3rem !important', // Responsive font size
        color: '#F26A2A !important',
        transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out !important',
        marginBottom: `${theme.spacing(1)} !important`, // Reduced spacing
        '&:hover': {
            color: '#FFDD00 !important',
            transform: 'rotate(15deg)',
        },
    },
    backgroundEffect: {
        position: 'absolute',
        top: '-20%',
        left: '-20%',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
        transform: 'scale(1.5)',
    },
}));

const FeaturesSection = () => {
    const classes = useStyles();

    const salientFeatures = [
        { number: 1, text: 'Shining Brand Benefits', icon: <EmojiEvents /> },
        { number: 2, text: 'Curriculum Support', icon: <School /> },
        { number: 3, text: 'Daily Planner', icon: <Support /> },
        { number: 4, text: 'Large Community Support', icon: <People /> },
        { number: 5, text: 'Teacher\'s Training', icon: <School /> },
        { number: 6, text: 'Owner\'s Training', icon: <Build /> },
        { number: 7, text: 'Operate Your School Effectively', icon: <Lightbulb /> },
        { number: 8, text: 'AI-Powered Admission System', icon: <GroupAdd /> },
    ];

    return (
        <section className={classes.featuresSection}>
            <div className={classes.backgroundEffect}>
                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="100" fill="#ffffff" />
                </svg>
            </div>
            <Typography variant="h4" className={classes.featureTitle}>
                Our Programs
            </Typography>
            <Grid container spacing={2}> {/* Reduced spacing for better mobile view */}
                {salientFeatures.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className={classes.featureCard}>
                            <div className={classes.featureIcon}>{feature.icon}</div>
                            <CardContent>
                                <Typography variant="h5" className={classes.featureNumber}>
                                    {feature.number}
                                </Typography>
                                <Typography className={classes.featureText}>
                                    {feature.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default FeaturesSection;
