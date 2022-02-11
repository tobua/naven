import { merge, create, register } from 'naven'

export const { theme, styled, createTheme } = register(create(merge({})), {
  rootSelector: 'body',
})
