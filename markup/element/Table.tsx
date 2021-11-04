import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Space, Color, spaceProp, radius } from '../../style'

const Wrapper = styled.div<{
  columns: number
  gap?: number | string
  space?: number | string
  css?: SerializedStyles
}>`
  display: grid;
  grid-gap: ${Space.small};
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  background: ${Color.Gray[300].var};
  ${() => radius()}
  padding: ${Space.small};

  /* First row, ignore warning, nth-of-type won't work. */
  > *:nth-child(-n + ${({ columns }) => columns}) {
    font-weight: bold;
  }

  ${spaceProp}
  ${({ css }) => css}
`

const getColumnCount = (children: any[]) =>
  Math.max(...children.filter(Boolean).map((child) => child?.props?.children?.length))

interface Props {
  css?: SerializedStyles
  space?: string | number
  children: any[]
}

export const Table = ({ children, css, space }: Props) => (
  <Wrapper css={css} space={space} columns={getColumnCount(children)}>
    {children}
  </Wrapper>
)
