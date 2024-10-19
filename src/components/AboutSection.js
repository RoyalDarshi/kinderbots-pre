import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles'; // Import useTheme for dynamic theming

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

const AboutSection = () => {
    const classes = useStyles();
    const theme = useTheme(); // Use the theme for dynamic styling

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
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.programCard}>
                        <Box className={classes.programIcon}>&#127891;</Box> {/* Book icon for values */}
                        <Typography variant="h6" style={{ color: '#2DB8B0' }}>Our Values</Typography>
                        <Typography variant="body2">
                            We value creativity, curiosity, and a love for learning.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.programCard}>
                        <Box className={classes.programIcon}>&#128516;</Box> {/* Smiley face icon for environment */}
                        <Typography variant="h6" style={{ color: '#F26A2A' }}>Our Environment</Typography>
                        <Typography variant="body2">
                            We provide a safe, engaging, and supportive environment for children to grow.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            {/* Background decoration */}
            <div className={classes.backgroundDecor} style={{ top: '10%', left: '10%' }} />
            <div className={classes.backgroundDecor} style={{ bottom: '10%', right: '10%' }} />
        </Paper>
    );
};

export default AboutSection;
