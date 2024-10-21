import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import bannerImage from '../assets/about-banner.webp'; // Ensure the image path is correct

const Banner = styled(Box)({
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '100px 20px',
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

const BannerText = styled(Typography)({
    position: 'relative',
    zIndex: 1,
    fontSize: '3rem',
    fontWeight: 'bold',
});

const BannerSubText = styled(Typography)({
    position: 'relative',
    zIndex: 1,
    fontSize: '1.5rem',
    marginTop: '20px',
});

const BannerSection = () => {
    return (
        <Banner>
            <BannerText>Welcome to Kinderbots Pre-School!</BannerText>
            <BannerSubText>Where learning is fun and creativity grows.</BannerSubText>
        </Banner>
    );
};

export default BannerSection;
