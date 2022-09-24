//Components
import Banner from '../../components/single/Banner'
import AboutMe from '../../components/single/aboutMe/AboutMe'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'
//Styles
import './_home.scss'

const Home = () => {
    return (
        <motion.div className='home' variants={pageAnimation} initial='hidden' animate='show'>
            <Banner />
            <AboutMe />
        </motion.div>
    )
}

export default Home
