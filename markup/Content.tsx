import React from 'react'
import styled from '@emotion/styled'

export const Main = styled.main<{ sidebar: boolean }>`
  grid-column: ${({ sidebar }) => (sidebar ? 3 : 2)} / 5;
`

export const Tiles = styled.div`
  //
`

export const Wide = styled.div`
  grid-column: 1 / 5;
`

export const Slim = styled.div`
  grid-column: 3 / 4;
`

interface ContentProps {
  children: React.ReactNode
  sidebar?: boolean
}

export const Content = ({ children, sidebar = false }: ContentProps) => (
  <Main sidebar={sidebar}>{children}</Main>
)
