import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

//Data
import { workData } from '../data'
import Project from '../components/Project'

const Work = () => {

    const WorkData = workData();

    return (
        <motion.div className='work' variants={pageAnimation} initial='hidden' animate='show'>
            <h3>Work</h3>
            {
                WorkData.map(work => (
                    <Project
                        name={work.name}
                        description={work.description}
                        website={work.website}
                        picture={work.picture}
                        github={work.github}
                        screenshots={work.screenshots}
                    />
                ))
            }
        </motion.div>
    )
}

export default Work
