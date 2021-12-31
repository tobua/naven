import { mergeConfiguration, createStitches, registerStitches } from 'naven'

const configuration = mergeConfiguration({
  theme: {
    color: {
      some: '#FF007A',
    },
  },
})

export const { theme, styled, createTheme } = registerStitches(
  createStitches(configuration),
  'body'
)
