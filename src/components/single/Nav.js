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
import { WorkUrl, ContactUrl, ExperienceUrl, AboutMeUrl, HomeUrl } from '../../Constants'

const Nav = () => {

    const { pathname } = useLocation();
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <nav className='header'>
                <h1>
                    <Link className='logo' to={"/"}>Devfolio</Link>
                </h1>
                <ul>
                    <li>
                        <div className="link-container">
                            <Link to={HomeUrl}>Home</Link>
                            {
                                (pathname === '/' || pathname === HomeUrl) && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to={AboutMeUrl}>About me</Link>
                            {
                                pathname === AboutMeUrl && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to={ExperienceUrl}>My experience</Link>
                            {
                                pathname === ExperienceUrl && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to={WorkUrl}>My projects</Link>
                            {
                                pathname === WorkUrl && (
                                    <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                                )
                            }
                        </div>
                    </li>
                    <li>
                        <div className="link-container">
                            <Link to={ContactUrl}>Contact</Link>
                            {
                                pathname === ContactUrl && (
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
