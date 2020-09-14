import React from 'react'
import styled from '@emotion/styled'
import { small } from '../../style/space'
import { Gray, warning, error } from '../../style/color'

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
  padding: ${small};
  border-radius: ${small};
  border: 1px solid
    ${({ type }) => valueByType(type, [Gray['500'], warning, error])};
`

interface IAlert {
  type?: Type
  children: string
}

export const Alert = ({ type = 'info', children }: IAlert) => (
  <Wrapper type={type}>{children}</Wrapper>
)
