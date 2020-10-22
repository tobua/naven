import React from 'react'
import styled from '@emotion/styled'
import { Color, Space } from '../../style'

const CheckboxInput = styled.input`
  padding: ${Space.small};
  border: 1px solid ${Color.highlight};
  border-radius: ${Space.small};
  appearance: none;

  &:before {
      content: '';
      width: ${Space.small};
      height: ${Space.small};
      border: 1px solid black;
  }

  &:focus {
    border-width: 2px;
    margin-bottom: -2px;
    outline: none;
  }
`

export const Checkbox = ({ value }: { value: boolean }) => <CheckboxInput type="checkbox" checked={!!value} />

export const Radio = () => <input type="radio" />
