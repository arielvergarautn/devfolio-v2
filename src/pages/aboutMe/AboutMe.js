import './_aboutMe.scss'
import BannerGeneral from '../../components/BannerGeneral'
import AboutMeGeneric from '../../components/AboutMeGeneric';
import { aboutMeData } from '../../data';

const AboutMe = () => {
    const title = "About me";
    const subTitle = "A little bit of my life and my interests";

    const data = aboutMeData();
    
    return (
        <>
            <BannerGeneral title={title} subTitle={subTitle} />
            <div className="about-me-information">
                {
                    data.map(info => (
                        <AboutMeGeneric 
                            title={info.title} 
                            subtitle={info.subtitle} 
                            url={info.url}  
                            workInformationUrl={info.workInformationUrl}
                            image={info.image}
                            paragraphOne={info.paragraphOne}
                            paragraphTwo={info.paragraphTwo}
                            paragraphThree={info.paragraphThree} />
                    ))
                }
            </div>
        </>
    )
}

export default AboutMe
