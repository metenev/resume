import EmailIcon from './assets/email_icon.svg?react'
import LinkedInIcon from './assets/linkedin_icon.svg?react'
import TelegramIcon from './assets/telegram_icon.svg?react'
import LocationIcon from './assets/geo_icon.svg?react'

import './App.scss'
import { ContactLink } from './components/ContactLink/ContactLink'
import { NumericRating } from './components/NumericRating/NumericRating'

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="image">
          <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6446 20C9.11032 20 7.6948 19.7534 6.398 19.2603C5.11946 18.7671 4.0053 18.0822 3.05553 17.2055C2.12402 16.3105 1.40256 15.2511 0.891147 14.0274C0.379731 12.8037 0.124023 11.4612 0.124023 10C0.124023 8.53881 0.379731 7.19635 0.891147 5.9726C1.42083 4.74886 2.16055 3.69863 3.11032 2.82192C4.0601 1.92694 5.18338 1.23288 6.48019 0.739726C7.79526 0.246575 9.23818 0 10.809 0C11.7039 0 12.5806 0.109589 13.4391 0.328768C14.3158 0.529681 15.1377 0.849315 15.9048 1.28767C16.6902 1.70776 17.4026 2.24658 18.0418 2.90411L14.5076 7.0411C14.2519 6.73059 13.9414 6.44749 13.5761 6.19178C13.229 5.93607 12.8181 5.73516 12.3432 5.58904C11.8866 5.42466 11.3569 5.34247 10.7542 5.34247C10.1332 5.34247 9.53955 5.45205 8.97334 5.67123C8.42539 5.87215 7.94138 6.17352 7.52128 6.57534C7.11946 6.97717 6.79982 7.47032 6.56238 8.05479C6.32494 8.63927 6.20622 9.31507 6.20622 10.0822C6.20622 10.7763 6.32494 11.4064 6.56238 11.9726C6.79982 12.5388 7.13772 13.0228 7.57608 13.4247C8.01443 13.8265 8.54412 14.137 9.16512 14.3562C9.78612 14.5753 10.4802 14.6849 11.2473 14.6849C11.7953 14.6849 12.3158 14.6027 12.809 14.4384C13.3021 14.274 13.7496 14.0639 14.1514 13.8082C14.5532 13.5342 14.9003 13.2329 15.1925 12.9041L18.0144 17.3425C17.5395 17.8539 16.9094 18.3105 16.124 18.7123C15.3386 19.1142 14.4711 19.4338 13.5213 19.6712C12.5715 19.8904 11.6126 20 10.6446 20Z" fill="currentColor"/>
            <path d="M28.4549 19.726L20.8111 0.547945H26.7289L29.7974 8.93151C30.0166 9.49772 30.1901 9.98174 30.3179 10.3836C30.4641 10.7854 30.5919 11.1689 30.7015 11.5342C30.8111 11.8813 30.9116 12.2557 31.0029 12.6575C31.1125 13.0594 31.2312 13.5525 31.359 14.137H30.4001C30.5828 13.3699 30.738 12.7397 30.8659 12.2466C31.012 11.7534 31.1673 11.2694 31.3316 10.7945C31.5143 10.3014 31.7426 9.68037 32.0166 8.93151L35.0851 0.547945H40.8111L33.1125 19.726H28.4549Z" fill="currentColor"/>
          </svg>
          </span>
          <span className="details">Built with React + Typescript + SASS</span>
        </div>

        <h1>Dmitrii Metenev</h1>
        <h2>Full Stack Web Developer</h2>

        <ul className="contact-info">
          <li>
            <ContactLink
              href='mailto:metenev.d@gmail.com'
              text='metenev.d@gmail.com'
              icon={<EmailIcon />}
            />
          </li>
          <li>
            <ContactLink
              href='https://www.linkedin.com/in/metenev/'
              text='in/metenev'
              icon={<LinkedInIcon />}
            />
          </li>
          <li>
            <ContactLink
              href='https://t.me/metenev'
              text='metenev'
              icon={<TelegramIcon />}
            />
          </li>
          <li>
            <ContactLink
              text='Yerevan, Armenia'
              icon={<LocationIcon />}
            />
          </li>
        </ul>
      </header>

      <section className="main-content">

        <section className="content-block summary">
          <h3>Summary</h3>
          <p>I am a passionate and skilled Fullstack Web Developer looking for remote opportunities that align with my expertise and ambitions and allow me to meet some interesting and inspiring tasks.</p>
          <p>My passion is to craft efficient, scalable, and user-friendly solutions on both front-end and back-end. I&apos;ve been successfully developing complex UIs with lots of user-flows as well as scalable services involving multiple containers and queues.</p>
        </section>

        <section className="content-block has-children experiences">
          <h3>Experience</h3>

          <div className="content-block-nested">
            <header className="header">
              <h4>Frontend Web Developer</h4>
              <span className="date-span">08/2021 &mdash; 04/2024</span>
            </header>
            <div className="company">
              <h5 className="title">CYBERLOOP</h5>
              <p className="desc">Services for Energy, Mining & Geothermal</p>
              <span className="work-mode badge">Remote</span>
            </div>
            <div className="value">
              <p>I was happy to work in a new industry and meet a <u>lot</u> of interesting and challenging tasks. I participated in developing:</p>
              <ul>
                <li>Customer web portal for performing data monitoring, analysis and remote control of the drilling process, which includes a lot of widgets and charts of all kinds displaying different types of data, theming, a bunch of user flows and complex UIs</li>
                <li>Standalone desktop app that does same things but is being installed to the driller&apos;s workspace</li>
                <li>Mobile app &ndash; for drillers too</li>
                <li>Asset registry website that helps manage drilling hardware</li>
                <li>Core libraries with components used across multiple apps</li>
              </ul>
              <p>This was one of my best teams so far and it was an honor for me to deliver value to these guys ❤️</p>
            </div>
          </div>

          <div className="content-block-nested">
            <header className="header">
              <h4>Web Full Stack Engineer</h4>
              <span className="date-span">04/2020 &mdash; 08/2021</span>
            </header>
            <div className="company">
              <h5 className="title">Grandtime.org</h5>
              <p className="desc">Crowd services & Blockchain solutions</p>
              <span className="work-mode badge">Remote</span>
            </div>
            <div className="value">
              <p>I joined this company to quickly develop the company&apos;s core product &ndash; the web app for it&apos;s members that included:</p>
              <ul>
                <li>Social tasks for members to complete</li>
                <li>Coins earning system</li>
                <li>Multi-level referral system that spreads member&apos;s earnings up the chain</li>
                <li>KYC verification via third-party service</li>
                <li>A lot of launchpad-related UIs and flows</li>
                <li>Regular profile operations like changing name, photo, contact info, password</li>
              </ul>
              <p>The development took 2 months. I then maintained that product and continually developed new features. It was challenging, but fun 🙂</p>
            </div>
          </div>

          <div className="content-block-nested">
            <header className="header">
              <h4>My own projects</h4>
              <span className="date-span">03/2018 &mdash; 01/2020</span>
            </header>
            <div className="value">
              <p>Me and my companion launched 2 SaaS projects:</p>
              <ul>
                <li>iDirect &ndash; the service for Instagram DMs mass sending</li>
                <li>iChat &ndash; a chat-bot to administer a chain of paid Telegram groups</li>
              </ul>
              <p>I created and maitained Angular front-end apps as well as PHP + MySQL backends, constantly fighting highload challenges, improving overall stability and adding new features.</p>
              <p>Unfortunately these are dead nowadays because of critical changes in APIs of 3rd-party services that we highly relied on. But I&apos;m happy I had this experience, because it was really fun, and I seriously improved my skills during this period of time 💪</p>
            </div>
          </div>

          <div className="content-block-nested">
            <header className="header">
              <h4>Other activities</h4>
              <span className="date-span">at different times</span>
            </header>
            <div className="value">
              <p>I was freelancing a lot to improve my skills and gain production experience on different projects.</p>
              <p>I created a decent amount of my own projects, successful and not, but each time I started one I invested all my efforts to make it better than previous one. I often chose different technology/framework for it to learn something new.</p>
              <br />
              <p>So if you feel some kind of match with me and my personal values, feel free to drop me a message &mdash; I&apos;m always available 👋</p>
            </div>
          </div>

        </section>

        <aside className="profile">
          {/* <div className="photo">
            <img src="https://place-hold.it/100x100" />
          </div> */}

          <div className="skills-wrapper">

            <section className="skills">
              <h5 className="section-title">Frontend Skills</h5>
              <ul>
                <li>TypeScript
                  {/* <Rating value={3} /> */}
                  <NumericRating value={5} />
                </li>
                <li>ES6+
                  {/* <Rating value={3} /> */}
                  <NumericRating value={4.5} />
                </li>
                <li>React
                  <NumericRating value={5} />
                </li>
                <li>Redux
                  <NumericRating value={4} />
                </li>
                <li>Angular 15+
                  <NumericRating value={4.5} />
                </li>
                <li>RxJS
                  <NumericRating value={5} />
                </li>
                <li>NgRx
                  <NumericRating value={5} />
                </li>
                <li>Responsive layouts
                  <NumericRating value={5} />
                </li>
                <li>Complex UIs
                  <NumericRating value={5} />
                </li>
              </ul>
              <p className="additional">No need to mention basic stuff like HTML5, SASS, etc.</p>
            </section>

            <section className="skills">
              <h5 className="section-title">Backend Skills</h5>
              <ul>
                <li>Node.js + TypeScript
                  <NumericRating value={5} />
                </li>
                <li>MySQL
                  <NumericRating value={4.5} />
                </li>
                <li>MongoDB
                  <NumericRating value={4} />
                </li>
                <li>Redis
                  <NumericRating value={4} />
                </li>
                <li>Distributed Arch.
                  <NumericRating value={4} />
                </li>
                <li>Microservices
                  <NumericRating value={4} />
                </li>
                <li>Queues
                  <NumericRating value={4} />
                </li>
                <li>DevOps
                  <NumericRating value={3} />
                </li>
              </ul>
              <h5 className="bonus-title">Bonus</h5>
              <ul>
                <li>PHP
                  <NumericRating value={4} />
                </li>
                <li>Python
                  <NumericRating value={3} />
                </li>
              </ul>
            </section>

          </div>
        </aside>

      </section>

      <footer className="footer">
        <p>That&apos;s basically it! If you&apos;ve read this far you&apos;re definitely a human. Therefore, thanks for your time and have a good day! <span className="emoji">🤝</span></p>
      </footer>
    </>
  )
}

export default App
