import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  as?: 'a'
  href?: string
  disabled?: true
  color?: 'regular' | 'highlight' | 'interact'
}

type Sheets = 'Button'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Button: {
    tag: 'button',
    main: true,
    css: {
      padding: naven.theme.space.small,
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: naven.theme.color.background,
      color: naven.theme.color.interact,
      radius: '$corner',
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
      fontWeight: naven.theme.font.weightBold,
      // When used as anchor tag.
      textDecoration: 'none',
      '&:hover,&:focus': {
        opacity: 0.8,
      },
      variants: {
        color: {
          regular: {
            backgroundColor: naven.theme.color.gray700,
            color: naven.theme.color.background,
          },
          highlight: {
            backgroundColor: naven.theme.color.highlight,
            color: naven.theme.color.background,
          },
          interact: {
            backgroundColor: naven.theme.color.interact,
            color: naven.theme.color.background,
          },
        },
      },
    },
  },
})

const Button = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Button.Component css={Sheet.Button.css} {...otherProps}>
      {children}
    </Sheet.Button.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  Button,
  (allStyles, props) => {
    if (props.disabled) {
      allStyles.Button.css.cursor = 'auto'
      allStyles.Button.css.textDecoration = 'line-through'
    }
  },
  (props) => [props.disabled]
)
