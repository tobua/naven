import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, CSSValue, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  wrap?: boolean
  space?: CSSValue
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'div',
    main: true,
    space: true,
    css: {
      display: 'flex',
      overflow: 'visible',
      gap: naven.theme.space.medium,
    },
    props: (css, props) => {
      if (props.wrap) {
        css.flexWrap = 'wrap'
      }
    },
  },
})

const Horizontal = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, wrap, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Horizontal, null, (props) => [props.wrap])
