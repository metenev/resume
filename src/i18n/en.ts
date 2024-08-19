import { MessagesSet } from "./types";

import EmailIcon from '../assets/email_icon.svg?react'
import LinkedInIcon from '../assets/linkedin_icon.svg?react'
import TelegramIcon from '../assets/telegram_icon.svg?react'
import LocationIcon from '../assets/geo_icon.svg?react'

const messages: MessagesSet = {
    langName: 'English',

    builtWith: 'Built with Vite + React + Typescript + SASS',

    name: 'Dmitrii Metenev',
    role: 'Full Stack Web Developer',

    contacts: [
        { text: 'metenev.d@gmail.com', url: 'mailto:metenev.d@gmail.com', icon: EmailIcon },
        { text: 'in/metenev', url: 'https://www.linkedin.com/in/metenev/', icon: LinkedInIcon },
        { text: 'metenev', url: 'https://t.me/metenev', icon: TelegramIcon },
        { text: 'Yerevan, Armenia', icon: LocationIcon },
    ],

    summary: {
        title: 'Summary',
        content: [
            'I am a passionate and skilled Fullstack Web Developer looking for remote opportunities that align with my expertise and ambitions and allow me to meet some interesting and inspiring tasks.',
            'My passion is to craft efficient, scalable, and user-friendly solutions on both front-end and back-end. I\'ve been successfully developing complex UIs with lots of user-flows as well as scalable services involving multiple containers and queues.'
        ]
    },

    experience: {
        title: 'Experience',
        content: [
            {
                title: 'Frontend Web Developer',
                dateStart: '08/2021',
                dateEnd: '04/2024',

                company: {
                    name: 'CYBERLOOP',
                    desc: 'Services for Energy, Mining & Geothermal',
                    workMode: 'Remote',
                },

                notes: [
                    'I was happy to work in a new industry and meet a <u>lot</u> of interesting and challenging tasks. I participated in developing:',
                    [
                        'Customer web portal for performing data monitoring, analysis and remote control of the drilling process, which includes a lot of widgets and charts of all kinds displaying different types of data, theming, a bunch of user flows and complex UIs',
                        'Standalone desktop app that does same things but is being installed to the driller\'s workspace',
                        'Mobile app — for drillers too',
                        'Backed and Frontend library of a chat for communication between operators and other staff: 2 different backed adapters (PostgreSQL + Prisma and Firebase), websockets, chat interface library for embedding into other products',
                        'Asset registry website that helps manage drilling hardware',
                        'Core libraries with components used across multiple apps',
                    ],
                    'This was one of my best teams so far and it was an honor for me to deliver value to these guys ❤️'
                ]
            },
            {
                title: 'Web Full Stack Engineer',
                dateStart: '04/2020',
                dateEnd: '08/2021',

                company: {
                    name: 'Grandtime.org',
                    desc: 'Crowd services & Blockchain solutions',
                    workMode: 'Remote',
                },

                notes: [
                    'I joined this company to quickly develop the company\'s core product — the web app for it\'s members that included:',
                    [
                        'Social tasks for members to complete',
                        'Coins earning system',
                        'Multi-level referral system that spreads member\'s earnings up the chain',
                        'KYC verification via third-party service',
                        'A lot of launchpad-related UIs and flows',
                        'Regular profile operations like changing name, photo, contact info, password',
                    ],
                    'The development took 2 months. I then maintained that product and continually developed new features. It was challenging, but fun 🙂'
                ]
            },
            {
                title: 'My own projects',
                dateStart: '03/2018',
                dateEnd: '01/2020',

                notes: [
                    'Me and my companion launched 2 SaaS projects:',
                    [
                        'iDirect — the service for Instagram DMs mass sending',
                        'iChat — a chat-bot to administer a chain of paid Telegram groups',
                    ],
                    'I created and maitained Angular front-end apps as well as PHP + MySQL backends, constantly fighting highload challenges, improving overall stability and adding new features.',
                    'Unfortunately these are dead nowadays because of critical changes in APIs of 3rd-party services that we highly relied on. But I\'m happy I had this experience, because it was really fun, and I seriously improved my skills during this period of time 💪',
                ]
            },
            {
                title: 'Other activities',
                dateText: 'at different times',

                notes: [
                    'I was freelancing a lot to improve my skills and gain production experience on different projects.',
                    'I created a decent amount of my own projects, successful and not, but each time I started one I invested all my efforts to make it better than previous one. I often chose different technology/framework for it to learn something new.',
                    '',
                    'So if you feel some kind of match with me and my personal values, feel free to drop me a message — I\'m always here to talk 👋'
                ]
            }
        ]
    },

    skills: [
        {
            title: 'Frontend Skills',
            items: [
                {
                    name: 'TypeScript',
                    rank: 5
                },
                {
                    name: 'ES6+',
                    rank: 4.5
                },
                {
                    name: 'React',
                    rank: 4.5
                },
                {
                    name: 'Redux',
                    rank: 4
                },
                {
                    name: 'React Query',
                    rank: 5
                },
                {
                    name: 'Chakra UI / Mantine',
                    rank: 4
                },
                {
                    name: 'Angular 15+',
                    rank: 4.5
                },
                {
                    name: 'RxJS',
                    rank: 5
                },
                {
                    name: 'NgRx',
                    rank: 5
                },
                {
                    name: 'Stores',
                    rank: 4.5
                },
                {
                    name: 'Rollup / Webpack',
                    rank: 4.5
                },
                {
                    name: 'Responsive layouts',
                    rank: 5
                },
                {
                    name: 'Complex UIs',
                    rank: 5
                }
            ],
            additionalContent: ['No need to mention basic stuff like HTML5, SASS, etc.']
        },
        {
            title: 'Backend Skills',
            items: [
                {
                    name: 'Node.js + TypeScript',
                    rank: 5
                },
                {
                    name: 'MySQL',
                    rank: 4.5
                },
                {
                    name: 'PostgreSQL',
                    rank: 3.5
                },
                {
                    name: 'MongoDB',
                    rank: 4.5
                },
                {
                    name: 'Firebase',
                    rank: 4
                },
                {
                    name: 'Redis',
                    rank: 4.5
                },
                {
                    name: 'Prisma / Sequelize',
                    rank: 4.5
                },
                {
                    name: 'Distributed Arch.',
                    rank: 4
                },
                {
                    name: 'Microservices',
                    rank: 4
                },
                {
                    name: 'RabbitMQ / Celery',
                    rank: 4
                },
                {
                    name: 'DevOps',
                    rank: 3
                }
            ],
            bonus: {
                title: 'Bonus',
                items: [
                    {
                        name: 'PHP',
                        rank: 4
                    },
                    {
                        name: 'Python',
                        rank: 3
                    }
                ]
            }
        }
    ],

    footerContent: ['That\'s basically it! If you\'ve read this far you\'re definitely a human. Therefore, thanks for your time and have a good day! <span className="emoji">🤝</span>']
};

export default messages;
