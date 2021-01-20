import React from 'react'
//animations
import { motion } from 'framer-motion'
const CardShadow = ({ back, children }) => {
    return (
        <motion.div className="card-shadow" onClick={back}>
            {children}
        </motion.div>
    )
}

export default CardShadow
