import { MessagesSet } from "./types";

import EmailIcon from '../assets/email_icon.svg?react'
import LinkedInIcon from '../assets/linkedin_icon.svg?react'
import TelegramIcon from '../assets/telegram_icon.svg?react'
import LocationIcon from '../assets/geo_icon.svg?react'

const messages: MessagesSet = {
    langName: 'Russian',

    builtWith: 'Сделано на Vite + React + Typescript + SASS',

    name: 'Дмитрий Метенёв',
    role: 'Full Stack Web Developer',

    contacts: [
        { text: 'metenev.d@gmail.com', url: 'mailto:metenev.d@gmail.com', icon: EmailIcon },
        { text: 'in/metenev', url: 'https://www.linkedin.com/in/metenev/', icon: LinkedInIcon },
        { text: 'metenev', url: 'https://t.me/metenev', icon: TelegramIcon },
        { text: 'Ереван, Армения', icon: LocationIcon },
    ],

    summary: {
        title: 'Вкратце о себе',
        content: [
            'Я опытный Fullstack веб-разработчик, ищу удалённо карьерные возможности, соответствующие моим навыкам и амбициям, и позволяющие мне решать интересные и вдохновляющие задачи.',
            'Моя страсть — создавать эффективные, масштабируемые и удобные для пользователя решения как на фронтенде, так и на бэкенде. Я успешно разрабатывал сложные пользовательские интерфейсы с множеством user flows, а также масштабируемые сервисы из нескольких контейнеров и очередей.'
        ]
    },

    experience: {
        title: 'Мой опыт',
        content: [
            {
                title: 'Frontend Web Developer',
                dateStart: '08/2021',
                dateEnd: '04/2024',

                company: {
                    name: 'CYBERLOOP',
                    desc: 'Services for Energy, Mining & Geothermal',
                    workMode: 'Удалённо',
                },

                notes: [
                    'Я был рад работать в новой для себя отрасли, где столкнулся с <u>кучей</u> интересных и сложных задач. Я активно разрабатывал множество продуктов:',
                    [
                        'Клиентский веб-портал для мониторинга данных, анализа и удалённого управления процессом бурения, который включает множество виджетов и диаграмм различных типов, отображающих разные виды данных, настройки оформления, множество user flows и сложные интерфейсы',
                        'Отдельное десктопное приложение, которое выполняет те же функции, но устанавливается на рабочем пространстве оператора',
                        'Мобильное приложение — также для операторов',
                        'Backend и Frontend library чата для общения операторов и другого персонала: 2 разных адаптера для бэкэнда (PostgreSQL + Prisma и Firebase), websockets, библиотека с интерфейсом чата для встраивания в другие продукты',
                        'Веб-сайт реестра оборудования, который помогает следить за тем, что из оборудования есть в наличии и в каком оно состоянии',
                        'Core libraries с компонентами, используемые во всех приложениях компании',
                    ],
                    'Это была одна из моих лучших команд на данный момент, и для меня было честью давать ценность этим ребятам ❤️'
                ]
            },
            {
                title: 'Web Full Stack Engineer',
                dateStart: '04/2020',
                dateEnd: '08/2021',

                company: {
                    name: 'Grandtime.org',
                    desc: 'Crowd services & Blockchain solutions',
                    workMode: 'Удалённо',
                },

                notes: [
                    'Я присоединился к этой компании, чтобы быстро разработать их основной продукт — веб-приложение для участников, включающее в себя:',
                    [
                        'Задания в социальных сетях для выполнения участниками',
                        'Система заработка токенов',
                        'Многоуровневая реферальная система, которая распределяет заработки участников вверх по цепочке',
                        'Верификацию KYC с использованием стороннего сервиса',
                        'Множество интерфейсов и flows, относящихся к лаунчпаду',
                        'Стандартные операции с профилем, такие как смена имени, фото, контактной информации, пароля',
                    ],
                    'Разработка заняла 2 месяца. Затем я поддерживал этот продукт и постоянно добавлял новые функции. Это было непросто, но весело 🙂'
                ]
            },
            {
                title: 'Мои собственные проекты',
                dateStart: '03/2018',
                dateEnd: '01/2020',

                notes: [
                    'Я и мой напарник создали и запустили 2 SaaS продукта:',
                    [
                        'iDirect — сервис для массовой рассылки в директ Instagram\'а',
                        'iChat — чат-бот для администрирования сети платных Telegram-групп',
                    ],
                    'Я создавал и поддерживал фронтенд-приложения на Angular, а также бэкенд на PHP + MySQL, постоянно решая проблемы высокой нагрузки, улучшая общую стабильность и добавляя новые функции.',
                    'К сожалению, сейчас они уже не работают из-за критических изменений в API сторонних сервисов, на которые мы были сильно завязаны. Но я рад, что у меня был такой опыт, потому что это было действительно весело, и я серьезно улучшил свои навыки за это время 💪',
                ]
            },
            {
                title: 'Другие активности',
                dateText: 'в разное время',

                notes: [
                    'Я много занимался фрилансом, чтобы улучшить свои навыки и получить опыт работы над различными проектами.',
                    'Я создал достаточно большое количество пет-проектов, успешных и не очень, но каждый раз, когда я начинал новый, я прикладывал все усилия, чтобы сделать его лучше предыдущего. Часто я выбирал разные технологии и фреймворки, чтобы изучать что-то новое.',
                    '',
                    'Поэтому, если вы чувствуете какой-то мэтч со мной и моими ценностями, не стесняйтесь написать мне — я всегда рад пообщаться 👋'
                ]
            }
        ]
    },

    skills: [
        {
            title: 'Навыки Frontend',
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
                    name: 'Сторы',
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
                    name: 'Сложные UI',
                    rank: 5
                }
            ],
            additionalContent: ['Нет необходимости упоминать базовые вещи, такие как HTML5, SASS и т.п.']
        },
        {
            title: 'Навыки Backend',
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
                title: 'Бонус',
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

    footerContent: ['В общем-то, вот и всё! Если вы дочитали до этого момента, то вы определенно человек. Поэтому, спасибо за ваше время и хорошего дня! <span className="emoji">🤝</span>']
};

export default messages;
