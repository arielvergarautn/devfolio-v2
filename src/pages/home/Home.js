//Components
import Banner from '../../components/single/Banner'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'
//Styles
import './_home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <motion.div className='home' variants={pageAnimation} initial='hidden' animate='show'>
            <Banner />
            <div className="sections">
                <Link to={"/about"}>About me</Link>
                <Link to={"/myExperience"}>My experience</Link>
                <Link to={"/work"}>My Projects</Link>
                <Link to={"/contact"}>Contacts</Link>
            </div>
        </motion.div>
    )
}

export default Home
