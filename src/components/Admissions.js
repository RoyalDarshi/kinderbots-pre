// src/pages/Admissions.js
import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#F6F9FC',
        minHeight: '100vh',
    },
    section: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const Admissions = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {/* Introduction Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Admissions at Kinderbots Pre-School</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                    Welcome to the admissions process for Kinderbots Pre-School! We are excited to have your family join our community. Our admissions team is here to guide you every step of the way.
                </Typography>
            </Paper>

            {/* Admission Requirements Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Admission Requirements</Typography>
                <Typography variant="body1" style={{ margin: '20px 0' }}>
                    To ensure a smooth enrollment process, please review the following requirements:
                </Typography>
                <ul>
                    <li>Completed application form</li>
                    <li>Birth certificate or proof of age</li>
                    <li>Immunization records</li>
                    <li>Parent/Guardian ID</li>
                    <li>Previous school records (if applicable)</li>
                </ul>
            </Paper>

            {/* Admission Process Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Admission Process</Typography>
                <Typography variant="body1" style={{ margin: '20px 0' }}>
                    Our admissions process is designed to be straightforward:
                </Typography>
                <ol>
                    <li>Submit the completed application form and required documents.</li>
                    <li>Schedule a tour of our facility.</li>
                    <li>Participate in an interview with our admissions team.</li>
                    <li>Receive notification of admission status.</li>
                </ol>
            </Paper>

            {/* Call to Action Section */}
            <Paper className={classes.section} style={{ textAlign: 'center' }}>
                <Typography variant="h4">Ready to Enroll?</Typography>
                <Typography variant="body1" style={{ margin: '20px 0' }}>
                    We are excited to welcome your child into our community! Click the button below to start the application process.
                </Typography>
                <Button variant="contained" color="secondary" href="/enroll" className={classes.button}>
                    Start Application
                </Button>
            </Paper>
        </Container>
    );
};

export default Admissions;
