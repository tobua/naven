import React from 'react'
import styled from '@emotion/styled'
import { Color, Space } from '../../style'

const CheckboxInput = styled.input`
  border: 1px solid ${Color.highlight};
  border-radius: ${Space.tiny};
  appearance: none;
  margin: 0;

  &:before {
    content: '';
    display: flex;
    width: ${Space.medium};
    height: ${Space.medium};
  }

  &:checked {
    background: ${Color.highlight};
  }

  &:focus {
    border-width: 2px;
    outline: none;

    &:before {
      height: calc(${Space.medium} - 2px);
    }
  }
`

export const Checkbox = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <CheckboxInput type="checkbox" {...props} />
)

export const Radio = () => <input type="radio" />
