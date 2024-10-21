import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import imageUrl from "../assets/activities.webp";

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#E8F5E9',
    borderRadius: '15px',
    marginBottom: '40px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden', // Ensure children don't overflow the section
});

const Title = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: '#2C3E50',
    position: 'relative', // Position relative for z-index
    zIndex: 1, // Ensure it's above the background
});

const Description = styled(Typography)({
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#34495E',
    margin: '20px 0',
    position: 'relative', // Position relative for z-index
    zIndex: 1, // Ensure it's above the background
});

const BackgroundOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${imageUrl})`, // Background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3, // Adjust opacity for better visibility
    zIndex: 0, // Behind the text
});

const OverlayColor = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Light overlay for better contrast
    zIndex: 0, // Behind the text
});

const WhoWeAreSection = () => {
    return (
        <Section>
            <BackgroundOverlay />
            <OverlayColor />
            <Title>Who We Are</Title>
            <Description>
                A dedicated team of educators passionate about fostering a love of learning in young children. We believe in a nurturing environment where creativity and curiosity thrive.
            </Description>
        </Section>
    );
};

export default WhoWeAreSection;
