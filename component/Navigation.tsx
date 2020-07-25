import React from 'react'
import styled from '@emotion/styled'
import { List, TextLink } from '../component/Elements'

export const Wrapper = styled.nav`
  grid-column: 2 / 5;
  grid-row: 2;
`

export const Navigation = () => (
  <Wrapper>
    <List horizontal>
      <TextLink href="/">JSX</TextLink>
      <TextLink href="/">CSS-in-CSS</TextLink>
      <TextLink href="/">TypeScript</TextLink>
    </List>
  </Wrapper>
)
