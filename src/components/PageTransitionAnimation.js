//Animations
import { motion } from 'framer-motion'
import { sliderContainer, slider } from '../animation'

const PageTransitionAnimation = () => {
    return (
        <motion.div variants={sliderContainer}>
            <motion.div variants={slider} className="frame frame1"></motion.div>
            <motion.div variants={slider} className="frame frame2"></motion.div>
            <motion.div variants={slider} className="frame frame3"></motion.div>
            <motion.div variants={slider} className="frame frame4"></motion.div>
        </motion.div>
    )
}

export default PageTransitionAnimation
