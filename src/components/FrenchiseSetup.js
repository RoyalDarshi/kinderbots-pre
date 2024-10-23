import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {
    Chair,
    TableChart,
    Tune, // Slider replaced with Tune
    ChildCare,
    DirectionsCar,
    AirplanemodeActive,
    SportsBasketball,
    Delete,
    Pool,
    FitnessCenter,
} from '@mui/icons-material';

// Styled component for the main section
const Section = styled(Box)(({ theme }) => ({
    padding: '80px 20px',
    backgroundColor: '#E3F2FD !important', // Light blue background
    textAlign: 'center',
    color: '#333 !important', // Dark grey text for readability
    borderRadius: '20px !important',
    position: 'relative',
    overflow: 'hidden !important',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1) !important',
    marginBottom: '40px !important',
    minHeight: '100vh !important',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '200px',
        height: '200px',
        background: '#FFC107 !important', // Yellow circle
        borderRadius: '50% !important',
        opacity: 0.3,
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-80px',
        right: '-80px',
        width: '200px',
        height: '200px',
        background: '#FF7043 !important', // Orange circle
        borderRadius: '50% !important',
        opacity: 0.4,
        zIndex: 0,
    },
}));

// Styled component for the title
const Title = styled(Typography)(() => ({
    fontSize: '3rem !important',
    fontWeight: 'bold !important',
    color: '#D32F2F !important', // Bright red for the title
    marginBottom: '40px !important',
    position: 'relative',
    zIndex: 1,
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2) !important',

    '@media (max-width: 600px)': {
        fontSize: '2.5rem !important',
    },
}));

// Styled component for the investment text
const InvestmentText = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem !important', // Increased font size
    color: '#455A64 !important', // Darker grey for better readability
    lineHeight: '1.6 !important',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '700px !important',
    padding: '0 20px !important',
    marginBottom: '40px !important',

    '@media (max-width: 600px)': {
        fontSize: '1.2rem !important', // Adjusted for smaller screens
    },
}));

// Styled component for the list of materials
const MaterialCard = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5 !important',
    borderRadius: '10px !important',
    padding: '20px !important',
    margin: '10px !important',
    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.1) !important',
    transition: '0.3s !important',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '40px',

    // Animation effects
    '&:hover': {
        transform: 'translateY(-5px) !important',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2) !important',
        backgroundColor: '#E3F2FD !important', // Lighten the background on hover
    },

    // Styling the Typography inside MaterialCard
    '& h6': {
        color: '#1E88E5 !important',
        fontWeight: '600 !important',
        marginLeft: '10px',
    },
}));

// Custom styled icon components
const ColorfulIcon = styled('div')(({ color }) => ({
    color: color || '#000', // Default color if none is provided
    fontSize: '2rem', // Increased icon size
    marginRight: '15px', // Space between icon and text
}));

const FranchiseSetupComponent = () => {
    // List of materials with corresponding icons and colors
    const materials = [
        { name: '30 Chairs', icon: <Chair />, color: '#FF5722' }, // Deep orange
        { name: 'Rectangular Moon Table (5)', icon: <TableChart />, color: '#4CAF50' }, // Green
        { name: 'Slider (1)', icon: <Tune />, color: '#2196F3' }, // Blue
        { name: 'Happy Swing (1)', icon: <ChildCare />, color: '#FFC107' }, // Yellow
        { name: 'Rocker Car (1)', icon: <DirectionsCar />, color: '#FF9800' }, // Orange
        { name: 'Baby Aeroplane (1)', icon: <AirplanemodeActive />, color: '#9C27B0' }, // Purple
        { name: 'Basketball Post (1)', icon: <SportsBasketball />, color: '#3F51B5' }, // Indigo
        { name: 'Dustbin', icon: <Delete />, color: '#F44336' }, // Red
        { name: 'Sand Box Com Pool (1)', icon: <Pool />, color: '#4CAF50' }, // Green
        { name: 'EVA Mats (10)', icon: <FitnessCenter />, color: '#FFEB3B' }, // Yellow
    ];

    return (
        <Section>
            <Title>Franchise Setup for 50 Students</Title>
            <InvestmentText>
                As part of our franchise package, we provide a complete setup for thirty students, including furniture and toys.
                This turnkey solution ensures a hassle-free experience for our franchise owners.
            </InvestmentText>

            <Grid container spacing={4} justifyContent="center" marginTop={4}>
                {materials.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <MaterialCard>
                            <ColorfulIcon color={item.color}>
                                {item.icon}
                            </ColorfulIcon>
                            <Typography variant="h6">{item.name}</Typography>
                        </MaterialCard>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
};

export default FranchiseSetupComponent;
