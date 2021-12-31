import { mergeConfiguration, createStitches, registerStitches } from 'naven'

export const getStoredStyles = () => JSON.parse(window.localStorage.getItem('styles') ?? '{}')

export const configureUserStyles = () => {
  registerStitches(createStitches(mergeConfiguration(getStoredStyles())), 'body')
}

// Apply possibly user configured styles from localStorage.
export const { theme, styled, createTheme } = registerStitches(
  createStitches(mergeConfiguration(getStoredStyles())),
  'body'
)
