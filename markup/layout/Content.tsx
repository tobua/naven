import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../..'
import type { ComponentProps, ComponentStylesDefinition, CSSValue } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  children: ReactNode
  position?: 'sidebar'
  space?: CSSValue
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'main',
    main: true,
    space: true,
    css: {
      gridColumn: '2 / 5',
      display: 'flex',
      flexDirection: 'column',
      gap: naven.theme.space.medium,
      variants: {
        position: {
          sidebar: {
            gridColumn: '3 / 5',
          },
        },
      },
    },
  },
})

const Content = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Content)
