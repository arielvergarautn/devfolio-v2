import React from 'react'

//Router
import {
    Link,
    useLocation
} from 'react-router-dom'
//Animations
import { motion } from 'framer-motion'
import { lineNavAnim } from '../animation'
const Nav = () => {

    const { pathname } = useLocation();
    return (
        <nav className='nav'>
            <h1>
                <Link id='logo' to="/">Devfolio</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                    {
                        (pathname === '/' || pathname === '/home') && (
                            <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                        )
                    }

                </li>
                <li>
                    <Link to="/work">Our work</Link>
                    {
                        pathname === '/work' && (
                            <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                        )
                    }
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    {
                        pathname === '/contact' && (
                            <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Nav
