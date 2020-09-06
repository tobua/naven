import React from 'react'
import styled from '@emotion/styled'
import * as Space from '../../style/space'
import { Color } from '../../style'

interface ButtonProps {
  highlight?: boolean
  action?: boolean
  children: any
}

const getButtonColor = ({ highlight = false, action = false }, opacity) => {
  if (highlight) {
    return Color.Shade(Color.highlight, opacity)
  }
  if (action) {
    return Color.Shade(Color.action, opacity)
  }

  return Color.Shade(Color.Gray[700], opacity)
}

const Wrapper = styled.button<ButtonProps>`
  padding: ${Space.small};
  background-color: ${(props) => getButtonColor(props, 0.8)};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${Space.tiny};
  color: ${Color.white};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => getButtonColor(props, 1)};
  }
`

export const Button = ({
  highlight = false,
  action = false,
  children,
}: ButtonProps) => <Wrapper {...{ highlight, action }}>{children}</Wrapper>
