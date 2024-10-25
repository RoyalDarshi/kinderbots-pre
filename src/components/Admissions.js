import React from 'react';
import {
    Paper,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '60px 20px !important',
        backgroundColor: '#E3F2FD !important',
        minHeight: '100vh !important',
        display: 'flex !important',
        flexDirection: 'column !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://www.littlemillennium.com/assets/img/home-webp/1.webp") !important`,
        backgroundRepeat: 'no-repeat !important',
        backgroundSize: 'cover !important',
        backgroundPosition: 'center !important',
        color: '#FFFFFF !important',
        fontFamily: 'Nunito, sans-serif !important',
    },
    card: {
        maxWidth: '500px !important',
        margin: '30px !important',
        borderRadius: '20px !important',
        backgroundColor: '#FFEB3B !important',
        padding: '25px !important',
        boxShadow: `${theme.shadows[5]} !important`,
        transition: 'transform 0.5s ease, box-shadow 0.4s ease !important',
        '&:hover': {
            transform: 'scale(1.05) !important',
            boxShadow: `${theme.shadows[12]} !important`,
            backgroundColor: '#FFD54F !important',
        },
    },
    title: {
        color: '#FF5722 !important',
        marginBottom: '30px !important',
        textAlign: 'center !important',
        fontWeight: 'bold !important',
        fontSize: '3.5rem !important',
        fontFamily: 'Poppins, sans-serif !important',
        letterSpacing: '0.5px !important',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6) !important',
    },
    sectionTitle: {
        color: '#4CAF50 !important',
        margin: '20px 0 !important',
        textAlign: 'center !important',
        fontSize: '2.2rem !important',
        fontWeight: '600 !important',
        fontFamily: 'Poppins, sans-serif !important',
        letterSpacing: '0.3px !important',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4) !important',
    },
    list: {
        listStyleType: 'disc !important',
        paddingLeft: '25px !important',
        margin: '0 !important',
        fontFamily: 'Nunito, sans-serif !important',
        fontSize: '1.3rem !important',
        '& li': {
            paddingBottom: '12px !important',  // Added padding between list items
        },
    },
    button: {
        marginTop: '30px !important',
        backgroundColor: '#FF4081 !important',
        color: '#FFFFFF !important',
        fontWeight: 'bold !important',
        fontFamily: 'Poppins, sans-serif !important',
        fontSize: '1.5rem !important',
        borderRadius: '8px !important',
        padding: '12px 30px !important',
        '&:hover': {
            backgroundColor: '#F50057 !important',
        },
    },
    ctaContainer: {
        marginTop: '50px !important',
        textAlign: 'center !important',
        background: 'rgba(255, 255, 255, 0.85) !important',
        borderRadius: '16px !important',
        padding: '40px !important',
        boxShadow: `${theme.shadows[5]} !important`,
        color: '#2C3E50 !important',
        fontFamily: 'Nunito, sans-serif !important',
        fontSize: '1.3rem !important',
    },
    description: {
        marginBottom: '40px !important',
        color: '#FFFFFF !important',
        fontSize: '1.7rem !important',
        textAlign: 'center !important',
    },
}));

const Admissions = () => {
    const classes = useStyles();

    const admissionRequirements = [
        'Completed application form',
        'Birth certificate or proof of age',
        'Immunization records',
        'Parent/Guardian ID',
        'Previous school records (if applicable)',
    ];

    const admissionProcess = [
        'Submit the completed application form and required documents.',
        'Schedule a tour of our facility.',
        'Participate in an interview with our admissions team.',
        'Receive notification of admission status.',
    ];

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Admissions at Kinderbots Pre-School
            </Typography>
            <Typography variant="body1" className={classes.description}>
                Welcome to the admissions process for Kinderbots Pre-School! We are excited to have your family join our community.
            </Typography>

            <Grid container justifyContent="center" spacing={4}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.sectionTitle}>Admission Requirements</Typography>
                            <ul className={classes.list}>
                                {admissionRequirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.sectionTitle}>Admission Process</Typography>
                            <ol className={classes.list}>
                                {admissionProcess.map((process, index) => (
                                    <li key={index}>{process}</li>
                                ))}
                            </ol>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className={classes.ctaContainer}>
                <Typography variant="h5" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    Ready to Enroll?
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '30px', fontSize: '1.5rem' }}>
                    We are excited to welcome your child into our community! Click the button below to start the application process.
                </Typography>
                <Button
                    variant="contained"
                    className={classes.button}
                    href={"/enroll"}
                >
                    Enroll
                </Button>
            </div>
        </Paper>
    );
};

export default Admissions;
