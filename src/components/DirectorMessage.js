// src/components/DirectorMessage.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    directorMessage: {
        padding: `${theme.spacing(4)} !important`,
        backgroundColor: '#FFDD00 !important',
        color: '#2DB8B0 !important',
        borderRadius: '15px !important',
        marginTop:`${theme.spacing(4)} !important`,
        boxShadow: `${theme.shadows[5]} !important`,
        textAlign: 'center !important',
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(3)} !important`,
        },
    },
    directorTitle: {
        color: '#F57F20 !important', // A warm orange color
        fontWeight: 'bold !important',
        marginBottom: `${theme.spacing(2)} !important`,
        fontSize: '2rem !important',
    },
    directorBody: {
        marginBottom: `${theme.spacing(3)} !important`,
        color: '#333 !important',
        lineHeight: 1.5,
        fontSize: '1.1rem !important',
    },
    directorName: {
        fontWeight: 'bold !important',
        fontSize: '26px !important',
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
        padding: '8px 12px !important',
        borderRadius: '20px !important',
        display: 'inline-block !important',
        marginTop: `${theme.spacing(1)} !important`,
    },
    decoration: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        zIndex: -1,
    },
}));

const DirectorMessage = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.directorMessage}>
            <div className={classes.decoration} />
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
