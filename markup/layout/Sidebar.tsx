import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { CSSValue } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    position?: 'sidebar'
    space?: CSSValue
  } & Omit<HTMLAttributes<HTMLHeadingElement>, 'style'>
}

const styles = () => ({
  Main: {
    tag: 'nav',
    main: true,
    space: true,
    css: {
      gridColumn: '2 / 3',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      gap: naven.theme.space.medium,
    },
  },
})

export default createComponent(styles)<Props>(function Sidebar({ props, Sheet }) {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
