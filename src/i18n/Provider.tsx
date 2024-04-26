import { I18nContext, MessageSetKeys } from './Context'
import { FC, ReactNode, useCallback, useState } from 'react'
import en from './en'
import ru from './ru'
import { Messages } from './types'

type Props = {
    children: ReactNode
}

const MESSAGES: Messages = {
    en,
    ru
}

export const I18nProvider: FC<Props> = props => {
    const [lang, setLang_] = useState<string>('en')

    if (!MESSAGES[lang]) {
        throw new Error(`Unsupported lang ${lang}`)
    }

    const languageCodes = Object.keys(MESSAGES)
    const messages = MESSAGES[lang]

    const getMessage = (lang: string, key: MessageSetKeys) => {
        if (!MESSAGES[lang]) {
            throw new Error(`[getMessage]: Unsupported lang ${lang}`);
        }

        return MESSAGES[lang][key];
    }

    const setLang = useCallback((value: string) => {
        setLang_(value)
    }, [])

    return (
        <I18nContext.Provider
            value={{
                lang,
                setLang,
                languageCodes,
                messages,
                getMessage
            }}
        >
            {props.children}
        </I18nContext.Provider>
    )
}
