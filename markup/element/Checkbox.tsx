import React, { useRef, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { uniqueID } from '../../utility/unique-id'
import { Color, Space, radius, spaceProp, Shade } from '../../style'

const CheckboxInput = styled.input<{ css?: SerializedStyles }>`
  border: 1px solid ${Color.black};
  cursor: pointer;
  ${() => radius(2)}
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

const RadioInput = styled.input<{ css?: SerializedStyles }>`
  border: 1px solid ${Color.black};
  cursor: pointer;
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
    outline: none;
  }

  ${({ css }) => css}
`

const Wrapper = styled.div<{ css?: SerializedStyles; space?: string | number }>`
  display: flex;
  align-items: center;
  ${({ css }) => css}
  ${spaceProp}

  &:focus {
    outline: none;
    color: ${Color.interact};

    input {
      border-color: ${Color.interact};
      outline: none;
    }

    input:checked {
      box-shadow: inset 0 0 0 3px ${Shade(Color.interact, 0.75)};
    }
  }
`

const Label = styled.label`
  margin-left: ${Space.small};
  cursor: pointer;
`

const toggleOnEnter = (event, inputRef) => {
  if (event.key !== 'Enter') {
    return
  }

  inputRef.current.checked = !inputRef.current.checked
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
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
}: Props) => {
  const inputRef = useRef()

  return (
    <Wrapper
      tabIndex={0}
      css={wrapperCss}
      space={space}
      onKeyDown={(event) => toggleOnEnter(event, inputRef)}
    >
      <CheckboxInput
        ref={inputRef}
        tabIndex={-1}
        id={id}
        type="checkbox"
        {...props}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  )
}

export const Radio = ({
  label,
  id = uniqueID(),
  wrapperCss,
  space,
  ...props
}: Props) => {
  const inputRef = useRef()

  return (
    <Wrapper
      tabIndex={0}
      css={wrapperCss}
      space={space}
      onKeyDown={(event) => toggleOnEnter(event, inputRef)}
    >
      <RadioInput
        ref={inputRef}
        tabIndex={-1}
        id={id}
        type="radio"
        {...props}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  )
}
