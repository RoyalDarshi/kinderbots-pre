import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './FranchiseHero';
import BenefitsSection from './BenefitsSection';
import InvestmentSection from './InvestmentSection';
import CallToActionSection from './CallToActionSection';
import FrenchiseSetup from "./FrenchiseSetup";
import FrenchiseFee from "./FrenchiseFee";

const FranchisePage = () => {
    return (
        <Box>
            <HeroSection />
            <BenefitsSection />
            <FrenchiseFee />
            <FrenchiseSetup />
            <InvestmentSection />
            <CallToActionSection />
        </Box>
    );
};

export default FranchisePage;
