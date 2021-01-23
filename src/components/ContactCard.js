import React from 'react'
//Route
import { Link } from 'react-router-dom'
//Animations
import { fade } from '../animation'
import { motion } from 'framer-motion'

const ContactCard = ({ title, image, url }) => {
    return (
        <motion.a variants={fade} className="card" href={url} target="_blank" rel="noopener noreferrer" >
            <img src={image} alt="" />
            <h3>{title}</h3>
        </motion.a>
    )
}

export default ContactCard
