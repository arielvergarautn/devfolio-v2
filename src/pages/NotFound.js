import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { fade } from '../animation'
//Components
import Search from '../components/Search'

const NotFound = () => {
    return (
        <motion.div className='not-found' variants={fade} initial='hidden' animate='show'>
            <div className="information">
                <h1>404</h1>
                <div className="vertical-line"></div>
                <div>
                    <h2>Sorry</h2>
                    <h3>The page you're looking for was not found</h3>
                </div>
            </div>
            <Search />
        </motion.div>
    )
}

export default NotFound
