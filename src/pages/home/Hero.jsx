import React from 'react'
import Navbar from './Navbar'
import Programs from './Programs'
import StatsBar from './StatsBar'
import WhyWZG from './WhyWZG'
import Services from './Services'
import Testimonals from './Testimonals'
import Partners from './Partners'
import CallToAction from './CallToAction'

export default function Hero() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <StatsBar />
      <WhyWZG />
      <Services />
      <Testimonals />
      <Partners />
      <CallToAction />
    </>
  )
}
