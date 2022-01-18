import { mergeConfiguration, createStitches, registerStitches } from 'naven'

const configuration = mergeConfiguration({
  theme: {
    color: {
      highlight: '#00ab64',
      interact: '#ab0047',
    },
  },
})

export const { theme, styled, createTheme } = registerStitches(
  createStitches(configuration),
  'body'
)
