import React from 'react'
//Router
import { useHistory } from 'react-router-dom';

//Components
import CardShadow from './CardShadow';

//Gallery
import ImageGallery from 'react-image-gallery';

//Images
import websiteIcon from '../public/icons/website.png'
import githubIcon from '../public/icons/github.png'

const ProjectDetails = ({ name, description, website, picture, screenshots, github, isSelected }) => {

    const history = useHistory();

    //Handlers
    const backHandler = () => {
        history.push('/work');
    }

    //functions\
    const getGallery = () => {
        const picturesFormatted = [];

        screenshots.forEach(element => {
            picturesFormatted.push({
                original: element,
                thumbnail: element,
            });
        });

        return <ImageGallery showPlayButton={false} items={picturesFormatted} />
    }


    return (
        <>
            <CardShadow back={backHandler} />
            <div className='details'>
                <h1>{name}</h1>
                <div className="information">
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <div className="links">
                        <a href={website} target='_blank' rel="noreferrer"><img src={websiteIcon} alt="" />Go to the site</a>
                        <a href={github} target='_blank' rel="noreferrer"><img src={githubIcon} alt="" />See the code</a>
                    </div>
                </div>
                {
                    getGallery()
                }
            </div>
        </>
    )
}

export default ProjectDetails
