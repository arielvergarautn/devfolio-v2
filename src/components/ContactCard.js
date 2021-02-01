import React from 'react'
//Animations
import { fade } from '../animation'
import { motion } from 'framer-motion'
//Slack
import { sendMessageToSlack } from '../utils'

const ContactCard = ({ title, image, url }) => {

    const onClickHandler = (e) => {
        sendMessageToSlack(`Clicking on: ${title}`);
    }


    return (
        <motion.a onClick={onClickHandler} variants={fade} className="card" href={url} target="_blank" rel="noopener noreferrer" download>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </motion.a>
    )
}

export default ContactCard
