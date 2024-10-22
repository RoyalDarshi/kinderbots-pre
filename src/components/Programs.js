import React, { useState } from 'react';
import { Paper, Typography, Grid, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Slide } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: '40px !important',
        backgroundColor: '#FFEB3B !important',
        borderRadius: '12px !important',
        position: 'relative !important',
        overflow: 'hidden !important',
        boxShadow: `0px 8px 15px rgba(0, 0, 0, 0.2) !important`,
    },
    title: {
        color: '#0288D1 !important',
        marginBottom: '32px !important',
        textAlign: 'center !important',
        fontWeight: 'bold !important',
        fontSize: '5vw !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3vw !important',
        },
    },
    dialog: {
        background: '#FFFFFF !important',
        borderRadius: '12px !important',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2) !important',
        color: '#212121 !important',
        width: '90vw !important',
        maxWidth: '600px !important',
        margin: 'auto !important',
        border: '2px solid #FF9800 !important',
    },
    dialogTitle: {
        fontSize: '6vw !important',
        textAlign: 'center !important',
        color: '#FF9800 !important',
        fontWeight: 'bold !important',
        padding: '16px 0 !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3vw !important',
        },
    },
    dialogContent: {
        padding: '24px !important',
        fontSize: '4.5vw !important',
        lineHeight: '1.5 !important',
        color: '#212121 !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.8vw !important',
        },
    },
    dialogActions: {
        justifyContent: 'center !important',
        marginTop: '20px !important',
        paddingBottom: '16px !important',
    },
    knowMoreButton: {
        marginTop: '16px !important',
        padding: '10px 20px !important',
        backgroundColor: '#00ACC1 !important',
        color: '#FFFFFF !important',
        fontWeight: 'bold !important',
        borderRadius: '8px !important',
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out !important',
        '&:hover': {
            backgroundColor: '#00796b !important',
            transform: 'scale(1.05) !important',
        },
    },
    programCard: {
        padding: `${theme.spacing(4)} !important`,
        textAlign: 'center !important',
        borderRadius: '16px !important',
        backgroundColor: '#FFF !important',
        boxShadow: theme.shadows[4],
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important',
        '&:hover': {
            transform: 'scale(1.05) !important',
            boxShadow: theme.shadows[12],
        },
    },
    programIcon: {
        fontSize: '60px !important',
        color: '#FF7043 !important',
        marginBottom: `${theme.spacing(2)} !important`,
    },
    backgroundDecor: {
        position: 'absolute !important',
        width: '80px !important',
        height: '80px !important',
        borderRadius: '50% !important',
        backgroundColor: 'rgba(255, 255, 255, 0.3) !important',
        animation: '$float 6s ease-in-out infinite !important',
    },
    '@keyframes float': {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
        '100%': { transform: 'translateY(0)' },
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProgramsSection = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    const handleClickOpen = (content) => {
        setDialogContent(content);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const programs = [
        {
            name: 'Early Learners',
            description: 'Engaging activities to stimulate young minds.',
            details: 'This program focuses on foundational skills through fun and exploration, designed for children aged 3-5 years.'
        },
        {
            name: 'Creative Arts',
            description: 'Encouraging creativity through various art forms.',
            details: 'Children will explore painting, music, and dance to express themselves and build confidence in their creativity.'
        },
        {
            name: 'Science Explorers',
            description: 'Hands-on science experiments and activities.',
            details: 'Fun and interactive science experiments promote critical thinking and curiosity in young learners.'
        },
        {
            name: 'Language Fun',
            description: 'Interactive games to enhance language skills.',
            details: 'Designed for kids to improve communication through stories, songs, and games.'
        },
        {
            name: 'Nature Adventures',
            description: 'Exploring the outdoors and understanding nature.',
            details: 'Outdoor activities to foster a love for nature and teach kids about the environment.'
        },
        {
            name: 'Math Magic',
            description: 'Engaging activities to enhance math skills.',
            details: 'Fun games and challenges help children develop strong numeracy skills in a playful environment.'
        },
    ];

    return (
        <Paper className={classes.section}>
            <Typography variant="h4" className={classes.title}>
                Our Programs
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {programs.map((program) => (
                    <Grid item xs={12} sm={6} md={4} key={program.name}>
                        <div className={classes.programCard}>
                            <Box className={classes.programIcon}>&#127859;</Box> {/* Icon for each program */}
                            <Typography variant="h6" style={{ color: '#0288D1', fontWeight: 'bold' }}>{program.name}</Typography>
                            <Typography variant="body2">{program.description}</Typography>
                            <Button
                                variant="contained"
                                className={classes.knowMoreButton}
                                onClick={() => handleClickOpen(program.details)}
                            >
                                Know More
                            </Button>
                        </div>
                    </Grid>
                ))}
            </Grid>

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
                    <Button onClick={handleClose} className={classes.knowMoreButton}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Decorative animated elements */}
            <div className={classes.backgroundDecor} style={{ top: '10%', left: '15%' }} />
            <div className={classes.backgroundDecor} style={{ bottom: '15%', right: '20%' }} />
        </Paper>
    );
};

export default ProgramsSection;
