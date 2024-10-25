import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
    carouselContainer: {
        maxWidth: '500px !important', // Adjusted for vertical rectangle
        margin: '50px auto !important', // Added top margin for spacing
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#f9fdfc !important', // Light background for contrast
        borderRadius: '16px !important',
        boxShadow: `${theme.shadows[6]} !important`,
        overflow: 'hidden', // To prevent overflow of content
    },
    carouselTitle: {
        color: '#2e7d32 !important',
        marginBottom: `${theme.spacing(3)} !important`,
        fontFamily: 'Arial, sans-serif !important',
        fontWeight: 'bold !important',
        fontSize: '2.5rem !important', // Increased font size for emphasis
        textAlign: 'center !important',
    },
    reviewCard: {
        backgroundColor: '#ffffff !important',
        padding: `${theme.spacing(4)} !important`,
        height: '400px !important', // Increased height for a more rectangular look
        boxShadow: `${theme.shadows[10]} !important`, // Enhanced shadow for depth
        textAlign: 'center !important',
        position: 'relative !important',
        borderRadius: '12px !important',
        transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out !important', // Smooth transition effects
        '&:hover': {
            transform: 'translateY(-5px) scale(1.05) !important', // Slight lift effect on hover
            boxShadow: `${theme.shadows[16]} !important`, // More pronounced shadow on hover
        },
    },
    reviewText: {
        marginBottom: `${theme.spacing(2)} !important`,
        fontStyle: 'italic !important',
        color: '#424242 !important',
        fontSize: '1.2rem !important', // Increased font size for better readability
        lineHeight: 1.6, // Improved line height for readability
    },
    reviewerName: {
        color: '#388e3c !important',
        fontWeight: 'bold !important',
        marginTop: `${theme.spacing(1)} !important`,
        fontSize: '1.3rem !important', // Slightly larger font size for the reviewer name
    },
    starRating: {
        marginBottom: `${theme.spacing(1)} !important`,
        color: '#f9a825 !important', // Gold star color
    },
    colorfulOverlay: {
        position: 'absolute !important',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,121,107,0.1), rgba(255,193,7,0.05)) !important', // Soft gradient overlay
        borderRadius: '12px !important',
        zIndex: 0, // Behind the card content
    },
    cardContent: {
        position: 'relative !important',
        zIndex: 1, // Bring the card content above the overlay
    },
}));

const ParentReviewCarousel = () => {
    const classes = useStyles();

    const reviews = [
        {
            name: 'Sarah L.',
            review: 'Kinderbots Pre-School has been a wonderful experience for my child. The teachers are caring and supportive!',
            rating: 5,
        },
        {
            name: 'John D.',
            review: 'My daughter loves going to school every day. The curriculum is engaging and fun!',
            rating: 4,
        },
        {
            name: 'Emily R.',
            review: 'A fantastic learning environment! My son has made so much progress since joining.',
            rating: 5,
        },
        {
            name: 'Michael P.',
            review: 'Highly recommend Kinderbots! The activities are creative and the staff is excellent!',
            rating: 5,
        },
    ];

    return (
        <Box className={classes.carouselContainer}>
            <Typography variant="h4" className={classes.carouselTitle}>
                What Parents Say
            </Typography>
            <Carousel
                infiniteLoop
                autoPlay
                interval={4000} // Increased interval for smoother transitions
                transitionTime={500} // Duration of transition between slides
                showThumbs={false}
                showIndicators={true}
                showStatus={false}
                stopOnHover={true} // Stops autoplay on hover
            >
                {reviews.map((review, index) => (
                    <div key={index}>
                        <Card variant="outlined" className={classes.reviewCard}>
                            <div className={classes.colorfulOverlay} />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body1" className={classes.reviewText}>
                                    "{review.review}"
                                </Typography>
                                <Rating
                                    name={`rating-${index}`}
                                    value={review.rating}
                                    precision={0.5}
                                    readOnly
                                    size="large"
                                    className={classes.starRating}
                                />
                                <Typography variant="h6" className={classes.reviewerName}>
                                    - {review.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default ParentReviewCarousel;
