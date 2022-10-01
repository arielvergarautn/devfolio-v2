function AboutMeGeneric({title, subtitle, link, image, paragraphOne, paragraphTwo}) {

    const handleClick = () => {
        window.location.href = link;
    }

    return (
        <div className='about-me' onClick={handleClick}>
            <div className='image-container'>
                {
                    image && <img src={image} alt='' />
                }
            </div>
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
            </div>
        </div>
    )
}

export default AboutMeGeneric