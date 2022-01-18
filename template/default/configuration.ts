import { mergeConfiguration, createStitches, registerStitches } from 'naven'

export const { theme, styled, createTheme } = registerStitches(createStitches({}), 'body')
