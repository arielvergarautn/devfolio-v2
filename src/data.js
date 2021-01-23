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

//Recipe
import recipe from './public/img/recipe.png'
import recipeS1 from './public/img/recipe-s1.png'
import recipeS2 from './public/img/recipe-s2.png'
import recipeS3 from './public/img/recipe-s3.png'

//Plumber
import plumber from './public/img/plumber.png'
import plumberS1 from './public/img/plumber-s1.png'
import plumberS2 from './public/img/plumber-s2.png'

//Icons Contact
import Github from './public/icons/github.png'
import Gmail from './public/icons/gmail.png'
import Linkedin from './public/icons/linkedin.png'
import Wsp from './public/icons/whatsapp.png'


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
        {
            id: 4,
            name: 'Recipe',
            description: 'Recipes app',
            website: 'https://recipies-91cf8.web.app/',
            picture: recipe,
            screenshots: [
                recipe, recipeS1, recipeS2, recipeS3
            ],
            github: 'https://github.com/ariel95/recipies',
        },
        {
            id: 5,
            name: 'Plomería Baustista Angel',
            description: 'Recipes app',
            website: 'https://plomeriaba.web.app/',
            picture: plumber,
            screenshots: [
                plumber, plumberS1, plumberS2
            ],
            github: 'https://github.com/ariel95/pba',
        },

    ]
}


export const socialNetworkData = () => {
    return [
        {
            name: 'Linkedin',
            image: Linkedin,
            url: 'https://www.linkedin.com/in/abvergara/'
        },
        {
            name: 'Gmail',
            image: Gmail,
            url: 'mailto: abc@example.com'
        },
        {
            name: 'Github',
            image: Github,
            url: 'https://github.com/arielvergarautn'
        },
        {
            name: 'WhatsApp',
            image: Wsp,
            url: 'https://api.whatsapp.com/send?phone=31658974168&text=Hi!'
        },

    ];
}