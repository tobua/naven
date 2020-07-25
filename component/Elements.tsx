import React from 'react'
import styled from '@emotion/styled'
import { small } from '../style/space'
import { black } from '../style/color'

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.a`
  color: ${black};
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
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
    {children.map((child) => (
      <ListLi>{child}</ListLi>
    ))}
  </ListUl>
)
