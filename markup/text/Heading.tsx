import React, { HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    style?: 'code' | 'italic'
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  } & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  Main: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
}

const styles = () => ({
  Main: {
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
    props: (innerStyles, props: Props['Component']) => {
      if (props.as) {
        innerStyles.fontSize = naven.theme.font.sizeSubtitle
      }
    },
  },
})

export default createComponent(styles)<Props>(
  function Heading({ props, Sheet }) {
    const { children, ...otherProps } = props
    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {children}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.as]
)
