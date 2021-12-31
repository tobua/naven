import React, { HTMLAttributes, ReactNode } from 'react'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  children: ReactNode
  position?: 'sidebar'
}

type Sheets = 'Sidebar'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Sidebar: {
    tag: 'nav',
    main: true,
    css: {
      gridColumn: '2 / 3',
    },
  },
})

const Sidebar = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Sidebar.Component css={Sheet.Sidebar.css} {...otherProps}>
      {children}
    </Sheet.Sidebar.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Sidebar)
