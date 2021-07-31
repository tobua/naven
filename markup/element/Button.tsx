import React, { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Space, Color, Shade, Font, radius, spaceProp } from '../../style'

const getButtonColor = (
  { highlight = false, interact = false },
  opacity: number
) => {
  if (highlight) {
    return Shade(Color.highlight, opacity)
  }
  if (interact) {
    return Shade(Color.interact, opacity)
  }

  return Shade(Color.Gray[700], opacity)
}

const Wrapper = styled.button<{
  highlight?: boolean
  interact?: boolean
  css?: SerializedStyles
  space?: string | number
}>`
  padding: ${Space.small};
  background-color: ${(props) => getButtonColor(props, 0.8)};
  border: none;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  ${() => radius()}
  color: ${Color.white};
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : '')};
  ${Font.size.medium}
  ${spaceProp}

  &:hover,
  &:focus {
    outline: none;
    background-color: ${(props) => getButtonColor(props, 1)};
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
