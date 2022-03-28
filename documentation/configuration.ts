import { merge, create, register } from 'naven'

export const getStoredStyles = () =>
  JSON.parse(window.localStorage.getItem('styles') ?? '{}') as object

const configuration = merge(getStoredStyles())
const tsWorkaround = create(configuration)

// Apply possibly user configured styles from localStorage.
export const { theme, styled, createTheme } = register(tsWorkaround, {
  rootSelector: 'body',
})
