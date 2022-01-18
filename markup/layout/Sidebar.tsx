import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
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
    tag: 'nav',
    main: true,
    space: true,
    css: {
      gridColumn: '2 / 3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      gap: naven.theme.space.medium,
    },
  },
})

const Sidebar = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Sidebar)
