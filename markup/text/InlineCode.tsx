import React, { HTMLAttributes } from 'react'
import { wasser } from 'wasser'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLElement> {
  children: string
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'code',
    main: true,
    css: {
      background: naven.theme.color.gray300,
      borderRadius: wasser(3),
      padding: `${wasser(2)} ${wasser(4)}`,
      fontFamily: naven.theme.font.familyMono,
      fontSize: wasser(14),
    },
  },
})

const InlineCode = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, InlineCode)
