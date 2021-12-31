import React, { InputHTMLAttributes } from 'react'
import { naven, unit } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import { blinkAnimation } from './Base'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onValue?: (value: string) => void
}

type Sheets = 'Wrapper' | 'Input'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '&::before': {
        content: ' ',
        display: 'block',
        height: naven.theme.space.medium,
        width: unit(4),
        background: naven.theme.color.gray500,
        marginRight: unit(6),
        animation: `${blinkAnimation()} 1s linear infinite alternate`,
      },
    },
  },
  Input: {
    tag: 'input',
    main: true,
    css: {
      padding: 0,
      fontSize: naven.theme.font.sizeMedium,
      radius: naven.theme.look.radius,
      border: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
  },
})

const Input = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, onValue, ...otherProps } = props

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

  return (
    <Sheet.Wrapper.Component css={Sheet.Wrapper.css}>
      <Sheet.Input.Component css={Sheet.Input.css} {...otherProps} />
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Input)
