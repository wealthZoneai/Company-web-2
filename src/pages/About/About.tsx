import React from 'react';
import AboutHero from './AboutHero';
import WhoWeAre from './WhoWeAre';
import OurJourney from './OurJourney';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import OurBranches from './OurBranches';
import StatsBar from '../home/StatsBar';
import FutureGoalCTA from './FutureGoalCTA';

import Leadership from './Leadership';
import OurTeam from './OurTeam';
import OurPortfolio from './OurPortfolio';


export default function About() {
    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden">
            <AboutHero />

            <div className="py-12 space-y-0">
                <WhoWeAre />
                <OurJourney />
                <MissionVision />
                <CoreValues />
                <WhatWeDo />
                <WhyChooseUs />
                <Leadership />
                <OurPortfolio />
                <OurTeam />

                <OurBranches />
            </div>
            <FutureGoalCTA />

        </div>
    );
}
