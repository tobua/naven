import React, { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Space, Color, Font, radius, spaceProp } from '../../style'

const getButtonColor = ({ highlight = false, interact = false }) => {
  if (highlight) {
    return Color.highlight.var
  }
  if (interact) {
    return Color.interact.var
  }

  return Color.Gray[700].var
}

const Wrapper = styled.button<{
  highlight?: boolean
  interact?: boolean
  css?: SerializedStyles
  space?: string | number
}>`
  padding: ${Space.small};
  background-color: ${(props) => getButtonColor(props)};
  opacity: 0.8;
  border: none;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  ${() => radius()}
  color: ${Color.white.var};
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : '')};
  ${Font.size.medium}
  ${spaceProp}

  &:hover,
  &:focus {
    outline: none;
    opacity: 1;
  }

  ${({ css }) => css}
`

interface ButtonProps {
  highlight?: boolean
  interact?: boolean
  css?: SerializedStyles
  space?: string | number
  children: any
}

export const Button = ({
  highlight = false,
  interact = false,
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Wrapper {...{ highlight, interact }} {...props}>
    {children}
  </Wrapper>
)
