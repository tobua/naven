import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  Component: {
    children: ReactNode
    count?: number | string
  }
  Dot: {
    type?: 'content'
  }
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      position: 'relative',
      display: 'inline-flex',
    },
  },
  Dot: {
    tag: 'div',
    css: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: naven.theme.space.small,
      background: naven.theme.color.highlight,
      color: naven.theme.color.colorContrast,
      height: naven.theme.space.small,
      minWidth: 'none',
      right: `calc(${naven.theme.space.tiny} * -1)`,
      top: `calc(${naven.theme.space.tiny} * -1)`,
      variants: {
        type: {
          content: {
            height: naven.theme.space.medium,
            minWidth: naven.theme.space.small,
            right: `calc(${naven.theme.space.small} * -1)`,
            top: `calc(${naven.theme.space.small} * -1)`,
            padding: `0 ${naven.theme.space.tiny}`,
          },
        },
      },
    },
  },
})

export default createComponent(styles)<Props>(function Badge({ props, Sheet }) {
  const { children, count, ...otherProps } = props

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      <Sheet.Dot.Component css={Sheet.Dot.css} type={count ? 'content' : undefined}>
        {count}
      </Sheet.Dot.Component>
      {children}
    </Sheet.Main.Component>
  )
})
