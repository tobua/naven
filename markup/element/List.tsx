import React from 'react'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space } from '../../style'

const ListUl = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'inherit')};
  ${({ css }) => css}
`

const ListLi = styled.li`
  padding: ${Space.small};
  ${({ css }) => css}
`

type ListProps = {
  horizontal?: boolean
  wrap?: boolean
  css?: SerializedStyles
  children: any[]
  elementProps?: {}
}

export const List = ({
  horizontal,
  children,
  elementProps,
  ...props
}: ListProps) => (
  <ListUl horizontal={horizontal} {...props}>
    {children.map((child, index) => (
      <ListLi key={index} {...elementProps}>
        {child}
      </ListLi>
    ))}
  </ListUl>
)
