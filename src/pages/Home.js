import React from 'react'

//Components
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'

//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Home = () => {
    return (
        <motion.div className='home' variants={pageAnimation} initial='hidden' animate='show'>
            <Banner />
            <AboutUs />
        </motion.div>
    )
}

export default Home
