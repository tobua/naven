import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { uniqueID } from '../../utility/unique-id'
import { Color, Space, radius, spaceProp } from '../../style'

const CheckboxInput = styled.input`
  border: 1px solid ${Color.black};
  ${() => radius()}
  appearance: none;
  margin: 0;

  &:before {
    content: '';
    display: flex;
    width: ${Space.medium};
    height: ${Space.medium};
  }

  &:checked {
    background: ${Color.black};
  }

  &:focus {
    outline: none;
  }

  ${({ css }) => css}
`

const RadioInput = styled.input`
  border: 1px solid ${Color.black};
  border-radius: 100%;
  appearance: none;
  margin: 0;

  &:before {
    content: '';
    display: flex;
    width: ${Space.medium};
    height: ${Space.medium};
  }

  &:checked {
    background: ${Color.black};
  }

  &:focus {
    border-width: 2px;
    border-color: ${Color.Gray[500]};
    outline: none;

    &:before {
      height: calc(${Space.medium} - 2px);
      width: calc(${Space.medium} - 2px);
    }
  }

  ${({ css }) => css}
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ css }) => css}
  ${spaceProp}

  &:focus {
    outline: none;
    font-weight: bold;

    input {
      border-width: 2px;
      border-color: ${Color.Gray[500]};
      outline: none;

      &:before {
        height: calc(${Space.medium} - 2px);
        width: calc(${Space.medium} - 2px);
      }
    }
  }
`

const Label = styled.label`
  margin-left: ${Space.small};
  cursor: pointer;
`

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  css?: SerializedStyles
  wrapperCss?: SerializedStyles
  space?: string | number
}

export const Checkbox = ({
  label,
  id = uniqueID(),
  wrapperCss,
  space,
  ...props
}: Props) => (
  <Wrapper tabIndex={0} css={wrapperCss} space={space}>
    <CheckboxInput tabIndex={-1} id={id} type="checkbox" {...props} />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
)

export const Radio = ({
  label,
  id = uniqueID(),
  wrapperCss,
  space,
  ...props
}: Props) => (
  <Wrapper tabIndex={0} css={wrapperCss} space={space}>
    <RadioInput tabIndex={-1} id={id} type="radio" {...props} />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
)
