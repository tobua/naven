import React, { TextareaHTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children: ReactNode
  count?: number | string
  type?: 'content'
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'textarea',
    main: true,
    css: {
      padding: naven.theme.space.small,
      border: `1px solid ${naven.theme.color.backgroundContrast}`,
      resize: 'none',
      borderRadius: naven.theme.look.radius,
      fontFamily: naven.theme.font.familyRegular,
      '&:focus': {
        boxShadow: `inset 0 0 0 1px ${naven.theme.color.backgroundContrast}`,
        outline: 'none',
      },
    },
  },
})

const TextArea = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, onValue, ...otherProps } = props

  if (onValue) {
    const initialOnChange = props.onChange
    // eslint-disable-next-line no-param-reassign
    otherProps.onChange = (event) => {
      onValue(event.target.value)
      if (initialOnChange) {
        initialOnChange(event)
      }
    }
  }

  return <Sheet.Main.Component css={Sheet.Main.css} {...otherProps} />
}

export default createComponent<Props, Sheets>(styles, TextArea)
