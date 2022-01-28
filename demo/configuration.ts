import { merge, create, register } from 'naven'

const configuration = merge({
  theme: {
    color: {
      highlight: '#00ab64',
      interact: '#ab0047',
    },
  },
})

export const { theme, styled, createTheme } = register(create(configuration), 'body')
