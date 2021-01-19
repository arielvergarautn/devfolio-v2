import React from 'react'

const Project = ({ name, description, website, picture, screenshots, github }) => {
    return (
        <div className='project'>
            <h1>{name}</h1>
            <p>{description}</p>
            <a href={website}>Website</a>
            <a href={github}>Github</a>
            <img src={picture} alt="picture" />
            {screenshots.map(screen => (
                <img src={screen} alt="" />
            ))}
        </div>
    )
}

export default Project
