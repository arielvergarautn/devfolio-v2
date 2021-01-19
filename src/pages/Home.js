import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
const Home = () => {
    return (
        <motion.div className='home' variants={pageAnimation} initial='hidden' animate='show'>
            <h3>Ariel Bernardo Vergara</h3>
            <p>Full <span>stack </span>developer</p>
        </motion.div>
    )
}

export default Home
