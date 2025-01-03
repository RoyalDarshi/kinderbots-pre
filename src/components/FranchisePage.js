import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './FranchiseHero';
import BenefitsSection from './BenefitsSection';
import InvestmentSection from './InvestmentSection';
import CallToActionSection from './CallToActionSection';
import FrenchiseSetup from "./FrenchiseSetup";
import FrenchiseFee from "./FrenchiseFee";
import FrenchiseInvestment from "./FrenchiseInvestment";
import DedicatedManager from "./DedicatedManager";
import TimelyDelivery from "./TimelyDelivery";
import Payment from "./Payment";
import BrandBenifit from "./BrandBenifit";

const FranchisePage = () => {
    return (
        <Box>
            <HeroSection />
            <BenefitsSection />
            <FrenchiseInvestment />
            <FrenchiseFee />
            <FrenchiseSetup />
            <TimelyDelivery />
            <DedicatedManager />
            <BrandBenifit />
            <InvestmentSection />
            <Payment />
            <CallToActionSection />
        </Box>
    );
};

export default FranchisePage;
