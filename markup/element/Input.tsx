import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Color, Space, Font, radius, spaceProp } from '../../style'

const Wrapper = styled.input<{
  css?: SerializedStyles
  space?: string | number
}>`
  padding: ${Space.small};
  border: 1px solid ${Color.black};
  ${Font.size.medium}
  ${() => radius()}
  ${spaceProp}

  &:focus {
    box-shadow: inset 0 0 0 1px ${Color.black};
    outline: none;
  }

  ${({ css }) => css}
`

export const Input = ({
  onValue,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
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
