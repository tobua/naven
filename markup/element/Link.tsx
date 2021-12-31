import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
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

const Link = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Link)
