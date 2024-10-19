// src/components/AboutComponents/HistorySection.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    historySection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#FFF3E0 !important',
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
