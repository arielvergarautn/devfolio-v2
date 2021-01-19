//Capture
import capture from './public/img/capture.png'
import captureS1 from './public/img/capture-s1.png'
import captureS2 from './public/img/capture-s2.png'
import captureS3 from './public/img/capture-s3.png'

//Gamer news
import gamer from './public/img/gamer.png'
import gamerS1 from './public/img/gamer-s1.png'
import gamerS2 from './public/img/gamer-s2.png'

export const workData = () => {
    return [
        {
            name: 'Capture',
            description: 'Portfolio / Personal website',
            website: 'https://cap-ture.netlify.app/',
            picture: capture,
            screenshots: [
                capture, captureS1, captureS2, captureS3
            ],
            github: 'https://github.com/arielvergarautn/capture',
        },
        {
            name: 'Game news',
            description: 'Gamer`s news website',
            website: 'https://gamernews.netlify.app/',
            picture: gamer,
            screenshots: [
                gamer, gamerS1, gamerS2
            ],
            github: 'https://github.com/arielvergarautn/gamer-news',
        }
    ]
}