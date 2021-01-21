import React, { useEffect } from 'react'
//animations
import { motion } from 'framer-motion'
const CardShadow = ({ back, children }) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])
    return (
        <motion.div className="card-shadow" onClick={back}>
            {children}
        </motion.div>
    )
}

export default CardShadow
