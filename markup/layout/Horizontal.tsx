import React, { ReactNode } from 'react'
import type { CSS } from '@stitches/react'
import { naven } from '../../style'
import type { CSSValue } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    wrap?: boolean
    space?: CSSValue
  }
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    space: true,
    css: {
      display: 'flex',
      overflow: 'visible',
      gap: naven.theme.space.medium,
    },
    props: (css: CSS, props: Props['Component']) => {
      if (props.wrap) {
        css.flexWrap = 'wrap'
      }
    },
  },
})

export default createComponent(styles)<Props>(
  function Horizontal({ props, Sheet }) {
    const { children, wrap, ...otherProps } = props
    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {children}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.wrap]
)
