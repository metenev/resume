import { useContext } from 'react'
import { I18nContext } from './Context'

export * from './types'
export { I18nContext, type I18nContextData } from './Context'
export { I18nProvider } from './Provider'

export function useI18n() {
    return useContext(I18nContext)
}