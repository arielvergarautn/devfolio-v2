import { motion } from 'framer-motion'
import { fade } from '../animation'

function AboutMeGeneric({title, subtitle, url, workInformationUrl, image, paragraphOne, paragraphTwo, paragraphThree, switchSides}) {

    const handleWebsiteButtonClick = () => {
        window.location.href = url;
    }

    const handleWebsiteWorkInformationButtonClick = () => {
        window.location.href = workInformationUrl;
    }

    return (
        <div className={`card-side row ${switchSides ? "switch-sides" : ""}`}>
            <div className='content-container d-flex'>
                
                {
                    image && 
                        <div className='image-container'>
                            <img src={image} alt='' />
                        </div>
                }
                <div className='text-container'>
                    <h3>{title}</h3>
                    {
                        subtitle && <h5>{subtitle}</h5>
                    }
                    {
                        paragraphOne && <p>{paragraphOne}</p>
                    }
                    {
                        paragraphTwo && <p>{paragraphTwo}</p>
                    }
                    {
                        paragraphThree && <p>{paragraphThree}</p>
                    }
                </div>
            </div>
            <div className="action-container">
                {
                    workInformationUrl && (
                        <motion.button className='filled ms-5 float-end' variants={fade} onClick={handleWebsiteWorkInformationButtonClick}>
                            Project information
                        </motion.button>
                    )
                }
                <motion.button className='filled float-end' variants={fade} onClick={handleWebsiteButtonClick}>
                    Website
                </motion.button>
                
            </div>
        </div>
    )
}

export default AboutMeGeneric