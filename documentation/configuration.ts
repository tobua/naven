import { merge, create, register } from 'naven'

export const getStoredStyles = () =>
  JSON.parse(window.localStorage.getItem('styles') ?? '{}') as object

const configuration = merge(getStoredStyles())

// Apply possibly user configured styles from localStorage.
export const { theme, styled, createTheme } = register(create(configuration), {
  rootSelector: 'body',
})
