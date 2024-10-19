// src/components/AboutComponents/MissionSection.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    missionSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#E8F5E9 !important',
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
