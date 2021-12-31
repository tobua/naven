import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  highlight?: 'none' | 'underline' | 'animatedUnderline' | 'gradient'
  bold?: true
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'a',
    main: true,
    css: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
      color: naven.theme.color.backgroundContrast,
      '&:hover,&:focus': {
        outline: 'none',
        backgroundSize: '100% 88%',
        textDecoration: 'underline',
      },
      variants: {
        highlight: {
          none: {
            color: naven.theme.color.backgroundContrast,
            '&:hover,&:focus': {
              color: naven.theme.color.interact,
              textDecoration: 'none',
            },
          },
          underline: {
            textDecoration: 'underline',
          },
          animatedUnderline: {
            color: naven.theme.color.backgroundContrast,
            backgroundImage: `linear-gradient(transparent calc(100% - 2px), ${naven.theme.color.backgroundContrast} 10px)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '0% 100%',
            transition: `background-size 1s`,
            fontWeight: naven.theme.font.weightBold,
            '&:hover,&:focus': {
              backgroundSize: '100% 100%',
              textDecoration: 'none',
            },
          },
          gradient: {
            color: naven.theme.color.backgroundContrast,
            backgroundImage: `linear-gradient(120deg,
              ${naven.theme.color.highlight} 0%,
              ${naven.theme.color.interact} 100%
            )`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 3px',
            backgroundPosition: '0 100%',
            transition: `background-size 0.3s ease-in, color 0.3s ease`,
            '&:hover,&:focus': {
              color: naven.theme.color.colorContrast,
              textDecoration: 'none',
            },
          },
        },
      },
    },
  },
})

const Link = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, bold, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  Link,
  (allStyles, props) => {
    if (props.bold) {
      allStyles.Main.css.fontWeight = naven.theme.font.weightBold
    }
  },
  (props) => [props.bold]
)
