//CSS
import './_aboutMe.scss'
//Components
import BannerGeneral from '../../components/BannerGeneral'
import AboutMeGeneric from '../../components/AboutMe';
import Github from '../../public/icons/github.png'

const AboutMe = () => {
    const title = "About me";
    const subTitle = "A little bit of my life and experience in the programming world";

    const nosisTitle = "Nosis"
    const nosisSubTitle = ""
    const nosisUrl = "http://www.google.com"
    const nosisImage = Github
    const paragraphOne = "lkdajlksdjlkajlskjdlksajdldskajlkdsjlkja"
    
    return (
        <>
            <BannerGeneral title={title} subTitle={subTitle} />
            <div className="about-me-information">
                <AboutMeGeneric 
                    title={nosisTitle} 
                    subtitle={nosisSubTitle} 
                    link={nosisUrl}  
                    image={nosisImage}
                    paragraphOne={paragraphOne} />
                <AboutMeGeneric 
                    title={nosisTitle} 
                    subtitle={nosisSubTitle} 
                    link={nosisUrl}  
                    image={nosisImage}
                    paragraphOne={paragraphOne} />
                <AboutMeGeneric 
                    title={nosisTitle} 
                    subtitle={nosisSubTitle} 
                    link={nosisUrl}  
                    paragraphOne={paragraphOne} />
                <AboutMeGeneric 
                    title={nosisTitle} 
                    subtitle={nosisSubTitle} 
                    link={nosisUrl}  
                    image={nosisImage}
                    paragraphOne={paragraphOne} />

            </div>
        </>
    )
}

export default AboutMe
