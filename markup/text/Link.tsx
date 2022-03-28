import React, { AnchorHTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    highlight?: 'underline' | 'animated' | 'gradient'
    bold?: boolean
  } & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
}

const styles = () => ({
  Main: {
    tag: 'a',
    main: true,
    css: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
      color: naven.theme.color.interact,
      '&:hover,&:focus': {
        outline: 'none',
        backgroundSize: '100% 88%',
        textDecoration: 'underline',
      },
      variants: {
        highlight: {
          underline: {
            textDecoration: 'underline',
            color: naven.theme.color.backgroundContrast,
            '&:hover,&:focus': {
              color: naven.theme.color.interact,
            },
          },
          animated: {
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
    props: (innerStyles, props) => {
      if (props.bold) {
        innerStyles.fontWeight = naven.theme.font.weightBold
      }
    },
  },
})

export default createComponent(styles)<Props>(function TextLink({ props, Sheet }) {
  const { children, bold, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
})
