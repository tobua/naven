import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
  } & AnchorHTMLAttributes<HTMLAnchorElement>
}

const styles = () => ({
  Main: {
    tag: 'a',
    main: true,
    css: {
      // Reset properties style properties added to any link.
      textDecoration: 'none',
      color: naven.theme.color.backgroundContrast,
      cursor: 'pointer',
      underline: 'none',
    },
  },
})

export default createComponent(styles)<Props>(function Link({ props, Sheet }) {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
