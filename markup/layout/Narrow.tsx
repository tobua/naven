import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { CSSValue } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    space?: CSSValue
  } & HTMLAttributes<HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'section',
    main: true,
    space: true,
    css: {
      gridColumn: 3,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      gap: naven.theme.space.medium,
    },
  },
})

export default createComponent(styles)<Props>(function Narrow({ props, Sheet }) {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
