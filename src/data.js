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
import Cv from './public/icons/cv.png'

//Icons experience
import intercept from './public/icons/intercept.jpg'
import danone from './public/icons/danone.png'
import nosis from './public/icons/nosis.png'

export const workData = () => {
    return [
        {
            id: 2,
            name: 'Game news',
            description: 'Gamer`s news website. Find everything about games!',
            website: 'https://gamernews.netlify.app/',
            picture: gamer,
            screenshots: [
                gamer, gamerS1, gamerS2
            ],
            github: 'https://github.com/arielvergarautn/gamer-news',
        },
        {
            id: 3,
            name: 'Music app',
            description: 'Listen some relaxing songs!',
            website: 'https://m-app.netlify.app/',
            picture: music,
            screenshots: [
                music, musicS1, musicS2
            ],
            github: 'https://github.com/arielvergarautn/music-app',
        },
        {
            id: 4,
            name: 'Recipe',
            description: 'Find the best recipes here!',
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
            description: 'Company`s web site. Plumber services for you.',
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
            url: 'https://www.linkedin.com/in/abvergara/',
            updated: true
        },
        {
            name: 'Gmail',
            image: Gmail,
            url: 'mailto: arielbvergara@gmail.com',
            updated: true
        },
        {
            name: 'Github',
            image: Github,
            url: 'https://github.com/arielvergarautn',
            updated: true
        },
        {
            name: 'WhatsApp',
            image: Wsp,
            url: 'https://api.whatsapp.com/send?phone=31658974168&text=Hi!',
            updated: true
        },
        {
            name: 'Curriculum Vitae',
            image: Cv,
            url: '/files/ArielBernardoVergara.pdf',
            updated: false
        }
    ];
}


export const aboutMeData = () => {
    return [
        {
            title: "Football",
            paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi fugiat error, deleniti animi eligendi modi nemo voluptate repudiandae dolores doloremque dolorum adipisci? Reprehenderit molestias ut facilis perferendis consectetur soluta.",
        },
        {
            title: "Voluntary work",
            paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi fugiat error, deleniti animi eligendi modi nemo voluptate repudiandae dolores doloremque dolorum adipisci? Reprehenderit molestias ut facilis perferendis consectetur soluta.",
        },
        {
            title: "Climbing",
            paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi fugiat error, deleniti animi eligendi modi nemo voluptate repudiandae dolores doloremque dolorum adipisci? Reprehenderit molestias ut facilis perferendis consectetur soluta.",
        },
        {
            title: "Living in the Netherlands",
            paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi fugiat error, deleniti animi eligendi modi nemo voluptate repudiandae dolores doloremque dolorum adipisci? Reprehenderit molestias ut facilis perferendis consectetur soluta.",
        },
        {
            title: "Football",
            paragraphThree: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi fugiat error, deleniti animi eligendi modi nemo voluptate repudiandae dolores doloremque dolorum adipisci? Reprehenderit molestias ut facilis perferendis consectetur soluta.",
        },
    ]
}

export const experienceData = () => {
    return [
        {
            title: "Intercept",
            url: "https://intercept.cloud/",
            workInformationUrl: "https://reassure.cloud/",
            paragraphOne: "In July 2021 I moved to the Netherlands to start working at Intercept. I’m really thankful because they sponsored me and gave me a really big opportunity. It was (and still is) an amazing experience and really big challenge for me. New culture, new language, far from home, a completely new life.",
            paragraphTwo: "As I mentioned above, I’ve been working at Intercept since July 1st 2021, developing a system that basically manages users, customers and invoice’s process of the company. My main responsibilities are developing new features, maintaining and improving the existing code. I’ve been chosen to guide the team with front-end features as well.",
            paragraphThree: "Something important to mention is that we are always trying to keep up to date with the new technologies (e.g. migrating our code from net core 3 to net core 6 and 7). Lately we started to use the TDD (Test driven development) as well.",
            image: intercept,
        },
        {
            title: "Danone",
            url: "https://www.danone.com/",
            workInformationUrl: null,
            paragraphOne: "I worked at Danone as a backend developer in Argentina. It was a hard time for everyone because of covid. It was a different experience for me because everything was remote. I didn’t even meet my colleagues in person. In March 2020, I started to work at Danone as a backend developer. It was a hard time for everyone because of covid. It was a different experience for me because everything was remote. I didn’t even meet my colleagues in person.",
            paragraphTwo: "I worked there from March 2020 until April 2021 developing a logistic system, managing the documentation of each trip. My main responsibilities were maintaining the system, fixing bugs on production and (rarely) developing new features.",
            image: danone,
        },
        {
            title: "Nosis",
            url: "https://www.nosis.com/",
            workInformationUrl: "https://www.nosis.com/es/informes-comerciales/compliance",
            paragraphOne: "I worked at Nosis as a Junior developer in Argentina. It was a really good first experience, I was hired as I trainee and in one month I got the junior position. I learnt a lot, got a lot of friends and met my passion for programming.",
            paragraphTwo: "I worked there from December 2017 until January 2020 maintaining a CRM system and developing with a new team a completely new compliance system for the company.",
            image: nosis,
        }
    ]
}