import { createContext } from 'react'
import { MessagesSet } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MessageSetKeys = { [P in keyof MessagesSet]: MessagesSet[P] extends any ? P : never }[keyof MessagesSet];

export type I18nContextData = {
    lang: string,
    setLang: (lang: string) => void,

    languageCodes: string[],
    messages: MessagesSet,

    getMessage(lang: string, key: MessageSetKeys): MessagesSet[MessageSetKeys]
}

export const I18nContext = createContext({} as I18nContextData)
