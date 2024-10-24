import React from 'react';
import dedicatedManager from "../assets/dedicated-manager.png";
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

// Styled component for the container
const Container = styled(Box)(({ theme }) => ({
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontFamily: 'Arial, sans-serif',
    background: `
        linear-gradient(135deg, #E8F5E9, #C8E6C9), /* Light Mint Green to Light Green */
        url('https://www.transparenttextures.com/patterns/white-paper.png')`, // Subtle paper pattern
    backgroundSize: 'cover, 100%', // Cover gradient, scale pattern
    borderRadius: '15px', // Rounded corners for the container
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
}));

// Styled component for the title
const Title = styled(Typography)(({ theme }) => ({
    color: '#2E7D32', // Dark Green
    fontSize: '2.5rem',
    marginBottom: theme.spacing(3),
}));

// Styled component for the image
const Image = styled('img')(({ theme }) => ({
    maxWidth: '70%', // Make the image smaller
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: theme.spacing(2, 0), // Space around the image
}));

// Styled component for the text
const Description = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem', // Slightly smaller font size for the description
    lineHeight: 1.6, // Improved line height for readability
    maxWidth: '800px',
    margin: '0 auto',
    color: '#4A4A4A', // Charcoal Gray
    // Removed textTransform property to ensure only the first sentence starts with a capital letter
}));

const DedicatedRelationshipManager = () => {
    return (
        <Container>
            <Title variant="h1">Dedicated relationship manager</Title>
            <Image
                src={dedicatedManager}
                alt="Kinderbot Manager with children"
            />
            <Description>
                You will have a dedicated relationship manager who will serve as your primary point of contact.
                they will provide ongoing support, address any concerns or queries, and ensure that your needs
                are met throughout our partnership.
            </Description>
        </Container>
    );
};

export default DedicatedRelationshipManager;
