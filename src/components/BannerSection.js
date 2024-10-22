import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

// Define a colorful gradient background
const Banner = styled(Box)({
    background: 'linear-gradient(135deg, #FF677D, #FFABAB, #FFC3A0, #6A0572)', // Colorful gradient
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 10s ease infinite', // Smooth gradient animation
    color: '#fff',
    textAlign: 'center',
    padding: '120px 20px',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for readability
        borderRadius: '10px', // Rounded corners for a softer look
    },
    '@keyframes gradientAnimation': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
    },
    // Responsive styles for mobile
    '@media (max-width: 600px)': {
        padding: '80px 10px', // Reduced padding for smaller screens
    },
});

// Banner title with enhanced styling
const BannerText = styled(Typography)({
    position: 'relative',
    zIndex: 1,
    fontSize: '4.5rem', // Increased size for emphasis
    fontWeight: 'bold',
    lineHeight: '1.2',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', // Dark shadow for contrast
    color: '#FFEB3B', // Bright yellow color
    animation: 'fadeIn 1.5s ease forwards, bounce 2s infinite', // Enhanced animations
    '@keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    '@media (max-width: 600px)': {
        fontSize: '2.5rem', // Reduced font size for smaller screens
    },
});

// Subtitle with better visibility and effects
const BannerSubText = styled(Typography)({
    position: 'relative',
    zIndex: 1,
    fontSize: '2.2rem', // Increased size for visibility
    marginTop: '20px',
    fontWeight: '300', // Lighter font weight for contrast with title
    color: '#FF4081', // Bright pink color
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)', // Dark shadow for contrast
    animation: 'fadeIn 1.5s ease forwards 0.5s', // Smooth fade-in effect
    '@keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    '@media (max-width: 600px)': {
        fontSize: '1.5rem', // Reduced font size for smaller screens
    },
});

// Floating bubble styled with enhanced size and color
const FloatingBubble = styled('div')(({ color }) => ({
    position: 'absolute',
    bottom: '10%',
    width: '40px', // Increased size for visibility
    height: '40px',
    backgroundColor: color,
    borderRadius: '50%',
    animation: 'float 4s ease-in-out infinite',
    opacity: 0.8, // Slightly more visible
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow for depth
    '@keyframes float': {
        '0%': { transform: 'translateY(0)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' },
        '50%': { transform: 'translateY(-30px)', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)' },
        '100%': { transform: 'translateY(0)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' },
    },
    '@media (max-width: 600px)': {
        width: '30px', // Smaller bubbles on mobile
        height: '30px',
    },
}));

const BannerSection = () => {
    return (
        <Banner>
            <BannerText>Welcome to Kinderbots Pre-School!</BannerText>
            <BannerSubText>Where learning is fun and creativity grows.</BannerSubText>

            {/* Floating bubbles for added animation */}
            <FloatingBubble style={{ left: '10%', animationDelay: '0s' }} color="#FF677D" />
            <FloatingBubble style={{ left: '30%', animationDelay: '0.5s' }} color="#6A0572" />
            <FloatingBubble style={{ left: '50%', animationDelay: '1s' }} color="#FFC3A0" />
            <FloatingBubble style={{ left: '70%', animationDelay: '1.5s' }} color="#FFABAB" />
            <FloatingBubble style={{ left: '90%', animationDelay: '2s' }} color="#7E57C2" />
        </Banner>
    );
};

export default BannerSection;
