import { isExperienceWithDateRange, useI18n } from './i18n'
import { ContactLink } from './components/ContactLink/ContactLink'
import { NumericRating } from './components/NumericRating/NumericRating'
import Dropdown, { Option } from 'react-dropdown';
import './App.scss'
import 'react-dropdown/style.css';
import { useEffect } from 'react';

function App() {
  // Get i18n
  const {
    lang,
    setLang,
    languageCodes,
    messages: msgs,
    getMessage
  } = useI18n()

  // Set up languages list

  const languageOptions: Option[] = languageCodes.map(item => ({
    label: String(getMessage(item, 'langName')),
    value: item
  }));

  const defaultLang = languageOptions.find(item => item.value === lang);

  if (!defaultLang) {
    throw new Error(`Unsupported lang: ${lang}`);
  }

  // Init

  useEffect(() => {
    function onHashChange() {
      const lang = window.location.hash.replace(/^#/, '');

      if (!lang) {
        // The default lang will be used
        return
      }

      if (!languageCodes.includes(lang)) {
        console.error(`Unknown lang ${lang}`)
        window.location.hash = ''
        return
      }

      setLang(lang)
    }

    window.addEventListener('hashchange', onHashChange, false);

    // Call it one time for the current hash
    onHashChange()

    return () => {
      window.removeEventListener('hashchange', onHashChange, false);
    };
  }, [ languageCodes, setLang ])

  // Event handlers

  const onLanguageSelect = (option: Option) => {
    setLang(option.value)
    window.location.hash = '#' + (option.value === 'en' ? '' : option.value)
  }

  // Rendering

  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            <span className="image">
            <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6446 20C9.11032 20 7.6948 19.7534 6.398 19.2603C5.11946 18.7671 4.0053 18.0822 3.05553 17.2055C2.12402 16.3105 1.40256 15.2511 0.891147 14.0274C0.379731 12.8037 0.124023 11.4612 0.124023 10C0.124023 8.53881 0.379731 7.19635 0.891147 5.9726C1.42083 4.74886 2.16055 3.69863 3.11032 2.82192C4.0601 1.92694 5.18338 1.23288 6.48019 0.739726C7.79526 0.246575 9.23818 0 10.809 0C11.7039 0 12.5806 0.109589 13.4391 0.328768C14.3158 0.529681 15.1377 0.849315 15.9048 1.28767C16.6902 1.70776 17.4026 2.24658 18.0418 2.90411L14.5076 7.0411C14.2519 6.73059 13.9414 6.44749 13.5761 6.19178C13.229 5.93607 12.8181 5.73516 12.3432 5.58904C11.8866 5.42466 11.3569 5.34247 10.7542 5.34247C10.1332 5.34247 9.53955 5.45205 8.97334 5.67123C8.42539 5.87215 7.94138 6.17352 7.52128 6.57534C7.11946 6.97717 6.79982 7.47032 6.56238 8.05479C6.32494 8.63927 6.20622 9.31507 6.20622 10.0822C6.20622 10.7763 6.32494 11.4064 6.56238 11.9726C6.79982 12.5388 7.13772 13.0228 7.57608 13.4247C8.01443 13.8265 8.54412 14.137 9.16512 14.3562C9.78612 14.5753 10.4802 14.6849 11.2473 14.6849C11.7953 14.6849 12.3158 14.6027 12.809 14.4384C13.3021 14.274 13.7496 14.0639 14.1514 13.8082C14.5532 13.5342 14.9003 13.2329 15.1925 12.9041L18.0144 17.3425C17.5395 17.8539 16.9094 18.3105 16.124 18.7123C15.3386 19.1142 14.4711 19.4338 13.5213 19.6712C12.5715 19.8904 11.6126 20 10.6446 20Z" fill="currentColor"/>
              <path d="M28.4549 19.726L20.8111 0.547945H26.7289L29.7974 8.93151C30.0166 9.49772 30.1901 9.98174 30.3179 10.3836C30.4641 10.7854 30.5919 11.1689 30.7015 11.5342C30.8111 11.8813 30.9116 12.2557 31.0029 12.6575C31.1125 13.0594 31.2312 13.5525 31.359 14.137H30.4001C30.5828 13.3699 30.738 12.7397 30.8659 12.2466C31.012 11.7534 31.1673 11.2694 31.3316 10.7945C31.5143 10.3014 31.7426 9.68037 32.0166 8.93151L35.0851 0.547945H40.8111L33.1125 19.726H28.4549Z" fill="currentColor"/>
            </svg>
            </span>
            <span className="details">{msgs.builtWith}</span>
          </div>
          <div className="right-block">
            <Dropdown options={languageOptions} value={defaultLang} onChange={onLanguageSelect} />
          </div>
        </nav>

        <h1>{msgs.name}</h1>
        <h2>{msgs.role}</h2>

        <ul className="contact-info">
          {
            msgs.contacts.map((item, index) => (
              <li key={index}>
                <ContactLink
                  href={item.url}
                  text={item.text}
                  icon={<item.icon />}
                />
              </li>
            ))
          }
        </ul>
      </header>

      <section className="main-content">

        <section className="content-block summary">
          <h3>{msgs.summary.title}</h3>
          {
            msgs.summary.content.map((item, index) => <p key={index}>{item}</p>)
          }
        </section>

        <section className="content-block has-children experiences">
          <h3>{msgs.experience.title}</h3>

          {msgs.experience.content.map((item, index) => (
            <div className="content-block-nested" key={index}>
              <header className="header">
                <h4>{item.title}</h4>
                {
                  isExperienceWithDateRange(item)
                    ? <span className="date-span">{item.dateStart} &mdash; {item.dateEnd}</span>
                    : <span className="date-span">{item.dateText}</span>
                }
              </header>
              {
                item.company
                  ? (
                    <div className="company">
                      <h5 className="title">{item.company.name}</h5>
                      <p className="desc">{item.company.desc}</p>
                      <span className="work-mode badge">{item.company.workMode}</span>
                    </div>
                  )
                  : <></>
              }
              <div className="value">
                {
                  item.notes.map((item, noteIndex) => {
                    if (Array.isArray(item)) {
                      return (
                        <ul key={noteIndex}>
                          {item.map((listElem, listIndex) => <li key={listIndex}>{listElem}</li>)}
                        </ul>
                      )
                    }
                    else {
                      return <p key={noteIndex} dangerouslySetInnerHTML={{__html:item}}></p>
                    }
                  })
                }
              </div>
            </div>
          ))}
        </section>

        <aside className="profile">
          {/* <div className="photo">
            <img src="https://place-hold.it/100x100" />
          </div> */}

          <div className="skills-wrapper">

            {msgs.skills.map((item, index) => (
              <section className="skills" key={index}>
                <h5 className="section-title">{item.title}</h5>
                <ul>
                  {item.items.map((skillItem, skillIndex) => (
                    <li key={skillIndex}>{skillItem.name}
                      <NumericRating value={skillItem.rank} />
                    </li>
                  ))}
                </ul>
                {
                  item.additionalContent
                    ? item.additionalContent.map((additionalItem, additionalIndex) => (
                      <p className="additional" key={additionalIndex}>{additionalItem}</p>
                    ))
                    : <></>
                }
                {
                  item.bonus
                    ? <>
                      <h5 className="bonus-title">{item.bonus.title}</h5>
                      <ul>
                        {item.bonus.items.map((bonusItem, bonusIndex) => (
                          <li key={bonusIndex}>{bonusItem.name}
                            <NumericRating value={bonusItem.rank} />
                          </li>
                        ))}
                      </ul>
                    </>
                    : <></>
                }
              </section>
            ))}
          </div>
        </aside>

      </section>

      <footer className="footer">
        {
          msgs.footerContent.map((footerItem, index) => <p key={index} dangerouslySetInnerHTML={{__html: footerItem }}></p>)
        }
      </footer>
    </>
  )
}

export default App
