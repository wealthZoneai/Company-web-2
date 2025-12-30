import React from 'react'
import Hero from './Hero'
import Programs from './Programs'
import StatsBar from './StatsBar'
import WhyWZG from './WhyWZG'
import OurServices from './OurServices'
import Testimonals from './Testimonals'
import CallToAction from './CallToAction'

export default function Home() {
  return (
    <>
        <Hero/>
        <Programs/>
        <StatsBar/>
        <WhyWZG/>
        <OurServices/>
        <Testimonals/>
        <CallToAction/>
    </>
  )
}
