import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../..'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  children: ReactNode
  position?: 'sidebar'
}

type Sheets = 'Content'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Content: {
    tag: 'main',
    main: true,
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
    <Sheet.Content.Component css={Sheet.Content.css} {...otherProps}>
      {children}
    </Sheet.Content.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Content)
