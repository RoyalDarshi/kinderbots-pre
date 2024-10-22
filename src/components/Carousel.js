import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const StyledCarousel = styled(Carousel)({
    '.carousel .slide': {
        background: '#E8F5E9', // Light green background for slides
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '.carousel .slide img': {
        maxHeight: '400px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
});

const CarouselComponent = () => {
    const carouselItems = [
        {
            image: 'https://www.littlemillennium.com/assets/img/home-webp/admission_banner.webp', // Replace with your image URLs
            title: 'Welcome to Kinderbots!',
            description: 'A joyful and nurturing environment for young learners.',
        },
        {
            image: 'https://www.littlemillennium.com/assets/img/home-webp/1.webp',
            title: 'Engaging Activities',
            description: 'Fun and educational activities that foster creativity.',
        },
        {
            image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
            title: 'Experienced Educators',
            description: 'A dedicated team committed to your child’s development.',
        },
    ];

    return (
        <StyledCarousel showArrows={true} showThumbs={false} infiniteLoop autoPlay interval={5000}>
            {carouselItems.map((item, index) => (
                <Box key={index} className="slide">
                    <img src={item.image} alt={item.title} />
                    <Typography variant="h4" style={{ color: '#2C3E50', marginTop: '10px' }}>
                        {item.title}
                    </Typography>
                    <Typography variant="body1" style={{ color: '#34495E', textAlign: 'center' }}>
                        {item.description}
                    </Typography>
                </Box>
            ))}
        </StyledCarousel>
    );
};

export default CarouselComponent;
