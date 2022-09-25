import React, { useState } from 'react'
//Router
import {
    Link,
    useLocation
} from 'react-router-dom'
//Animations
import { motion } from 'framer-motion'
import { lineNavAnim } from '../../animation'
import SidebarMobile from './SidebarMobile'

const Nav = () => {

    const { pathname } = useLocation();
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <nav className='header'>
                <h1>
                    <Link className='logo' to="/">Devfolio</Link>
                </h1>
                <ul>
                    <li>
                        <div className="link-container">
                            <Link to="/home">Home</Link>
                            {
                                (pathname === '/' || pathname === '/home') && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to="/about">About me</Link>
                            {
                                pathname === '/about' && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to="/work">My projects</Link>
                            {
                                pathname === '/work' && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to="/contact">Contact</Link>
                            {
                                pathname === '/contact' && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li className='menu' onClick={() => setSidebarActive(true)}>
                        <i className="bi bi-list"></i>
                    </li>
                </ul>
            </nav>
            <SidebarMobile sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
        </>
    )
}

export default Nav
