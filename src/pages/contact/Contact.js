//Data
import { socialNetworkData } from '../../data'
import ContactCard from '../../components/ContactCard'
//CSS
import './_contact.scss'
import BannerGeneral from '../../components/BannerGeneral'

const Contact = () => {
    const data = socialNetworkData();
    const title = "I’d love to hear from you";
    const subTitle = "Whether you have a question, I’m at your disposal!";

    return (
        <>
            <BannerGeneral title={title} subTitle={subTitle} />
            <div className="social-networks">
                <div className="cards">
                    {
                        data.map(social => (
                            <ContactCard key={social.name} title={social.name} image={social.image} url={social.url} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Contact
