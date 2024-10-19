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
    testimonial: {
        backgroundColor: '#E8F7FA !important',
        padding: `${theme.spacing(3)} !important`,
        borderRadius: '10px !important',
        textAlign: 'center !important',
        marginBottom: `${theme.spacing(2)} !important`,
        boxShadow: theme.shadows[2],
        position: 'relative !important',
        overflow: 'hidden !important',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease !important',
        '&:hover': {
            transform: 'translateY(-5px) scale(1.02) !important', // Slight lift effect on hover
            boxShadow: theme.shadows[5],
        },
    },
    quoteIcon: {
        position: 'absolute !important',
        top: '10px !important',
        left: '10px !important',
        fontSize: '30px !important',
        color: '#F26A2A !important',
        opacity: 0.3,
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));

const TestimonialsSection = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.section}>
            <Typography variant="h4" className={classes.title}>
                What Parents Say
            </Typography>
            <Grid container spacing={2}>
                {[
                    "My child loves attending Kinderbots! The staff is so caring and attentive.",
                    "A fantastic place for children to learn and grow! Highly recommend.",
                    "The programs are well-structured, and my child is thriving!",
                ].map((testimonial, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <div className={classes.testimonial}>
                            <Box className={classes.quoteIcon}>&#8220;</Box> {/* Opening quote icon */}
                            <Typography variant="body1">"{testimonial}"</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default TestimonialsSection;
