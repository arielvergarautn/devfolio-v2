//CSS
import './_aboutMe.scss'
//Components
import BannerGeneral from '../../components/BannerGeneral'

const AboutMe = () => {
    const title = "About me";
    const subTitle = "A little bit of my life and experience in the programming world";
    
    return (
        <>
            <BannerGeneral title={title} subTitle={subTitle} />
            <div className="social-networks">
                <div className="cards">
                   
                </div>
            </div>
        </>
    )
}

export default AboutMe
