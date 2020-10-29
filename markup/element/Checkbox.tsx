import React from 'react'
import styled from '@emotion/styled'
import { Color, Space } from '../../style'

const CheckboxInput = styled.input`
  border: 1px solid ${Color.highlight};
  border-radius: ${Space.tiny};
  appearance: none;

  &:before {
    content: '';
    display: flex;
    width: ${Space.medium};
    height: ${Space.medium};
    // border: 1px solid black;
  }

  &:checked {
    background: ${Color.highlight};
  }

  &:focus {
    border-width: 2px;
    margin-bottom: -6px;
    outline: none;
  }
`

export const Checkbox = ({
  value,
  ...props
}: { value: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <CheckboxInput type="checkbox" checked={!!value} {...props} />
)

export const Radio = () => <input type="radio" />
