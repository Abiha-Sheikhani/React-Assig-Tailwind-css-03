import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import CardsSection from './components/last'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <FeaturesSection/>
       <CardsSection/>
      <Footer/>
     
    </>
  )
}

export default App
