// src/components/About.js
import React from 'react';
import { Container } from '@mui/material';
import HeroSection from './AboutHero';
import IntroductionSection from './IntroductionSection';
import MissionSection from './MissionSection';
import HistorySection from './HistorySection';
import InnovationSection from './InnovationSection';
import Features from './Features';
import TeamSection from './TeamSection';

const About = () => {
    return (
        <Container>
            <HeroSection />
            <IntroductionSection />
            <MissionSection />
            <HistorySection />
            <InnovationSection />
            <Features />
            <TeamSection />
        </Container>
    );
};

export default About;
