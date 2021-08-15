import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

export const Main = styled.main<{ sidebar: boolean; css?: SerializedStyles }>`
  grid-column: ${({ sidebar }) => (sidebar ? 3 : 2)} / 5;
  ${({ css }) => css}
`

interface ContentProps {
  children: ReactNode
  css?: SerializedStyles
  sidebar?: boolean
}

export const Content = ({ css, children, sidebar = false }: ContentProps) => (
  <Main css={css} sidebar={sidebar}>
    {children}
  </Main>
)

export const Aside = styled.aside`
  grid-column: 2 / 3;
`

export const SideBar = () => (
  <Aside>
    <nav>Sidebar</nav>
  </Aside>
)
