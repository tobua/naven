import React from 'react'
import styled from '@emotion/styled'
import { small } from '../style/space'
import { black } from '../style/color'

export { Spacer } from './element/Spacer'
export { Input } from './element/Input'
export { Loader } from './element/Loader'

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.a`
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

export const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`

export const SubHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
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
