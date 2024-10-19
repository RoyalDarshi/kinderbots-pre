// src/components/AboutComponents/IntroductionSection.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    introductionSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        background: 'linear-gradient(120deg, #FFDDC1 30%, #FFABAB 100%) !important',
        borderRadius: '8px !important',
        boxShadow: `${theme.shadows[3]} !important`,
    },
    title: {
        textAlign: 'center !important',
        marginBottom: `${theme.spacing(2)} !important`,
        fontWeight: 'bold !important',
        color: '#6A0572 !important',
    },
    text: {
        textAlign: 'center !important',
        color: '#333 !important',
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
