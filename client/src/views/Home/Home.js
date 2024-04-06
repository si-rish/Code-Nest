import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import FeatureElement from '../../components/FeatureElement/FeatureElement'
import PricingPlan from '../../components/PricingPlan/PricingPlan'
import Contact from '../Contact/Contact'


function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <br/>
    <hr/>
    <FeatureSection/>
    {/* <br/> */}
    {/* <FeatureElement/> */}
    <br/>
    <PricingPlan/>
    <Contact/>
    </>
  )
}

export default Home