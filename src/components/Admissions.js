import React, { useState } from 'react';
import {
    Paper,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        backgroundColor: '#F0F4F8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url("path/to/background-image.jpg")`, // Replace with your background image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    card: {
        maxWidth: 400,
        margin: '20px',
        borderRadius: '16px',
        boxShadow: theme.shadows[5],
        backgroundColor: '#FFFAF0',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    title: {
        color: '#2DB8B0',
        marginBottom: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    sectionTitle: {
        color: '#FF5722',
        margin: '20px 0',
        textAlign: 'center',
        fontSize: '1.5rem',
    },
    list: {
        listStyleType: 'circle',
        paddingLeft: theme.spacing(2),
        color: '#34495E',
        margin: '0',
    },
    button: {
        marginTop: '20px',
        backgroundColor: '#FFDD00',
        color: '#2C3E50',
        '&:hover': {
            backgroundColor: '#FFD700',
        },
    },
    dialog: {
        background: 'linear-gradient(135deg, #2C3E50 10%, #4CA1AF 90%)',
        color: '#ECF0F1',
        width: '95vw',
        maxWidth: '600px',
        margin: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    dialogTitle: {
        fontSize: '1.5rem',
        textAlign: 'center',
        color: '#F39C12',
        fontWeight: 'bold',
    },
    dialogContent: {
        color: '#ECF0F1',
        fontSize: '1rem',
        padding: '16px',
        lineHeight: '1.5',
    },
    dialogActions: {
        justifyContent: 'center',
    },
}));

// Slide animation for modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Admissions = () => {
    const classes = useStyles();

    // Dialog state management
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    const handleClickOpen = (content) => {
        setDialogContent(content);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

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
            <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
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
            <Typography variant="h5" align="center" className={classes.title}>Ready to Enroll?</Typography>
            <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                We are excited to welcome your child into our community! Click the button below to start the application process.
            </Typography>
            <Button
                variant="contained"
                className={classes.button}
                onClick={() => handleClickOpen("Click here to apply for admissions.")}
            >
                Start Application
            </Button>

            {/* Dialog for additional information */}
            <Dialog
                open={openDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
                classes={{ paper: classes.dialog }}
            >
                <DialogTitle className={classes.dialogTitle}>More Information</DialogTitle>
                <DialogContent>
                    <Typography className={classes.dialogContent}>{dialogContent}</Typography>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={handleClose} style={{ backgroundColor: '#004d40', color: '#fff' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default Admissions;
