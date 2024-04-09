import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import FeatureElement from '../../components/FeatureElement/FeatureElement'
import PricingPlan from '../../components/PricingPlan/PricingPlan'

import Contact from '../Contact/Contact'

import Footer from '../../components/Footer/Footer'
import LogoGrid from '../../components/LogoGrid/LogoGrid'
import SubscribePage from '../../components/SubscribePage/SubscribePage'



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
 
    <hr style={{width:'20%'}}/>
    <LogoGrid/>
    <hr style={{width:'20%', marginTop:'5rem'}}/>
    <PricingPlan/>

    <Contact/>


    <SubscribePage/>
    <hr style={{width:'20%', marginTop:'5rem'}}/>
    <Footer/>
    

    </>
  )
}

export default Home