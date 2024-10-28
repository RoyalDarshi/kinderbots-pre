import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const KinderbotsContact = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                backgroundColor: '#f0f8ff', // Soft blue background
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)', // Enhanced shadow for more depth
                mt: 4,
                mb: 4,
                textAlign: 'center',
            }}
        >
            {/* Header section */}
            <Box mb={4}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="primary"
                    sx={{ letterSpacing: '2px', mb: 1, fontSize: '36px' }} // Larger and bolder title
                >
                    KINDERBOTS
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                        fontStyle: 'italic',
                        fontSize: '20px', // Slightly bigger subtitle
                        color: '#6c757d', // Muted grey
                    }}
                >
                    The Future Play Schools
                </Typography>
            </Box>

            {/* Contact details */}
            <Box mb={3}>
                <Link
                    href="tel:+91-9120692025"
                    underline="hover"
                    sx={{
                        color: '#ff5722', // Bright orange for better visibility
                        fontWeight: 'bold',
                        fontSize: '20px', // Increased font size for contact details
                        display: 'block',
                        mb: 2,
                    }}
                >
                    Contact no: +91-9120692025
                </Link>
                <Link
                    href="mailto:info@kinderbotsindia.com"
                    underline="hover"
                    sx={{
                        color: '#ff5722',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        display: 'block',
                        mb: 2,
                    }}
                >
                    Email: info@kinderbotsindia.com
                </Link>
            </Box>

            {/* Address section */}
            <Box>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '18px', // Slightly larger address text for readability
                        color: '#333',
                        lineHeight: '1.6',
                    }}
                >
                    Address: KINDERBOTS PRIVATE LIMITED, D9, Sector -3, Noida, Gautam Buddha Nagar, 201301
                </Typography>
            </Box>
        </Container>
    );
};

export default KinderbotsContact;
