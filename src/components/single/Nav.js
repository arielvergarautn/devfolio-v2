import React from 'react'
//Router
import {
    Link,
    useLocation
} from 'react-router-dom'
//Animations
import { motion } from 'framer-motion'
import { lineNavAnim } from '../../animation'

const Nav = () => {

    const { pathname } = useLocation();

    return (
        <nav className='nav'>
            <h1>
                <Link id='logo' to="/">Devfolio</Link>
            </h1>
            <ul>
                <li>
                    <div class="link-container">
                        <Link to="/home">Home</Link>
                        {
                            (pathname === '/' || pathname === '/home') && (
                                <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                            )
                        }
                    </div>
                </li>
                <li>
                    <div class="link-container">
                        <Link to="/about">About me</Link>
                        {
                            pathname === '/about' && (
                                <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                            )
                        }
                    </div>
                </li>
                <li>
                    <div class="link-container">
                        <Link to="/work">My projects</Link>
                        {
                            pathname === '/work' && (
                                <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                            )
                        }
                    </div>
                </li>
                <li>
                    <div class="link-container">
                        <Link to="/contact">Contact</Link>
                        {
                            pathname === '/contact' && (
                                <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                            )
                        }
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
