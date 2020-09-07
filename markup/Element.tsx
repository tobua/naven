import React from 'react'
import '@emotion/core'
import styled from '@emotion/styled'
import { small } from '../style/space'
import { black } from '../style/color'

export { Spacer } from './element/Spacer'
export { Input } from './element/Input'
export { Loader } from './element/Loader'
export { Button } from './element/Button'

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.a`
  cursor: pointer;
  color: ${black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`

// any because 'as' tag is missing in @emotion types.
export const Heading = styled.h1<any>`
  font-size: ${({ as = 'h1' }) => {
    if (as === 'h1') {
      return '30px'
    }

    if (as === 'h2') {
      return '24px'
    }
  }};
  margin-bottom: 20px;
`

export const Paragraph = styled.p`
  margin-bottom: 30px;
`

type ListProps = {
  horizontal?: boolean
  children: any[]
}

const ListUl = styled.ul<ListProps>(
  {
    display: 'flex',
  },
  ({ horizontal }) => ({
    flexDirection: horizontal ? 'row' : 'column',
  })
)

const ListLi = styled.li`
  padding: ${small};
`

export const List = ({ horizontal, children }: ListProps) => (
  <ListUl horizontal={horizontal}>
    {children.map((child, index) => (
      <ListLi key={index}>{child}</ListLi>
    ))}
  </ListUl>
)
