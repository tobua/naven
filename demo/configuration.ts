import { merge, create, register } from 'naven'

const configuration = merge({
  theme: {
    color: {
      highlight: '#00ab64',
      interact: '#ab0047',
    },
  },
})

const tsWorkaround = create(configuration)

export const { theme, styled, createTheme } = register(tsWorkaround, {
  rootSelector: 'body',
  globalStyles: (stitches) => ({
    body: {
      margin: stitches.theme.space.large,
    },
  }),
})
