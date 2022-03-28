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
    tag: 'main',
    main: true,
    space: true,
    css: {
      gridColumn: '2 / 5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
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

export default createComponent(styles)<Props>(function Content({ props, Sheet }) {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
