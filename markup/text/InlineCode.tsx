import React, { HTMLAttributes } from 'react'
import { wasser } from 'wasser'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: string
  } & HTMLAttributes<HTMLElement>
}

const styles = () => ({
  Main: {
    tag: 'code',
    main: true,
    css: {
      background: naven.theme.color.gray300,
      borderRadius: wasser(3),
      padding: `${wasser(2)} ${wasser(4)}`,
      fontFamily: naven.theme.font.familyMono,
      fontSize: wasser(14),
      whiteSpace: 'nowrap',
    },
  },
})

export default createComponent(styles)<Props>(function InlineCode({ props, Sheet }) {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
