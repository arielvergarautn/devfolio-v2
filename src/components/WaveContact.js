import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { waveAnim } from '../animation'

const WaveContact = () => {
    return (
        <svg id='wave' viewBox="0 0 1448 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={waveAnim} initial='hidden' animate='show' d="M1448 146C399.696 146 1018.47 56.8163 1 5" stroke="#D96ED4" strokeOpacity="0.3" strokeWidth="10" />
        </svg>
    )
}

export default WaveContact
