import { configure } from 'naven'

export const getStoredStyles = () =>
  JSON.parse(window.localStorage.getItem('styles') ?? '{}')

export const configureUserStyles = () => configure(getStoredStyles())

// Apply possibly user configured styles from localStorage.
configureUserStyles()
