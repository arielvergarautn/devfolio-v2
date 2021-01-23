import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import WaveContact from '../components/WaveContact'
//Data
import { socialNetworkData } from '../data'
import ContactCard from '../components/ContactCard'

const Contact = () => {
    const data = socialNetworkData();

    return (
        <motion.div className='contact' variants={pageAnimation} initial='hidden' animate='show'>
            <div className="contact-banner">
                <div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>We’d love to hear from you</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h4 variants={titleAnim}>
                            Whether you have a question, we are at your disposal!
                        </motion.h4>
                    </div>
                </div>
                <WaveContact />
            </div>
            <div className="social-networks">
                <div className="cards">
                    {
                        data.map(social => (
                            <ContactCard title={social.name} image={social.image} url={social.url} />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
