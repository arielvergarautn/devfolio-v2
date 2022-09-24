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
        <nav>
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
                <li className='menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
