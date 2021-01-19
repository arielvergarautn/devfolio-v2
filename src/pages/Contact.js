import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Contact = () => {
    return (
        <motion.div className='contact' variants={pageAnimation} initial='hidden' animate='show'>
            <h3>Contact</h3>
        </motion.div>
    )
}

export default Contact
