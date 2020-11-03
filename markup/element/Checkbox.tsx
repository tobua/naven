import React from 'react'
import styled from '@emotion/styled'
import { uniqueID } from '../../utility/unique-id'
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

const RadioInput = styled.input`
  border: 1px solid ${Color.highlight};
  border-radius: ${Space.medium};
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

const Wrapper = styled.div`
  display: flex;
`

const Label = styled.label`
  margin-left: ${Space.small};
`

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string }

export const Checkbox = ({ label, id = uniqueID(), ...props }: Props) => (
  <Wrapper>
    <CheckboxInput type="checkbox" {...props} />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
)

export const Radio = ({ label, id = uniqueID(), ...props }: Props) => (
  <Wrapper>
    <RadioInput id={id} type="radio" {...props} />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
)
