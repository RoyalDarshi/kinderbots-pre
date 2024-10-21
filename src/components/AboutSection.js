import React from 'react';
import {Paper, Typography, Grid, Button, Box, Link} from '@mui/material';
import { styled } from '@mui/system';
import { School, EmojiObjects, Favorite, Accessibility } from '@mui/icons-material';
import banner from "../assets/about-banner.webp";
import {useNavigate} from "react-router-dom"; // Ensure this path is correct

const Root = styled('div')({
    backgroundColor: '#FFEBEE', // Light pink background for a soft, playful look
    padding: '48px 0',
    minHeight: '100vh',
});

const Section = styled(Paper)({
    backgroundColor: '#FFFFFF',
    borderRadius: '25px',
    padding: '48px',
    marginBottom: '32px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Softer shadow
    position: 'relative', // To position the effects correctly
    overflow: 'hidden', // Hide overflow for animation effects
});

const Title = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2C3E50', // Dark blue color
    marginBottom: '32px',
    fontSize: '3rem',
    fontFamily: 'Comic Sans MS, cursive, sans-serif', // Playful font
    '@media (max-width:600px)': {
        fontSize: '2.5rem',
    },
});

const SubTitle = styled(Typography)({
    textAlign: 'center',
    fontWeight: '500',
    color: '#2980B9', // Soft blue color
    marginBottom: '32px',
    fontSize: '1.5rem',
    lineHeight: 1.5,
});

const Card = styled(Box)({
    backgroundColor: '#FFFAF0', // Soft floral background for the card
    padding: '32px',
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
    '&:hover': {
        transform: 'translateY(-5px) scale(1.05)', // Lift effect on hover
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Darker shadow on hover
    },
    position: 'relative', // Needed for background effects
    overflow: 'hidden', // Hide overflow for background animation
});

const Icon = styled('div')({
    fontSize: '5rem', // Larger icons
    color: '#F39C12', // Playful orange color for icons
    marginBottom: '16px',
});

const KnowMoreButton = styled(Button)({
    marginTop: '32px',
    backgroundColor: '#FF6F61', // Bright coral color for the button
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 32px',
    borderRadius: '20px', // Rounded button for a friendly look
    '&:hover': {
        backgroundColor: '#D74C3C', // Darker coral on hover
        transform: 'scale(1.05)', // Slight scaling effect on hover
    },
});

const Description = styled(Typography)({
    color: '#34495E', // Darker text color
    fontSize: '1.2rem', // Slightly larger font size
    marginBottom: '16px',
    lineHeight: 1.5,
    fontFamily: 'Comic Sans MS, cursive, sans-serif', // Playful font
});

const Banner = styled(Paper)({
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '48px 24px',
    borderRadius: '25px',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '48px',
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        borderRadius: '25px',
    },
});

const BannerText = styled(Typography)({
    position: 'relative',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    zIndex: 1,
    color: '#FFD700', // Gold color for the banner text
    fontFamily: 'Comic Sans MS, cursive, sans-serif', // Playful font
    '@media (max-width:600px)': {
        fontSize: '2.5rem',
    },
});

const BannerSubText = styled(Typography)({
    position: 'relative',
    marginTop: '10px',
    fontSize: '1.8rem',
    zIndex: 1,
    color: '#FDE3A7', // Light yellow for the subtext
    fontFamily: 'Comic Sans MS, cursive, sans-serif', // Playful font
    '@media (max-width:600px)': {
        fontSize: '1.5rem',
    },
});

// New Section for Vision, Mission, Who We Are, What We Do
const InfoSection = ({ title, description, IconComponent }) => (
    <Card>
        <Icon>{IconComponent}</Icon>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Description>{description}</Description>
    </Card>
);

const AboutSection = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/about-us")
    }
    return (
        <Root>
            {/* Banner Section */}
            <Banner>
                <BannerText variant="h3">Welcome to Kinderbots Pre-School!</BannerText>
                <BannerSubText variant="body1">Where learning is fun and creativity grows.</BannerSubText>
            </Banner>

            {/* About Us Section */}
            <Section>
                <Title variant="h4">About Kinderbots Pre-School</Title>
                <SubTitle>Create a joyful, inspiring educational environment for young minds.</SubTitle>

                <Grid container spacing={4} justifyContent="center">
                    {/* Our Vision */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoSection
                            title="Our Vision"
                            description="To empower every child with the skills and confidence to succeed in a changing world."
                            IconComponent={<EmojiObjects />}
                        />
                    </Grid>

                    {/* Our Mission */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoSection
                            title="Our Mission"
                            description="To nurture, inspire, and cultivate young minds through a creative, play-based curriculum."
                            IconComponent={<Favorite />}
                        />
                    </Grid>

                    {/* Who We Are */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoSection
                            title="Who We Are"
                            description="A dedicated team of educators passionate about fostering a love of learning in young children."
                            IconComponent={<School />}
                        />
                    </Grid>

                    {/* What We Do */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoSection
                            title="What We Do"
                            description="We create a safe and engaging environment where children can explore, discover, and grow."
                            IconComponent={<Accessibility />}
                        />
                    </Grid>
                </Grid>

                <KnowMoreButton variant="contained" onClick={handleClick}>Know More</KnowMoreButton>
            </Section>

            {/* Animation Layer */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    background: 'linear-gradient(180deg, rgba(255, 105, 180, 0.2), rgba(255, 255, 255, 0.2))',
                    animation: 'float 6s ease-in-out infinite',
                    pointerEvents: 'none', // Prevent interactions with the layer
                }}
            />
        </Root>
    );
};

export default AboutSection;

// CSS Animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
    }
`;
document.head.appendChild(style);
