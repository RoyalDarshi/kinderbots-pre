import React from 'react';
import { Container } from '@mui/material';
import BannerSection from './BannerSection';
import VisionMissionSection from './VisionMissionSection';
import WhoWeAreSection from './WhoWeAreSection';
import WhatWeDoSection from './WhatWeDoSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import ActivitiesSection from "./ActivitiesSection";
import GallerySection from "./GallerySection";

const AboutPage = () => {
    return (
        <Container>
            <BannerSection />
            <VisionMissionSection />
            <WhoWeAreSection />
            <WhatWeDoSection />
            <ActivitiesSection /> {/* New Activities Section */}
            <TestimonialsSection />
            <GallerySection /> {/* New Gallery Section */}
        </Container>
    );
};

export default AboutPage;
