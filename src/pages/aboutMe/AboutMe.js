import './_aboutMe.scss'
import BannerGeneral from '../../components/BannerGeneral'
import AboutMeGeneric from '../../components/AboutMeGeneric';
import { experienceData } from '../../data';

const AboutMe = () => {
    const title = "About me";
    const subTitle = "A little bit of my life and experience in the programming world";

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
                            link={experience.url}  
                            image={experience.image}
                            paragraphOne={experience.paragraphOne}
                            paragraphTwo={experience.paragraphTwo}
                            paragraphThree={experience.paragraphThree} />
                    ))
                }
                
            </div>
        </>
    )
}

export default AboutMe
