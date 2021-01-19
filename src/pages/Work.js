import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Work = () => {
    return (
        <motion.div className='work' variants={pageAnimation} initial='hidden' animate='show'>
            <h3>Work</h3>
        </motion.div>
    )
}

export default Work
