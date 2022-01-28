import React, { ButtonHTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    as?: 'a'
    href?: string
    disabled?: boolean
    color?: 'regular' | 'highlight' | 'interact'
  } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  Main: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

const styles = () => ({
  Main: {
    tag: 'button',
    main: true,
    css: {
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      color: naven.theme.color.interact,
      padding: 0,
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
      fontWeight: naven.theme.font.weightBold,
      background: 'transparent',
      // When used as anchor tag.
      textDecoration: 'none',
      '&:hover,&:focus': {
        opacity: 0.8,
      },
      variants: {
        color: {
          regular: {
            backgroundColor: naven.theme.color.gray700,
            color: naven.theme.color.background,
            padding: naven.theme.space.small,
            radius: 1,
          },
          highlight: {
            backgroundColor: naven.theme.color.highlight,
            color: naven.theme.color.background,
            padding: naven.theme.space.small,
            radius: 1,
          },
          interact: {
            backgroundColor: naven.theme.color.interact,
            color: naven.theme.color.background,
            padding: naven.theme.space.small,
            radius: 1,
          },
        },
      },
    },
    props: (innerStyles, props: Props['Component']) => {
      if (props.disabled) {
        innerStyles.cursor = 'auto'
        innerStyles.textDecoration = 'line-through'
      }
    },
  },
})

export default createComponent(styles)<Props>(
  function Button({ props, Sheet }) {
    const { children, ...otherProps } = props

    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {children}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.disabled]
)
