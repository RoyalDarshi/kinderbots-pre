import React from 'react';
import { Box, Typography, Card, Grid, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the root container
const RootContainer = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(4)} !important`,
    marginBottom: `${theme.spacing(4)} !important`,
    backgroundColor: '#E0F7FA !important', // Light cyan background
    borderRadius: '20px !important', // Rounded corners for the container
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1) !important', // Subtle shadow for depth
}));

// Styled component for the title
const Title = styled(Typography)(({ theme }) => ({
    marginBottom: `${theme.spacing(4)} !important`,
    textAlign: 'center !important',
    fontWeight: 'bold !important',
    color: '#6A0572 !important',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3) !important',
    fontSize: '2rem !important', // Adjusted font size for mobile responsiveness
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem !important', // Increase font size for larger screens
    },
}));

// Styled component for the cards
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#FFF3E0 !important', // Soft warm background
    borderRadius: '15px !important',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2) !important',
    padding: `${theme.spacing(3)} !important`,
    textAlign: 'left !important', // Align text to the left for better readability
    transition: 'transform 0.3s, box-shadow 0.3s !important', // Transition for hover effects
    minHeight: '250px !important', // Minimum height for cards
    '&:hover': {
        boxShadow: '0 8px 20px rgba(0,0,0,0.3) !important',
        transform: 'translateY(-5px) !important', // Lift effect on hover
    },
}));

// Styled component for the card title
const CardTitle = styled(Typography)(({ theme }) => ({
    color: '#D84315 !important',
    fontWeight: 'bold !important',
    marginBottom: `${theme.spacing(2)} !important`,
    fontSize: '1.5rem !important', // Adjusted font size for mobile responsiveness
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.7rem !important', // Increase font size for larger screens
    },
}));

// Styled component for the card text
const CardText = styled(Typography)(({ theme }) => ({
    marginBottom: `${theme.spacing(1.5)} !important`,
    color: '#4E342E !important',
    fontSize: '1rem !important', // Adjusted font size for mobile responsiveness
    lineHeight: '1.6 !important', // Improved line height for readability
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.1rem !important', // Increase font size for larger screens
    },
}));

// Styled bullet point component
const BulletPoint = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: `${theme.spacing(1)} !important`,
    '&::before': {
        content: '""',
        display: 'inline-block',
        width: '8px !important', // Size of the bullet
        height: '8px !important',
        borderRadius: '50% !important', // Circular bullet
        backgroundColor: '#D84315 !important', // Bullet color
        marginRight: `${theme.spacing(1)} !important`,
    },
}));

const FranchiseSetupComponent = () => {
    return (
        <RootContainer>
            <Title variant="h4">Franchise Setup for Kinderbots</Title>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <CardTitle variant="h6">Investment</CardTitle>
                            <CardText>RS. 2,36,000/-</CardText>
                            <CardText>(Including GST)</CardText>
                            <CardText>(No Hidden Charges)</CardText>
                            <CardText>
                                Transport charges from Noida to your Kinderbots play school address will be borne by you on actual cost: (RS. 5000 to RS. 9000)
                            </CardText>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <CardTitle variant="h6">Area Required</CardTitle>
                            <CardText>Built-up space: 1200-1500 sqft</CardText>
                            <CardText>Minimum of 4 rooms, ideally:</CardText>
                            <BulletPoint>
                                <Typography><strong>1 Classroom for Pre-Nursery</strong></Typography>
                            </BulletPoint>
                            <BulletPoint>
                                <Typography><strong>1 Classroom for Nursery</strong></Typography>
                            </BulletPoint>
                            <BulletPoint>
                                <Typography><strong>1 Classroom for LKG</strong></Typography>
                            </BulletPoint>
                            <BulletPoint>
                                <Typography><strong>1 Classroom for UKG</strong></Typography>
                            </BulletPoint>
                            <CardText>Perfect for creative play and learning!</CardText>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>
        </RootContainer>
    );
};

export default FranchiseSetupComponent;
