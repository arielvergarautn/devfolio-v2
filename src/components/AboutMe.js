import React from 'react'
//Profile picture
import ProfilePicture from '../public/img/profile.png'

const AboutMe = () => {
    return (
        <div id='about-me' className='about'>
            <div className='presentation'>
                <img src={ProfilePicture} alt="" />
                <div className="text">
                    <h1>About me</h1>
                    <p>
                        I have been working as a Full Stack Developer since December 2017 and
                        I am studying System Engineering in the National University of Tecnology (FRBA - Argentina).
                        Currently I’m doing subjects from 3rd and 4th year.
                        I am a proactive and curious person. I enjoy teamwork.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
