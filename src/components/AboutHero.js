import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import airplaneImg from '../assets/paper-plane.png'; // Add the path to your airplane image

const HeroSectionContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #FFABAB 30%, #FFC3A0 70%)',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: theme.shadows[5],
    position: 'relative',
    overflow: 'hidden',
    animation: 'colorChange 5s infinite alternate',
    '@keyframes colorChange': {
        '0%': { background: 'linear-gradient(135deg, #FFABAB 30%, #FFC3A0 70%)' },
        '100%': { background: 'linear-gradient(135deg, #FFC3A0 30%, #FFABAB 70%)' },
    },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#6A0572',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    opacity: 0,
    transform: 'translateY(-30px)',
    animation: 'fadeInUp 1s ease-in-out forwards',
    animationDelay: '0.2s',
    '@keyframes fadeInUp': {
        '0%': { opacity: 0, transform: 'translateY(-30px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    marginTop: theme.spacing(1),
    color: '#1B5E20',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    opacity: 0,
    transform: 'scale(0.9)',
    animation: 'fadeInScale 1.2s ease-in-out forwards',
    animationDelay: '0.4s',
    '@keyframes fadeInScale': {
        '0%': { opacity: 0, transform: 'scale(0.9)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
    },
}));

const PaperAirplane = styled('img')({
    position: 'absolute',
    width: '60px',
    height: 'auto',
    top: '20%',
    left: '-10%',
    animation: 'fly 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite',
    transform: 'rotate(-20deg)',
    '@keyframes fly': {
        '0%': { transform: 'translateX(0) translateY(0) rotate(-20deg)' },
        '12%': { transform: 'translateX(120px) translateY(-20px) rotate(0deg)' },
        '25%': { transform: 'translateX(300px) translateY(40px) rotate(20deg)' },
        '37%': { transform: 'translateX(450px) translateY(-50px) rotate(-15deg)' },
        '50%': { transform: 'translateX(600px) translateY(30px) rotate(10deg)' },
        '62%': { transform: 'translateX(750px) translateY(-20px) rotate(-5deg)' },
        '75%': { transform: 'translateX(900px) translateY(10px) rotate(0deg)' },
        '87%': { transform: 'translateX(1050px) translateY(-30px) rotate(15deg)' },
        '100%': { transform: 'translateX(1200px) translateY(0) rotate(0deg)' },
    },
});

// Smoke trail effect
const SmokeTrail = styled('div')({
    position: 'absolute',
    bottom: '25%', // Adjust to position behind the airplane
    left: '45%',   // Adjust based on airplane position
    width: '20px',
    height: '20px',
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
    animation: 'smoke 1.5s infinite',
    opacity: 0,
    '@keyframes smoke': {
        '0%': { transform: 'translateY(0) scale(1)', opacity: 0.8 },
        '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: 0.5 },
        '100%': { transform: 'translateY(-40px) scale(0.5)', opacity: 0 },
    },
});

// Additional smoke effects for realism
const SmokeTrailSecond = styled(SmokeTrail)({
    left: '50%',
    animationDelay: '0.3s',
});
const SmokeTrailThird = styled(SmokeTrail)({
    left: '55%',
    animationDelay: '0.6s',
});

const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <HeroTitle variant="h1">Kinderbots Pre-School</HeroTitle>
            <HeroSubtitle variant="h4">Nurturing Young Minds for a Brighter Future</HeroSubtitle>

            {/* Paper airplane flying animation */}
            <PaperAirplane src={airplaneImg} alt="Paper Airplane" />

            {/* Smoke effects */}
            <SmokeTrail />
            <SmokeTrailSecond />
            <SmokeTrailThird />
        </HeroSectionContainer>
    );
};

export default HeroSection;
