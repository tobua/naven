import { merge, create, register } from 'naven'

const avoidTypeCheckIssueWorkaround = create(merge({}))

export const { theme, styled, createTheme } = register(avoidTypeCheckIssueWorkaround, {
  rootSelector: 'body',
})
