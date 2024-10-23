import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const FranchiseFee = () => {
    return (
        <Box sx={{ p: 4, backgroundColor: '#FFEBEE',mb:4 }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    color: '#D32F2F',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive text size
                    mb: 4,
                }}
            >
                NO FRANCHISE FEE OR ROYALTY
            </Typography>

            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ mb: 4 }}
            >
                {/* Remove images and use colorful boxes */}
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            backgroundColor: '#FFCDD2',
                            borderRadius: '10px',
                            height: '140px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#D32F2F',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive text size
                        }}
                    >
                        No Hidden Costs
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            backgroundColor: '#F8BBD0',
                            borderRadius: '10px',
                            height: '140px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#880E4F',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive text size
                        }}
                    >
                        Transparent Fees
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            backgroundColor: '#C8E6C9',
                            borderRadius: '10px',
                            height: '140px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#2E7D32',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive text size
                        }}
                    >
                        Affordable Entry
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            backgroundColor: '#BBDEFB',
                            borderRadius: '10px',
                            height: '140px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#1565C0',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive text size
                        }}
                    >
                        No Royalties
                    </Box>
                </Grid>
            </Grid>

            <Typography
                variant="body1"
                align="center"
                sx={{
                    mt: 4,
                    fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
                    color: '#424242',
                    maxWidth: '700px',
                    mx: 'auto',
                    px: 2,
                }}
            >
                WE BELIEVE IN FOSTERING A MUTUALLY BENEFICIAL RELATIONSHIP WHICH IS WHY WE OFFER OUR FRANCHISE FOR JUST INR 2,36,000 WITH NO ADDITIONAL FRANCHISE FEE OR ROYALTY CHARGES.
            </Typography>
        </Box>
    );
};

export default FranchiseFee;
