import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Space, Color, Shade } from '../../style'

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

const Wrapper = styled.button<any>`
  padding: ${Space.small};
  background-color: ${(props) => getButtonColor(props, 0.8)};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${Space.tiny};
  color: ${Color.white};
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : '')};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => getButtonColor(props, 1)};
  }

  ${({ css }) => css}
`

interface ButtonProps {
  highlight?: boolean
  interact?: boolean
  css?: SerializedStyles
  children: any
}

export const Button = ({
  highlight = false,
  interact = false,
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Wrapper {...{ highlight, interact }} {...props}>
    {children}
  </Wrapper>
)
