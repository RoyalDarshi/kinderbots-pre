// src/components/DirectorMessage.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    directorMessage: {
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#FFDD00 !important',
        color: '#2DB8B0 !important',
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        textAlign: 'center !important',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)} !important`,
        },
    },
    directorTitle: {
        color: '#f54292 !important',
        fontWeight: 'bold !important',
        marginBottom: `${theme.spacing(2)} !important`,
    },
    directorBody: {
        marginBottom: `${theme.spacing(2)} !important`,
        color: '#333 !important',
    },
    directorName: {
        fontWeight: 'bold !important',
        fontSize: '24px !important',
        color: '#333 !important',
        marginTop: `${theme.spacing(2)} !important`,
    },
    directorRole: {
        fontStyle: 'italic !important',
        color: '#666 !important',
    },
    directorBadge: {
        backgroundColor: '#2DB8B0 !important',
        color: 'white !important',
        padding: '5px 10px !important',
        borderRadius: '5px !important',
        display: 'inline-block !important',
        marginTop: `${theme.spacing(1)} !important`,
    },
}));

const DirectorMessage = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.directorMessage}>
            <Typography variant="h5" className={classes.directorTitle}>Director's Message</Typography>
            <Typography variant="body1" className={classes.directorBody}>
                "Our goal is to provide a nurturing and stimulating environment where children can thrive academically,
                emotionally, and socially. At Kinderbots, we believe that every child is unique and deserves a personalized
                learning experience."
            </Typography>
            <Typography className={classes.directorName}>Divya Tiwari</Typography>
            <Box className={classes.directorBadge}>Founder, Director</Box>
            <Typography className={classes.directorRole}>Kinderbots Pre-School</Typography>
        </Paper>
    );
};

export default DirectorMessage;
