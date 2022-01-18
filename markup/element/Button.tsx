import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  as?: 'a'
  href?: string
  disabled?: boolean
  color?: 'regular' | 'highlight' | 'interact'
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'button',
    main: true,
    css: {
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      color: naven.theme.color.interact,
      radius: '$corner',
      padding: 0,
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
      fontWeight: naven.theme.font.weightBold,
      background: 'transparent',
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
            padding: naven.theme.space.small,
          },
          highlight: {
            backgroundColor: naven.theme.color.highlight,
            color: naven.theme.color.background,
            padding: naven.theme.space.small,
          },
          interact: {
            backgroundColor: naven.theme.color.interact,
            color: naven.theme.color.background,
            padding: naven.theme.space.small,
          },
        },
      },
    },
  },
})

const Button = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  Button,
  (allStyles, props) => {
    if (props.disabled) {
      allStyles.Main.css.cursor = 'auto'
      allStyles.Main.css.textDecoration = 'line-through'
    }
  },
  (props) => [props.disabled]
)
