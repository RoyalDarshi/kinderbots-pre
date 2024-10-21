import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';
import galleryImage1 from '../assets/gallery1.png'; // Ensure correct image paths
import galleryImage2 from '../assets/gallery2.png';
import galleryImage3 from '../assets/gallery3.png';

const Section = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#E1F5FE',
    borderRadius: '15px',
    marginBottom: '40px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
});

const Title = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: '#2C3E50',
});

const Image = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    margin: '10px 0',
});

const GallerySection = () => {
    return (
        <Section>
            <Title>Gallery</Title>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Image src={`${galleryImage1}`} alt="Gallery 1" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Image src={`${galleryImage2}`} alt="Gallery 2" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Image src={`${galleryImage3}`} alt="Gallery 3" />
                </Grid>
            </Grid>
        </Section>
    );
};

export default GallerySection;
