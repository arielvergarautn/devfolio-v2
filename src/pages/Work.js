import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

//Data
import { workData } from '../data'
import Project from '../components/Project'

//Route
import { useLocation } from 'react-router-dom'
import PageTransitionAnimation from '../components/PageTransitionAnimation'

const Work = () => {

    const WorkData = workData();
    const location = useLocation();

    //Work id
    const selectedWorkId = location.pathname.split('/')[2] || null;

    //functions
    const isSelected = (id) => {
        return selectedWorkId === id;
    }


    return (
        <motion.div className='work' variants={pageAnimation} initial='hidden' animate='show'>
            <PageTransitionAnimation />
            <div className="projects-list">
                <div className="projects">
                    {
                        WorkData.map(work => (
                            <Project
                                key={work.id}
                                name={work.name}
                                description={work.description}
                                website={work.website}
                                picture={work.picture}
                                github={work.github}
                                screenshots={work.screenshots}
                                isSelected={isSelected(work.name)}
                            />
                        ))
                    }
                </div>
            </div>

        </motion.div>
    )
}

export default Work
