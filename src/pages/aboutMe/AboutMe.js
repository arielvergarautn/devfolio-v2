import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../../animation'
import Wave from '../../components/Wave'
//CSS
import './_aboutMe.scss'

const AboutMe = () => {
    return (
        <motion.div className='contact' variants={pageAnimation} initial='hidden' animate='show'>
            <div className="contact-banner">
                <div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>About me</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h4 variants={titleAnim}>
                            <span>A little bit of my life and experience in the programming world</span>
                        </motion.h4>
                    </div>
                </div>
                <Wave />
            </div>
            <div className="social-networks">
                <div className="cards">
                   
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe
