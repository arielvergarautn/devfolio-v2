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
                        <motion.h2 variants={titleAnim}>I’d love to hear from you</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h4 variants={titleAnim}>
                            <span>Whether you have a question, I’m at your disposal!</span>
                        </motion.h4>
                    </div>
                </div>
                <WaveContact />
            </div>
            <div className="social-networks">
                <div className="cards">
                    {
                        data.map(social => (
                            <ContactCard key={social.name} title={social.name} image={social.image} url={social.url} />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
