import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Competition from './Competition'
import HowItWorks from './HowItWorks'
import MeetOurWinners from './MeetOurWinners'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Competition/>
            <HowItWorks/>
            <MeetOurWinners/>


        </>
    )
}

export default Home