import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, CSSValue, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  wrap?: true
  gap?: CSSValue
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'visible',
      gap: naven.theme.space.medium,
      alignItems: 'flex-start',
    },
  },
})

const Vertical = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  Vertical,
  (allStyles, props) => {
    if (props.wrap) {
      allStyles.Main.css.flexWrap = 'wrap'
    }

    if (props.gap) {
      allStyles.Main.css.gap = props.gap
    }
  },
  (props) => [props.wrap, props.gap]
)
