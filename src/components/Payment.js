import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Create custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
    container: {
        background: '#E8F5E9 !important',
        borderRadius: '12px !important',
        padding: '64px !important',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2) !important',
        margin: '32px auto !important',
        textAlign: 'center !important',
        position: 'relative !important',
        overflow: 'hidden !important',
    },
    circleTopRight: {
        position: 'absolute !important',
        top: '-50px !important',
        right: '-50px !important',
        width: '150px !important',
        height: '150px !important',
        backgroundColor: '#ffab91 !important',
        borderRadius: '50% !important',
        opacity: 0.5,
        zIndex: 0,
    },
    circleBottomLeft: {
        position: 'absolute !important',
        bottom: '-70px !important',
        left: '-70px !important',
        width: '200px !important',
        height: '200px !important',
        backgroundColor: '#90caf9 !important',
        borderRadius: '50% !important',
        opacity: 0.6,
        zIndex: 0,
    },
    title: {
        letterSpacing: '2px !important',
        marginBottom: '16px !important',
        textTransform: 'uppercase !important',
        color: '#ff5252 !important',
        fontSize: '36px !important',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2) !important',
        zIndex: 1,
        position: 'relative !important',
    },
    subtitle: {
        fontSize: '28px !important',
        color: '#ff7043 !important',
        marginBottom: '32px !important',
        textDecoration: 'underline !important',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1) !important',
        zIndex: 1,
        position: 'relative !important',
    },
    details: {
        fontSize: '20px !important',
        color: '#333 !important',
        backgroundColor: '#ffccbc !important',
        padding: '12px 20px !important',
        borderRadius: '8px !important',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1) !important',
        display: 'inline-block !important',
        margin: '8px 5px !important',  // Added margin for spacing
        zIndex: 1,
        position: 'relative !important',
    },
}));

const KinderbotsPayment = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.container}>
            {/* Background elements */}
            <Box className={classes.circleTopRight} />
            <Box className={classes.circleBottomLeft} />

            <Box mb={5} className={classes.title}>
                <Typography variant="h4" fontWeight="bold" className={classes.title}>
                    Kinderbots Private Limited
                </Typography>
            </Box>

            <Box className={classes.subtitle}>
                <Typography variant="h5" fontWeight="bold" className={classes.subtitle}>
                    Kotak Mahindra Bank
                </Typography>

                <Typography variant="body1" className={classes.details}>
                    Account No.: <span style={{ fontWeight: 'bold', color: '#e65100' }}>8149453046</span>
                </Typography>

                <Typography variant="body1" className={classes.details}>
                    IFSC: <span style={{ fontWeight: 'bold', color: '#e65100' }}>KKBK0004605</span>
                </Typography>

                <Typography variant="body1" className={classes.details}>
                    Branch: <span style={{ fontWeight: 'bold', color: '#e65100' }}>Barakhamba Connaught Place Branch</span>
                </Typography>
            </Box>
        </Container>
    );
};

export default KinderbotsPayment;
