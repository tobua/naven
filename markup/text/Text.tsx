import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends Omit<HTMLAttributes<HTMLParagraphElement>, 'style'> {
  children: ReactNode
  style?: 'bold'
}

type Sheets = 'Text'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Text: {
    tag: 'p',
    main: true,
    css: {
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
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

const Text = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Text.Component css={Sheet.Text.css} {...otherProps}>
      {children}
    </Sheet.Text.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Text)
