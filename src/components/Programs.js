import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: `${theme.spacing(4)} !important`,
        marginTop: `${theme.spacing(4)} !important`,
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        backgroundColor: '#FFDD00 !important',
        position: 'relative !important',
        overflow: 'hidden !important',
    },
    title: {
        color: '#2DB8B0 !important',
        marginBottom: `${theme.spacing(2)} !important`,
        textAlign: 'center !important',
        fontWeight: 'bold !important',
        animation: '$fadeIn 1s ease-out !important', // Fade-in animation
    },
    programCard: {
        padding: `${theme.spacing(3)} !important`,
        textAlign: 'center !important',
        borderRadius: '12px !important',
        boxShadow: theme.shadows[3],
        backgroundColor: '#FFF !important',
        transition: 'transform 0.3s, box-shadow 0.3s !important',
        position: 'relative !important',
        overflow: 'hidden !important',
        '&:hover': {
            transform: 'scale(1.05) translateY(-5px) !important', // Added slight lift effect
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
        width: '60px !important',
        height: '60px !important',
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
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));

const ProgramsSection = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.section}>
            <Typography variant="h4" className={classes.title}>
                Our Programs
            </Typography>
            <Grid container spacing={3}>
                {['Early Learners', 'Creative Arts', 'Science Explorers', 'Language Fun'].map((program) => (
                    <Grid item xs={12} sm={6} md={3} key={program}>
                        <Paper className={classes.programCard}>
                            <Box className={classes.programIcon}>&#127859;</Box> {/* Icon for the program */}
                            <Typography variant="h6" style={{ color: '#2DB8B0' }}>{program}</Typography>
                            <Typography variant="body2">Engaging activities to stimulate young minds.</Typography>
                            <div className={classes.backgroundDecor} style={{ top: '10%', left: '10%' }} />
                            <div className={classes.backgroundDecor} style={{ bottom: '10%', right: '10%' }} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ProgramsSection;
