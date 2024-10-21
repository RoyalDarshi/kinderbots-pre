import React, { useState } from 'react';
import { Paper, Typography, Grid, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Slide } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: '16px !important', // Reduced padding for mobile
        marginTop: '20px !important',
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        backgroundColor: '#FFDD00 !important',
        position: 'relative !important',
        overflow: 'hidden !important',
    },
    title: {
        color: '#2DB8B0 !important',
        marginBottom: '12px !important',
        textAlign: 'center !important',
        fontWeight: 'bold !important',
        fontSize: '6vw !important', // Responsive font size
        [theme.breakpoints.up('sm')]: {
            fontSize: '2vw !important', // Larger on bigger screens
        },
    },
    dialog: {
        background: 'linear-gradient(135deg, #2C3E50 10%, #4CA1AF 90%) !important', // Gradient background (dark blue to teal)
        color: '#ECF0F1 !important', // Light gray text for better contrast
        width: '95vw !important', // Responsive dialog width for mobile
        maxWidth: '600px !important', // Max width for larger screens
        margin: 'auto !important',
        borderRadius: '12px !important',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5) !important', // Added subtle shadow for depth
    },
    dialogTitle: {
        fontSize: '5vw !important', // Responsive title font size for mobile
        textAlign: 'center !important',
        color: '#F39C12 !important', // Bright orange for title to stand out
        fontWeight: 'bold !important',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7) !important', // More pronounced text shadow for readability
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5vw !important', // Slightly larger font size on bigger screens
        },
    },
    dialogContent: {
        color: '#ECF0F1 !important', // Light gray text for contrast
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7) !important', // Stronger text shadow for better readability on dark background
        fontSize: '4vw !important', // Responsive content font size for mobile
        padding: '16px !important',
        lineHeight: '1.5 !important', // Increased line height for better readability
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5vw !important', // Larger font size for bigger screens
        },
    },
    dialogActions: {
        justifyContent: 'center !important',
        marginTop: '20px !important', // Added margin for spacing
    },
    knowMoreButton: {
        marginTop: '10px !important',
        backgroundColor: '#00796b !important',
        color: '#fff !important',
        transition: 'background-color 0.3s, transform 0.3s !important',
        '&:hover': {
            backgroundColor: '#004d40 !important',

        },
    },
    programCard: {
        padding: `${theme.spacing(3)} !important`,
        textAlign: 'center !important',
        borderRadius: '12px !important',
        boxShadow: theme.shadows[3],
        backgroundColor: '#FFF !important',
        transition: 'transform 0.3s, box-shadow 0.3s !important',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[10],
        },
    },
    programIcon: {
        fontSize: '50px !important',
        marginBottom: `${theme.spacing(1)} !important`,
        color: '#F26A2A',
    },
    backgroundDecor: {
        position: 'absolute !important',
        width: '50px !important',
        height: '50px !important',
        borderRadius: '50% !important',
        backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
        opacity: 0.5,
        animation: '$pulse 2s infinite !important',
    },
    '@keyframes pulse': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
    },
}));

// Slide animation for modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AboutSection = () => {
    const classes = useStyles();
    const theme = useTheme();

    // Dialog state management
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    const handleClickOpen = (content) => {
        setDialogContent(content); // Set the content for the modal
        setOpenDialog(true); // Open the dialog
    };

    const handleClose = () => {
        setOpenDialog(false); // Close the dialog
    };

    return (
        <Paper className={classes.section}>
            <Typography variant="h4" className={classes.title}>
                About Us
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.programCard}>
                        <Box className={classes.programIcon}>&#9733;</Box> {/* Star icon for mission */}
                        <Typography variant="h6" style={{ color: '#F26A2A' }}>Our Mission</Typography>
                        <Typography variant="body2">
                            To nurture, inspire, and cultivate young minds through a play-based curriculum.
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.knowMoreButton}
                            onClick={() => handleClickOpen('Our mission is to create a nurturing environment where children learn through play, exploration, and guided experiences. We focus on building foundational skills that prepare children for future academic success while fostering their creativity and emotional development.')}
                        >
                            Know More
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.programCard}>
                        <Box className={classes.programIcon}>&#127891;</Box> {/* Book icon for values */}
                        <Typography variant="h6" style={{ color: '#2DB8B0' }}>Our Values</Typography>
                        <Typography variant="body2">
                            We value creativity, curiosity, and a love for learning.
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.knowMoreButton}
                            onClick={() => handleClickOpen('Our core values center around creativity, curiosity, and respect. We believe that fostering a love of learning in children helps them to develop critical thinking, resilience, and a growth mindset. Every child is encouraged to pursue their interests in a supportive and inclusive environment.')}
                        >
                            Know More
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.programCard}>
                        <Box className={classes.programIcon}>&#128516;</Box> {/* Smiley face icon for environment */}
                        <Typography variant="h6" style={{ color: '#F26A2A' }}>Our Environment</Typography>
                        <Typography variant="body2">
                            We provide a safe, engaging, and supportive environment for children to grow.
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.knowMoreButton}
                            onClick={() => handleClickOpen('Our learning environment is designed to be safe, welcoming, and filled with opportunities for exploration. With a focus on hands-on learning and interactive play, children are free to engage in activities that promote both cognitive and emotional growth.')}
                        >
                            Know More
                        </Button>
                    </div>
                </Grid>
            </Grid>

            {/* Dialog for additional information */}
            <Dialog
                open={openDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
                classes={{ paper: classes.dialog }} // Apply custom dialog styles
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

            {/* Background decoration */}
            <div className={classes.backgroundDecor} style={{ top: '10%', left: '10%' }} />
            <div className={classes.backgroundDecor} style={{ bottom: '10%', right: '10%' }} />
        </Paper>
    );
};

export default AboutSection;
