import { merge, create, register } from 'naven'

export const getStoredStyles = () => JSON.parse(window.localStorage.getItem('styles') ?? '{}')

// Apply possibly user configured styles from localStorage.
export const { theme, styled, createTheme } = register(create(merge(getStoredStyles())), {
  rootSelector: 'body',
})
