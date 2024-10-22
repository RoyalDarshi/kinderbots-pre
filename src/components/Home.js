import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import GrowthPoster from '../components/GrowthPoster';
import FeaturesSection from '../components/FeaturesSection'; // Ensure this component exists
import FooterSection from "./FooterSection";
import Carousel from "./Carousel";
import DirectorMessage from "./DirectorMessage";

const Home = () => {
    return (
        <Container>
            <HeroSection />
            <AboutSection />
            <Programs />
            <DirectorMessage />
            <Testimonials />
            <GrowthPoster />
            <FeaturesSection />
            <FooterSection />
        </Container>
    );
};

export default Home;
