import React from 'react'
import styled from '@emotion/styled'
import { Space, Color } from '../../style'

type Type = 'info' | 'warning' | 'error'

const valueByType = (type: Type, values: [string, string, string]) => {
  if (type === 'warning') {
    return values[1]
  }

  if (type === 'error') {
    return values[2]
  }

  return values[0]
}

const Wrapper = styled.div<{ type: Type }>`
  display: flex;
  align-items: center;
  padding: ${Space.small};
  border-radius: ${Space.small};
  border: 1px solid
    ${({ type }) =>
      valueByType(type, [Color.Gray['500'], Color.warning, Color.error])};
`

interface IAlert {
  type?: Type
  children: string
}

export const Alert = ({ type = 'info', children }: IAlert) => (
  <Wrapper type={type}>{children}</Wrapper>
)
