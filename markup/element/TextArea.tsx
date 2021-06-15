import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Color, Space, radius, spaceProp } from '../../style'

const Wrapper = styled.textarea<{
  css?: SerializedStyles
  space?: string | number
}>`
  padding: ${Space.small};
  border: 1px solid ${Color.black};
  resize: none;
  ${() => radius()}
  ${spaceProp}
  
    &:focus {
    box-shadow: inset 0 0 0 1px ${Color.black};
    outline: none;
  }

  ${({ css }) => css}
`

export const TextArea = ({
  onValue,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  onValue?: (value: string) => void
  css?: SerializedStyles
  space?: string | number
}) => {
  if (onValue) {
    const initialOnChange = props.onChange
    // eslint-disable-next-line no-param-reassign
    props.onChange = (event) => {
      onValue(event.target.value)
      if (initialOnChange) {
        initialOnChange(event)
      }
    }
  }

  return <Wrapper {...props} />
}
