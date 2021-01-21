//Capture
import capture from './public/img/capture.png'
import captureS1 from './public/img/capture-s1.png'
import captureS2 from './public/img/capture-s2.png'
import captureS3 from './public/img/capture-s3.png'

//Gamer news
import gamer from './public/img/gamer.png'
import gamerS1 from './public/img/gamer-s1.png'
import gamerS2 from './public/img/gamer-s2.png'

//Music app
import music from './public/img/music.png'
import musicS1 from './public/img/music-s1.png'
import musicS2 from './public/img/music-s2.png'

export const workData = () => {
    return [
        {
            id: 1,
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
            id: 2,
            name: 'Game news',
            description: 'Gamer`s news website',
            website: 'https://gamernews.netlify.app/',
            picture: music,
            screenshots: [
                music, musicS1, musicS2
            ],
            github: 'https://github.com/arielvergarautn/gamer-news',
        },
        {
            id: 3,
            name: 'Music app',
            description: 'Music app',
            website: 'https://m-app.netlify.app/',
            picture: gamer,
            screenshots: [
                gamer, gamerS1, gamerS2
            ],
            github: 'https://github.com/arielvergarautn/music-app',
        },

    ]
}