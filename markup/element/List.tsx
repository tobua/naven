import React, { ReactNode } from 'react'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space, toPx, spaceProp } from '../../style'

const ListUl = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'inherit')};
  row-gap: ${({ gap }) => toPx(gap)};
  column-gap: ${({ gap }) => toPx(gap)};
  overflow: ${({ wrap }) => (wrap ? 'visible' : 'auto')};

  ${spaceProp}
  ${({ css }) => css}
`

const ListLi = styled.li<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

type ListProps = {
  horizontal?: boolean
  wrap?: boolean
  css?: SerializedStyles
  gap?: number | string
  children: ReactNode[]
  space?: string | number
  elementProps?: {
    css?: SerializedStyles
  } & React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >
}

export const List = ({
  horizontal,
  children,
  elementProps,
  gap = Space.small,
  ...props
}: ListProps) => (
  <ListUl horizontal={horizontal} gap={gap} {...props}>
    {children.map((child, index) => (
      <ListLi key={index} {...elementProps}>
        {child}
      </ListLi>
    ))}
  </ListUl>
)
