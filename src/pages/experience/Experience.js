import './_experience.scss'
import BannerGeneral from '../../components/BannerGeneral'
import AboutMeGeneric from '../../components/AboutMeGeneric';
import { experienceData } from '../../data';

const Experience = () => {
    const title = "Experience";
    const subTitle = "A little bit of my experience in the programming world";

    const data = experienceData();
    
    return (
        <>
            <BannerGeneral title={title} subTitle={subTitle} />
            <div className="about-me-information">
                {
                    data.map(experience => (
                        <AboutMeGeneric 
                            title={experience.title} 
                            subtitle={experience.subtitle} 
                            url={experience.url}  
                            workInformationUrl={experience.workInformationUrl}
                            image={experience.image}
                            paragraphOne={experience.paragraphOne}
                            paragraphTwo={experience.paragraphTwo}
                            paragraphThree={experience.paragraphThree} 
                            switchSides={true}/>
                    ))
                }
                
            </div>
        </>
    )
}

export default Experience
