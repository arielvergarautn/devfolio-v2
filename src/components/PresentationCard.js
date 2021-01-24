import React from 'react'
//Profile picture
import ProfilePicture from '../public/img/profile.png'

const PresentationCard = () => {
    return (
        <div className='presentation'>
            <img src={ProfilePicture} alt="" />
            <div className="text">
                <h1>Presentation</h1>
                <p>
                    I have been working as a Full Stack Developer since December 2017 and
                    I am studying System Engineering in the National University of Tecnology (FRBA - Argentina).
                    Currently I’m doing subjects from 3rd and 4th year.
                    I am a proactive and curious person. I enjoy teamwork.
                </p>
            </div>
        </div>
    )
}

export default PresentationCard
