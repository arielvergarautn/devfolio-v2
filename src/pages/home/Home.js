import React from 'react'

//Components
import Banner from '../../components/Banner'
import AboutMe from '../../components/AboutMe'

//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

//Styles
import './_home.scss'

const Home = () => {
    return (
        <motion.div className='home' variants={pageAnimation} initial='hidden' animate='show'>
            <Banner />
            <AboutMe />
        </motion.div>
    )
}

export default Home
