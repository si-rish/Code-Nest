import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureSection from '../../components/FeatureSection/FeatureSection'


function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <hr/>
    <br/>
    <FeatureSection/>
    <br/>
    
    </>
  )
}

export default Home