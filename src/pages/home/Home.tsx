import React from 'react'
import Hero from './Hero'
import Programs from './Programs'
import StatsBar from './StatsBar'
import WhyWZG from './WhyWZG'
import OurServices from './OurServices'
import Testimonals from './Testimonals'
import Partners from './Partners'

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Programs />
            <StatsBar />
            <WhyWZG />
            <OurServices />
            <Testimonals />
            <Partners />

        </div>
    )
}

export default Home;
