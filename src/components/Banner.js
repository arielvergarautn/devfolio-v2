import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { fade, titleAnim } from '../animation'
import Wave from './Wave'
//Route
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="title">
                <div className="hide">
                    <motion.h2 variants={titleAnim}>Ariel Bernardo Vergara</motion.h2>
                </div>
                <div className="hide">
                    <motion.h2 variants={titleAnim}>
                        <span>Full stack developer</span>
                    </motion.h2>
                </div>
                <div className="hide button-section">
                    <Link to='/contact'>
                        <motion.button variants={fade}>
                            Contact me
                        </motion.button>
                    </Link>
                </div>
            </div>
            <Wave />
        </div>
    )
}

export default Banner
