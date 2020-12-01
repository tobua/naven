import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

export const Main = styled.main<{ sidebar: boolean }>`
  grid-column: ${({ sidebar }) => (sidebar ? 3 : 2)} / 5;
  ${({ css }) => css}
`

interface ContentProps {
  children: React.ReactNode
  css?: SerializedStyles
  sidebar?: boolean
}

export const Content = ({ css, children, sidebar = false }: ContentProps) => (
  <Main css={css} sidebar={sidebar}>
    {children}
  </Main>
)
