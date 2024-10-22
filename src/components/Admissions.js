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
        padding: '20px !important',
        backgroundColor: '#E3F2FD !important', // Light blue background to match playful preschool theme
        minHeight: '100vh !important',
        display: 'flex !important',
        flexDirection: 'column !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://www.littlemillennium.com/assets/img/home-webp/1.webp") !important`,
        backgroundRepeat: 'no-repeat !important',
        backgroundSize: 'cover !important',
        backgroundPosition: 'center !important',
        color: '#FFFFFF !important',
    },
    card: {
        maxWidth: '400px !important',
        margin: '20px !important',
        borderRadius: '16px !important',
        backgroundColor: '#FFF8E1 !important', // Light yellow for cards
        boxShadow: `${theme.shadows[5]} !important`,
        transition: 'transform 0.6s ease, box-shadow 0.4s ease !important',

        // transition
        '&:hover': {
            transform: 'scale(1.08) rotate(-3deg) !important', // Slight tilt and scale for playful hover effect
            boxShadow: `${theme.shadows[12]} !important`,
            backgroundColor: '#FFF176 !important', // Slightly darker yellow on hover
        },
    },
    title: {
        color: '#FFEB3B !important', // Bright yellow title to stand out
        marginBottom: '10px !important',
        textAlign: 'center !important',
        fontWeight: 'bold !important',
        fontSize: '2.8rem !important',
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7) !important', // Stronger shadow for better visibility
    },
    sectionTitle: {
        color: '#FF5722 !important', // Bright orange for section titles
        margin: '20px 0 !important',
        textAlign: 'center !important',
        fontSize: '1.8rem !important',
        fontWeight: 'bold !important',
        textTransform: 'uppercase !important',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6) !important',
    },
    list: {
        listStyleType: 'circle !important',
        paddingLeft: `${theme.spacing(2)}px !important`,
        color: '#34495E !important',
        margin: '0 !important',
    },
    button: {
        marginTop: '20px !important',
        backgroundColor: '#FF4081 !important', // Vibrant pink for the button
        color: '#FFFFFF !important',
        fontWeight: 'bold !important',
        '&:hover': {
            backgroundColor: '#F50057 !important', // Darker pink on hover
        },
    },
    ctaContainer: {
        marginTop: '40px !important',
        textAlign: 'center !important',
        background: 'rgba(255, 255, 255, 0.95) !important', // Slightly darker white with transparency for better contrast
        borderRadius: '12px !important',
        padding: '20px !important',
        boxShadow: `${theme.shadows[5]} !important`,
        color: '#2C3E50 !important', // Darker text color for better readability
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
            <Typography variant="body1" align="center" style={{ margin: '20px 0 !important', color: '#FFFFFF !important' }}>
                Welcome to the admissions process for Kinderbots Pre-School! We are excited to have your family join our community.
            </Typography>

            <Grid container justifyContent="center" spacing={3}>
                {/* Admission Requirements Card */}
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

                {/* Admission Process Card */}
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

            {/* Call to Action Section */}
            <div className={classes.ctaContainer}>
                <Typography variant="h5" align="center" className={classes.title}>Ready to Enroll?</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0 !important' }}>
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
