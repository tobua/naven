import React from 'react'
import styled from '@emotion/styled'
import * as Space from '../../style/space'
import { Color } from '../../style'

interface ButtonProps {
  highlight?: boolean
  action?: boolean
  children: any
}

const Wrapper = styled.button<ButtonProps>`
  padding: ${Space.small};
  background-color: ${({ highlight, action }) => {
    if (highlight) {
      return Color.highlight
    }
    if (action) {
      return Color.action
    }

    return 'gray'
  }};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${Space.tiny};
  color: ${Color.white};

  &:focus {
    outline: none;
  }
`

export const Button = ({
  highlight = false,
  action = false,
  children,
}: ButtonProps) => <Wrapper {...{ highlight, action }}>{children}</Wrapper>
