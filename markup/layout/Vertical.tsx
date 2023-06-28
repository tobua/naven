import React, { HTMLAttributes, ReactNode } from 'react'
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
  } & HTMLAttributes<HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    space: true,
    css: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignSelf: 'normal',
      overflow: 'visible',
      gap: naven.theme.space.medium,
    },
    props: (css: CSS, props: Props['Component']) => {
      if (props.wrap) {
        css.flexWrap = 'wrap'
      }
      if (props.center) {
        css.alignItems = 'center'
      }
    },
  },
})

export default createComponent(styles)<Props>(function Vertical({ props, Sheet }) {
  const { children, wrap, center, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
