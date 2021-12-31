import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  count?: number | string
  type?: 'content'
}

type Sheets = 'Wrapper' | 'Dot'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
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

const Badge = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, count, ...otherProps } = props

  return (
    <Sheet.Wrapper.Component css={Sheet.Wrapper.css} {...otherProps}>
      {/* @ts-ignore */}
      <Sheet.Dot.Component css={Sheet.Dot.css} type={count ? 'content' : undefined}>
        {count}
      </Sheet.Dot.Component>
      {children}
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Badge)
