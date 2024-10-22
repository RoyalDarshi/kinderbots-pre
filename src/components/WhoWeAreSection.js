import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const Section = styled(Box)({
    padding: '40px 20px !important',
    backgroundColor: '#FFCCBC !important', // Soft peach background
    borderRadius: '15px !important',
    marginBottom: '40px !important',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3) !important',
    position: 'relative !important',
    overflow: 'hidden !important',
    textAlign: 'center !important',
});

const Title = styled(Typography)({
    fontWeight: 'bold !important',
    fontSize: '2.5rem !important',
    color: '#D32F2F !important', // Vibrant red color for the title
    position: 'relative !important',
    zIndex: 1,
    '@media (max-width: 600px)': {
        fontSize: '2rem !important',
    },
    textTransform: 'uppercase !important',
    lineHeight: '1.2 !important',
});

const Description = styled(Typography)({
    fontSize: '1.5rem !important',
    color: '#3E2723 !important', // Dark brown for the description
    margin: '20px 0 !important',
    position: 'relative !important',
    zIndex: 1,
    '@media (max-width: 600px)': {
        fontSize: '1.2rem !important',
        margin: '15px 0 !important',
    },
    lineHeight: '1.6 !important',
});

const OverlayColor = styled(Box)({
    position: 'absolute !important',
    top: '0 !important',
    left: '0 !important',
    right: '0 !important',
    bottom: '0 !important',
    backgroundColor: 'rgba(255, 255, 255, 0.6) !important', // Light white overlay for contrast
    zIndex: 0,
});

const FunBubble = styled(Box)({
    position: 'absolute',
    width: '180px',
    height: '180px',
    backgroundColor: 'rgba(76, 175, 80, 0.5) !important', // Soft green bubble
    borderRadius: '50% !important',
    bottom: '-60px !important',
    left: '25% !important',
    zIndex: 0,
    animation: 'float 3s ease-in-out infinite',
    '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
    },
});

const WhoWeAreSection = () => {
    return (
        <Section>
            <OverlayColor />
            <Title variant="h2">Who We Are</Title>
            <Description variant="body1">
                A dedicated team of educators passionate about fostering a love of learning in young children.
                We believe in a nurturing environment where creativity and curiosity thrive.
            </Description>
            <FunBubble />
        </Section>
    );
};

export default WhoWeAreSection;
