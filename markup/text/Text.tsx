import React, { HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    style?: 'bold'
  } & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
}

const styles = () => ({
  Main: {
    tag: 'p',
    main: true,
    css: {
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
      lineHeight: naven.theme.font.lineHeightMedium,
      variants: {
        style: {
          bold: {
            fontWeight: naven.theme.font.weightBold,
          },
        },
      },
    },
  },
})

export default createComponent(styles)<Props>(function Text({ props, Sheet }) {
  const { children, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
