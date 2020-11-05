import React from 'react'
import { SerializedStyles } from '@emotion/core'
import styled from '@emotion/styled'
import { Space } from '../../style'

type ListProps = {
  horizontal?: boolean
  wrap?: boolean
  css?: SerializedStyles
  children: any[]
}

const ListUl = styled.ul<ListProps>(
  {
    display: 'flex',
  },
  ({ horizontal, wrap, css }) => ({
    flexDirection: horizontal ? 'row' : 'column',
    ...css,
    flexWrap: wrap ? 'wrap' : 'inherit',
  })
)

const ListLi = styled.li`
  padding: ${Space.small};
`

export const List = ({ horizontal, children, ...props }: ListProps) => (
  <ListUl horizontal={horizontal} {...props}>
    {children.map((child, index) => (
      <ListLi key={index}>{child}</ListLi>
    ))}
  </ListUl>
)
