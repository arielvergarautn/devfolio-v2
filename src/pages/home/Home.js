//Components
import Banner from '../../components/single/Banner'
//Animations
import { motion } from 'framer-motion'
import { fade, pageAnimation } from '../../animation'
//Styles
import './_home.scss'
import { Link } from 'react-router-dom'
import { WorkUrl, ContactUrl, ExperienceUrl, AboutMeUrl } from '../../Constants'

const Home = () => {
    return (
        <motion.div className='home' variants={pageAnimation} initial='hidden' animate='show'>
            <Banner />
            <motion.div variants={fade} className="sections">
                <Link to={AboutMeUrl}>About me</Link>
                <Link to={ExperienceUrl}>My experience</Link>
                <Link to={WorkUrl}>My Projects</Link>
                <Link to={ContactUrl}>Contact</Link>
            </motion.div>
        </motion.div>
    )
}

export default Home
