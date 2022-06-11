import React from 'react'
import About from '../Components/About'
import Intro from '../Components/Intro'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'



import "./landing.css"

function LandingPage() {
    return (
        <div>
                <Intro/> 
                <Navbar/>
                <About/>
                <Services />
                <Portfolio/>
                <Contact/>
        </div>
    )
}

export default LandingPage
