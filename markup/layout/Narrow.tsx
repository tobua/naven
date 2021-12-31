import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../..'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'section',
    main: true,
    css: {
      gridColumn: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      gap: naven.theme.space.medium,
    },
  },
})

const Narrow = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Narrow)
