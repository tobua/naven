import React, { HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  children: ReactNode
  style?: 'code' | 'italic'
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type Sheets = 'Heading'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Heading: {
    tag: 'h1',
    main: true,
    css: {
      fontFamily: naven.theme.font.familyRegular,
      fontWeight: naven.theme.font.weightBold,
      fontSize: naven.theme.font.sizeTitle,
      marginTop: 0,
      variants: {
        style: {
          code: {
            fontFamily: naven.theme.font.familyMono,
          },
          italic: {
            fontStyle: naven.theme.font.styleItalic,
          },
        },
      },
    },
  },
})

const Heading = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props
  return (
    <Sheet.Heading.Component css={Sheet.Heading.css} {...otherProps}>
      {children}
    </Sheet.Heading.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  Heading,
  (allStyles, props) => {
    if (props.as) {
      allStyles.Heading.css.fontSize = naven.theme.font.sizeSubtitle
    }
  },
  (props) => [props.as]
)
