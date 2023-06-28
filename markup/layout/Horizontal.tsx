import React, { ReactNode } from 'react'
import type { CSS } from '@stitches/react'
import { naven } from '../../style'
import type { CSSValue } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    wrap?: boolean
    center?: boolean
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
      alignSelf: 'normal',
      gap: naven.theme.space.medium,
    },
    props: (css: CSS, props: Props['Component']) => {
      if (props.wrap) {
        css.flexWrap = 'wrap'
      }
      if (props.center) {
        css.justifyContent = 'center'
      }
    },
  },
})

export default createComponent(styles)<Props>(
  function Horizontal({ props, Sheet }) {
    const { children, wrap, center, ...otherProps } = props
    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {children}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.wrap]
)
