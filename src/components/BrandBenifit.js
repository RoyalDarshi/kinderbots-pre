import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Custom styles using makeStyles with !important and lowercase text
const useStyles = makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4) !important',
        padding: '64px !important',
        borderRadius: '12px !important',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2) !important',
        marginTop: '32px !important',
        marginBottom: '32px !important',
        width: '100% !important',
        textAlign: 'center !important',
    },
    title: {
        color: '#ff5722 !important', // High contrast color for better readability (orange-red)
        fontSize: '36px !important',
        fontWeight: 'bold !important',
        letterSpacing: '2px !important',
        textShadow: '3px 3px 8px rgba(0, 0, 0, 0.3) !important', // Stronger text shadow for better readability
        marginBottom: '24px !important',
    },
    textBlock: {
        color: '#333 !important',
        fontSize: '18px !important',
        lineHeight: '1.8 !important',
        backgroundColor: '#fff9c4 !important',
        padding: '24px !important',
        borderRadius: '8px !important',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1) !important',
        textAlign: 'center !important',
        margin: '0 auto !important',
        maxWidth: '800px !important',
    },
}));

const KinderbotsBrandBenefit = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.container}>
            <Box>
                <Typography variant="h4" className={classes.title}>
                    SHINING BRAND BENEFIT
                </Typography>
            </Box>

            <Box>
                <Typography variant="body1" className={classes.textBlock}>
                    By becoming "KINDERBOT PRE SCHOOL", you instantly gain a shining brand benefit that will attract more parents and students to your school.
                </Typography>
            </Box>
        </Container>
    );
};

export default KinderbotsBrandBenefit;
