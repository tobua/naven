import React from 'react'
import styled from '@emotion/styled'
import * as Space from '../../style/space'
import * as Color from '../../style/color'

interface ButtonProps {
  highlight?: boolean
  interact?: boolean
  children: any
}

const getButtonColor = ({ highlight = false, interact = false }, opacity) => {
  if (highlight) {
    return Color.Shade(Color.highlight, opacity)
  }
  if (interact) {
    return Color.Shade(Color.interact, opacity)
  }

  return Color.Shade(Color.Gray[700], opacity)
}

const Wrapper = styled.button<any>`
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
  interact = false,
  children,
}: any) => <Wrapper {...{ highlight, interact }}>{children}</Wrapper>
