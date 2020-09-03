import React from 'react'
import styled from '@emotion/styled'
import * as Space from '../../style/space'
import { highlight } from '../../style/color'

interface ButtonProps {
  highlight?: boolean
  action?: boolean
  children: any
}

const Wrapper = styled.button<ButtonProps>`
  padding: ${Space.small};
  backgroundcolor: ${(props) => highlight};

  &:focus {
    outline: none;
  }
`

export const Button = (props: ButtonProps) => (
  <Wrapper {...props}>{props.children}</Wrapper>
)
