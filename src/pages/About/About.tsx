import React from 'react';
import AboutHero from './AboutHero';
import WhoWeAre from './WhoWeAre';
import OurJourney from './OurJourney';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import OurBranches from './OurBranches';
import OurTeam from './OurTeam';
import StatsBar from '../home/StatsBar';
import FutureGoalCTA from './FutureGoalCTA';

export default function About() {
    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden">
            <AboutHero />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <WhoWeAre />
                <OurJourney />
                <MissionVision />
                <CoreValues />
                <WhatWeDo />
                <WhyChooseUs />
                <OurTeam />
                <OurBranches />
            </div>

            <StatsBar />
            <FutureGoalCTA />
        </div>
    );
}
