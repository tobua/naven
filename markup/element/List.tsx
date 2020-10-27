import React from 'react'
import styled from '@emotion/styled'
import { Space } from '../../style'

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
  padding: ${Space.small};
`

export const List = ({ horizontal, children }: ListProps) => (
  <ListUl horizontal={horizontal}>
    {children.map((child, index) => (
      <ListLi key={index}>{child}</ListLi>
    ))}
  </ListUl>
)
